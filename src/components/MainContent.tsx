import { useState, useEffect } from "react";
import Navbar from "./NavBar";
import FloatingMathBackground from "./floatingmathbackground";


import CoordinatorsSection from "./CoordinatorSection";



const LandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const details = [
    { title: "5PM - 7PM", icon: "🕒" },
    { title: "45 MCQ", icon: "📄" },
    { title: "60 MARKS", icon: "🎯" },
  ];

  useEffect(() => {
    const targetDate = new Date("2026-02-19T11:10:09").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 min-h-screen text-white relative">
      <Navbar />
      <FloatingMathBackground />

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          PSG Tech Math Olympiad 2026
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          24th February 2026 (Tuesday)
        </h2>
        <p className="text-lg md:text-xl mb-4">Organised by</p>
        <p className="text-xl md:text-2xl font-bold">
          Department of Mathematics
        </p>
        <p className="text-lg md:text-xl font-medium">
          Department of Applied Mathematics and Computational Sciences
        </p>
        <p className="text-lg md:text-xl font-medium">
          PSG Tech Alumni Association
        </p>

        <div className="bg-white text-black font-semibold text-lg md:text-xl py-3 px-6 rounded-full mt-6 inline-block">
          Registrations Open Only For First Year Students of PSGCT (B.E / B.Tech / B.Sc / M.Sc (Integrated))
        </div>

        <div className="mt-8">
          <p className="text-2xl font-bold">Venue: PSGCT</p>
          <p className="text-lg">Examly Platform</p>
        </div>

        <div className="mt-8">
          <p className="text-2xl font-bold">Last Date for Registration</p>
          <p className="text-lg">20th February 2026</p>
        </div>
        
        <div className="mt-12 flex justify-center space-x-6 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-white text-blue-600 p-6 md:p-4 rounded-lg shadow-lg text-2xl md:text-4xl font-bold w-20 md:w-28 h-20 md:h-28 flex flex-col justify-center items-center"
            >
              <span>{value}</span>
              <span className="text-sm md:text-lg font-medium">
                {unit.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg flex flex-col items-center text-center p-8 transform transition duration-300 hover:scale-105 border-t-2 border-x-2 border-blue-500"
            >
              <div className="bg-blue-500 items-center text-white text-5xl rounded-xl p-5 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
      <CoordinatorsSection />
      <div id="Register Here" className="flex justify-center items-center h-48 bg-gradient-to-r from-blue-400 to-blue-600">
        <a
          href="https://forms.gle/BG4MQqoNucAxQ1Um8"
          className="bg-white text-blue-600 font-bold text-2xl md:text-xl px-10 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-800 hover:text-white flex items-center gap-2"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
