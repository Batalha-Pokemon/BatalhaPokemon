const pokemon = [
    {
        nome: "Absol",
        url: "https://static.wikia.nocookie.net/pokemon-daybreak/images/3/30/359.png/revision/latest?cb=20200810160246",
        tipo: "Dark",
        hp: 420,
        ataques: [{
            nomeAtaque: "Night Slash",
            dano: 70,
            tipoAtaque: "Dark"
        },
        {
            nomeAtaque: "Sucker Punch",
            dano: 80,
            tipoAtaque: "Dark"
        }]
    },
    {
        nome: "Lugia",
        url: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/0/09/Pokemans_249.gif',
        tipo: "Psychic",
        hp: 506,
        ataques: [
            {
                nomeAtaque: "Aeroblast",
                dano: 100,
                tipoAtaque: "Flying"
            },
            {
                nomeAtaque: "Hydro Pump",
                dano: 120,
                tipoAtaque: "Water"
            }]
    },
    {
        nome: "Gengar",
        url: 'https://i.pinimg.com/originals/66/36/d3/6636d37ba22a391c6353b1436a81f656.gif',
        tipo: "Ghost",
        hp: 350,
        ataques: [
            {
                nomeAtaque: "Shadow Ball",
                dano: 80,
                tipoAtaque: "Ghost"
            },
            {
                nomeAtaque: "Acid",
                dano: 40,
                tipoAtaque: "Poison"
            }]
    },
    {
        nome: "Dragonite",
        url: 'https://i.pinimg.com/originals/25/3d/d1/253dd10ff2aabc1dc6e6eeac0c144475.png',
        tipo: "Dragon",
        hp: 600,
        ataques: [
            {
                nomeAtaque: "Dragon Claw",
                dano: 70,
                tipoAtaque: "Dragon"
            },
            {
                nomeAtaque: "Hurricane",
                dano: 120,
                tipoAtaque: "Flying"
            }]
    },
    {
        nome: "Gyarados",
        url: 'https://i.pinimg.com/originals/44/45/76/44457698ffe5516c4167a09a0ce51a18.png',
        tipo: "Water",
        hp: 540,
        ataques: [
            {
                nomeAtaque: "Hydro Pump",
                dano: 120,
                tipoAtaque: "Water"
            },
            {
                nomeAtaque: "Waterfall",
                dano: 80,
                tipoAtaque: "Water"
            }]
    },
    {
        nome: "Kyogre",
        url:'https://static.wikia.nocookie.net/roblox-pokemon-project/images/b/b9/Pokemans_382.gif/revision/latest?cb=20161109010212',
        tipo: "Water",
        hp: 600,
        ataques: [
            {
                nomeAtaque: "Ice Beam",
                dano: 95,
                tipoAtaque: "Ice"
            },
            {
                nomeAtaque: "Double-Edge",
                dano: 120,
                tipoAtaque: "Normal",
                efeitoNegativo: function () {
                    if (hp <= 60) {
                        console.log("O Pokémon não possui vida para realizar esse ataque");
                        return;
                    } else {
                        this.hp -= 60;
                        return;
                    }
                }
            }]
    },
    {
        nome: "Metagross",
        url:'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/0/0e/Pokemans_376.gif?width=325',
        tipo: "Psychic",
        hp: 580,
        ataques: [
            {
                nomeAtaque: "Zen Headbutt",
                dano: 80,
                tipoAtaque: "Psychic"
            },
            {
                nomeAtaque: "Meteor Mash",
                dano: 100,
                tipoAtaque: "Fighting"
            }]
    },
    {
        nome: "Ho-Oh",
        url: 'https://static.wikia.nocookie.net/pokemon-snakewood/images/0/00/Ho-Oh.png/revision/latest?cb=20220124235340',
        tipo: "Fire",
        hp: 470,
        ataques: [
            {
                nomeAtaque: "Sky Attack",
                dano: 140,
                tipoAtaque: "Flying"
            },
            {
                nomeAtaque: "Sacred Fire",
                dano: 100,
                tipoAtaque: "Fire"
            }]
    },
    {
        nome: "Tyranitar",
        url: 'https://i.pinimg.com/originals/b4/cc/de/b4ccde0ff3944b86a833f3c290d3c8b2.gif',
        tipo: "Dark",
        hp: 600,
        ataques: [
            {
                nomeAtaque: "Stone Edge",
                dano: 100,
                tipoAtaque: "Rock"
            },
            {
                nomeAtaque: "Crunch",
                dano: 80,
                tipoAtaque: "Dark"
            }]
    },
    {
        nome: "Garchomp",
        url:'https://static.wikia.nocookie.net/pokemon-radiance/images/5/5e/165_Garchomp.png/revision/latest?cb=20200207055554',
        tipo: "Dragon",
        hp: 530,
        ataques: [
            {
                nomeAtaque: "Dragon Claw",
                dano: 80,
                tipoAtaque: "Dragon"
            },
            {
                nomeAtaque: "Dig",
                dano: 80,
                tipoAtaque: "Ground"
            }]
    },
    {
        nome: "Kommo-o",
        url: 'https://static.wikia.nocookie.net/pkmn-rejuvenation/images/a/a5/784.png/revision/latest/scale-to-width-down/192?cb=20210619130858',
        tipo: "Dragon",
        hp: 620,
        ataques: [
            {
                nomeAtaque: "Close Combat",
                dano: 120,
                tipoAtaque: "Fighting"
            },
            {
                nomeAtaque: "Outrage",
                dano: 120,
                tipoAtaque: "Dragon"
            }]
    },
    {
        nome: "Umbreon",
        url: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/e/e4/Pokemans_197.gif',
        tipo: "Dark",
        hp: 400,
        ataques: [
            {
                nomeAtaque: "Dark Pulse",
                dano: 80,
                tipoAtaque: "Dark"
            },
            {
                nomeAtaque: "Assurence",
                dano: 60,
                tipoAtaque: "Dark"
            }]
    },
    {
        nome: "Charizard",
        url: 'https://custom-doodle.com/wp-content/uploads/doodle/pokemon-charizard-pixel/pokemon-charizard-pixel-doodle.gif',
        tipo: "Fire",
        hp: 480,
        ataques: [
            {
                nomeAtaque: "Flamethrower",
                dano: 90,
                tipoAtaque: "Fire"
            },
            {
                nomeAtaque: "Air Slash",
                dano: 75,
                tipoAtaque: "Flying"
            }]
    },
    {
        nome: "Sceptile",
        url: "https://media.tenor.com/XGKMLiIY4mgAAAAj/sprite-pokemon.gif",
        tipo: "Grass",
        hp: 410,
        ataques: [
            {
                nomeAtaque: "Giga Drain",
                dano: 75,
                tipoAtaque: "Grass"
            },
            {
                nomeAtaque: "Leaf Blade",
                dano: 90,
                tipoAtaque: "Grass"
            }]
    },
    {
        nome: "Raikou",
        url:"https://static.wikia.nocookie.net/theairridegroup/images/1/1f/Raikou_Sprite.gif/revision/latest?cb=20160206041652",
        tipo: "Electric",
        hp: 500,
        ataques: [
            {
                nomeAtaque: "Discharge",
                dano: 80,
                tipoAtaque: "Electric"
            },
            {
                nomeAtaque: "Zap Cannon",
                dano: 120,
                tipoAtaque: "Electric"
            }]
    },
    {
        nome: "Lucario",
        url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b476dc13-7af0-48c5-8eb6-9c6f28f73099/degm1xq-1e59f2bb-ff8f-4ac7-839c-8f52803fbc25.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I0NzZkYzEzLTdhZjAtNDhjNS04ZWI2LTljNmYyOGY3MzA5OVwvZGVnbTF4cS0xZTU5ZjJiYi1mZjhmLTRhYzctODM5Yy04ZjUyODAzZmJjMjUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IThy2-b9yAW6tlXI1JbdONrMHB1Mx5J9BketY3Lyxl0",
        tipo: "Fighting",
        hp: 590,
        ataques: [
            {
                nomeAtaque: "Close Combat",
                dano: 120,
                tipoAtaque: "Fighting"
            },
            {
                nomeAtaque: "Metal Claw",
                dano: 50,
                tipoAtaque: "Steel"
            }]
        }];
        
    const teamOnePokemon = [];
    const teamTwoPokemon = [];
    const treinador = [{
        nome: "Red",
        time: teamOnePokemon,
        resultados: {
            vitorias: 0,
            derrotas: 0
        }
    },
    {
        nome: "blue",
        time: teamTwoPokemon,
        resultados: {
            vitorias: 0,
            derrotas: 0
        }
    }
];

function criarTimes() {
    for (let i = 0; i < 6; i++) {
        const pokemonRandom = Math.floor(Math.random() * 16);
        teamOnePokemon.push(pokemon[pokemonRandom]);
    }

    for (let i = 0; i < 6; i++) {
        const pokemonRandom = Math.floor(Math.random() * 16);
        teamTwoPokemon.push(pokemon[pokemonRandom]);
    }

    gerarBatalha(teamOnePokemon, teamTwoPokemon);
}

function calcularTipos(ataque, tipoPoke, indexPokemon1, indexPokemon2) {
    if (ataque == "Fire" && (tipoPoke == "Grass" || tipoPoke == "Steel" || tipoPoke == "Ice" || tipoPoke == "Bug")) {
        return 1
    } else if (ataque == "Fire" && (tipoPoke == "Fire" || tipoPoke == "Water" || tipoPoke == "Rock" || tipoPoke == "Dragon")) {
        return 3
    } else if (ataque == "Fire") {
        return 2
    }

    if (ataque == "Ground" && (tipoPoke == "Fire" || tipoPoke == "Electric" || tipoPoke == "Rock" || tipoPoke == "Poison" || tipoPoke == "Steel")) {
        return 1
    } else if (ataque == "Ground" && (tipoPoke == "Grass" || tipoPoke == "Bug")) {
        return 3
    } else if (ataque == "Ground" && tipoPoke == "Flying") {
        return 0
    } else if (ataque == "Ground") {
        return 2
    }

    if (ataque == "Dark" && (tipoPoke == "Psychic" || tipoPoke == "Ghost")) {
        return 1
    } else if (ataque == "Dark" && (tipoPoke == "Fighting" || tipoPoke == "Fairy" || tipoPoke == "Dark")) {
        return 3
    } else if (ataque == "Dark") {
        return 2
    }

    if (ataque == "Grass" && (tipoPoke == "Water" || tipoPoke == "Rock" || tipoPoke == "Ghost")) {
        return 1
    } else if (ataque == "Grass" && (tipoPoke == "Fire" || tipoPoke == "Grass" || tipoPoke == "Dragon" || tipoPoke == "Poison" || tipoPoke == "Bug" || tipoPoke == "Flying" || tipoPoke == "Steel")) {
        return 3
    } else if (ataque == "Grass") {
        return 2
    }

    if (ataque == "Flying" && (tipoPoke == "Grass" || tipoPoke == "Fighting" || tipoPoke == "Bug")) {
        return 1
    } else if (ataque == "Flying" && (tipoPoke == "Electric" || tipoPoke == "Rock" || tipoPoke == "Steel")) {
        return 3
    } else if (ataque == "Flying") {
        return 2
    }

    if (ataque == "Water" && (tipoPoke == "Fire" || tipoPoke == "Rock" || tipoPoke == "Ground")) {
        return 1
    } else if (ataque == "Water" && (tipoPoke == "Water" || tipoPoke == "Grass" || tipoPoke == "Dragon")) {
        return 3
    } else if (ataque == "Water") {
        return 2
    }

    if (ataque == "Ghost" && (tipoPoke == "Psychic" || tipoPoke == "Ghost")) {
        return 1
    } else if (ataque == "Ghost" && (tipoPoke == "Dark")) {
        return 3
    } else if (ataque == "Ghost" && tipoPoke == "Normal") {
        return 0
    } else if (ataque == "Ghost") {
        return 2
    }

    if (ataque == "Poison" && (tipoPoke == "Grass" || tipoPoke == "Fairy")) {
        return 1
    } else if (ataque == "Poison" && (tipoPoke == "Rock" || tipoPoke == "Poison" || tipoPoke == "Ground" || tipoPoke == "Ghost")) {
        return 3
    } else if (ataque == "Poison" && tipoPoke == "Steel") {
        return 0
    } else if (ataque == "Poison") {
        return 2
    }

    if (ataque == "Ice" && (tipoPoke == "Grass" || tipoPoke == "Dragon" || tipoPoke == "Ground" || tipoPoke == "Flying")) {
        return 1
    } else if (ataque == "Ice" && (tipoPoke == "Fire" || tipoPoke == "Water" || tipoPoke == "Ice" || tipoPoke == "Steel")) {
        return 3
    } else if (ataque == "Ice") {
        return 2
    }

    if (ataque == "Normal" && (tipoPoke == "Rock" || tipoPoke == "Steel")) {
        return 3
    } else if (ataque == "Normal" && tipoPoke == "Ghost") {
        return 0
    } else if (ataque == "Normal") {
        return 2
    }

    if (ataque == "Psychic" && (tipoPoke == "Fighting" || tipoPoke == "Poison")) {
        return 1
    } else if (ataque == "Psychic" && (tipoPoke == "Psychic" || tipoPoke == "Steel")) {
        return 3
    } else if (ataque == "Psychic" && tipoPoke == "Dark") {
        return 0
    } else if (ataque == "Psychic") {
        return 2
    }

    if (ataque == "Fighting" && (tipoPoke == "Normal" || tipoPoke == "Rock" || tipoPoke == "Ice" || tipoPoke == "Steel" || tipoPoke == "Dark")) {
        return 1
    } else if (ataque == "Fighting" && (tipoPoke == "Psychic" || tipoPoke == "Poison" || tipoPoke == "Bug" || tipoPoke == "Flying" || tipoPoke == "Fairy")) {
        return 3
    } else if (ataque == "Fighting" && tipoPoke == "Ghost") {
        return 0
    } else if (ataque == "Fighting") {
        return 2
    }

    if (ataque == "Rock" && (tipoPoke == "Fire" || tipoPoke == "Bug" || tipoPoke == "Flying" || tipoPoke == "Ice")) {
        return 1
    } else if (ataque == "Rock" && (tipoPoke == "Fighting" || tipoPoke == "Ground" || tipoPoke == "Steel")) {
        return 3
    } else if (ataque == "Rock") {
        return 2
    }

    if (ataque == "Electric" && (tipoPoke == "Water" || tipoPoke == "Flying")) {
        return 1
    } else if (ataque == "Electric" && (tipoPoke == "Grass" || tipoPoke == "Electric" || tipoPoke == "Dragon")) {
        return 3
    } else if (ataque == "Electric" && tipoPoke == "Ground") {
        return 0
    } else if (ataque == "Electric") {
        return 2
    }

    if (ataque == "Steel" && (tipoPoke == "Rock" || tipoPoke == "Ice" || tipoPoke == "Fairy")) {
        return 1
    } else if (ataque == "Steel" && (tipoPoke == "Fire" || tipoPoke == "Water" || tipoPoke == "Electric" || tipoPoke == "Steel")) {
        return 3
    } else if (ataque == "Steel") {
        return 2
    }
}

function gerarBatalha(teamOnePokemon, teamTwoPokemon, indexTime1, indexTime2) {
    // Quando for considerar o tipo durante o ataque passar o tipo do Pokémon atacado como parametro para a função
    // calcularTipos, irei retornar 1 para super efetivo, 2 para normal e 3 para não efetivo e retornarei 0 se o tipo do ataque não pode atingir o tipo do do pokemon atacado, então o dano do ataque
    // deve ser 0
    // o tipo do primeiro ataque que você passa o parâmetro sempre deve ser do ataque sendo usado e o segundo parâmetro deve ser o tipo do Pokémon atacado
    let rodadas = 0;
    let arena1 = document.getElementById('arena1');
    let arena2 = document.getElementById('arena2');

    const poke1 = teamOnePokemon[0];
    const poke2 = teamTwoPokemon[0];

    arena1.innerHTML = `
    <div class="direita">
        <article class="status">
            <div class="titulo">
                <h1>${teamOnePokemon[0].nome}</h1>
                
                <h2>HP <span id="vida">${teamOnePokemon[0].hp}</span></h2>
            </div>
            <div class="barra-vida" id="barra_vida_time_um">
                
                <div class="progresso-pokemon-um" id="qtd_poke1"></div>
            </div>
        </article>
    </div>
    <div class="esquerda">
        <article class="grama">
            <picture class="pokemon-um">
                
                <img src="${teamOnePokemon[0].url}" width="160px">
            </picture>
        </article>
    </div>
    `;

    let hpFixo = pokemon[indexTime1[0]].hp;
    let porcentagemHp = teamOnePokemon[0].hp * 100 / hpFixo;
    let mudarHp = document.getElementById('qtd_poke1');
    mudarHp.style.width = `${porcentagemHp}%`;
    
    arena2.innerHTML = `
    <div class="esquerda">
        <article class="status">
    
        <div class="titulo">
                <h1>${teamTwoPokemon[0].nome}</h1>
                
                <h2>HP <span id="vida">${teamTwoPokemon[0].hp}</span></h2>
            </div>
            <div class="barra-vida" id="barra_vida_time_dois">
                
                <div class="progresso-pokemon-dois" id="qtd_poke2"></div>
            </div>
        </article>
    </div>
    <div class="direita">
        <article class="grama"></article>
        <picture class="pokemon-dois">
                
            <img src="${teamTwoPokemon[0].url}" width="180px">
        </picture>
    </div>
    `;

    let hpFixo2 = pokemon[indexTime2[0]].hp;
    let porcentagemHp2 = teamTwoPokemon[0].hp * 100 / hpFixo2;
    let mudarHp2 = document.getElementById('qtd_poke2');
    mudarHp2.style.width = `${porcentagemHp2}%`;
    mudarHp2.style.width = `${porcentagemHp2}%`;

    let painel = document.getElementById('painel');  

    painel.innerHTML = `
        <button class="btn" onclick="darDano(calcularTipos('${teamOnePokemon[0].ataques[0].tipoAtaque}', '${teamTwoPokemon[0].tipo}'), '${teamOnePokemon[0].nome}', '${teamTwoPokemon[0].nome}', ${teamOnePokemon[0].ataques[0].dano}), 1">${teamOnePokemon[0].ataques[0].nomeAtaque}</button>
        <button class="btn" onclick="darDano(calcularTipos('${teamOnePokemon[0].ataques[0].tipoAtaque}', '${teamTwoPokemon[0].tipo}'), '${teamOnePokemon[0].nome}', '${teamTwoPokemon[0].nome}', ${teamOnePokemon[0].ataques[1].dano}), 1">${teamOnePokemon[0].ataques[1].nomeAtaque}</button>
        <button class="btn" onclick="trocar('${teamOnePokemon[0].nome}', '${teamTwoPokemon[0].nome}')">Trocar</button>
    `;
}

function darDano(multiplicador, nomePokemon1, nomePokemon2, dano, pokemonVez){
    console.log(multiplicador, nomePokemon1, nomePokemon2, dano);
    let index = buscaIndiceNome(nomePokemon1, nomePokemon2)

    if(pokemonVez == 1){
        time2[index[1]].hp -= dano
        console.log(time2[index[1]].hp)
    } else{
        time1[index[0]].hp -= dano
        console.log(time1[index[0]].hp)
    }

    atualizarArena(index[0], index[1])
}

function atualizarArena(indexPokemon1, indexPokemon2){
    let arena1 = document.getElementById('arena1');
    let arena2 = document.getElementById('arena2');
    let mudarHp = document.getElementById('qtd_poke1');
    let mudarHp2 = document.getElementById('qtd_poke2');
    let painel = document.getElementById('painel');  

    arena1.innerHTML = `
    <div class="direita">
        <article class="status">
            <div class="titulo">
                <h1>${time1[indexPokemon1].nome}</h1>
                
                <h2>HP <span id="vida">${time1[indexPokemon1].hp}</span></h2>
            </div>
            <div class="barra-vida" id="barra_vida_time_um">
                
                <div class="progresso-pokemon-um" id="qtd_poke1"></div>
            </div>
        </article>
    </div>
    <div class="esquerda">
        <article class="grama">
            <picture class="pokemon-um">
                
                <img src="${time1[indexPokemon1].url}" width="160px">
            </picture>
        </article>
    </div>
    `;

    let hpFixo = time1[indexTime1].hp;
    let porcentagemHp = time1[indexPokemon1].hp * 100 / hpFixo;
    mudarHp.style.width = `${porcentagemHp}%`;
    
    arena2.innerHTML = `
        <div class="esquerda">
            <article class="status">
        
            <div class="titulo">
                    <h1>${time2[indexPokemon2].nome}</h1>
                    
                    <h2>HP <span id="vida">${time2[indexPokemon2].hp}</span></h2>
                </div>
                <div class="barra-vida" id="barra_vida_time_dois">
                    
                    <div class="progresso-pokemon-dois" id="qtd_poke2"></div>
                </div>
            </article>
        </div>
        <div class="direita">
            <article class="grama"></article>
            <picture class="pokemon-dois">
                    
                <img src="${time2[indexPokemon2].url}" width="180px">
            </picture>
        </div>
    `;

    let hpFixo2 = pokemon[indexTime2[indexPokemon2]].hp;
    let porcentagemHp2 = time2[indexPokemon2].hp * 100 / hpFixo2;
    mudarHp2.style.width = `${porcentagemHp2}%`;
    mudarHp2.style.width = `${porcentagemHp2}%`;
}

function buscaIndiceNome(nomePokemon1, nomePokemon2){
    let i1 = 0
    let i2 = 0
    for(let i = 0; i > time1.length; i++){
        if(time1[i].nome){
            i1 = time1[i].index
            break
        }
    }
    for(let i = 0; i > time2.length; i++){
        if(time2[i].nome){
            i2 = time2[i].index
            break
        }
    }
    let listI = [i1, i2]
    return listI
}


time1 = []
time2 = []
indiceTime1 = []
indiceTime2 = []

function criaTime(){

    let listaPokemonProv = pokemon

    for(let i = 0; i < 6; i++){

        let random1 = parseInt(Math.random() * listaPokemonProv.length)
        time1.push(listaPokemonProv[random1])
        indiceTime1.push(random1)
        listaPokemonProv.slice(random1, 1);

        let random2 = parseInt(Math.random() * listaPokemonProv.length)
        time2.push(listaPokemonProv[random2])
        indiceTime2.push(random2)
        listaPokemonProv.slice(random2, 1)

    }
    console.log(time1, time2)
    gerarBatalha(time1, time2, indiceTime1, indiceTime2)
}

criaTime()