import React, { Component, Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Spin } from 'antd'
import Home from '@/pages/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<Spin className="global-spin" />}>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </Router>
        </Suspense>
      </div>
    )
  }
}

export default App
