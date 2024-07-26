import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const navi = useNavigate();
  useEffect(() => {
    const progress = document.getElementById("progress");
    const timer = setInterval(() => {
      if (progress.value < 100) {
        progress.value += 0.5;
        const perctn = document.getElementById("perctn");
        perctn.innerHTML = progress.value + "%";
      } else {
        // alert("100% done!");
        clearInterval(timer);
        navi("/newbie");
      }
    }, 10);
  }, []);
  return (
    <motion.div
      className="w-full h-screen"
      initial={{ scale: 1, rotate: 0, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      exit={{ scale: 1, rotate: 0, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full h-screen flex box-border flex-col justify-evenly font-Nishiki font-bold text-[2rem]">
        <img
          src="/back-img-pure.jpg"
          className="w-full h-screen fixed bottom-0 left-0 z-[-1]"
        />
        <div className="flex flex-col items-center">
          <span className="bg-gradient-to-b from-[#FF7800] to-[#ffc600] text-transparent bg-clip-text">
            Meme Jump Token
          </span>
          <span className="text-[1.68rem] bg-gradient-to-b from-[#FF7800] to-[#ffc600] text-transparent bg-clip-text">
            will be launched
          </span>
          <span className="text-[3.3rem] bg-gradient-to-b from-[#FF7800] to-[#ffc600] text-transparent bg-clip-text">
            on TON
            <span className="arrow">
              <span>{">"}</span>
              <span>{">"}</span>
              <span>{">"}</span>
            </span>
          </span>
          <span className="text-[1.68rem] bg-gradient-to-b from-[#FF7800] to-[#ffc600] text-transparent bg-clip-text">
            Stay tuned
          </span>
        </div>

        <div className="w-full flex flex-col items-center">
          <img src="/dear.svg" className="w-[12.875rem] h-[20.3125rem]" />
          <span id="perctn" className="text-white text-[1.25rem]"></span>
          {/* <div className="loader1">
          <div className="bar1"></div>
        </div> */}
          <progress value={0} max={100} id="progress"></progress>
          <span className="text-white text-[1.25rem]">LOADING...</span>
        </div>

        {/* bottom social media logos */}
        <div className="flex flex-col justify-evenly items-center">
          <ul className="flex w-full justify-evenly">
            <li>
              <img
                src="/official-logo.svg"
                className="w-[4.6875rem] h-[4.6875]"
              />
            </li>
            <li>
              <img
                src="/telegram-logo.svg"
                className="w-[4.6875rem] h-[4.6875]"
              />
            </li>
            <li>
              <img src="/x-logo.svg" className="w-[4.6875rem] h-[4.6875]" />
            </li>
          </ul>
          <span className="text-[1.25rem] text-white">
            More info in official channels
          </span>
        </div>
      </div>
    </motion.div>
  );
}
