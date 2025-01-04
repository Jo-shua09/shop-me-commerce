// import React from "react";
// import { assets } from "../assets/assets";

// const DarkMode = () => {
//   const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

//   const element = document.documentElement; //html element

//   React.useEffect(() => {
//     if (theme === "dark") {
//       element.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       element.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [theme]);

//   return (
//     <div className="relative">
//       <img
//         src={assets.lightMode}
//         alt=""
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         className={` absolute right-0 z-10  w-[5rem] cursor-pointer drop-shadow-[1px_1px_1px rgba(0,0,0,0.1)] transition-all duration-300 ${
//           theme === "dark" ? "opacity-0" : "opacity-100"
//         }`}
//       />
//       <img
//         src={assets.darkMode}
//         alt=""
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         className="w-[5rem] cursor-pointer drop-shadow-[1px_1px_1px rgba(0,0,0,0.1)] transition-all duration-300 "
//       />
//     </div>
//   );
// };

// export default DarkMode;
import React from "react";
import { assets } from "../assets/assets";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative">
      <img
        src={assets.lightMode}
        alt="Switch to light mode"
        onClick={toggleTheme}
        className={`absolute right-0 z-10 sm:w-[5rem] w-[6.5rem] cursor-pointer drop-shadow-[1px_1px_1px rgba(0,0,0,0.1)] transition-all duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={assets.darkMode}
        alt="Switch to dark mode"
        onClick={toggleTheme}
        className={`sm:w-[5rem] w-[6.5rem] cursor-pointer drop-shadow-[1px_1px_1px rgba(0,0,0,0.1)] transition-all duration-300 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
