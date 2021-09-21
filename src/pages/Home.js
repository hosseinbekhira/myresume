import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";
import "./Home.scss";

const contact = {
  location: "Algeria, Saida",
  phone: "+213555275713",
  website: "www.hosseinbekhira.com",
  email: "bekhiraelhossein@gmail.com",
  srcFacebook: "https://www.facebook.com/",
  srcYoutube: "https://www.youtube.com/",
  srcGithub: "https://github.com/hosseinbekhira",
  srcBehance: "https://www.behance.net/bekhiraelhoss",
  srcResume: "images/resume/resume.pdf",
};
const imgbox = {
  src: "/images/profile-1.jpg",
  text: "HELLO, I'M",
  secondText: "BEKHIRA ELHOSSEIN",
};
const about = {
  src: "/images/singature.png",
  intro:
    "I am Bekhira Elhossein from Algeria, I am working on developing websites as Frontend Developer, I have one year of professional experience, and I aim to develop my skills through self education and follow up on new technology in this field",
};

export const contactContext = React.createContext();
export const imageboxContext = React.createContext();
export const aboutContext = React.createContext();

function Home() {
  return (
    <>
      <contactContext.Provider value={contact}>
        <imageboxContext.Provider value={imgbox}>
          <aboutContext.Provider value={about}>
            <Header />
            <About />
            <Footer />
            <TopScroll />
          </aboutContext.Provider>
        </imageboxContext.Provider>
      </contactContext.Provider>
    </>
  );
}

export default Home;
