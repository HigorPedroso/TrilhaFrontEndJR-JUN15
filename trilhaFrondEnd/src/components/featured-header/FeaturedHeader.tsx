import "./FeaturedHeader.css";

import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const FeaturedHeader = () => {
  const icons = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/higor-pedroso-arruda",
    },
    { icon: <FaGithub />, url: "https://github.com/higorPedroso" },
  ];

  return (
    <section className="featured">
      <div className="featuredHeader">
        <h1 className="featuredHeader__title">{"{ Full Stack Developer }"}.</h1>

        <h4 className="featuredHeader__description">
          Sou Higor Pedroso, tenho 26 anos, moro em Sorocaba - SP e sou formado
          em sistemas para Internet pela ETEC São Roque e Full Stack pela Mate
          Academy, apaixonado por tecnologia.
        </h4>

        <div className="featuredHeader__infos">
          <p>
            Sou detalhista, curioso, autodidata e orientado para resultados,
            sempre em busca de soluções inovadoras e eficientes para os projetos
            em que me envolvo.
          </p>

          <p>
            Meu objetivo é crescer como desenvolvedor full stack e fazer uma
            contribuição significativa para o sucesso das empresas com as quais
            colaboro.
          </p>
        </div>

        <div className="featuredIcons">
          {icons.map((icon) => (
            <IconContext.Provider value={{ className: "icons", size: "30px" }}>
              <div>
                <a href={icon.url} target="_blank">
                  {icon.icon}
                </a>
              </div>
            </IconContext.Provider>
          ))}
        </div>
      </div>

      <div className="featuredBanner">
        <img
          src="./../../../img/perfil.png"
          alt="Avatar"
          className="featuredBanner__img"
        />
      </div>
    </section>
  );
};

export default FeaturedHeader;
