import Editor from "@monaco-editor/react";

const EditorPanel = ({
  tab,
  setTab,
  htmlCode,
  cssCode,
  jsCode,
  setHtmlCode,
  setCssCode,
  setJsCode,
  isDarkMode,
}) => {
  return (
    <div className="w-[50%] h-full">
      <div className="tabs pt-[10px] ml-[30px] flex items-center gap-[10px] w-full">
        {["html", "css", "js"].map((language) => (
          <div
            key={language}
            onClick={() => setTab(language)}
            className={`tab p-[5px] bg-zinc-800 dark:bg-zinc-900 cursor-pointer px-[20px] text-white dark:text-gray-300 ${
              tab === language ? "font-bold underline" : ""
            }`}
          >
            {language.toUpperCase()}
          </div>
        ))}
      </div>
      <Editor
        height="90vh"
        className="pt-4"
        language={tab}
        theme={isDarkMode ? "vs-dark" : "light"}
        value={tab === "html" ? htmlCode : tab === "css" ? cssCode : jsCode}
        onChange={(value) =>
          tab === "html"
            ? setHtmlCode(value || "")
            : tab === "css"
            ? setCssCode(value || "")
            : setJsCode(value || "")
        }
      />
    </div>
  );
};

export default EditorPanel;
