
const BuscarPokemon = async () => {
    const  pokeNameInput =  document.getElementById ("pokeName"); //como tenemos identificado
    let pokeName =  pokeNameInput.value;
    pokeName =  pokeName.toLowerCase (); // Convierte el nombre del pokemon a minusculas
    const url=`https://pokeapi.co/api/v2/pokemon/${pokeName}`; //url de la api y el nombde del pokemon 
    let data = await fetch(url).then((res) => {  //funcion para consultar api's (fetch -> alcanzar o buscar) y la promesa con .then
        if(res.status != "200"){ //si el status es diferente de 200
            console.log(res); //imprime el resultado en consola 404 not found
            pokeImage("./img/duda.png"); //pon esta imagen
        }else{//si no regresa el json de la api con toda la informacion del pokemon
            return res.json();
        }
    });
 //promesa cuando termina la promesa anterior has esta despues
    if(data){
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeInfo = data.abilities;//nos da todo el vector
        pokeImage(pokeImg);
        pokeData(pokeInfo);//llgena las abilidades 
        console.log(pokeImg);
    }
};

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src =url;
};

const pokeData = (abilites) => {//llegan las abilidades
    const pokeAbilities =document.getElementById("abilities");
    const abilitiesName = abilites.map((item) => item.ability.name); //convertimos el vector en un string y con .map recoremos todo el vector
    //console.log('abilities full', abilites);//imprime en consola
    //console.log('abilities Names', abilitiesName);//imprime en consola
    //pokeAbilities.innerHTML = "<p>" +abilitiesName[0] +"</p>";
    pokeAbilities.innerHTML = abilitiesName;
};
