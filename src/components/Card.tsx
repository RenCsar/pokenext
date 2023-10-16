import { TPokemons, TPokemonsProps } from '@/utils/types'
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ pokemons }: TPokemonsProps) => {
    return (
        <>
            {
                !pokemons ?
                    <div className="flex h-full w-full items-center justify-center">
                        <button type="button" className="flex items-center rounded-lg bg-[#859] px-4 py-2 text-white shadow-[-3px_2px_20px_-10px_#b897c4]" disabled>
                            <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="font-medium"> carregando... </span>
                        </button>
                    </div>
                    :
                    <div className='w-full flex flex-wrap gap-[10px] justify-center max-w-[1200px]'>
                        {
                            pokemons.map((i: TPokemons) => (
                                <div key={i.id} className='flex flex-col justify-end items-center gap-[5px] w-[250px] h-[350px] p-3 rounded-2xl border-[#859] border-solid border-[2px] shadow-[0px_0px_20px_-10px_#b897c4]'>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/0c328e64c6916ec31f9c9ae3a362b0eb9dca66cb/sprites/pokemon/other/dream-world/${i.id}.svg`}
                                            alt='foto-pokemon'
                                            width={110}
                                            height={110}
                                        />
                                    </div>
                                    <p className='bg-[#859] px-1 rounded-[4px]'>{`#${i.id}`}</p>
                                    <p className='text-[20px] capitalize'>{i.name}</p>
                                    <Link href={`/pokemon/${i.id}`} className='bg-[#859] px-2 h-[35px] rounded-[4px] flex items-center cursor-pointer mb-[10px]'>Detalhe</Link>
                                </div>
                            ))
                        }
                    </div>
            }
        </>
    )
}

export default Card;