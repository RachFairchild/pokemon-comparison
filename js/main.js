//Example fetch using pokemonapi.co
document.querySelector('#button').addEventListener('click', getFetch)

function playMusic(){
  const music = new Audio('./audio/battle.mp3');
  music.play();
  music.volume = 0.1;
}

function getFetch(){
  const poke1 = document.querySelector('#poke1').value.toLowerCase()
  const poke2 = document.querySelector('#poke2').value.toLowerCase()
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2

  let pokeStore = []
  let pokeImg = []


    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.back_shiny)
        
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          
          pokeStore.push(data.types[0].type.name)
          pokeImg.push(data.sprites.front_shiny)

          // Moved these two query selectors outside the conditional below so the images would always show 
          document.querySelector('#pokeImg1').src = pokeImg[1]
          document.querySelector('#pokeImg2').src = pokeImg[0]

          if(pokeImg[0] && pokeImg[1]){
            // run audio
            playMusic();

            // All 2x battle pairings:
            if(
              (pokeStore[0] === "grass" && pokeStore[1] === 'water') ||
              (pokeStore[0] === "water" && pokeStore[1] === "fire") ||
              (pokeStore[0] === 'fighting' && pokeStore[1] === 'normal') ||
              (pokeStore[0] === 'ground' && pokeStore[1] === 'fire') ||
              (pokeStore[0] === 'rock' && pokeStore[1] === 'fire') ||
              (pokeStore[0] === 'electric' && pokeStore[1] === 'water') ||
              (pokeStore[0] === 'grass' && pokeStore[1] === 'water') ||
              (pokeStore[0] === 'ground' && pokeStore[1] === 'electric') ||
              (pokeStore[0] === 'fire' && pokeStore[1] === 'grass') ||
              (pokeStore[0] === 'ice' && pokeStore[1] === 'grass') ||
              (pokeStore[0] === 'poison' && pokeStore[1] === 'grass') ||
              (pokeStore[0] === 'flying' && pokeStore[1] === 'grass') ||
              (pokeStore[0] === 'bug' && pokeStore[1] === 'grass') ||
              (pokeStore[0] === 'fire' && pokeStore[1] === 'ice') ||
              (pokeStore[0] === 'fighting' && pokeStore[1] === 'ice') ||
              (pokeStore[0] === 'rock' && pokeStore[1] === 'ice') ||
              (pokeStore[0] === 'steel' && pokeStore[1] === 'ice') ||
              (pokeStore[0] === 'flying' && pokeStore[1] === 'fighting') ||
              (pokeStore[0] === 'psychic' && pokeStore[1] === 'fighting') ||
              (pokeStore[0] === 'fairy' && pokeStore[1] === 'fighting') ||
              (pokeStore[0] === 'ground' && pokeStore[1] === 'poison') ||
              (pokeStore[0] === 'psychic' && pokeStore[1] === 'poison') ||
              (pokeStore[0] === 'water' && pokeStore[1] === 'ground') ||
              (pokeStore[0] === 'grass' && pokeStore[1] === 'ground') ||
              (pokeStore[0] === 'ice' && pokeStore[1] === 'ground') ||
              (pokeStore[0] === 'electric' && pokeStore[1] === 'flying') ||
              (pokeStore[0] === 'ice' && pokeStore[1] === 'flying') ||
              (pokeStore[0] === 'rock' && pokeStore[1] === 'flying') ||
              (pokeStore[0] === 'bug' && pokeStore[1] === 'psychic') ||
              (pokeStore[0] === 'ghost' && pokeStore[1] === 'psychic') ||
              (pokeStore[0] === 'dark' && pokeStore[1] === 'psychic') ||
              (pokeStore[0] === 'fire' && pokeStore[1] === 'bug') ||
              (pokeStore[0] === 'flying' && pokeStore[1] === 'bug') ||
              (pokeStore[0] === 'rock' && pokeStore[1] === 'bug') ||
              (pokeStore[0] === 'water' && pokeStore[1] === 'rock') ||
              (pokeStore[0] === 'grass' && pokeStore[1] === 'rock') ||
              (pokeStore[0] === 'fighting' && pokeStore[1] === 'rock') ||
              (pokeStore[0] === 'ground' && pokeStore[1] === 'rock') ||
              (pokeStore[0] === 'steel' && pokeStore[1] === 'rock') ||
              (pokeStore[0] === 'ghost' && pokeStore[1] === 'ghost') ||
              (pokeStore[0] === 'dark' && pokeStore[1] === 'ghost') ||
              (pokeStore[0] === 'ice' && pokeStore[1] === 'dragon') ||
              (pokeStore[0] === 'dragon' && pokeStore[1] === 'dragon') ||
              (pokeStore[0] === 'fairy' && pokeStore[1] === 'dragon') ||
              (pokeStore[0] === 'fighting' && pokeStore[1] === 'dark') ||
              (pokeStore[0] === 'bug' && pokeStore[1] === 'dark') ||
              (pokeStore[0] === 'fairy' && pokeStore[1] === 'dark') ||
              (pokeStore[0] === 'fire' && pokeStore[1] === 'steel') ||
              (pokeStore[0] === 'fighting' && pokeStore[1] === 'steel') ||
              (pokeStore[0] === 'ground' && pokeStore[1] === 'steel') ||
              (pokeStore[0] === 'poison' && pokeStore[1] === 'fairy') ||
              (pokeStore[0] === 'steel' && pokeStore[1] === 'fairy')
              ){
                document.querySelector('.effectiveness').innerText = `${poke1.toUpperCase()} has attacked ${poke2.toUpperCase()}! It's super effective!`
              }
    
              // All 1/2x battle pairings:
              else if(
                (pokeStore[0] === 'fire' && pokeStore[1] === 'fire') ||
                (pokeStore[0] === 'grass' && pokeStore[1] === 'fire') ||
                (pokeStore[0] === 'ice' && pokeStore[1] === 'fire') ||
                (pokeStore[0] === 'bug' && pokeStore[1] === 'fire') ||
                (pokeStore[0] === 'steel' && pokeStore[1] === 'fire') ||
                (pokeStore[0] === 'fairy' && pokeStore[1] === 'fire') ||
                (pokeStore[0] === 'fire' && pokeStore[1] === 'water') ||
                (pokeStore[0] === 'water' && pokeStore[1] === 'water') ||
                (pokeStore[0] === 'ice' && pokeStore[1] === 'water') ||
                (pokeStore[0] === 'steel' && pokeStore[1] === 'water') ||
                (pokeStore[0] === 'electric' && pokeStore[1] === 'electric') ||
                (pokeStore[0] === 'flying' && pokeStore[1] === 'electric') ||
                (pokeStore[0] === 'steel' && pokeStore[1] === 'electric') ||
                (pokeStore[0] === 'water' && pokeStore[1] === 'grass') ||
                (pokeStore[0] === 'electric' && pokeStore[1] === 'grass') ||
                (pokeStore[0] === 'grass' && pokeStore[1] === 'grass') ||
                (pokeStore[0] === 'ground' && pokeStore[1] === 'grass') ||
                (pokeStore[0] === 'ice' && pokeStore[1] === 'ice') ||
                (pokeStore[0] === 'bug' && pokeStore[1] === 'fighting') ||
                (pokeStore[0] === 'rock' && pokeStore[1] === 'fighting') ||
                (pokeStore[0] === 'dark' && pokeStore[1] === 'fighting') ||
                (pokeStore[0] === 'grass' && pokeStore[1] === 'poison') ||
                (pokeStore[0] === 'fighting' && pokeStore[1] === 'poison') ||
                (pokeStore[0] === 'poison' && pokeStore[1] === 'poison') ||
                (pokeStore[0] === 'bug' && pokeStore[1] === 'poison') ||
                (pokeStore[0] === 'fairy' && pokeStore[1] === 'poison') ||
                (pokeStore[0] === 'poison' && pokeStore[1] === 'ground') ||
                (pokeStore[0] === 'rock' && pokeStore[1] === 'ground') ||
                (pokeStore[0] === 'grass' && pokeStore[1] === 'flying') ||
                (pokeStore[0] === 'fighting' && pokeStore[1] === 'flying') ||
                (pokeStore[0] === 'bug' && pokeStore[1] === 'flying') ||
                (pokeStore[0] === 'fighting' && pokeStore[1] === 'psychic') ||
                (pokeStore[0] === 'psychic' && pokeStore[1] === 'psychic') ||
                (pokeStore[0] === 'grass' && pokeStore[1] === 'bug') ||
                (pokeStore[0] === 'fighting' && pokeStore[1] === 'bug') ||
                (pokeStore[0] === 'ground' && pokeStore[1] === 'bug') ||
                (pokeStore[0] === 'normal' && pokeStore[1] === 'rock') ||
                (pokeStore[0] === 'fire' && pokeStore[1] === 'rock') ||
                (pokeStore[0] === 'poison' && pokeStore[1] === 'rock') ||
                (pokeStore[0] === 'flying' && pokeStore[1] === 'rock') ||
                (pokeStore[0] === 'poison' && pokeStore[1] === 'ghost') ||
                (pokeStore[0] === 'bug' && pokeStore[1] === 'ghost') ||
                (pokeStore[0] === 'fire' && pokeStore[1] === 'dragon') ||
                (pokeStore[0] === 'water' && pokeStore[1] === 'dragon') ||
                (pokeStore[0] === 'electric' && pokeStore[1] === 'dragon') ||
                (pokeStore[0] === 'grass' && pokeStore[1] === 'dragon') ||
                (pokeStore[0] === 'ghost' && pokeStore[1] === 'dark') ||
                (pokeStore[0] === 'dark' && pokeStore[1] === 'dark') ||
                (pokeStore[0] === 'normal' && pokeStore[1] === 'steel') ||
                (pokeStore[0] === 'grass' && pokeStore[1] === 'steel') ||
                (pokeStore[0] === 'ice' && pokeStore[1] === 'steel') ||
                (pokeStore[0] === 'flying' && pokeStore[1] === 'steel') ||
                (pokeStore[0] === 'psychic' && pokeStore[1] === 'steel') ||
                (pokeStore[0] === 'bug' && pokeStore[1] === 'steel') ||
                (pokeStore[0] === 'rock' && pokeStore[1] === 'steel') ||
                (pokeStore[0] === 'dragon' && pokeStore[1] === 'steel') ||
                (pokeStore[0] === 'steel' && pokeStore[1] === 'steel') ||
                (pokeStore[0] === 'fairy' && pokeStore[1] === 'steel') ||
                (pokeStore[0] === 'fighting' && pokeStore[1] === 'fairy') ||
                (pokeStore[0] === 'bug' && pokeStore[1] === 'fairy') ||
                (pokeStore[0] === 'dark' && pokeStore[1] === 'fairy')
                ){
                document.querySelector('.effectiveness').innerText = `${poke1.toUpperCase()} has attacked ${poke2.toUpperCase()}! It's not very effective...`
              }
    
              // All no effect battle pairings:
              else if(
                (pokeStore[0] === 'ghost' && pokeStore[1] === 'normal') ||
                (pokeStore[0] === 'electric' && pokeStore[1] === 'ground') ||
                (pokeStore[0] === 'ground' && pokeStore[1] === 'flying') ||
                (pokeStore[0] === 'normal' && pokeStore[1] === 'ghost') ||
                (pokeStore[0] === 'fighting' && pokeStore[1] === 'ghost') ||
                (pokeStore[0] === 'psychic' && pokeStore[1] === 'dark') ||
                (pokeStore[0] === 'poison' && pokeStore[1] === 'steel') ||
                (pokeStore[0] === 'dragon' && pokeStore[1] === 'fairy')
              ){
                document.querySelector('.effectiveness').innerText = `${poke1.toUpperCase()} has attacked ${poke2.toUpperCase()}! The move had no effect.`
              }
    
              // The rest: normal effect battle pairings:
              else{
                document.querySelector('.effectiveness').innerText = `${poke1.toUpperCase()} has attacked ${poke2.toUpperCase()}! It was effective!`
              }
          } else {
            // document.querySelector('.input-error').innerText = `Please be sure to enter valid Pokémon`
            // alert(`Please be sure to enter valid Pokémon names`);
            // document.querySelector('.effectiveness').innerText = `Please be sure to enter valid Pokémon names`
            // console.log(`Please be sure to enter valid Pokémon names`)

            // let fname = document.getElementById("fname");
            // fname.addEventListener("input", () => {
            //   if (fname.validity.tooLong || fname.validity.tooShort || fname.validity.valueMissing) {
            //     fname.setCustomValidity("Name must be 2-8 characters.");
            //     fname.reportValidity();
            //   } else { fname.setCustomValidity(""); }
            // });

            
          }

        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });




      
}