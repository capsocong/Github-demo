function HttpGetAsync(theUrl, resolve){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var blob = xmlHttp.response;
            var imgURL = URL.createObjectURL(blob);
            // callback(imgURL); // callback function  
            resolve(imgURL);
        }
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.responseType = "blob";
    xmlHttp.send(null);
};
// fetch('https://picsum.photos/200/300')
//     .then(response => {
//         console.log("Image URL:", response.url);
//         document.getElementById('img').src = response.url;
//     })
//     .catch(error => console.error("Fetch error:", error));
// HttpGetAsync('https://picsum.photos/200/300', (data) =>{
//     console.log('Response',data);
//     document.getElementById('img 1').setAttribute('src', data);
//     HttpGetAsync('https://picsum.photos/200/300', (data) =>{
//         console.log('Response',data);
//         document.getElementById('img 2').setAttribute('src', data);
//     })
//     HttpGetAsync('https://picsum.photos/200/300', (data) =>{
//         console.log('Response',data);
//         document.getElementById('img 3').setAttribute('src', data);
//     })
// });
const currentPromise = new Promise((resolve, reject) => {
   HttpGetAsync('https://picsum.photos/200/300', resolve);
});
const currentPromise2 = new Promise((resolve, reject) => {
    HttpGetAsync('https://picsum.photos/200/300', resolve);
 });
 const currentPromise3 = new Promise((resolve, reject) => {
    HttpGetAsync('https://picsum.photos/200/300', resolve);
 });
 const executeAsync = async () => {
  try{
    const response = await currentPromise;
    document.getElementById('img 1').setAttribute('src', response);
    const response1 = await currentPromise2;
    document.getElementById('img 2').setAttribute('src', response1);
    const response2 = await currentPromise3;
    document.getElementById('img 3').setAttribute('src', response2);
  }catch(error){
    console.log(error);
  }
 }
    executeAsync();
// currentPromise.then((message) => {
//     console.log(message);
//     document.getElementById('img 1').setAttribute('src', message);
//     return currentPromise2;
// }).then((message) => {
//     console.log(message);
//     document.getElementById('img 2').setAttribute('src', message);
//     return currentPromise3;
// }).then((message) => {
//     console.log(message);
//     document.getElementById('img 3').setAttribute('src', message);
// }).catch((message) => {
//     console.log(message);
// });