import Link from 'next/link';
import React from 'react'
import { BsJournalPlus } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between w-[70%] mx-auto py-6'>
            <Link href="/" prefetch={false}>
                <h1 className='text-2xl'>Journal App</h1>
            </Link>
            <Link href="/add" prefetch={false}>
                <button className='flex items-center gap-2 px-4 py-2 rounded-md bg-[#3998c0] text-white'>
                    <BsJournalPlus />
                    <p>Create Journal</p>
                </button>
            </Link>
        </div>
    )
}

export default Navbar