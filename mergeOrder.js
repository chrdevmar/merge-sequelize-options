/**
 * merges options arrays, overwriting existing order clauses with later sources
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
  return mergedOrder;
}

module.exports = mergeOrder;