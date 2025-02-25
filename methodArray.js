Array.prototype.reduce2 = function(callback, result){
  let i = 0
  if(arguments.length < 2){
    i = 1;
    result = this[0];
  }
  for(; i < this.length; i++){
    result = callback(result, this[i], i, this);
  }
  return result;
};
Array.prototype.map2 = function(callback){
  const newArray = [];
  for(let i = 0; i < this.length; i++){
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};
Array.prototype.forEach2 = function(callback){
    for( var index in this){
       if(this.hasOwnProperty(index)) {
           callback(this[index], index, this);
       }
    }
};
Array.prototype.filter2 = function(callback){
  const newArray = [];
  for(var index in this){
    if(this.hasOwnProperty(index)){
      var result = callback(this[index], index, this);
      if(result){
        newArray.push(this[index]);
      }
    }
  }return newArray;
};
Array.prototype.some2 = function(callback){
  for(var index in this){
    if(this.hasOwnProperty(index)){
      if(callback(this[index], index, this)){
        return true;
      };
    };
  };
};
const numbers = [1, 2, 3, 4];
console.log(numbers.filter2(function(number){
  return number % 2 === 0;
}))
console.log(numbers.filter2(function(number, index){
  return index % 2 === 0;
}))
console.log(numbers.filter2(function(number, index, array){
  return array.length % 2 === 0;
}))
var courses = [
  {
    name: 'Javascript',
    coin: 680,
    isFinish: true
  },
  {
    name: 'PHP',
    coin: 860,
    isFinish: false
  },
  {
    name: 'Ruby',
    coin: 980,
    isFinish: false
  } 
]

var filterCourse = courses.filter2(function(course, index, array){
  // console.log(course);
  return course.coin > 700;
});
console.log(filterCourse);
// numbers.forEach2(function(number, index, array){
//   console.log(number);
// });


