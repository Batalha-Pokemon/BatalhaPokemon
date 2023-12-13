const pokemon = [
    {
        nome: "Absol",
        tipo1: "Dark",
        tipo2: null,
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
        tipo1: "Psychic",
        tipo2: "Flying",
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
        tipo1: "Ghost",
        tipo2: "Poison",
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
    
]


function criarTime1() {
    alert(`${pokemon[0].nome} ${pokemon[0].ataques[0].nomeAtaque}`)
}