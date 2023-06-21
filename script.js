function getCharacters (){
const results = fetch("https://rickandmortyapi.com/api/character")
results
.then(response => response.json())
.then(date => (console.log(date.results[5].name)))
}
getCharacters()

/* getCharacters(data => {
    data.results.forEach(personaje => {
       const article = document.createRange() .createContextualFragment(

        <article>
            
            <div class="img-container">
                <img src="${personaje.image}" alt="Personaje"></img>
                </div>
                <h2>${personajeersonaje.name}</h2>
                <span>${personajeersonaje.status}</span>
            
        </article>
       );
    
    const main = document.querySelector("main")
    main.append(article)
});
}); */