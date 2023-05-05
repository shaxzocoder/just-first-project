//? API -  

let comments;
fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
        return(comments = data); 
    })
    .catch((err) => console.log(err))
    .finally(() => {
        console.log(comments);
    });
// Methods - post, get 

// async/sync

// let a = 10;
// let b = 20;
// console.log(a+b);


// let userData;
// async function getUsers(){
//     try{
//         const res =await fetch("https://api.escuelajs.co/api/v1/products".then)
//     }
// }
