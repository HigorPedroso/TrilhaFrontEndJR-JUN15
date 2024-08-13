import "./Skills.css";
import { IconContext } from "react-icons";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiSequelize } from "react-icons/si";

const Skills = () => {
  const icons = [
    <TiHtml5 />,
    <FaCss3Alt />,
    <TbBrandJavascript />,
    <FaReact />,
    <SiTypescript />,
    <FaSass />,
    <FaNode />,
    <SiSequelize />,
  ];

  return (
    <section className="skills" id="skills">
      <h1 className="title">Habilidades</h1>
      <div className="skills__skill">
        {icons.map((icon) => (
          <div className="skills__skill-block skill">
            <IconContext.Provider value={{ className: "icons" }}>
              <div>{icon}</div>
            </IconContext.Provider>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
