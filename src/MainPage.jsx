import Accordion from './components/accordion/Accordion.jsx'
import Hero from './components/hero/Hero.jsx'
import SectionOne from './components/sections/sectionOne/SectionOne.jsx'
import SectionTwo from './components/sections/sectionTwo/sectionTwo.jsx'
import SectionThree from './components/sections/sectionThree/sectionThree.jsx'
import NavBar from './components/navBar/NavBar.jsx'
import Form from './components/sections/form/Form.jsx'
import { Footer } from './components/footer/Footer.jsx'
const MainPage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <SectionOne />
            <SectionTwo />
            <Form />
            <SectionThree />
            <Accordion />
            <Footer />


        </>
    )
}

export default MainPage
