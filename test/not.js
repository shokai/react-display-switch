/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import {When, WhenNot} from '../src/'

describe('WhenNot component', () => {
  it('should be a function', () => {
    expect(WhenNot).toBeInstanceOf(Function)
  })

  describe('simple condition case', () => {
    When.case('login-user', () => false)
    When.case('guest-user', () => true)

    it('return children when match', () => {
      const tree = renderer
            .create(<WhenNot login-user><a href='/login'>login</a></WhenNot>)
            .toJSON()
      expect(tree.type).toBe('a')
      expect(tree.props.href).toBe('/login')
    })

    it('return null when not match', () => {
      const tree = renderer
            .create(<WhenNot guest-user>hello guest</WhenNot>)
            .toJSON()
      expect(tree).toBe(null)
    })
  })
})
