const ADDITIONS_DIRECTIVES_HANDLES = {
  'v-show': ({item, name, expr}) => ({attrs: { hidden: `{{ !(${expr}) }}` }}),
  'v-if': ({item, name, expr}) => ({attrs: { 'tt:if': `{{ ${expr} }}` }}),
  'v-else-if': ({item, name, expr}) => ({attrs: { 'tt:elif': `{{ ${expr} }}` }}),
  'v-else': ({item, name, expr}) => ({attrs: { 'tt:else': true }})
};

exports = module.exports = function () {

  Object.keys(ADDITIONS_DIRECTIVES_HANDLES).forEach(directives => {

    this.register('template-parse-ast-attr-' + directives, ADDITIONS_DIRECTIVES_HANDLES[directives]);
  });
};
