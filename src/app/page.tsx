'use client';
import { useEffect, useState } from 'react';
import { TPokemons } from '@/utils/types';
import Card from '@/components/Card';
import Image from 'next/image';
import Pokeball from './../../public/images/pokeball.png'

export default function Home() {
  const [pokemons, setPokemons] = useState<TPokemons[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=251`)
      const data = await res.json();

      data.results.forEach((item: TPokemons, index: number) => {
        item.id = index + 1
      })

      setPokemons(data.results);
    }

    getPokemons();
  }, [])

  return (
    <main className={"flex min-h-[550px] flex-col items-center justify-center py-5"}>
      <div className='flex items-center mb-10 gap-3'>
        <h1 className='text-[#e33d33] text-[4.0em] font-bold'>Poke<span className='text-white'>Next</span></h1>
        <Image
          src={Pokeball}
          width={70}
          height={70}
          alt='pokebola'
        />
      </div>
      <Card pokemons={pokemons} />
    </main>
  )
};