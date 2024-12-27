function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
// module.exports =sub this wrong
// module.exports  it can use only for single time
// exports.add=(a,b)=>(2,3)
module.exports = {
  subFnc:sub,
 addFnc: add,
};
