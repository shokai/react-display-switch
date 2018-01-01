/* eslint-env jest */

import {When} from '../src/'

describe('When component', function () {
  it('should be a function', function () {
    expect(When).toBeInstanceOf(Function)
  })

  describe('case', function () {
    it('register conditions', function () {
      When.case('admin-user', () => true)
      expect(When.case('admin-user')).toBe(true)
    })
  })
})
