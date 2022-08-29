const wrapper = document.querySelector('#wrapper');


async function fetchPokemon() {
  let html = ''
  for (let i = 1; i <= 15; i++) {
    const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data =  await response.json(); 
    
    const pokeDetails = {
      id: data.id,
      name: data.name,
      img: data.sprites.front_default,
      type: data.types[0].type.name
    };

    html += `
      <div class="pokemon-card" data-pokemon-id="${pokeDetails.id}">
        <div class="img-wrapper">
          <img class="pokemon-img" src="${pokeDetails.img}">
        </div>
        <div class="details-wrapper">
          <h3 class="pokemon-name">${pokeDetails.name}</h3>
          <span>Type: ${pokeDetails.type} </span>
        </div>
      </div>
  `
  wrapper.innerHTML = html;
}

}

fetchPokemon();