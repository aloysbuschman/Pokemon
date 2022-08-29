const wrapper = document.querySelector('#wrapper');
const filter = document.querySelector('#filter-type');

filter.addEventListener('change', filterByType);

function filterByType() {
  const pokemonCards = document.querySelectorAll('.pokemon-card');
  const filterValue = filter.value;
  let types = ''
  pokemonCards.forEach(card => {
    let types = card.dataset.pokemonType
    if (!types.includes(filterValue)) {
      card.classList.toggle('hide');
    }

  });
};


async function fetchPokemon() {
  let html = ''; 
  for (let i = 1; i <= 150; i++) {
    const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data =  await response.json(); 
    
    const pokeDetails = {
      id: data.id
        .toString()
        .padStart(3,'0'),
      name: data.name,
      img: data.sprites.front_default,
      type: data.types
        .map(type => type.type.name)
        .join(', '),
      height: data.height,
      weight: data.weight,
    };

    html += `
      <div class="pokemon-card" data-pokemon-type="${pokeDetails.type}">
        <div class="content-left">
          <img class="pokemon-img" src="${pokeDetails.img}">
          <span class="pokemon-id">#${pokeDetails.id}</span>
        </div>
        <div class="content-right">
          <h3 class="pokemon-name">${pokeDetails.name}</h3>
          <ul>
            <li>Type: <span class="pokemon-type">${pokeDetails.type}</type> </li>
            <li>Height: ${pokeDetails.height} </li>
            <li>Weight: ${pokeDetails.weight} </li>
          </ul>

        </div>
      </div>
  `
  wrapper.innerHTML = html;
}};

fetchPokemon();
