import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}
    >
      <h1>Bienvenue dans mon Portfolio</h1>
    </motion.div>
  );
}