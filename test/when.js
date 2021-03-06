/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { When } from '../src/'

describe('When component', () => {
  it('should be a function', () => {
    expect(When).toBeInstanceOf(Function)
  })

  describe('case', () => {
    it('register conditions', () => {
      When.case('login_user', () => true) // register
      expect(When.case('login_user')).toBe(true)
      expect(When.login_user).toBe(true) // shorthand
    })

    it('return condition at register', () => {
      const func = () => 'func'
      const func2 = When.case('func', func)
      expect(func).toBe(func2)
    })
  })

  describe('simple condition case', () => {
    it('return children when match', () => {
      const tree = renderer
        .create(<When login_user><a href='./profile'>profile page</a></When>)
        .toJSON()
      expect(tree.type).toBe('a')
      expect(tree.props.href).toBe('./profile')
    })

    it('return null when not match', () => {
      When.case('admin_user', () => false)
      const tree = renderer
        .create(<When admin_user><a href='./settings'>settings page</a></When>)
        .toJSON()
      expect(tree).toBe(null)
    })
  })

  describe('"and" conditions', () => {
    it('return children when match', () => {
      const windowWidth = 800
      When.case('screen_xs', () => windowWidth < 768)
      When.case('screen_md', () => windowWidth >= 768 && windowWidth < 992)
      When.case('screen_lg', () => windowWidth >= 992)
      const tree = renderer
        .create(<When login_user and screen_md><p>hello login user</p></When>)
        .toJSON()
      expect(tree.type).toBe('p')
      expect(tree.children).toEqual(['hello login user'])
    })

    it('return null when not match', () => {
      const tree = renderer
        .create(<When login_user and admin_user><a href='./settings'>settings page</a></When>)
        .toJSON()
      expect(tree).toBe(null)
    })
  })

  describe('"or" conditions', () => {
    it('return children when match', () => {
      const tree = renderer
        .create(<When screen_md or screen_lg>large screen</When>)
        .toJSON()
      expect(tree).toBe('large screen')
    })

    it('return null when not match', () => {
      const tree = renderer
        .create(<When screen_xs or screen_lg>not medium screen</When>)
        .toJSON()
      expect(tree).toBe(null)
    })
  })
})
