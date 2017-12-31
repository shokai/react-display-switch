const reservedWords = ['children', 'or', 'and']
const filterCaseLabel = arr => arr.filter(i => !reservedWords.includes(i))

export const When = (props) => {
  if (props.and && props.or) throw new Error('must not use "and" with "or".')
  const labels = filterCaseLabel(Object.keys(props))
  if (labels.length > 1 && !props.and && !props.or) throw new Error('must specify "and" or "or" operator.')
  for (const label of labels) {
    if (props.or) { // <When screen-xs or screen-md>
      if (When.case(label)) break
    } else { // <When login-user and screen-md>
      if (!When.case(label)) return null
    }
  }
  return props.children || null
}

When.cases = {}
When.case = (label, condition) => {
  if (condition) {
    if (typeof condition !== 'function') throw new Error(`condition must be a function.`)
    if (When.cases[label]) throw new Error(`label "${label}" is already registerd.`)
    When.cases[label] = condition
    return
  }
  if (typeof When.cases[label] !== 'function') throw new Error(`label "${label}" is not registerd.`)
  return When.cases[label]()
}
