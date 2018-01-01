import React from 'react'
import {render} from 'react-dom'
import {When} from '../'
// import {When} from 'react-display-switch'

const ENABLE_GOOGLE_ANALYTICS = true
const user = {
  name: 'shokai',
  admin: true
}

When.case('screen-xs', () => window.innerWidth < 768)
When.case('screen-md', () => !When.case('screen-xs') && window.innerWidth < 992)
When.case('screen-lg', () => window.innerWidth >= 992)
When.case('admin-user', () => user.admin)
When.case('enable-google-analytics', () => ENABLE_GOOGLE_ANALYTICS)

const App = () => (
  <div>
    <h1>react-display-switch</h1>
    <p>
      <When screen-xs>screen size is XS</When>
      <When screen-md>screen size is MD</When>
      <When screen-lg>screen size is LG</When>
    </p>
    <When admin-user and enable-google-analytics>
      <p>
        <a href='./google-analytics-settings'>google analytics settings</a>
      </p>
    </When>
    <When enable-google-analytics>
      <p>google analytics setup code js</p>
    </When>
  </div>
)

render((<App />), document.getElementById('app-container'))
