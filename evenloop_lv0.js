// setTimeout(function() {
//     console.log('1');
// },0);

// new Promise(function(resolve, reject) {
//     console.log('2');
//     resolve(3);
// }).then(function(val) {
//     console.log(val);
// });
// console.log('4');

console.log('0');
setTimeout(function(){
    console.log('2');
},0);
function foo(){
    console.log('1');
};
foo();
console.log('3');
