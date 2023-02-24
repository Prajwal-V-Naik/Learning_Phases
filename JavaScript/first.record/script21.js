fetch("https://api.chucknorris.io/jokes/categories")
.then((response) => {
    return response.json();
})
.then((data)=>{
    // console.log(data);
    var joke = data.value;
    console.log('Joke:', joke);
})
.catch((e)=>console.log(e));

