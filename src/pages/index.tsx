import AboutMe from '@components/aboutMe'
import HomeComponent from '@components/home'
import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <>
      <HomeComponent/>
      <AboutMe/>
    </>
  )
}

export default Home
