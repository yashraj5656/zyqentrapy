"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "@/components/AuthContext"; // 🔹 use auth

export default function Dashboard() {
  const { user } = useAuth(); // 🔹 get logged-in user
  const [completed, setCompleted] = useState({
    level1: false,
    level2: false,
    level3: false,
    level4: false,
    level5: false,
    level6: false,
    level7: false,
    level8: false,
    level9: false,
  });
  const [subscribed, setSubscribed] = useState(false);
  useEffect(() => {
    const status = {};
    for (let i = 1; i <= 9; i++) {
      status[`level${i}`] = localStorage.getItem(`level${i}Completed`) === "true";
    }
    setCompleted(status);
        // Check subscription
        setSubscribed(localStorage.getItem("subscribed") === "true");
  }, []);
  const [quizScore, setQuizScore] = useState(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  useEffect(() => {
    if (!user) return; // 🔹 don’t load progress if not logged in

    const status = {};
    for (let i = 1; i <= 9; i++) {
      status[`level${i}`] = localStorage.getItem(`level${i}Completed`) === "true";
    }
    setCompleted(status);

    const storedQuizScore = localStorage.getItem("quizScore");
    if (storedQuizScore) {
      setQuizScore(JSON.parse(storedQuizScore));
    }
  }, [user]);

  const resetProgress = () => {
    for (let i = 1; i <= 9; i++) {
      localStorage.removeItem(`level${i}Completed`);
    }
    localStorage.removeItem("quizScore");
    setCompleted({
      level1: false,
      level2: false,
      level3: false,
      level4: false,
      level5: false,
      level6: false,
      level7: false,
      level8: false,
      level9: false,
    });
    setQuizScore(null);
    alert("Progress reset! Start Level 1 again to unlock subsequent levels.");
  };

  const toggleInfo = () => setIsInfoOpen(!isInfoOpen);

  const levels = [
    { title: "Level 1: Python Basics", desc: "Install Python, syntax, variables, data types, conditionals, loops, functions, and core data structures.", link: "/level1", unlocked: true },
    { title: "Level 2: Master Object-Oriented Programming (OOP)", desc: "Classes, objects, inheritance, encapsulation, polymorphism, and special methods.", link: "/level2", unlocked: completed.level1 && subscribed },
    { title: "Level 3: Work with File Systems and Exceptions", desc: "Read/write files, handle exceptions, work with JSON and CSV, automate tasks.", link: "/level3", unlocked: completed.level2 && subscribed },
    { title: "Level 4: Python Standard Libraries & Modules", desc: "os, sys, datetime, random, math, itertools, collections, functools, and virtual environments.", link: "/level4", unlocked: completed.level3 && subscribed },
    { title: "Level 5: Data Handling and Libraries", desc: "NumPy for computations, Pandas for data analysis, Matplotlib/Seaborn for visualization.", link: "/level5", unlocked: completed.level4 && subscribed },
    { title: "Level 6: Web Development with Python", desc: "Flask/Django, REST APIs, databases (SQLite, PostgreSQL), authentication.", link: "/level6", unlocked: completed.level5 && subscribed },
    { title: "Level 7: Automate Tasks and Web Scraping", desc: "Automate scripts, scrape sites with BeautifulSoup/Scrapy, use APIs, build CLI tools.", link: "/level7", unlocked: completed.level6 && subscribed },
    { title: "Level 8: Testing and Debugging", desc: "Unit testing with unittest/pytest, debugging with pdb, logging and monitoring.", link: "/level8", unlocked: completed.level7 && subscribed },
    { title: "Level 9: Advanced Topics", desc: "Generators, decorators, context managers, asyncio, type hints, static typing.", link: "/level9", unlocked: completed.level8 && subscribed },    
    { title: "🎓 Certificate of Completion", desc: "Unlock your certificate after finishing all 9 levels.", link: "/certificate", unlocked: completed.level9 && subscribed},
  ];

  const completedCount = Object.values(completed).filter((v) => v).length;
  const progressPercent = (completedCount / 8) * 100;
  const xp = completedCount * 100;

  // 🔹 If not logged in, show login prompt instead
  if (!user) {
    return (
      <div className="">
        <header className="header">
              <h1>Zyqentra</h1>
        </header>
       


       


        <div className="text-center">
          <p className="pp">Learning Python is like learning to speak to the web — the more you practice, the more it listens.</p>
          <p className="">
            <Link href="/signup" className=""><button data-text="Signup/Login">Signup/Login</button></Link>
            {/*{" "}or{" "} 
            <Link href="/signup" className="text-green-400 underline"><button>Sign up</button></Link><div><br></br> </div>*/}
            {" "}
          </p>
          <Link href="/lesson">
            <button className="btn" data-text="Explore Lessons (Guest Mode)">
              📖 Explore Lessons (Guest Mode)
            </button>
          </Link>
        </div>
      </div>
    );
  }
  let displayName = "Guest";
  if (user?.email) {
    displayName = user.email.split("@")[0].charAt(0).toUpperCase() + user.email.split("@")[0].slice(1);
  }
  

  // 🔹 Logged in → show full dashboard
  return (
  <div className="">
      <header className="header">
              <h1>Zyqentra</h1>
          </header>







      


      <div className="">
        {/* Banner */}
        {/*<div
          className=""
          style={{
            backgroundImage: "url('/ZQENTRA.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="name">
           <span>{displayName}</span>
          </h1>
        </div>*/}

     {/* 🔹 Sticky Cyber Get Premium Button */}
     <div className="rambtn">
  <div className="cyber-wrapper">
    <Link href="/subscribe">
      <button className="cyber-btn"> Get Premium</button>
    </Link>
    <div className="cyber-tooltip">
      <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>
      <strong>PREMIUM MODE</strong><br />
      Unlock all levels, quizzes, and certificate.<br />
      Become a <strong>Python Pro ⚡</strong>
    </div>
  </div>
  <div className="cyber-wrapper">
    <Link href="/quiz">
      <button className="cyber-btn">Quizzes</button>
    </Link>
    <div className="cyber-tooltip">
      <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>
      <strong>Quizzes</strong><br />
      Test your knowledge of Python fundamentals with this interactive quiz! <br />
    </div>
  </div>
</div>






        {/* Progress */}
        <motion.div 
          className="flip-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        ><div className="flip-card-inner">
          <div className="flip-card-front">
         <motion.h2 
          className="gradient-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           Python 
        </motion.h2>
          <div className="">
            <motion.div
              className=""
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1 }}
            />
          </div></div><div className="flip-card-back">
          <p className="title">
            {completedCount} / 9 Levels Completed • {xp} XP Earned
          </p>
          {quizScore !== null && (
            <p className="">
              Quiz Score: {quizScore.correct}/{quizScore.total}
            </p>
          )}</div></div>
        </motion.div>

{/* Info Section */}
<motion.div 
  className=""
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  <button
    onClick={toggleInfo}
    className="submit-btn"
    data-text="Python"
    style={{width:"40%"}}
  >
    <h3 className="">
      {isInfoOpen ? "▼ Hide Info" : "▶ Learn About 'Python'"}
    </h3>
  </button>
  {isInfoOpen && (
    <motion.div
      className="knk"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.4 }}
    >
      <h4 className="kh">The Language That Made Coding Simple</h4>
      <p className="kp">
        Long ago, programming was complicated and full of confusing symbols. 
        Developers spent more time fighting with syntax than solving real problems. 
        Then, a wise language named <strong>Python</strong> was born.
      </p>
      <p className="kp">
        Python wasn’t flashy or noisy—it was clear, calm, and elegant. 
        Its code read like English, making it easy for beginners to learn and powerful enough for experts to build anything. 
        From websites to robots, from data science to artificial intelligence, Python could do it all.
      </p>
      <p className="kp">
        One day, a curious learner named <strong>Alex</strong> discovered Python. 
        With just a single line of code—<code>print("Hello, Python!")</code>—Alex felt the magic. 
        Suddenly, programming didn’t feel impossible; it felt exciting, creative, and fun.
      </p>
      <p className="kp">
        As Alex explored more, Python revealed its secret: it wasn’t just a language, it was a <strong>community</strong>. 
        Millions of people around the world shared libraries, tutorials, and projects, helping each other grow.
      </p>
      <p className="kp">
        Python showed Alex that coding could be for everyone—simple, powerful, and full of endless possibilities. 
        And so, with Python as their guide, Alex didn’t just learn to code—they learned to <strong>create</strong>.
      </p>
    </motion.div>
  )}
</motion.div>


        

        {/* Levels */}
        <div className="t">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className={`p-6 rounded-xl shadow-lg transition relative group ${
                level.unlocked
                  ? "bg-gray-800/70 border border-green-500/40 hover:shadow-green-500/20"
                  : "bg-gray-700/50 border border-gray-600 opacity-70"
              }`}
            >
              <h3 className="tt">
                {level.title}
                {level.unlocked ? (
                  <span className="">✅</span>
                ) : (
                  <span className="">🔒</span>
                )}
              </h3>
              <p className="td">{level.desc}</p>
              {level.unlocked ? (
                <Link href={level.link}>
                  <button className="submitt-btn" data-text="Get In">
                    {index === levels.length - 1 ? "🎓 Claim Certificate" : "▶ Start Lesson"}
                  </button>
                </Link>
              ) : (
                <p className="tp">Complete previous level to unlock</p>
              )}
            </motion.div>
          ))}

          {/* Quiz Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=""
          >
            <h3 className="">🎮 Python Quiz</h3>
            <p className="">
              Test your knowledge of Python fundamentals with an interactive quiz!
            </p>
            <Link href="/quiz">
              <button className="submit-btn" data-text="Take the Quiz">
                Take the Quiz
              </button>
            </Link>
            {quizScore !== null && (
              <p className="">
                Last Score: {quizScore.correct}/{quizScore.total}
              </p>
            )}
          </motion.div>
        </div>

        {/* Actions */}
        <div className="">
          <Link href="/lesson">
            <button className="submit-btn" data-text="View All Lessons">
              📖 View All Lessons
            </button>
          </Link>
          <button
            onClick={resetProgress}
            className="submit-btn"
            data-text="Reset Progress"
          >
            🔄 Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
}
