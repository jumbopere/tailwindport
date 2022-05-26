import { useEffect, useState } from "react";
import { Hero,Services, Works, About, Footer } from "./component";

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {theme === "dark" ? "🌙" : "🌞"}
      </button>

      <div className="bg-white dark:bg-slate-900 min-h-screen font-inter ">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Hero />
          <Services />
					<Works />
					<About />
					<Footer />
        </div>
      </div>
    </>
  );
};

export default App;
