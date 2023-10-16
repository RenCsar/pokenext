import Image from 'next/image'
import React from 'react'
import Family from './../../../public/images/fam.webp'

const Sobre = () => {
  return (
    <main className={"flex min-h-[550px] flex-col items-center justify-center"}>
      <h1 className="text-[28px] font-bold">Sobre o Projeto</h1>
      <p className='mb-8 text-[18px]'>PokeNext é um App construído em Next.js para consultar Pokémons.</p>
      <Image
        src={Family}
        alt="Charizard"
        width="800"
        height="800"
      />
    </main>
  )
}

export default Sobre;