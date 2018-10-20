/**
 * merges options arrays, overwriting existing order clauses with later sources
 * @param  {...[]} accumulated - order options that have been merged so far
 * @param  {...[]} current - current order option to merge
 * @return {...[]} merged accumulated order options
 */
function mergeOrder(accumulated, current){
  // console.log('ACCUMULATED', accumulated);
  // console.log('CURRENT', current)
  current.forEach(order => {
    // check if an order clause is already merged for this column name
    const existingClauseIndex = accumulated.findIndex(merged => merged[0] === order[0]);
    // replace order clauses that share column name
    if(existingClauseIndex !== -1) {
      accumulated[existingClauseIndex] = order;
    } else {
      accumulated.push(order);
    }
  })
  return accumulated
}

module.exports = mergeOrder;