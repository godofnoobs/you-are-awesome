

Object.defineProperty(Object.prototype, 'pr', {enumerable:true, value:'value'});
Object.prototype['pr'] = 'value';

console.log(Object.prototype);
var a = {};
a['aaa'] = 3;
for (var i in a)
  alert(i + ' : ' + a[i]);
