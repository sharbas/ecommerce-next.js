import React from 'react'
import Nav from './Nav'
import MobNav from './MobileNav'

function Header() {
  return (
    <div>
  <Nav
                  containerStyles="hidden xl:flex gap-x-10 items-center bg-white py-5 pl-20"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
  />
<div className='xl:hidden'>
    <MobNav/>
</div>
    </div>
  )
}

export default Header