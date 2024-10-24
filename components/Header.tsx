import React from 'react'
import DesktopNavbar from './navbar/desktopNavbar'
import MobileNavbar from './navbar/mobileNavbar'

const Header = () => {
  return (
    <header className='w-full h-14 border-b border-[#f5f5f5]'>
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  )
}

export default Header