export type TNavList = {
    name: string,
    path: string,
}

export type TPokemons = {
    id: number,
    name: string,
    url: string,
}

export type TPokemonsProps = {
    pokemons: TPokemons[]
}