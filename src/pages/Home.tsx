import ThemeToggle from "../components/ThemeToggle.tsx";
import StarBackground from "../components/StarBackground.tsx";
import {Navbar} from "../components/Navbar.tsx";
import HeroSection from "../components/HeroSection.tsx";
import AboutSection from "../components/AboutSection.tsx";
import SkillsSection from "../components/SkillsSection.tsx";
import ProjectsSection from "../components/ProjectsSection.tsx";
import ContactSection from "../components/ContactSection.tsx";
import {Footer} from "../components/Footer.tsx";

export default function Home(){
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle/>
            <StarBackground/>
            <Navbar/>
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>
            <Footer/>
        </div>
    )
}