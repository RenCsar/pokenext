import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Ball from './../../public/images/pokeball.png'
import { TNavList } from '@/utils/types'

const Navbar = () => {

    const lista = [
        { name: "Home", path: "/" },
        { name: "Sobre", path: "/sobre" },
    ]

    return (
        <div className={"flex justify-between h-[50px] px-2"}>
            <div className="flex items-center gap-2">
                <Image
                    src={Ball}
                    alt='logo'
                    width={45}
                    height={40}
                />
                <h1 className='font-bold'>PokeNext</h1>
            </div>
            <nav>
                <ul className={"flex mx-3 gap-8 items-center h-[50px] "}>
                    {
                        lista.map((i: TNavList, index: number) =>
                            <li className='hover:font-bold hover:text-[#859]' key={index}><Link href={`${i.path}`}>{i.name}</Link></li>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar