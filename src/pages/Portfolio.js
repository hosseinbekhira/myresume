import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import ProjectItem from "../components/ProjectItem";
import TopScroll from "../components/TopScroll";
import "./portfolio.scss";

const myProjectItem = {
  src: {
    src1: "/images/magazine-1.jpg",
    src2: "/images/website-1.jpg",
    src3: "/images/design-1.jpg",
    src4: "/images/drawing-1.jpg",
    src5: "/images/logo-1.jpg",
    src6: "/images/drawing-2.jpg",
    src7: "/images/drawing-3.jpg",
    src8: "/images/drawing-4.jpg",
    src9: "/images/drawing-5.jpg",
    src10: "/images/logo-2.jpg",
    src11: "/images/logo-3.jpg",
    src12: "/images/logo-4.jpg",
    src13: "/images/logo-5.jpg",
    src14: "/images/logo-6.jpg",
    src15: "/images/design-2.jpg",
    src16: "/images/design-3.jpg",
    src17: "/images/design-4.jpg",
    src18: "/images/magazine-2.jpg",
    src19: "/images/magazine-3.jpg",
    src20: "/images/magazine-4.jpg",
    src21: "/images/website-2.jpg",
    src22: "/images/website-3.jpg",
    src23: "/images/website-4.jpg",
    src24: "/images/website-5.jpg",
  },
  srcifram: {
    srcifram1: "https://www.youtube.com/embed/T-qxgdyAANo?autoplay=1",
    srciframnull: "",
  },
  linkvisit: {
    linkvisit1: "/images/magazine/MERQAT_1.pdf",
    linkvisit2: "https://spotlightenglish.com/",
    linkvisit3: "https://www.behance.net/bekhiraelhoss",
    linkvisit4: "https://github.com/hosseinbekhira",
    linkvisit5: "https://www.behance.net/bekhiraelhoss",
    linkvisit6: "https://github.com/hosseinbekhira",
    linkvisit7: "https://github.com/hosseinbekhira",
    linkvisit8: "https://github.com/hosseinbekhira",
    linkvisit9: "https://github.com/hosseinbekhira",
    linkvisit10: "https://www.behance.net/bekhiraelhoss",
    linkvisit11: "https://www.behance.net/bekhiraelhoss",
    linkvisit12: "https://www.behance.net/bekhiraelhoss",
    linkvisit13: "https://www.behance.net/bekhiraelhoss",
    linkvisit14: "https://www.behance.net/bekhiraelhoss",
    linkvisit15: "https://www.behance.net/bekhiraelhoss",
    linkvisit16: "https://www.behance.net/bekhiraelhoss",
    linkvisit17: "https://www.behance.net/bekhiraelhoss",
    linkvisit18: "images/magazine/MERQAT_2.pdf",
    linkvisit19: "images/magazine/MERQAT_3.pdf",
    linkvisit20: "images/magazine/mostamagazine.pdf",
    linkvisit21: "https://spotlightenglish.com/",
    linkvisit22: "https://spotlightenglish.com/",
    linkvisit23: "https://spotlightenglish.com/",
    linkvisit24: "https://spotlightenglish.com/",
  },
  icon: {
    website: "fas fa-tools",
    drawing: "fab fa-css3-alt",
    magazine: "fas fa-book",
    design: "fas fa-pen-nib",
    logo: "fab fa-slack",
  },
  title: {
    titleweb: "Website",
    titdra: "Css Drawing",
    titmaga: "Magazine",
    titdesign: "Design",
    titlogo: "Logo",
  },
};

const {
  src: {
    src1,
    src2,
    src3,
    src4,
    src5,
    src6,
    src7,
    src8,
    src9,
    src10,
    src11,
    src12,
    src13,
    src14,
    src15,
    src16,
    src17,
    src18,
    src19,
    src20,
    src21,
    src22,
    src23,
    src24,
  },
  srcifram: { srcifram1, srciframnull },
  linkvisit: {
    linkvisit1,
    linkvisit2,
    linkvisit3,
    linkvisit4,
    linkvisit5,
    linkvisit6,
    linkvisit7,
    linkvisit8,
    linkvisit9,
    linkvisit10,
    linkvisit11,
    linkvisit12,
    linkvisit13,
    linkvisit14,
    linkvisit15,
    linkvisit16,
    linkvisit17,
    linkvisit18,
    linkvisit19,
    linkvisit20,
    linkvisit21,
    linkvisit22,
    linkvisit23,
    linkvisit24,
  },
  icon: { website, drawing, magazine, design, logo },
  title: { titleweb, titdra, titmaga, titdesign, titlogo },
} = myProjectItem;

function Portfolio() {
  const listChoice = useRef();
  const projectChoice = useRef();

  const handleClickto = () => {
    const arrayElement = Array.from(listChoice.current.childNodes);
    const arrayProject = Array.from(projectChoice.current.childNodes);
    let newArrayProject = [];

    arrayElement.forEach((item) => {
      item.addEventListener("click", (e) => {
        for (let i = 0; i < arrayElement.length; i++) {
          arrayElement[i].classList.remove("active");
        }
        e.target.classList.add("active");
        const nameDataset = e.target.dataset.type;

        arrayProject.forEach((project, index) => {
          newArrayProject.push(project.dataset.kind);

          if (arrayProject[index].className.includes("hide")) {
            arrayProject[index].classList.remove("hide");
          }

          if (newArrayProject[index] !== nameDataset) {
            arrayProject[index].classList.add("hide");
          }

          if (nameDataset === "all") {
            arrayProject[index].classList.remove("hide");
          }
        });
      });
    });
  };

  useEffect(() => {
    handleClickto();
  }, []);

  return (
    <>
      <Navbar />
      <div className="portfolio-container">
        <div className="header-portofolio">
          <ul className="list-category" ref={listChoice}>
            <li className="active" data-type="all">
              View all
            </li>
            <li data-type="website">Website</li>
            <li data-type="cssdrawning">Css Drawing</li>
            <li data-type="magazine">Magazine</li>
            <li data-type="design">Design</li>
            <li data-type="logo">Logo</li>
          </ul>
        </div>
        <div className="project-container" ref={projectChoice}>
          <ProjectItem
            id={1}
            kinddata={"magazine"}
            src={src1}
            icon={magazine}
            category={titmaga}
            name={"Merqat Magazine"}
            srcifram={srciframnull}
            linkvisit={linkvisit1}
            showVideo={false}
          />
          <ProjectItem
            id={2}
            kinddata={"website"}
            src={src2}
            icon={website}
            category={titleweb}
            name={"My Website CV"}
            srcifram={srcifram1}
            linkvisit={linkvisit2}
            showVideo={true}
          />
          <ProjectItem
            id={3}
            kinddata={"design"}
            src={src3}
            icon={design}
            category={titdesign}
            name={"Cover Design"}
            srcifram={srciframnull}
            linkvisit={linkvisit3}
            showVideo={false}
          />
          <ProjectItem
            id={4}
            kinddata={"cssdrawning"}
            src={src4}
            icon={drawing}
            category={titdra}
            name={"Bear Css"}
            srcifram={srcifram1}
            linkvisit={linkvisit4}
            showVideo={true}
          />
          <ProjectItem
            id={5}
            kinddata={"logo"}
            src={src5}
            icon={logo}
            category={titlogo}
            name={"Ghazawat Logo"}
            srcifram={srciframnull}
            linkvisit={linkvisit5}
            showVideo={false}
          />
          <ProjectItem
            id={6}
            kinddata={"cssdrawning"}
            src={src6}
            icon={drawing}
            category={titdra}
            name={"Bird Css"}
            srcifram={srcifram1}
            linkvisit={linkvisit6}
            showVideo={true}
          />
          <ProjectItem
            id={7}
            kinddata={"cssdrawning"}
            src={src7}
            icon={drawing}
            category={titdra}
            name={"Cat Css"}
            srcifram={srcifram1}
            linkvisit={linkvisit7}
            showVideo={true}
          />
          <ProjectItem
            id={8}
            kinddata={"cssdrawning"}
            src={src8}
            icon={drawing}
            category={titdra}
            name={"Koala Css"}
            srcifram={srcifram1}
            linkvisit={linkvisit8}
            showVideo={true}
          />
          <ProjectItem
            id={9}
            kinddata={"cssdrawning"}
            src={src9}
            icon={drawing}
            category={titdra}
            name={"Monkey Css"}
            srcifram={srcifram1}
            linkvisit={linkvisit9}
            showVideo={true}
          />
          <ProjectItem
            id={10}
            kinddata={"logo"}
            src={src10}
            icon={logo}
            category={titlogo}
            name={"Journal Logo"}
            srcifram={srciframnull}
            linkvisit={linkvisit10}
            showVideo={false}
          />
          <ProjectItem
            id={11}
            kinddata={"logo"}
            src={src11}
            icon={logo}
            category={titlogo}
            name={"Content Room Logo"}
            srcifram={srciframnull}
            linkvisit={linkvisit11}
            showVideo={false}
          />
          <ProjectItem
            id={12}
            kinddata={"logo"}
            src={src12}
            icon={logo}
            category={titlogo}
            name={"Calligraphy Logo"}
            srcifram={srciframnull}
            linkvisit={linkvisit12}
            showVideo={false}
          />
          <ProjectItem
            id={13}
            kinddata={"logo"}
            src={src13}
            icon={logo}
            category={titlogo}
            name={"Almumayizun Logo"}
            srcifram={srciframnull}
            linkvisit={linkvisit13}
            showVideo={false}
          />
          <ProjectItem
            id={14}
            kinddata={"logo"}
            src={src14}
            icon={logo}
            category={titlogo}
            name={"Institute Logo"}
            srcifram={srciframnull}
            linkvisit={linkvisit14}
            showVideo={false}
          />
          <ProjectItem
            id={15}
            kinddata={"design"}
            src={src15}
            icon={design}
            category={titdesign}
            name={"Cover Design"}
            srcifram={srciframnull}
            linkvisit={linkvisit15}
            showVideo={false}
          />
          <ProjectItem
            id={16}
            kinddata={"design"}
            src={src16}
            icon={design}
            category={titdesign}
            name={"Book Design"}
            srcifram={srciframnull}
            linkvisit={linkvisit16}
            showVideo={false}
          />
          <ProjectItem
            id={17}
            kinddata={"design"}
            src={src17}
            icon={design}
            category={titdesign}
            name={"Cover Design"}
            srcifram={srciframnull}
            linkvisit={linkvisit17}
            showVideo={false}
          />
          <ProjectItem
            id={18}
            kinddata={"magazine"}
            src={src18}
            icon={magazine}
            category={titmaga}
            name={"Merqat Magazine"}
            srcifram={srciframnull}
            linkvisit={linkvisit18}
            showVideo={false}
          />
          <ProjectItem
            id={19}
            kinddata={"magazine"}
            src={src19}
            icon={magazine}
            category={titmaga}
            name={"Merqat Magazine"}
            srcifram={srciframnull}
            linkvisit={linkvisit19}
            showVideo={false}
          />
          <ProjectItem
            id={20}
            kinddata={"magazine"}
            src={src20}
            icon={magazine}
            category={titmaga}
            name={"University Magazine"}
            srcifram={srciframnull}
            linkvisit={linkvisit20}
            showVideo={false}
          />
          <ProjectItem
            id={21}
            kinddata={"website"}
            src={src21}
            icon={website}
            category={titleweb}
            name={"Website N02"}
            srcifram={srcifram1}
            linkvisit={linkvisit21}
            showVideo={true}
          />
          <ProjectItem
            id={22}
            kinddata={"website"}
            src={src22}
            icon={website}
            category={titleweb}
            name={"Website N03"}
            srcifram={srcifram1}
            linkvisit={linkvisit22}
            showVideo={true}
          />
          <ProjectItem
            id={23}
            kinddata={"website"}
            src={src23}
            icon={website}
            category={titleweb}
            name={"Website N04"}
            srcifram={srcifram1}
            linkvisit={linkvisit23}
            showVideo={true}
          />
          <ProjectItem
            id={24}
            kinddata={"website"}
            src={src24}
            icon={website}
            category={titleweb}
            name={"Website N05"}
            srcifram={srcifram1}
            linkvisit={linkvisit24}
            showVideo={true}
          />
        </div>
      </div>
      <TopScroll />
    </>
  );
}

export default Portfolio;
