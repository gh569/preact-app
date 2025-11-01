// @ts-nocheck
import { render } from "preact";
import { Router, Route } from "preact-router";
import Match from "preact-router/match";
import { createHashHistory } from "history";
import { lazy } from "./components/lazy.js";
import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
// import About from "./pages/about.jsx";
// import Test from "./pages/test.jsx";
import routes from "./components/routes.js";
// import { NotFound } from "./pages/_404.jsx";
import "./style.css";
// import { LocationProvider, ErrorBoundary, Router  ,lazy} from "preact-iso";

const Test = lazy(() => import("./pages/test.jsx"));
const About = lazy(() => import("./pages/about.jsx"));
const NotFound = lazy(() => import("./pages/_404.jsx"));

export function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          {/* <LocationProvider > */}
          {/* <ErrorBoundary fallback={()=><NotFound />}> */}
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about"  component={About}  />
            <Route path="/test"  component={Test} />
            <Route default  component={NotFound} />
          </Router>
          {/* <Match path="/">
                {({ matches, path, url }) => {
                  const Comp = routes[url] || NotFound;
                  console.log(url);
                  return <Comp />;
                }}
              </Match> */}
          {/* </ErrorBoundary> */}
          {/* </LocationProvider> */}
        </div>
      </main>
    </>
  );
}

render(<App />, document.getElementById("app"));