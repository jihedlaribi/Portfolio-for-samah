import "./about.css";
import aboutme from "../../img/about me.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={aboutme}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">À propos de moi</h1>
        <p className="a-award-title">
        Fondatrice de club créativité et développement personnel.
        </p>
        <p className="a-award-title">
        Membre de comité  fondatrice de l association Tunisienne de qualité de l éducation ATUQUED.
        </p>
        <div className="a-award-title">
      
          <div className="a-award-title">
            <h4 className="a-award-title">Membre de l'association nefzawa d'El enseignement supérieur. </h4>
            <p className="a-award-award-title">
            Recherche scientifique
Avec L encadrement des étudiants dans les projets de fin d'étude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;