const mergeOrder = require('./mergeOrder');

const mergeWith = require('lodash.mergewith');

/**
 * merges n sequelize options objects
 * @param {object[]} targets 
 */
function mergeSequelizeOptions(...targets) {
  return mergeWith(...targets, (accumulated, current, attrName) => {
    switch(attrName){
      case 'order':
        return mergeOrder(accumulated, current);
      default:
        return current;
    }
  })
}

module.exports = mergeSequelizeOptions