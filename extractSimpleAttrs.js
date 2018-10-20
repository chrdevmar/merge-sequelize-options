
/**
 * removes attributes from objects that are not strings or numbers
 * @param  {...any} targets 
 * @return {...any} target objects with only number and string attributes
 */
function extractSimpleAttrs(...targets) {
  const simpleAttrs = targets.map(options => {
    const simple = {};
    const attrNames = Object.keys(options);
    attrNames.forEach(attrName => {
      const attrType = typeof options[attrName];
      if(attrType === 'number' || attrType === 'string') {
        simple[attrName] = options[attrName]
      }
    })
    return simple;
  })
  return simpleAttrs;
}

module.exports = extractSimpleAttrs