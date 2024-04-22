import React from 'react'
import Nav from './NavBar'
import MainSection from './MainSection'
import Footer from './Footer'
import "./MainSection.css"
function HomePage() {
  return (
    <div className='home'>
<Nav/>
<MainSection/>
<Footer/>
    </div>
  )
}

export default HomePage