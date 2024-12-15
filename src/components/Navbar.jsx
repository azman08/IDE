import React from "react";
import { motion } from "framer-motion";

const Navbar = ({
  toggleTheme,
  isDarkMode,
  downloadCode,
  htmlCode,
  cssCode,
  jsCode,
}) => {
  return (
    <div className="nav flex items-center bg-zinc-800 dark:bg-zinc-900 h-[70px] justify-between px-[50px]">
      <motion.div
        className="left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl text-white">Code Editor</h2>
      </motion.div>
      <motion.div
        className="right flex items-center gap-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={toggleTheme}
          className="bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-md"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button
          onClick={() => downloadCode(htmlCode, "html")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Download HTML
        </button>
        <button
          onClick={() => downloadCode(cssCode, "css")}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Download CSS
        </button>
        <button
          onClick={() => downloadCode(jsCode, "js")}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md"
        >
          Download JS
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;
