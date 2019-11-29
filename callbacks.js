// master commit
var add = function(a, b, callback) {
  var sum = a + b;
  callback(sum);
};

add(10, 20, function(sum) {
  console.log(sum);
});
