import { useNavigate } from "react-router-dom";
import RockImage from "../store/rock.jpeg";
import PaperImage from "../store/paper.jpeg";
import ScissorImage from "../store/scissor.jpeg";

export default function Winner(props) {
  const navigate = useNavigate();
  const winner = props.whoWins();

  return (
    <div>
    <div onClick={() => navigate("/")} className="sm:flex sm:justify-evenly sm:absolute sm:inset-y-1/3 sm:inset-0 grid grid-cols-1">
      <div >
        <img src={props.userChoice === "Rock" ? RockImage : props.userChoice === "Paper" ? PaperImage : ScissorImage} alt="User choice" />
        <span className="font-bold">{props.userChoice}</span>
      </div>
      <div>
        <img src={props.computerChoice === "Rock" ? RockImage : props.computerChoice === "Paper" ? PaperImage : ScissorImage} alt="Computer choice" />
        <span className="font-bold">{props.computerChoice}</span>
      </div>
    </div>
    <div className="font-bold absolute sm:left-1/2 sm:bottom-1/3 top-4/5 left-1/3 text-4xl">{winner}</div>
    </div>
  );
}
