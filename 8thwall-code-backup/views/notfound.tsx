import { Page } from '../lib/material-ui-components'

declare var React: any
declare var ReactRouterDOM: any

const { withRouter } = ReactRouterDOM

const NotFound = withRouter(() => (
  <Page title="Not Found" top={true}>
    <h1>404</h1>
  </Page>
))

export {NotFound}