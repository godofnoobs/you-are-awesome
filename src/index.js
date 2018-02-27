// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => 'value';
const createNotEnumerableProperty = function(pr) {
  Object.defineProperty(Object.prototype, pr, {enumerable:true, value:'value'});
  Object.prototype[pr] = 'value';
  return pr;
};
/*const createNotEnumerableProperty = function(pr) {
  var value = {toString() {return 'value'}};
  Object.defineProperty(value, toString(), {enumerable:false});
  return '__proto__';
};*/
const createProtoMagicObject = () => {};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
