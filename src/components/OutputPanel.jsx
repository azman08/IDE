import { motion } from "framer-motion";

const OutputPanel = () => {
  return (
    <motion.div
      className="w-[50%]"
      style={{ minHeight: "calc(100vh - 70px)" }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <iframe
        id="iframe"
        className="w-full bg-white dark:bg-black"
        style={{ minHeight: "calc(100vh - 70px)" }}
      ></iframe>
    </motion.div>
  );
};

export default OutputPanel;
