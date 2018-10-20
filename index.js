/**
 * merges n sequelize options objects
 * @param {object[]} targets 
 */
function merge(...targets) {
  // create array of objects containing just simple attributes
  const simpleAttrs = extractSimpleAttrs(...targets);
  const mergedOrder = mergeOrder(...targets);
  const toMerge = {};
  if(mergedOrder){
    toMerge.order = mergedOrder
  }
  const merged = Object.assign({}, ...simpleAttrs, toMerge)
  return merged;
}


/**
 * merges options arrays, overwriting existing 
 * @param  {...any} targets 
 * @return {...[]} merged sequelize options
 */
function mergeOrder(...targets){
  const mergedOrder = [];
  targets.forEach(target => {
    // if the target object has order options
    if(target.order && target.order.length){
      // push them onto the mergedOrder array
      // unique by column name (first element in order array)
      // giving precendence based on order passed in
      target.order.forEach(order => {
        // check if an order clause is already merged for this column name
        const existingClauseIndex = mergedOrder.findIndex(merged => merged[0] === order[0]);
        // replace order clauses that share column name
        if(existingClauseIndex !== -1) {
          mergedOrder[existingClauseIndex] = order;
        } else {
          mergedOrder.push(order);
        }
      })
    }
  })
  if(mergedOrder.length){
    return mergedOrder;
  }
  return null;
}

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


module.exports = merge;