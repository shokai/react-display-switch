# react-display-switch
Declarative React Components for improving readability by eliminating { }, && and ternary operators out of JSX

- https://github.com/shokai/react-display-switch
- https://npmjs.com/package/react-display-switch

[![CircleCI](https://circleci.com/gh/shokai/react-display-switch.svg?style=svg)](https://circleci.com/gh/shokai/react-display-switch)


## Usage

### When

```js
<When screen_xs>contents for small screen</When>
```

or

```js
<When screen_md or screen_lg>contents for medium or large screen</When>
```

and

```js
<When admin_user and enable_google_analytics>
  <a href='./google-analytics-settings'>google analytics settings</a>
</When>
```

register conditions

```js
import {When} from 'react-display-switch'

When.case('screen_xs', () => window.innerWidth < 768)
When.case('screen_md', () => !When.screen_xs && window.innerWidth < 992)
When.case('screen_lg', () => window.innerWidth >= 992)
When.case('admin_user', () => user.admin === true)
When.case('enable_google_analytics', () => process.env.ENABLE_GOOGLE_ANALYTICS)
```

### WhenNot

```js
import {When, WhenNot} from 'react-display-switch'
```

```js
<WhenNot login_user><a href='/login'>please login</a></WhenNot>
```


## Sample

see [./sample](https://github.com/shokai/react-display-switch/tree/master/sample)
