import { useEffect, useState } from "react";
import "./App.css";
import Editor from "@monaco-editor/react";
import { IoSunny, IoMoon, IoSave } from "react-icons/io5";
import Logo from "./assets/logo.png";

const App = () => {
  const [tab, setTab] = useState("html");
  const [darkMode, setDarkMode] = useState(false);
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  const saveNavbarState = () => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    alert("Navbar preferences saved!");
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const run = () => {
    const html = htmlCode;
    const css = "<style>" + cssCode + "</style>";
    const js = "<script>" + jsCode + "</script>";
    const iframe = document.getElementById("iframe");

    if (iframe) {
      iframe.srcdoc = html + css + js;
    }
  };

  useEffect(() => {
    run();
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div
      className={`${
        darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`nav flex items-center h-[70px] justify-between px-[50px] ${
          darkMode ? "bg-zinc-800" : "bg-zinc-200"
        }`}
      >
        <div className="flex items-center gap-4">
          <img src={Logo} alt="logo" className="w-14 h-14 rounded-full " />
          <h2 className="text-2xl font-bold">Azman IDE</h2>
        </div>
        <div className="right flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: darkMode ? "#fff" : "#000",
              color: darkMode ? "#000" : "#fff",
            }}
          >
            {darkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
          </button>
          <button
            onClick={saveNavbarState}
            className="p-2 w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700"
          >
            <IoSave size={20} />
          </button>
        </div>
      </div>

      <div
        className="con flex items-center justify-between w-screen"
        style={{ minHeight: "calc(100vh - 70px)" }}
      >
        <div className="w-[50%] h-full">
          <div className="tabs pt-[10px] ml-[30px] flex items-center gap-[10px] w-full">
            <div
              onClick={() => {
                setTab("html");
              }}
              className={`tab p-[5px] cursor-pointer px-[20px] ${
                darkMode ? "bg-zinc-700 text-white" : "bg-zinc-300 text-black"
              }`}
            >
              <p className="font-semibold text-base">HTML</p>
            </div>
            <div
              onClick={() => {
                setTab("css");
              }}
              className={`tab p-[5px] cursor-pointer px-[20px] ${
                darkMode ? "bg-zinc-700 text-white" : "bg-zinc-300 text-black"
              }`}
            >
              <p className="font-semibold text-base">CSS</p>
            </div>
            <div
              onClick={() => {
                setTab("js");
              }}
              className={`tab p-[5px] cursor-pointer px-[20px] ${
                darkMode ? "bg-zinc-700 text-white" : "bg-zinc-300 text-black"
              }`}
            >
              <p className="font-semibold text-base">Javascript</p>
            </div>
          </div>
          {tab === "html" ? (
            <Editor
              height="90vh"
              className="pt-4"
              language="html"
              theme={darkMode ? "vs-dark" : "vs-light"}
              value={`<h1>Hello World</h1>`}
              onChange={(e) => {
                setHtmlCode(e || "");
              }}
            />
          ) : tab === "css" ? (
            <Editor
              height="90vh"
              className="pt-4"
              language="css"
              theme={darkMode ? "vs-dark" : "vs-light"}
              value={`body { background: #fff; color: #000; }`}
              onChange={(e) => {
                setCssCode(e || "");
              }}
            />
          ) : tab === "js" ? (
            <Editor
              height="90vh"
              className="pt-4"
              language="javascript"
              theme={darkMode ? "vs-dark" : "vs-light"}
              value={`console.log('Hello, World!');`}
              onChange={(e) => {
                setJsCode(e || "");
              }}
            />
          ) : (
            ""
          )}
        </div>
        <div
          className={`w-[50%] ${
            darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
          }`}
          style={{ minHeight: "calc(100vh - 70px)" }}
        >
          <iframe
            id="iframe"
            className={`w-full ${darkMode ? "bg-zinc-800" : "bg-white"}`}
            style={{ minHeight: "calc(100vh - 70px)" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
