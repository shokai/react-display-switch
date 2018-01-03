/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import {When, WhenNot} from '../src/'

describe('WhenNot component', () => {
  it('should be a function', () => {
    expect(WhenNot).toBeInstanceOf(Function)
  })

  describe('simple condition case', () => {
    When.case('login_user', () => false)
    When.case('guest_user', () => true)

    it('return children when match', () => {
      const tree = renderer
            .create(<WhenNot login_user><a href='/login'>login</a></WhenNot>)
            .toJSON()
      expect(tree.type).toBe('a')
      expect(tree.props.href).toBe('/login')
    })

    it('return null when not match', () => {
      const tree = renderer
            .create(<WhenNot guest_user>hello guest</WhenNot>)
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
            .create(<WhenNot guest_user and screen_xs>hello guest</WhenNot>)
            .toJSON()
      expect(tree).toBe('hello guest')
    })

    it('return null when not match', () => {
      const tree = renderer
            .create(<WhenNot guest_user and screen_md>hello guest</WhenNot>)
            .toJSON()
      expect(tree).toBe(null)
    })
  })

  describe('"or" conditions', () => {
    it('return children when match', () => {
      const tree = renderer
            .create(<WhenNot screen_xs or screen_lg>medium screen</WhenNot>)
            .toJSON()
      expect(tree).toBe('medium screen')
    })

    it('return null when not match', () => {
      const tree = renderer
            .create(<WhenNot screen_xs or screen_md>large screen</WhenNot>)
            .toJSON()
      expect(tree).toBe(null)
    })
  })
})
