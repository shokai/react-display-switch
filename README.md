# react-display-switch
React Components for improving readability by eliminating { }, && and ternary operators out of JSX

- https://github.com/shokai/react-display-switch
- https://npmjs.com/package/react-display-switch

[![CircleCI](https://circleci.com/gh/shokai/react-display-switch.svg?style=svg)](https://circleci.com/gh/shokai/react-display-switch)


## Usage

register conditions

```js
import {When} from 'react-display-switch'

When.case('screen-xs', () => window.innerWidth < 768)
When.case('screen-md', () => !When.case('screen-xs') && window.innerWidth < 992)
When.case('screen-lg', () => window.innerWidth >= 992)
When.case('admin-user', () => user.admin)
When.case('enable-google-analytics', () => ENABLE_GOOGLE_ANALYTICS)
```

`<When condition>`

```js
<When screen-xs>contents for small screen</When>
```

and

```js
<When admin-user and enable-google-analytics>
  <a href='./google-analytics-settings'>google analytics settings</a>
</When>
```

or

```js
<When screen-md or screen-lg>contents for medium or large screen</When>
```