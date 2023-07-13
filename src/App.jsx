import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
// import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
// import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer"

const App = () => {
    return (
        <>
            <Header />
            <Navbar />
            <About />
            <Experience />
            <Services />
            {/* <Portfolio /> */}
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </>
    );
};

export default App;
