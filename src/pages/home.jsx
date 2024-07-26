import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navi = useNavigate();
  useEffect(() => {
    let hasToken = localStorage.getItem("token");
    if (!hasToken) {
      navi("/loading");
    }
  }, []);
  return (
    <motion.div
      className="w-full h-screen"
      initial={{ scale: 1, rotate: 0, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      exit={{ scale: 1, rotate: 0, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <img
        src="/back-img.jpg"
        className="w-full h-screen fixed bottom-0 left-0 z-[-1]"
      />
      This is the Home page.
    </motion.div>
  );
}
