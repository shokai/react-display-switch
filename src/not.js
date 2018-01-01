import {When, filterCaseLabel} from './when'

export const WhenNot = (props) => {
  if (props.and && props.or) throw new Error('must not use "and" with "or".')
  const labels = filterCaseLabel(Object.keys(props))
  if (labels.length > 1 && !props.and && !props.or) throw new Error('must specify "and" or "or" operator.')
  for (const label of labels) {
    if (props.or) {
      if (When.case(label)) return null
    } else {
      if (When.case(label)) return null
    }
  }
  if (props.or) return props.children || null
  return props.children || null
}
