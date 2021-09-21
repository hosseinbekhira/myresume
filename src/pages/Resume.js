import React from "react";
import "./resume.scss";
import Navbar from "../components/Navbar";
import CirlceProgress from "../components/CirlceProgress";
import Cards from "../components/Cards";
import LinearProgress from "../components/LinearProgress";
import TopScroll from "../components/TopScroll";

const cardInfo = {
  card1: {
    position: "Frontend Developer",
    place: "University Mostagnem",
    from: "2020",
    to: "2021",
    task1: "Project Management",
    task2: "Develops User-facing Features",
    task3: "Responsive Design",
    task4: "Using Modern Technology",
  },
  card2: {
    position: "Frontend Developer",
    place: "University Mostagnem",
    from: "2020",
    to: "2021",
    task1: "Project Management",
    task2: "Develops User-facing Features",
    task3: "Responsive Design",
    task4: "Using Modern Technology",
  },
  card3: {
    position: "Frontend Developer",
    place: "University Mostagnem",
    from: "2020",
    to: "2021",
    task1: "Project Management",
    task2: "Develops User-facing Features",
    task3: "Responsive Design",
    task4: "Using Modern Technology",
  },
  card4: {
    position: "Frontend Developer",
    place: "University Mostagnem",
    from: "2020",
    to: "2021",
    task1: "Project Management",
    task2: "Develops User-facing Features",
    task3: "Responsive Design",
    task4: "Using Modern Technology",
  },
};

function Resume() {
  return (
    <>
      <Navbar />
      <div className="resume-container">
        <div className="skills">
          <h3 className="sub-title-resume">Skills</h3>
          <div className="container-circle">
            <CirlceProgress
              title={"Html & Css"}
              numpercent={70}
              duration={500}
              colorpercent={"#ffcc00"}
              colorprogress={"#ffcc00"}
              colorinnerc={"#2b2c2c"}
            />
            <CirlceProgress title={"JavaScript"} numpercent={60} />
            <CirlceProgress title={"Sass"} numpercent={60} />
            <CirlceProgress title={"React.JS"} numpercent={52} />
            <CirlceProgress title={"Python"} numpercent={60} />
            <CirlceProgress title={"Selenium"} numpercent={40} />
            <CirlceProgress title={"Bootstrap"} numpercent={70} />
            <CirlceProgress title={"Node.JS"} numpercent={40} />
            <CirlceProgress title={"Git & Github"} numpercent={60} />
            <CirlceProgress title={"Photoshop"} numpercent={75} />
            <CirlceProgress title={"Illustrator"} numpercent={50} />
            <CirlceProgress title={"InDesign"} numpercent={50} />
            <CirlceProgress title={"Web Research"} numpercent={60} />
            <CirlceProgress title={"Communication"} numpercent={40} />
            <CirlceProgress title={"Team Work"} numpercent={40} />
            <CirlceProgress title={"Creativity"} numpercent={70} />
            <CirlceProgress title={"Pro-solving"} numpercent={70} />
          </div>
        </div>

        <div className="education">
          <h3 className="sub-title-resume">Education</h3>
          <div className="container-education">
            <div className="item-education">
              <div className="shape"></div>
              <div className="part-one-edu">
                <i className="fas fa-university"></i>
                <div className="info-edu">
                  <h3>University of Saida</h3>
                  <h4>Bachelor of Arabic Literature</h4>
                  <small>Saida, Algeria</small>
                </div>
              </div>
              <div className="part-two-edu">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                </p>
              </div>
            </div>
            <div className="item-education">
              <div className="shape first-color"></div>
              <div className="part-one-edu">
                <i className="fas fa-theater-masks first-color"></i>
                <div className="info-edu">
                  <h3>University of Tlemcen</h3>
                  <h4>Master of Maghreb theater</h4>
                  <small>Tlemcen, Algeria</small>
                </div>
              </div>
              <div className="part-two-edu">
                <p className="first-color">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                </p>
              </div>
            </div>
            <div className="item-education">
              <div className="shape second-color"></div>
              <div className="part-one-edu">
                <i className="fas fa-graduation-cap second-color"></i>
                <div className="info-edu">
                  <h3>University of Mostaganem</h3>
                  <h4>Phd Student of Maghreb theater</h4>
                  <small>Mostaganem, Algeria</small>
                </div>
              </div>
              <div className="part-two-edu">
                <p className="second-color">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="work-experience">
          <h3 className="sub-title-resume">Work Experience</h3>
          <div className="work-container">
            <Cards infoCard={cardInfo.card1} />
            <Cards infoCard={cardInfo.card2} />
            <Cards infoCard={cardInfo.card3} />
            <Cards infoCard={cardInfo.card4} />
          </div>
        </div>

        <div className="languages">
          <h3 className="sub-title-resume">Languages</h3>
          <div className="languages-container">
            <LinearProgress
              title={"Arabic Native"}
              barColor={"#10182f"}
              ration={100}
              duration={1000}
            />
            <LinearProgress
              title={"English Intermediate"}
              barColor={"#ffcc00"}
              ration={42}
              duration={1000}
            />
            <LinearProgress
              title={"French Intermediate"}
              barColor={"#297f87"}
              ration={30}
              duration={1000}
            />
            <LinearProgress
              title={"Spanish Beginner"}
              barColor={"#fa1800"}
              ration={10}
              duration={1000}
            />
          </div>
        </div>
      </div>
      <TopScroll />
    </>
  );
}

export default Resume;
