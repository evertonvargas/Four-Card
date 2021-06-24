import "../styles/home.scss";
import supervisorImg from "../assets/images/icon-supervisor.svg";
import teamImg from "../assets/images/icon-team.svg";
import karmaImg from "../assets/images/icon-karma.svg"
import calculatorImg from "../assets/images/icon-calculator.svg"
import { Card } from "../components/Card";

export function Home() {
  return (
    <div className="main-content">
      <header>
        <h1>Reliable, efficient delivery</h1>
        <h1 className="tecnology">Powered by Technology</h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <main>
        <Card title={"card1"}>
          <h1>Supervisor</h1>
          <p>Monitors activity to identify project roadblocks</p>
          <img src={supervisorImg} alt="Supervisor" />
        </Card>
        <div className="middle">
        <Card title={"card2"}>
            <h1>Team Builder</h1>
            <p>Scans our talent network to create the optimal team for your project</p>
            <img src={teamImg} alt="Team" />
          </Card>
          <Card title={"card3"}>
            <h1>Karma</h1>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src={karmaImg} alt="Karma" />
          </Card>
        </div>
        <Card title={"card4"}>
          <h1>Calculator</h1>
          <p>Uses data from past projects to provide better delivery estimates</p>
          <img src={calculatorImg} alt="Calculator" />
        </Card>
      </main>
    </div>
  );
}
