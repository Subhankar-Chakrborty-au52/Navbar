// import React from "react";
// import { FaSearch } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <>
//       <div className="flex flex-row justify-between py-2 bg-green-300">
//         <img
//           className="w-20 py-5 px-5 cursor-pointer"
//           src="src/assets/universe-high-resolution-logo.png"
//           alt="universelogo"
//         />
//         <ul className="flex flex-row gap-6 py-5">
//           <li className="cursor-pointer">Home</li>
//           <li className="cursor-pointer">Contact</li>
//           <li className="cursor-pointer">About</li>
//           <li className="cursor-pointer">Profile</li>
//         </ul>
//         <div className="flex items-center border rounded-lg bg-white">
//           <input
//             className="h-10 px-3 rounded-l-lg focus:outline-none cursor-pointer"
//             type="text"
//             placeholder="Search"
//           />
//           <div className="h-10 flex items-center justify-center px-3 cursor-pointer">
//             <FaSearch />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className={`flex flex-row justify-between py-2 ${
        theme === "light" ? "bg-green-300 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <img
        className="w-20 py-5 px-5 cursor-pointer"
        src="src/assets/universe-high-resolution-logo.png"
        alt="universelogo"
      />
      <ul className="flex flex-row gap-6 py-5">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Profile</li>
      </ul>
      <div className="flex items-center border rounded-lg bg-white">
        <input
          className="h-10 px-3 rounded-l-lg focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <div className="h-10 flex items-center justify-center px-3">
          <FaSearch />
        </div>
      </div>
      <button onClick={toggleTheme} className="py-2 px-4 rounded">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Navbar;
