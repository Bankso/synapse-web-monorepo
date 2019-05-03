import { HashRouter, Route, Switch } from 'react-router-dom'
import * as React from 'react'
import './App.css'
import { Footer } from './Footer'
import ScrollToTop from './ScrollToTop'
import { Navbar } from './Navbar'
import docTitleConfig from './example-configuration/docTitleConfig'
const Home = React.lazy(() => import('./Home'))
const Explore = React.lazy(() => import('./Explore'))
const RouteResolver = React.lazy(() => import('./RouteResolver'))

const App: React.SFC<{}> = ({}) => {
  document.title = docTitleConfig.name
  return (
    <HashRouter>
      <ScrollToTop>
        <Navbar/>
        <main className="main">
          {/* all the content below */}
          <React.Suspense fallback={<div/>}>
            <Switch>
              <Route exact={true} path="/" component={Home}/>
              <Route path="/Explore" component={Explore}/>
              {/* all other routes generated programatically */}
              <Route path="/" component={RouteResolver}/>
            </Switch>
          </React.Suspense>
        </main>
        <Footer/>
      </ScrollToTop>
    </HashRouter >
  )
}

export default App
