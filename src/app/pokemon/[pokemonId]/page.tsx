'use client';
import { useEffect, useState } from 'react';
import { TParams, TPokemonType } from '@/utils/types';
import Image from 'next/image';

const Page = ({ params }: TParams) => {
  const [pokemon, setPokemon] = useState<any>([]);
  console.log(pokemon.types)

  useEffect(() => {
    const getPokemons = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`)
      const data = await res.json();
      setPokemon(data);
    }
    getPokemons();
  }, []);

  const checkColor = (name: string) => {
    const tipos: Record<string, string> = {
      normal: "bg-[#aa9]",
      fire: "bg-[#e33d33]",
      water: "bg-[#38c]",
      eletric: "bg-[#fc3]",
      grass: "bg-[#7c5]",
      ice: "bg-[#6cf]",
      fighting: "bg-[#b54]",
      poison: "bg-[#a59]",
      ground: "bg-[#db5]",
      flying: "bg-[#89f]",
      psychic: "bg-[#f59]",
      bug: "bg-[#ab2]",
      rock: "bg-[#ba6]",
      ghost: "bg-[#66b]",
      dragon: "bg-[#76e]",
      dark: "bg-[#754]",
      steel: "bg-[#aab]",
      fairy: "bg-[#e9e]",
    }
    return tipos[name] ? tipos[name] : "bg-[#2e2d2d]";
  }

  return (
    <main className='h-[550px] flex flex-col w-full items-center justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='bg-white text-[#333] capitalize font-bold px-4 text-[28px] mb-9'>{pokemon.name}</h1>
        <div className="flex items-center justify-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/0c328e64c6916ec31f9c9ae3a362b0eb9dca66cb/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt='foto-pokemon'
            width={110}
            height={110}
          />
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='font-bold'>Número:</h3>
          <p>#{pokemon.id}</p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='font-bold'>Tipo:</h3>
          <div className='flex gap-3'>
            {
              pokemon.types?.map((i: TPokemonType, index: number) => (
                <span key={index} className={`capitalize ${checkColor(i.type.name)} px-2 rounded-[4px]`}>{i.type.name}</span>
              ))
            }
          </div>
        </div>
        <div className='flex gap-9 items-center mt-4'>
          <div className='flex flex-col items-center'>
            <h4 className='font-bold'>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
          </div>
          <div className='flex flex-col items-center'>
            <h4 className='font-bold'>Peso:</h4>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page;