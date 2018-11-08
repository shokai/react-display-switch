import React from 'react'
import { render } from 'react-dom'
import { When } from '../'
// import {When} from 'react-display-switch'

const ENABLE_GOOGLE_ANALYTICS = true
const user = {
  name: 'shokai',
  admin: true
}

When.case('screen_xs', () => window.innerWidth < 768)
When.case('screen_md', () => !When.screen_xs && window.innerWidth < 992)
When.case('screen_lg', () => window.innerWidth >= 992)
When.case('admin_user', () => user.admin)
When.case('enable_google_analytics', () => ENABLE_GOOGLE_ANALYTICS)

const App = () => (
  <div>
    <h1>react-display-switch</h1>
    <p>
      <When screen_xs>contents for small screen</When>
      <When screen_md or screen_lg>contents for medium or large screen</When>
    </p>
    <When admin_user and enable_google_analytics>
      <p>
        <a href='./google-analytics-settings'>google analytics settings</a>
      </p>
    </When>
    <When enable_google_analytics>
      <p>google analytics setup code js</p>
    </When>
  </div>
)

render((<App />), document.getElementById('app-container'))
