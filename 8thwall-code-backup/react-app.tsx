import {MaterialUIApp} from './lib/material-ui-components'
import {appBase} from './lib/routes'
import {NotFound} from './views/notfound'
import {Scene} from './views/scene'
import {initMatomo} from './lib/matomo'
import {CookieBanner} from './lib/react-components'

declare let React: any
declare let ReactDOM: any
declare let ReactRouterDOM: any

const {BrowserRouter, Route, Switch} = ReactRouterDOM

const base = appBase()
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={`${base}/`} component={Scene} />
          <Route exact path={`${base}/noar/:pointId`} component={Scene} />
          <Route exact path={`${base}/:arId`} component={Scene} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const render = () => {
  initMatomo()
  document.body.insertAdjacentHTML('beforeend', '<div id="root"></div>')
  ReactDOM.render(
    <MaterialUIApp>
      <App />
      <CookieBanner />
    </MaterialUIApp>,
    document.getElementById('root')
  )
}

export {render}