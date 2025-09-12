"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level4() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level3Completed, setLevel3Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel3Completed(localStorage.getItem("level3Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "os and sys Libraries",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">os and sys Libraries in Python</h4>
          <p>
            The <code>os</code> and <code>sys</code> modules provide system-level operations and interactions.
          </p>
          <p className="mt-2">
            <b>🔹 os Module</b><br />
            Interact with the operating system:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import os\n\nprint(os.getcwd())  # Current directory\nos.mkdir("new_folder")  # Create directory\nif os.path.exists("file.txt"):\n    print("File exists!")`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 sys Module</b><br />
            Access system-specific parameters and functions:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import sys\n\nprint(sys.version)  # Python version\nsys.exit(0)  # Exit program\nprint(sys.argv)  # Command-line arguments`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Common Uses</b><br />
            File system navigation, environment variables, and program control:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import os\n\nfor item in os.listdir("."):\n    print(item)  # List directory contents`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using os or sys (e.g., os.getcwd() or sys.version).',
      check: (code) => {
        const result = /(os|sys)\.\w+\s*\(.+\)/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use os or sys, e.g., os.getcwd() or sys.version.',
      success: '✅ Great! You used the os or sys module.'
    },
    {
      title: "datetime Library",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">datetime Library in Python</h4>
          <p>
            The <code>datetime</code> module handles dates and times.
          </p>
          <p className="mt-2">
            <b>🔹 Current Date and Time</b><br />
            Get the current date and time:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from datetime import datetime\n\nnow = datetime.now()\nprint(now)  # e.g., 2025-09-12 10:33:45.123456`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Formatting Dates</b><br />
            Use <code>strftime</code> to format dates:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from datetime import datetime\n\nnow = datetime.now()\nformatted = now.strftime("%Y-%m-%d %H:%M")\nprint(formatted)  # e.g., 2025-09-12 10:33`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Date Arithmetic</b><br />
            Perform operations like adding days:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from datetime import datetime, timedelta\n\nfuture = datetime.now() + timedelta(days=7)\nprint(future)  # Date 7 days from now`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using datetime (e.g., datetime.now() or timedelta(days=1)).',
      check: (code) => {
        const result = /datetime\.(now|strptime|strftime)\s*\(.+\)|timedelta\s*\(.+\)/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use datetime, e.g., datetime.now() or timedelta(days=1).',
      success: '✅ Great! You used the datetime module.'
    },
    {
      title: "random and math Libraries",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">random and math Libraries in Python</h4>
          <p>
            The <code>random</code> module generates random numbers, and <code>math</code> provides mathematical functions.
          </p>
          <p className="mt-2">
            <b>🔹 random Module</b><br />
            Generate random numbers or select items:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import random\n\nprint(random.randint(1, 10))  # Random int between 1 and 10\nitems = ['apple', 'banana', 'orange']\nprint(random.choice(items))  # Random item`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 math Module</b><br />
            Perform mathematical operations:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import math\n\nprint(math.sqrt(16))  # 4.0\nprint(math.pi)  # 3.14159...\nprint(math.factorial(5))  # 120`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Combined Example</b><br />
            Use both for a random angle calculation:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import random, math\n\nangle = random.uniform(0, 360)\nprint(math.cos(math.radians(angle)))`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using random or math (e.g., random.randint() or math.sqrt()).',
      check: (code) => {
        const result = /(random|math)\.\w+\s*\(.+\)/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use random or math, e.g., random.randint(1, 10) or math.sqrt(16).',
      success: '✅ Great! You used the random or math module.'
    },
    {
      title: "itertools, collections, and functools",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">itertools, collections, and functools in Python</h4>
          <p>
            These modules provide advanced tools for iteration, data structures, and functional programming.
          </p>
          <p className="mt-2">
            <b>🔹 itertools</b><br />
            Efficient iteration tools:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from itertools import permutations\n\nperms = permutations([1, 2, 3])\nfor p in perms:\n    print(p)  # (1, 2, 3), (1, 3, 2), etc.`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 collections</b><br />
            Specialized data structures:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from collections import Counter\n\nwords = ['apple', 'banana', 'apple']\ncount = Counter(words)\nprint(count)  # Counter({'apple': 2, 'banana': 1})`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 functools</b><br />
            Functional programming tools:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from functools import reduce\n\nnumbers = [1, 2, 3, 4]\nsum = reduce(lambda x, y: x + y, numbers)\nprint(sum)  # 10`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using itertools, collections, or functools (e.g., Counter() or reduce()).',
      check: (code) => {
        const result = /(itertools|collections|functools)\.\w+\s*\(.+\)/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use itertools, collections, or functools, e.g., Counter() or reduce().',
      success: '✅ Great! You used itertools, collections, or functools.'
    },
    {
      title: "Module Imports and Virtual Environments",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Module Imports and Virtual Environments</h4>
          <p>
            Python modules organize code, and virtual environments isolate dependencies.
          </p>
          <p className="mt-2">
            <b>🔹 Importing Modules</b><br />
            Import specific functions or aliases:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import math\nprint(math.sqrt(16))  # 4.0\n\nfrom math import sqrt\nprint(sqrt(16))  # 4.0\n\nimport math as m\nprint(m.pi)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Creating Modules</b><br />
            Create a file (e.g., <code>mymodule.py</code>) and import it:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# mymodule.py\ndef greet():\n    return "Hello!"\n\n# main.py\nimport mymodule\nprint(mymodule.greet())`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Virtual Environments</b><br />
            Create and use virtual environments to manage dependencies:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Create virtual environment\npython -m venv myenv\n\n# Activate (Unix/Linux/Mac)\nsource myenv/bin/activate\n\n# Activate (Windows)\nmyenv\\Scripts\\activate\n\n# Install package\npip install requests`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Commands</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Command</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">import module</td>
                  <td className="border border-green-400 p-2">Import entire module</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">from module import func</td>
                  <td className="border border-green-400 p-2">Import specific function</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">pip list</td>
                  <td className="border border-green-400 p-2">List installed packages</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">deactivate</td>
                  <td className="border border-green-400 p-2">Exit virtual environment</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write code using an import statement or virtual environment command (e.g., import math or python -m venv myenv).',
      check: (code) => {
        const result = /(import\s+\w+)|(from\s+\w+\s+import\s+\w+)|(python\s+-m\s+venv\s+\w+)/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use an import statement or virtual environment command, e.g., import math or python -m venv myenv.',
      success: '✅ Great! You worked with module imports or virtual environments.'
    }
  ];

  const handleNext = () => {
    if (currentLesson < lessons.length - 1) {
      console.log(`Navigating to next lesson: ${currentLesson + 1}`);
      setCurrentLesson(currentLesson + 1);
      setCode("");
      setMessage("");
    }
  };

  const handlePrev = () => {
    if (currentLesson > 0) {
      console.log(`Navigating to previous lesson: ${currentLesson - 1}`);
      setCurrentLesson(currentLesson - 1);
      setCode("");
      setMessage("");
    }
  };

  const checkCode = () => {
    console.log(`Checking code for lesson ${currentLesson}: "${code}"`);
    try {
      if (!code.trim()) {
        setMessage("❌ Please enter some code to check.");
        return;
      }
      if (lessons[currentLesson].check(code)) {
        setMessage(lessons[currentLesson].success);
        if (currentLesson < lessons.length - 1) {
          console.log(`Advancing to lesson ${currentLesson + 1}`);
          setTimeout(() => {
            setCurrentLesson(currentLesson + 1);
            setCode("");
            setMessage("");
          }, 1000);
        } else {
          console.log("Completing Level 4");
          localStorage.setItem("level4Completed", "true");
          setTimeout(() => {
            setCurrentLesson(lessons.length);
            setCode("");
            setMessage("");
          }, 1000);
        }
      } else {
        setMessage(lessons[currentLesson].error);
      }
    } catch (error) {
      console.error(`Error in checkCode: ${error.message}`);
      setMessage("❌ An error occurred while checking your code. Please try again.");
    }
  };

  if (!subscribed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 4: Python Standard Libraries & Modules</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 4, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level3Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 4: Python Standard Libraries & Modules</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 3 First</h3>
          <p>
            You need to complete Level 3 before accessing Level 4. Go back and finish the File Systems and Exceptions lessons!
          </p>
          <Link href="/level3" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 3
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 4: Python Standard Libraries & Modules</h2>

      {currentLesson < lessons.length ? (
        <div>
          <div className="nav-buttons flex justify-between mb-6">
            <button
              onClick={handlePrev}
              disabled={currentLesson === 0}
              className="btn px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400"
            >
              ⬅ Previous
            </button>
            {/* <button
              onClick={handleNext}
              className="btn px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Next ➡️
            </button> */}
          </div>

          <h3 className="text-xl font-semibold mb-4">{lessons[currentLesson].title}</h3>
          <div className="lesson-description text-gray-700 mb-4">{lessons[currentLesson].description}</div>
          <p className="task font-semibold mb-4">
            <b>Task:</b> {lessons[currentLesson].task}
          </p>

          <textarea
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              console.log(`Code input updated: "${e.target.value}"`);
            }}
            placeholder="💻 Type your Python code here..."
            className="code-input"
            style={{
              width: "100%",
              height: "120px",
              background: "#111",
              color: "#0f0",
              fontFamily: "monospace",
              fontSize: "1rem",
              padding: "10px",
              borderRadius: "8px",
              marginTop: "1rem",
            }}
          />
          <div className="action-buttons">
            <button
              onClick={checkCode}
              className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Check Code
            </button>
          </div>
          <p
            className={`mt-4 ${message.includes("❌") ? "error-message text-red-500" : "success-message text-green-500"}`}
          >
            {message}
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 4</h2>
          <Link href="/level5" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 5 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}