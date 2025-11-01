import { Router,Route } from "preact-router";
import { createHashHistory } from "history";
import { render,h } from "preact";


function Home(){ 
  return (
    <div>
      <h1>Home</h1>
      <p><a href='#/about'> about</a></p>
    </div>
  )
}

function About1(){
  return <div>
    <h1>About1</h1>
    <p><a href='#/about/guo'> about/guo</a></p>
  </div>
}
function About2(){
  return <div>
    <h1>About2</h1>
    <p><a href='#/about'> about</a></p>
  </div>
}
function About(){
  return <div>
    <h1>About</h1>
    <p><a href='#/'> home</a></p>
    <Router>
      <Route path='/about' component={About1} />
      <Route path='/about/guo' component={About2} />
    </Router>
  </div>
}

function App(){
  return (
    <Router history={createHashHistory()}>
      <Route path="/" component={Home} />
      <Route path="/about/:id*" component={About} />
    </Router>
  )
}

render(<App />, document.body)