import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Card from "./components/Card";
import Winner from "./components/Winner";
import RockImage from "./store/rock.jpeg";
import PaperImage from "./store/paper.jpeg";
import ScissorImage from "./store/scissor.jpeg";


function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const whoWins = () => {
    if (userChoice === computerChoice) return "Draw";
    else if (
      (userChoice === "Rock" && computerChoice === "Scissor") ||
      (userChoice === "Paper" && computerChoice === "Rock") ||
      (userChoice === "Scissor" && computerChoice === "Paper")
    )
      return "You Win";
    else return "Computer Wins";
  };

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardSelection  setUserChoice={setUserChoice} setComputerChoice={setComputerChoice}/>} />
        <Route path="/winner" element={<Winner whoWins={whoWins} userChoice={userChoice} computerChoice={computerChoice}/>} />
      </Routes>
    </BrowserRouter>
  );
}

function CardSelection({setUserChoice,setComputerChoice}) {
  const navigate = useNavigate();
  const elements = ["Rock", "Paper", "Scissor"];
  
  
  const handleClick = (title) => {
    setUserChoice(title);
    setComputerChoice(elements[Math.floor(Math.random() * elements.length)]);
    navigate("/winner");
  };

  return (
    <div className="flex justify-evenly absolute inset-y-1/3 inset-0">
      <Card imageSrc={RockImage} title="Rock" OnClick={() => handleClick("Rock")} />
      <Card imageSrc={PaperImage} title="Paper" OnClick={() => handleClick("Paper")} />
      <Card imageSrc={ScissorImage} title="Scissor" OnClick={() => handleClick("Scissor")} />
      
    </div>
  );
}

export default App;
