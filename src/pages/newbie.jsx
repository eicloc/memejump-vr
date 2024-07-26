import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { allIntros } from "../constants/intros";

export default function NewBie() {
  const [idx, setIdx] = useState(0);
  const flag = useRef(true);
  const navi = useNavigate();
  useEffect(() => {
    console.log("render");
  });

  //---------------------------------------------------------------
  function handleNextIntro() {
    if (flag.current) {
      flag.current = false;
      if (idx < allIntros.length) {
        const nextIdx = idx + 1;
        setIdx(nextIdx);
      }
      console.log(idx);
      setTimeout(() => {
        flag.current = true;
      }, 500);
    }
  }
  function handlePrevIntro() {
    if (flag.current) {
      flag.current = false;
      if (idx > 0) {
        const prevIdx = idx - 1;
        setIdx(prevIdx);
      }
      console.log(idx);
      setTimeout(() => {
        flag.current = true;
      }, 500);
    }
  }
  return (
    <div className="w-full h-screen flex flex-col justify-evenly">
      <main>
        <img
          src="/back-img-pure.jpg"
          className="w-full h-screen fixed bottom-0 left-0 z-[-1]"
        />
        <AnimatePresence mode="wait">
          <motion.div
            className="w-full flex flex-col h-[37rem] justify-between items-center"
            key={idx}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full flex box-border flex-col items-center text-center justify-evenly font-Nishiki font-bold text-[1.6875rem]">
              <div className="w-[80%] flex flex-col items-center">
                <span className="bg-gradient-to-b from-[#FF7800] to-[#ffc600] text-transparent bg-clip-text">
                  {allIntros[idx].title}
                </span>
                <span className="text-[1rem] bg-gradient-to-b from-[#FF7800] to-[#ffc600] text-transparent bg-clip-text">
                  {allIntros[idx].desc}
                </span>
              </div>
            </div>

            <div className="w-[80%] flex flex-col justify-center">
              <img
                src={allIntros[idx].imgUrl}
                className="w-[18.75rem] h-[27rem]"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
      <nav className="w-full flex flex-col items-center gap-y-4">
        <ul className="w-[40%] flex justify-evenly">
          {allIntros.map((item, index) => (
            <li
              key={item.title}
              className={index === idx ? "text-orange-500" : "text-gray-100"}
            >
              o
            </li>
          ))}
        </ul>
        <div
          className={String.raw`flex w-full pr-8 pl-8 h-[3rem] ${
            idx === 0 ? "justify-end" : "justify-between"
          } `}
        >
          {idx !== 0 && (
            <img
              src="/next.svg"
              onClick={handlePrevIntro}
              className="rotate-180 w-[2.8rem] h-[2.8rem] "
            />
          )}
          {idx === allIntros.length - 1 && (
            <button
              onClick={() => {
                localStorage.setItem("token", 1);
                navi("/");
              }}
              className="w-[12.5rem] h-[3rem] bg-[#ffa517]"
            >
              Play
            </button>
          )}
          {idx < allIntros.length - 1 && (
            <img
              src="/next.svg"
              onClick={handleNextIntro}
              className="w-[2.8rem] h-[2.8rem]"
            />
          )}
        </div>
      </nav>
    </div>
  );
}
