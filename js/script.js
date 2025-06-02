const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
const pokemonsCard = document.querySelectorAll(".pokemon-card")
 
listaSelecaoPokemons.forEach(pokemon => {
 
    pokemon.addEventListener('click',() =>{
        //remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')
 
        //ao clicar em um pokemon da listagem pegamos o id desse pokemon
        //para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

        const pokemonAtivoNalistagem = document.querySelector('.ativo')
        pokemonAtivoNalistagem.classList.remove('ativo')

        const PokemonSelecionadoNalistagem = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoNalistagem.classList.add('ativo')
 
 
    })
})