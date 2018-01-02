# react-display-switch
React Components for improving readability by eliminating { }, && and ternary operators out of JSX

- https://github.com/shokai/react-display-switch
- https://npmjs.com/package/react-display-switch

[![CircleCI](https://circleci.com/gh/shokai/react-display-switch.svg?style=svg)](https://circleci.com/gh/shokai/react-display-switch)


## Usage

### When

```js
<When screen-xs>contents for small screen</When>
```

or

```js
<When screen-md or screen-lg>contents for medium or large screen</When>
```

and

```js
<When admin-user and enable-google-analytics>
  <a href='./google-analytics-settings'>google analytics settings</a>
</When>
```

register conditions

```js
import {When} from 'react-display-switch'

When.case('screen-xs', () => window.innerWidth < 768)
When.case('screen-md', () => !When.case('screen-xs') && window.innerWidth < 992)
When.case('screen-lg', () => window.innerWidth >= 992)
When.case('admin-user', () => user.admin === true)
When.case('enable-google-analytics', () => process.env.ENABLE_GOOGLE_ANALYTICS)
```

### WhenNot

```js
import {When, WhenNot} from 'react-display-switch'

```

```js
<WhenNot login-user><a href='/login'>please login</a></WhenNot>
```


## Sample

see [./sample](https://github.com/shokai/react-display-switch/tree/master/sample)
