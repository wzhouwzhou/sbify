'use strict';
module.exports = function sbify(m, b = '🅱') {
  return m.replace(/(?:\w)(\w+)?/g, (_, $) => `b${$ || ''}`.replace(/b/gi, b));
};
