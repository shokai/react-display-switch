/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import {When} from '../src/'

describe('When component', () => {
  it('should be a function', () => {
    expect(When).toBeInstanceOf(Function)
  })

  describe('case', () => {
    it('register conditions', () => {
      When.case('login-user', () => true) // register
      expect(When.case('login-user')).toBe(true)
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
            .create(<When login-user><a href='./profile'>profile page</a></When>)
            .toJSON()
      expect(tree.type).toBe('a')
      expect(tree.props.href).toBe('./profile')
    })

    it('return null when not match', () => {
      When.case('admin-user', () => false)
      const tree = renderer
            .create(<When admin-user><a href='./settings'>settings page</a></When>)
            .toJSON()
      expect(tree).toBe(null)
    })
  })

  describe('"and" conditions', () => {
    it('return children when match', () => {
      const windowWidth = 800
      When.case('screen-xs', () => windowWidth < 768)
      When.case('screen-md', () => windowWidth >= 768 && windowWidth < 992)
      When.case('screen-lg', () => windowWidth >= 992)
      const tree = renderer
            .create(<When login-user and screen-md><p>hello login user</p></When>)
            .toJSON()
      expect(tree.type).toBe('p')
      expect(tree.children).toEqual(['hello login user'])
    })

    it('return null when not match', () => {
      const tree = renderer
            .create(<When login-user and admin-user><a href='./settings'>settings page</a></When>)
            .toJSON()
      expect(tree).toBe(null)
    })
  })

  describe('"or" conditions', () => {
    it('return children when match', () => {
      const tree = renderer
            .create(<When screen-md or screen-lg>large screen</When>)
            .toJSON()
      expect(tree).toBe('large screen')
    })

    it('return null when not match', () => {
      const tree = renderer
            .create(<When screen-xs or screen-lg>not medium screen</When>)
            .toJSON()
      expect(tree).toBe(null)
    })
  })
})
