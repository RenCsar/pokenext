import Image from 'next/image'
import React from 'react'
import Error from "./../../public/images/error.png"
import Link from 'next/link'

const NotFound = () => {
  return (
    <main className={"flex flex-col items-center justify-center text-white min-h-[550px]"}>
      <Image
        src={Error}
        width={600}
        height={600}
        alt="Picture of the author"
      />
      <button className='bg-[#859] p-2 rounded-[5px] '><Link href={"/"}>Home</Link></button>
    </main>
  )
}

export default NotFound