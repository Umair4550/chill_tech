// import { useContext, useState } from "react";
// import { ThemeContext } from "../context/ThemeContext";

// const ThemeToggle = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [showTooltip, setShowTooltip] = useState(false);

//   return (
//     <div className="theme-toggle-wrapper">
//       <button 
//         className="theme-toggle-btn" 
//         onClick={toggleTheme}
//         onMouseEnter={() => setShowTooltip(true)}
//         onMouseLeave={() => setShowTooltip(false)}
//         onFocus={() => setShowTooltip(true)}
//         onBlur={() => setShowTooltip(false)}
//         aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
//         data-theme={theme}   /* Used for styling knob position */
//       >
//         {/* Optional: icons inside toggle knob */}
//         {/* Uncomment if you want icons */}
//         {/* {theme === "light" ? "🌞" : "🌜"} */}
//       </button>
      
//       {showTooltip && (
//         <div className="theme-tooltip">
//           {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ThemeToggle;
