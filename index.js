const extractSimpleAttrs = require('./extractSimpleAttrs');
const mergeOrder = require('./mergeOrder');

/**
 * merges n sequelize options objects
 * @param {object[]} targets 
 */
function merge(...targets) {
  // create array of objects containing just simple attributes
  const simpleAttrs = extractSimpleAttrs(...targets);
  const mergedOrder = mergeOrder(...targets);
  const toMerge = {};
  if(mergedOrder.length){
    toMerge.order = mergedOrder
  }
  const merged = Object.assign({}, ...simpleAttrs, toMerge)
  return merged;
}

module.exports = merge;