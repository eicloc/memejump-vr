//import game
import JumpGameWorld from "./index";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GamePage() {
  const [score, setScore] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [game, setGame] = useState(null);
  const [hisHigh, setHisHigh] = useState(
    localStorage.getItem("highScore") || 0
  );

  const addScore = function () {
    setScore(score + 1);
  };
  const setGameOver = function () {
    setIsOver(!isOver);
  };
  function restartGame() {
    console.log("this.game", game);
    //获取当前得分
    let curScore = score;
    //获取历史最高分
    let hisScore = localStorage.getItem("highScore");
    if (curScore > hisScore || !hisScore) {
      setHisHigh(curScore);
    }
    game.destroy();
    setScore(0);
    setIsOver(!isOver);
  }

  useEffect(() => {
    const addPoints = addScore;
    const setOver = setGameOver;
    // const game = new JumpGameWorld({
    //   container: document.getElementById("jump-world"),
    //   canvas: document.getElementById("jump-world-canvas"),
    //   axesHelper: false,
    //   addScore: addPoints,
    //   setGameOver: setOver,
    // });
    // console.log("game实例：", game.destroy);
    // setGame(game);

    console.log(document.getElementById("jump-world"));

    return () => {
      game.destroy();
    };
  }, []);
  return (
    <>
      <motion.div
        className="w-full h-screen"
        initial={{ scale: 1, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 1, rotate: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div id="jump-world">
          {isOver && <span className="score-text">Score: {score}</span>}

          <canvas id="jump-world-canvas"></canvas>

          {isOver && (
            <div className="gameover-curtain">
              <span className="over-score-text">Game Over</span>
              <span className="over-score-text" style={{ fontSize: "6rem" }}>
                {score}
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                  paddingLeft: "5rem",
                  paddingRight: "5rem",
                }}
              >
                <Link className="game-button" to="/">
                  <img width="17px" height="17px" src="/house.png" />
                </Link>
                <button className="game-button" onClick={restartGame}>
                  Restart
                </button>
              </div>
              <span className="over-score-text" style={{ fontSize: "1.5rem" }}>
                History High: {hisHigh}
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
