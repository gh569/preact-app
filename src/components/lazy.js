import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';

/**
 * 创建一个支持懒加载的组件包装器
 * @param {Function} loader - 用于异步加载组件的函数
 * @returns {Function} 返回一个组件函数
 */
const lazy = (loader) => {
  let loadedComponent = null;

  /**
   * 懒加载组件包装器
   * @param {Object} props - 传递给组件的属性对象
   * @returns {import('preact').VNode} 返回 Preact 虚拟节点
   */
  return function LazyWrapper(props) {
    const component = useSignal(loadedComponent);
    const error = useSignal(null);
    const retryCount = useSignal(0);

    useEffect(() => {
      if (!loadedComponent) {
        const loadComponent = async () => {
          try {
            const module = await loader();
            loadedComponent = module.default;
            component.value = loadedComponent;
            error.value = null;
          } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            error.value = new Error(`Failed to load component: ${errorMessage}`);
          }
        };

        loadComponent();
      }
    }, [retryCount.value]);

    const handleRetry = () => {
      error.value = null;
      retryCount.value++;
    };

    if (error.value) {
      return (
        <div>
          <p>{error.value.message}</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      );
    }
    if (!component.value) return <div>Loading...</div>;
    return h(component.value, props);
  };
};

export default lazy;
export { lazy };