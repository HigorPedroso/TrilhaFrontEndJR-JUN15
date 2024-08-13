import "./Hobbies.css";

import { IconContext } from "react-icons";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";
import { RiNetflixFill } from "react-icons/ri";

const Hobbies = () => {
  const icons = [
    [<MdOutlineVideogameAsset />, "Videogame"],
    [<IoIosFitness />, "Academia"],
    [<MdTravelExplore />, "Viagens"],
    [<RiNetflixFill />, "Assistir"],
  ];

  return (
    <section className="hobbies" id="hobbies">
      <div className="container">
        <h2 className="title title--primary">Hobbies</h2>

        <div className="hobbies__content">
          <div className="hobbies__description">
            <p className="hobbies__description-text">
              Sou uma pessoa extremamente curiosa, apaixonado por explorar
              novidades e vivenciar novas experiências.
            </p>

            <p className="hobbies__description-text">
              Adoro frequentar a academia, o que não só me faz sentir bem, mas
              também contribui para a minha saúde.
            </p>

            <p className="hobbies__description-text">
              Viajar é uma das minhas grandes paixões; aprecio tanto imergir na
              cultura local quanto experimentar a gastronomia, o que estimula
              minha criatividade e curiosidade.
            </p>

            <p className="hobbies__description-text">
              Além disso, quando tenho a oportunidade, gosto de jogar videogame
              e acompanhar séries em serviços de streaming.
            </p>
          </div>

          <div className="hobbies__hobbie">
            {icons.map((icon) => (
              <div className="hobbies__hobbie-block hobbie">
                <IconContext.Provider
                  value={{ className: "icons-reverse", size: "50px" }}
                >
                  <div>{icon[0]}</div>
                </IconContext.Provider>

                <p className="hobbie__description"> {icon[1]} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
