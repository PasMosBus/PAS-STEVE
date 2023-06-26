  /* function getCharacters (){
const results = fetch("https://rickandmortyapi.com/api/character")
results
.then(response => response.json())
.then(date => (console.log(date.results)))
const contenedor = document.getElementById('.img-container');
data.results.forEach(personaje => {
  
});
}


getCharacters ()   */

 /*    function getCharacters(){

 const results = fetch("https://rickandmortyapi.com/api/character")
 results
  .then(response => response.json())
  .then(data => (console.log(date.results[1].name)))}
    const contenedor = document.getElementById('.img-container'); // Obtener el elemento contenedor en el DOM

    // Iterar sobre los objetos y crear elementos HTML para mostrar la información
    data.results.forEach(personaje => {
      const elemento = document.createElement('p'); // Crear un elemento de párrafo
      elemento.textContent = `name: ${objeto.name}, status: ${objeto.status}`; // Asignar el contenido del elemento
      contenedor.appendChild(elemento); // Agregar el elemento al contenedor en el DOM
    })  */
   
 

/* getCharacters(data => {
    data.results.forEach(personaje => {
       const article = document.createRange() .createContextualFragment(

        <article>
            
            <div class="img-container">
                <img src="${personaje.image}" alt="Personaje"></img>
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
            
        </article>
       );
    
    const main = document.querySelector("main")
    main.append(article)
});
}); */
/* fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes procesar los datos de la respuesta
    console.log(data); // Muestra los datos en la consola

    // Por ejemplo, puedes acceder a los resultados (personajes) de la siguiente manera:
    const characters = data.results;
    characters.forEach(character => {
      console.log(character.name);
      console.log(character.status);
      console.log(character.species);
      console.log(character.origin);
      // ... y así sucesivamente
    });
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error:', error);
  }); */
  //--------------------------------------//
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const characters = data.results; // Obtén la lista de personajes

    const characterList = document.getElementById('character-list');

    characters.forEach(character => {
      const listItem = document.createElement('li');

      const name = document.createElement('h3');
      name.textContent = character.name;

      const image = document.createElement('img');
      image.src = character.image;

      const status = document.createElement('h5');
      status.textContent = character.status;

      const species = document.createElement('h5');
      species.textContent = character.species;

      listItem.appendChild(name);
      listItem.appendChild(image);
      characterList.appendChild(listItem);
      listItem.appendChild(status);
      listItem.appendChild(species);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

 /*  En este ejemplo, creamos un elemento <li> para cada personaje y agregamos un encabezado <h5>
  con el nombre del personaje y una etiqueta <img> con la imagen. Luego, añadimos 
  cada elemento a una lista con el id "character-list" en tu página HTML. */

