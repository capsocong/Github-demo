const currentPromise = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve('success'); 
        },500)     
    } else {
        reject('Error');
    }
});
currentPromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});