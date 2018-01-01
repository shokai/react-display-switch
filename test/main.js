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
})
