import About from "./About/about";
import Header from "./Header/header";
import Projects from "./Projects/projects";
import Mail_Component from "./Social/mail";
import Social_Component from "./Social/social";
import Skills from "./Skills/skills";
import Experience from "./Experience/experiences";
import Contact from "./Contact/contact";
import Educations from "./education/education";



const Home_Page = () => {

    return (<div>
        <Header />
        <About />
        <Projects />
        <Educations />
        <Experience />
        <Skills />
        <Contact />


        <Mail_Component />
        <Social_Component />
    </div>
    )


}

export default Home_Page;