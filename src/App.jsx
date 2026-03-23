import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {

  // load theme
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark"; // ✅ correct check
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // ✅ fixed
    }
  }, [darkMode]); // ✅ dependency add

  return (
    <div >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
    </div>
  )
}

export default App