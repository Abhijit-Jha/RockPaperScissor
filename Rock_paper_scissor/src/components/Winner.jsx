import { useNavigate } from "react-router-dom";
import RockImage from "../store/rock.jpeg";
import PaperImage from "../store/paper.jpeg";
import ScissorImage from "../store/scissor.jpeg";

export default function Winner(props) {
  const navigate = useNavigate();
  const winner = props.whoWins();

  return (
    <div>
    <div onClick={() => navigate("/")} className="flex justify-evenly absolute inset-y-1/3 inset-0">
      <div >
        <img src={props.userChoice === "Rock" ? RockImage : props.userChoice === "Paper" ? PaperImage : ScissorImage} alt="User choice" />
        <span className="font-bold">{props.userChoice}</span>
      </div>
      <div>
        <img src={props.computerChoice === "Rock" ? RockImage : props.computerChoice === "Paper" ? PaperImage : ScissorImage} alt="Computer choice" />
        <span className="font-bold">{props.computerChoice}</span>
      </div>
    </div>
    <div className="font-bold absolute top-1/5 bottom-1/2 left-1/2 right-1/2 text-4xl">{winner}</div>
    </div>
  );
}
