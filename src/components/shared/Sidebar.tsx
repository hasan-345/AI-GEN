"use client"
import { navLinks } from '@/constants'
import { SignedIn } from '@clerk/clerk-react'
import { SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { UserButton } from '@clerk/nextjs'

const Sidebar = () => {

  const pathname = usePathname()

  return (
    <aside className='sidebar'>
       <div className='flex size-full flex-col gap-4'>
           <Link href="/" className='sidebar-logo'>
             <Image src="/logo.png" alt='logo' width={180} height={28} />
           </Link>

           <nav className='sidebar-nav'>
             <SignedIn>
                <ul className='sidebar-nav_elements'>
                   {navLinks.slice(0,6).map((link)=> {
                    const isActive = link.route === pathname;

                    return (
                        <li key={link.route} className={`sidebar-nav_element ${isActive? "bg-purple-gradient text-slate-100":"text-gray-700"} `}>
                          <Link className='sidebar-link' href={link.route}>
                             <Image src={link.icon} height={24} width={24} alt='logo' className={`${isActive && "brightness-200"}`} />
                             {link.label}
                          </Link>
                        </li>
                    )
                   })}   
                </ul>
                <ul className='sidebar-nav_elements'> 
                {navLinks.slice(6,8).map((link)=> {
                    const isActive = link.route === pathname;

                    return (
                        <li key={link.route} className={`sidebar-nav_element ${isActive? "bg-purple-gradient text-slate-100":"text-gray-700"} `}>
                          <Link className='sidebar-link' href={link.route}>
                             <Image src={link.icon} height={24} width={24} alt='logo' className={`${isActive && "brightness-200"}`} />
                             {link.label}
                          </Link>
                        </li>
                    )
                   })}   
                   <li className='flex-center cursor-pointer gap-2 p-4'>
                        <UserButton afterSignOutUrl='/' showName/>
                   </li>                
                </ul>
             </SignedIn>

             <SignedOut>
                <Button asChild className='button bg-purple-gradient bg-cover'>
                    <Link href="/sign-in"></Link>
                </Button>
             </SignedOut>
           </nav>
       </div>
    </aside>
  )
}

export default Sidebar