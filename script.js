



//imagen = data.sprites.other.dream_world.front_default;
//nombre = data.name;
//habilidad = data.abilities[0].ability.name;
let listPokemones = ["Todos"];
let contador = 0;

const crearPokemon = async () => {
    
    for(let i = 1; i<= 15;i++){
        
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await response.json();
            if (data){
                console.log(data)
                console.log(data.sprites.other.dream_world.front_default)
                console.log(data.name)
                console.log(data.abilities[0].ability.name)
                listPokemones.push(data.name)
                listPokemones.push(i)
                
                hacerDibujo(i,data)
            }
        }catch(error){
            console.log(error);
        }
            
        

    }

    console.log(listPokemones)
    
}

const crearPokemon2 = async () => {
    
    for(let i = 1; i<= 15;i++){
        
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await response.json();
            if (data){
                // console.log(data)
                console.log(data.sprites.other.dream_world.front_default)
                console.log(data.name)
                console.log(data.abilities[0].ability.name)             
                hacerDibujo(i,data)
            }
        }catch(error){
            console.log(error);
        }
            
        

    }

    console.log(listPokemones)
    
}

const hacerDibujo = (id,data) => {

    let card = document.getElementById(`pokemon-${id}`)
    let listador = document.getElementById("dropdown-menu")

    card.innerHTML = `
        <div class="card" style="width: 18rem; height:400px">
            <div class="card-header">
                <p id="nombre-pokemon-${id}" class="mb-0">${data.name}</p>
            </div>

            <div class="container" style="height: 50%;">
                <img id="pokemon-img-${id}" src="${data.sprites.other.dream_world.front_default}" class="card-img-top rounded-0 " style=" height: 100%;" alt="...">
            </div>
            
            <div class="card-body">
                <h5 class="card-title">Ability</h5>
                <p class="card-text" id="ability-pokemon-${id}">${data.abilities[0].ability.name}</p>

            </div>
        </div>
    `

    listador.innerHTML += `
        <li id="pokemon-item-${id}"><a class="dropdown-item" href="#">${data.name}</a></li>
    `
    

    
}

crearPokemon();

document.addEventListener("click", (e) => {
    if (e.target.innerHTML == "Todos") {
        document.getElementById("card-container").innerHTML =`
        <div class="row mt-5">
            <div id="pokemon-1" class="col-12 col-md-4  d-flex justify-content-md-end justify-content-center align-items-md-center mt-3 mt-md-0">
            </div>
            <div id="pokemon-2" class="col-12 col-md-4 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            </div>
            <div id="pokemon-3" class="col-12 col-md-4 d-flex justify-content-md-start justify-content-center align-items-center mt-3 mt-md-0">
            </div>
        </div>

        <div class="row mt-3 mt-md-5">
            <div id="pokemon-4" class="col-12 col-md-4 d-flex justify-content-md-end justify-content-center align-items-md-center  mt-md-0">
            </div>
            <div id="pokemon-5" class="col-12 col-md-4 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            </div>
            <div id="pokemon-6" class="col-12 col-md-4 d-flex justify-content-md-start justify-content-center align-items-center mt-3 mt-md-0">
            </div>
        </div>

        <div class="row mt-3 mt-md-5">
            <div id="pokemon-7" class="col-12 col-md-4 d-flex justify-content-md-end justify-content-center align-items-md-center  mt-md-0">
            </div>
            <div id="pokemon-8" class="col-12 col-md-4 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            </div>
            <div id="pokemon-9" class="col-12 col-md-4 d-flex justify-content-md-start justify-content-center align-items-center mt-3 mt-md-0">
            </div>
        </div>

        <div class="row mt-3 mt-md-5">
            <div id="pokemon-10" class="col-12 col-md-4 d-flex justify-content-md-end justify-content-center align-items-md-center  mt-md-0">
            </div>
            <div id="pokemon-11" class="col-12 col-md-4 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            </div>
            <div id="pokemon-12" class="col-12 col-md-4 d-flex justify-content-md-start justify-content-center align-items-center mt-3 mt-md-0">
            </div>
        </div>

        <div class="row mt-3 mt-md-5 mb-5 mb-md-5">
            <div id="pokemon-13" class="col-12 col-md-4 d-flex justify-content-md-end justify-content-center align-items-md-center  mt-md-0">
            </div>
            <div id="pokemon-14" class="col-12 col-md-4 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            </div>
            <div id="pokemon-15" class="col-12 col-md-4 d-flex justify-content-md-start justify-content-center align-items-center mt-3 mt-md-0">
            </div>
        </div>

        `;
        crearPokemon2();
        return;
    }

    // if (contador > 0 ) {
    //     crearPokemon()
    // }

    if (listPokemones.includes(e.target.innerHTML)) {

        console.log("estoy aqui")
        
        document.getElementById("card-container").innerHTML = "";
        let varid = 0



        for(let i = 1; i <= listPokemones.length-1; i++){
            if (e.target.innerHTML == listPokemones[i]) {
                console.log(listPokemones[i+1])
                varid = listPokemones[i+1]
                break;
            }
        }

        console.log("varid",varid)

        const dibujaronecart = async () => {
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${varid}`);
                const data = await response.json();
                document.getElementById("card-container").innerHTML = `
                <div id="pokemon-1" class="col-12 col-md-4  d-flex justify-content-md-end justify-content-center align-items-md-center mt-3 mt-md-0">
                    <div class="card" style="width: 18rem; height:400px">
                        <div class="card-header">
                            <p id="nombre-pokemon-1" class="mb-0">${data.name}</p>
                        </div>

                        <div class="container" style="height: 50%;">
                            <img id="pokemon-img-1" src="${data.sprites.other.dream_world.front_default}" class="card-img-top rounded-0 " style=" height: 100%;" alt="...">
                        </div>
                        
                        <div class="card-body">
                            <h5 class="card-title">Ability</h5>
                            <p class="card-text" id="ability-pokemon-1">${data.abilities[0].ability.name}</p>

                        </div>
                    </div>
                </div>
                `


                
            }catch(error){
                console.log(error);
            }

        }
        dibujaronecart();
        

        contador++;
        











        // for(let i = 1; i <= 15; i++){
            
        //     let nombretemp = document.getElementById(`nombre-pokemon-${i}`).textContent;
        //     if ( e.target.innerHTML !== nombretemp) {
        //         // console.log("no ests")
        //         document.getElementById(`pokemon-${i}`).innerHTML = "";
        //     }
        // }
    }
})












    
            






// const buscarPokemon = async () => {
//     try{
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
    
// }

// buscarPokemon();
// let matrix = []

// for (let i = 1; i <= 5; i++) {
//     matrix.push([])
//     for (let j = 1; j <= 3; j++) {
//         matrix[i-1].push()
        
//     }
// }

// console.log(matrix)
