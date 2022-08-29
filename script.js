const wrapper = document.querySelector('#wrapper');


async function fetchPokemon() {
  let html = ''
  for (let i = 1; i <= 6; i++) {
    const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data =  await response.json(); 
    const pokeDetails = {
      id: data.id,
      name: data.name,
      img: data.sprites.front_default,
      type: data.types[0].type.name
    };
    console.log(pokeDetails);
    html += `
      <div class="pokemon-card" data-pokemon-id="${pokeDetails.id}">
        <h3 class="pokemon-name">${pokeDetails.name}</h3>
        <img src="${pokeDetails.img}">
        <span>Type: ${pokeDetails.type} </span>
      </div>
  `
  wrapper.innerHTML = html;
}

}

fetchPokemon();