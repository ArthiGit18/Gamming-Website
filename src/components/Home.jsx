import React from 'react'
import Banner from '../pages/Banner'
import Navbar from '../pages/Navbar'
import CardSection from '../pages/CardSection'
import Main from '../pages/Characters/Main'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Main />
        </>
    )
}

export default Home