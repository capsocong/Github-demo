/**
 * Array methods
 * forEach
 * map
 * filter
 * find
 * reduce
 * every
 */

const { createTypeReferenceDirectiveResolutionCache } = require("typescript");

var course = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "PHP",
    coin: 0,
  },
  {
    id: 3,
    name: "C++",
    coin: 250,
  },
  {
    id: 4,
    name: "Node-JS",
    coin: 250,
  },
];
course.forEach(function (course, index) {
  console.log(index, course);
});

// var i = 0;

// function coinHandler(accumulator, currentValue){
//   i++;
//   var total = accumulator + currentValue.coin;
//   console.table({
//     'Lượt chạy': i,
//     'Biến tích trữ': accumulator,
//     'Giá khóa học': currentValue.coin,
//     'Tích trữ được': accumulator + currentValue.coin
//   })
//   return total;
// };
// var newCourse = course.map();
var totalCoin = course.reduce((previousValue, currentValue) => {
  return previousValue + currentValue.coin;
}, 0);
console.log(totalCoin);

var number = [100, 200, 300, 500, 1000];

var total = number.reduce(function (total, number) {
  return total + number;
});
console.log(total);
// Flat - "làm phẳng" mảng từ depth array -"Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var length = depthArray.length;
console.log(length);
for (var i = depthArray.length - 1; i >= 0; i--) {
  if (Array.isArray(depthArray[i])) {
    // depthArray = depthArray.concat(depthArray[i]);
    depthArray.splice(i, 1, ...depthArray[i]);
  }
}
console.log(depthArray);
// var flatArray = depthArray.reduce(function(flatoutput, depthItem){
//   return flatoutput.concat(depthItem);
// }, []);
// console.log(flatArray);
var topic = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "Javascript",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "Node-JS",
      },
      {
        id: 2,
        title: "PHP",
      },
    ],
  },
];
var newCourse = topic.reduce(function (courses, topic) {
  return courses.concat(topic.courses);
}, []);
console.log(newCourse);
var newCourses = topic.reduce(function (courses, topic) {
  return courses.concat(topic.courses);
}, []);
console.log(newCourses);
var html = newCourses.map(function (course) {
  return `<div>
             <h2>${course.title}</h2>
             <p>ID: ${course.id}</p>  
         </div>`;
});
console.log(html);
console.log(html.join(""));

var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
  }
];



