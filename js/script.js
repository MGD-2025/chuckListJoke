const fetchJoke =document.getElementById ('fetchJoke');
const jokeList = document.getElementById ('jokeList');
const removejoke= document.getElementById('removejoke')

function showJokes(){
    const jokes = JSON.parse(localStorage.getItem('jokes')) || []
    jokeList.innerHTML= ' ';
    jokes.forEach(joke=> {
        const list = document.createElement('li')
        list.textContent =joke 
        jokeList.appendChild(list)
    })
}
fetchJoke.addEventListener('click' , () =>{
    fetch ('https://api.chucknorris.io/jokes/random')
.then ((response)=>{
    if(!response.ok){
        throw new Error ('Error en la página')
    }
    return response.json()
})
.then ((data)=> {
    let jokes = JSON.parse(localStorage.getItem('jokes')) || []
    jokes.push(data.value)
    localStorage.setItem('jokes', JSON.stringify(jokes))
    showJokes ();

    })
})
removejoke.addEventListener('click', ()=>{
    localStorage.removeItem('jokes')
    showJokes()
})
 showJokes()
