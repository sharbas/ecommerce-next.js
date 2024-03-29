'use client'
import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
const links=[
    {path:'/',name:'home'},
    {path:'/products',name:'Products'},
    {path:'/category',name:'Category'},
    {path:'/users',name:'Users'},

]

function Nav({containerStyles,linkStyles,underlineStyles}) {
    const path=usePathname()
  return (
    <nav className={`${containerStyles}`}>
    {links.map((link,index)=>{
        return <Link
        key={index}
        href={link.path}
        className={`capitalize ${linkStyles}`}
        >
        {link.path==path && (<span className={`${underlineStyles}`}/>)}
        {link.name}
        </Link>
    })}

    </nav>
  )
}

export default Nav