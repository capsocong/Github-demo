/**
 * Micro-task(Job-queue)
 * Promise, Process.nextTick, async/await
 * Macro-task(Task-queue)
 * setTimeout, setInterval, setImmediate, I/O, UI rendering
 */
// console.log('0'); 
// setTimeout(function() {                       
//     console.log('1');       
// },0);
new Promise(function(resolve, reject) {  
    resolve(3);                     
    console.log('2');  
         
}).then(function(val) {     
    console.log(val);
});

new Promise(function(resolve, reject) {  
    console.log('4');   
    resolve(5);         
}).then(function(val) {
    console.log(val);
});
// console.log('6');   
// function a(){
//     console.log(1);     
//     b();               
// }
// function b(){
//     console.log(2);  
//     c();
// }
// function c(){        
//     console.log(3);  
// }  
// a(); 


