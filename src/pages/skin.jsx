import { motion } from "framer-motion";

export default function SkinPage() {
  return (
    <>
      <motion.div
        className="w-full h-screen"
        initial={{ scale: 1, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 1, rotate: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <img
          src="/back-img-pure.jpg"
          className="w-full h-screen fixed bottom-0 left-0 z-[-1]"
        />
        This is the Skin page.
      </motion.div>
    </>
  );
}
