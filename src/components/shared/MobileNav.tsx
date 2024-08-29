"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { SignedOut } from '@clerk/clerk-react'
import { Button } from '../ui/button'
  

const MobileNav = () => {

    const pathname = usePathname()


  return (
    <header className='header'>
        <Link href="/" className='flex items-center gap-2 md:py-2'>
           <Image src="/assets/images/logo-text.svg" width={180} height={28} alt='logo' />        
        </Link>
        <nav className='flex gap-2 overflow-auto'>
         <SignedIn>
            <UserButton afterSignOutUrl='/'/>

            <Sheet>
            <SheetTrigger>
                <Image src="/assets/icons/menu.svg" alt='logo' height={32} width={32} className='cursor-pointer'/>
            </SheetTrigger>
            <SheetContent className='sheet-content sm:w-64'>
               <>
               <Image
                src="/assets/images/logo-text.svg"
                height={23}
                width={152}
                alt='logo'
               />

                <ul className='header-nav_elements'>
                   {navLinks.map((link)=> {
                    const isActive = link.route === pathname;

                    return (
                        <li key={link.route} className={`${isActive && "gradient-text"} p-18 flex whitespace-nowrap text-dark-700 `}>
                          <Link className='sidebar-link cursor-pointer' href={link.route}>
                             <Image src={link.icon} height={24} width={24} alt='logo'/>
                             {link.label}
                          </Link>
                        </li>
                    )
                   })}   
                </ul>
               </>
            </SheetContent>
            </Sheet>

         </SignedIn>
         <SignedOut>
                <Button asChild className='button bg-purple-gradient bg-cover'>
                    <Link href="/sign-in"></Link>
                </Button>
             </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav