import Hero from '../components/landingPage/Hero'
import Banner from '../components/landingPage/Banner'
import About from '../components/landingPage/About'
import Timeline from '../components/landingPage/Timeline'
import Github from '../components/landingPage/Github'
import Chatbot from '../components/landingPage/Chatbot'

function LandingPage() {
  return (
    <>
        <div>
            <Hero />
            <Banner />
            <About />
            <Timeline />
            <Github />
            <Chatbot />
        </div>
    </>
  )
}

export default LandingPage