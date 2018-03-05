// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => 'value';
const createNotEnumerableProperty = function(pr) {
  Object.defineProperty(Object.prototype, pr, {enumerable:true, value:'value'});
  Object.prototype[pr] = 'value';
  return pr;
};
const createProtoMagicObject = () => {
  var a = new Function();
  a.__proto__ = undefined;
  a.prototype = a.__proto__;
  return a;
};
var value = 0;
Function.prototype.valueOf = function () {return value;};
const incrementor = () => {
  value++;
  return incrementor;
};
const asyncIncrementor = () => {
};
const createIncrementer = function () {

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (x) => {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(x)}, 1000);
  });
  return promise;
}
const getDeepPropertiesCount = (obj) => {
  var keys = Object.getOwnPropertyNames(obj);
  var count = keys.length;
  for (var i = 0; i < keys.length; i++) {
      var t = obj[keys[i]];
      count += getDeepPropertiesCount(t);
  }
  return count;
};
const createSerializedObject = () => null;
const toBuffer = () => {};
const sortByProto = (arr) => {
  var res = arr.sort(function (a, b) {return (a.__proto__ > b.__proto__) ? 1:0});
  //console.log()
  return res;
};

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
