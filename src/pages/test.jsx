
import styles from './test.module.css'

export default function Test() {
  return (<>
    <div>Test</div>
    <div className={`${styles.test1} ${styles.test2}`}>Test</div>
    </>
  )

}