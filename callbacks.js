// master commit
var add = function(a, b, callback) {
  var sum = a + b;
  callback(sum);
};

add(10, 20, function(sum) {
  console.log(sum);
});

var log = function(string) {
  console.log(string);
};

var timing = function(fn) {
  console.time('time:');
  fn();
  console.time('time:');
};
