import "./Motivation.css";

const Motivation = () => {
  return (
    <section className="motivation" id="motivation">
      <h2 className="title">Motivação</h2>
      <div className="motivation__description">
        <p className="motivation__description-text">
          Cada desafio é uma oportunidade de crescimento. Enfrento-os com
          coragem e determinação. Cada passo, por menor que seja, é um avanço em
          direção aos meus objetivos. Mantenho o foco e acredito em mim mesmo; o
          sucesso está ao meu alcance. E pretendo conquistar muitas coisas como
          desenvolvedor Full Stack.
        </p>

        <img
          src="./../../../img/motivation.png"
          alt="Motivação"
          className="motivation__description-img"
        />
      </div>
    </section>
  );
};

export default Motivation;
