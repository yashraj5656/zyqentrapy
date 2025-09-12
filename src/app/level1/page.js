"use client";
import { useState } from "react";
import Link from "next/link";

export default function Level1() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const lessons = [
    {
      title: "Install Python and Set Up Environment",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Installing Python and Setting Up</h4>
          <p>
            Python is a versatile programming language. To start:
          </p>
          <p className="mt-2">
            <b>🔹 Install Python</b><br />
            Download Python from <a href="https://www.python.org/downloads/" className="text-blue-500 hover:underline">python.org</a> (version 3.10+ recommended). Follow the installer instructions, ensuring "Add Python to PATH" is checked.
          </p>
          <p className="mt-2">
            <b>🔹 Verify Installation</b><br />
            Open a terminal and run:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              python --version
            </pre>
            Expected output: <code>Python 3.x.x</code>
          </p>
          <p className="mt-2">
            <b>🔹 Set Up an IDE</b><br />
            Use VS Code, PyCharm, or IDLE. For VS Code, install the Python extension.
          </p>
          <p className="mt-2">
            <b>🔹 Run Your First Program</b><br />
            Create a file <code>hello.py</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`print("Hello, Python!")`}
            </pre>
            Run it with:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              python hello.py
            </pre>
          </p>
        </div>
      ),
      task: 'Write a Python program that prints "Hello, Python!".',
      check: (code) => {
        const result = /print\s*\(\s*['"]hello, python!?['"]\s*\)/i.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Write a print statement like: print("Hello, Python!")',
      success: '✅ Correct! You printed "Hello, Python!".'
    },
    {
      title: "Syntax, Variables, and Data Types",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Python Syntax and Variables</h4>
          <p>
            <b>🔹 Variables</b><br />
            No need to declare type; Python is dynamically typed.
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`x = 5  # integer\nname = "Alex"  # string\nis_student = True  # boolean`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Data Types</b><br />
            <b>int</b>: Whole numbers<br />
            <b>float</b>: Decimal numbers<br />
            <b>str</b>: Text<br />
            <b>bool</b>: True/False<br />
            <b>NoneType</b>: None (null equivalent)<br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`age = 25\nprice = 19.99\nname = "Alex"\nis_active = False\nempty = None`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Type Checking</b><br />
            Use <code>type()</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`print(type(age))  # <class 'int'>`}
            </pre>
          </p>
        </div>
      ),
      task: 'Declare a variable with any data type (e.g., x = 5 or name = "Alex").',
      check: (code) => {
        const result = /^\s*\w+\s*=\s*(\d+(\.\d+)?|['"].+['"]|True|False|None)\s*$/.test(code.trim());
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Declare a variable with a value (e.g., x = 5 or name = "Alex").',
      success: '✅ Correct! You declared a variable.'
    },
    {
      title: "Conditional Statements and Loops",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Control Flow in Python</h4>
          <p>
            <b>🔹 if/elif/else</b><br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`marks = 85\nif marks >= 90:\n    print("Grade: A")\nelif marks >= 75:\n    print("Grade: B")\nelse:\n    print("Grade: C")`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 for Loop</b><br />
            Iterate over a sequence:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`for i in range(5):\n    print(i)  # 0, 1, 2, 3, 4`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 while Loop</b><br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`i = 1\nwhile i <= 5:\n    print(i)\n    i += 1`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a conditional statement or loop (e.g., if x > 5: print("Big") or for i in range(3): print(i)).',
      check: (code) => {
        const result = /(^\s*if\s+\w+\s*[><=]+\s*.+\s*:)|(^\s*for\s+\w+\s+in\s+range\s*\(.+\)\s*:)|(^\s*while\s+.+\s*:)/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Write an if, for, or while statement.',
      success: '✅ Correct! You wrote a control flow statement.'
    },
    {
      title: "Functions and Scope",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Functions in Python</h4>
          <p>
            <b>🔹 Defining Functions</b><br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`def greet(name):\n    return f"Hello, {name}!"\nprint(greet("Alex"))  # Hello, Alex!`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Default Parameters</b><br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`def say_hello(name="Guest"):\n    return f"Hello, {name}"\nprint(say_hello())  # Hello, Guest`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Scope</b><br />
            Variables defined in a function are local:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`def example():\n    x = 5  # local\nprint(x)  # Error: x not defined outside`}
            </pre>
            Global variables are accessible everywhere:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`global_var = "I am global"\ndef test():\n    print(global_var)  # Works`}
            </pre>
          </p>
        </div>
      ),
      task: 'Define a function (e.g., def say_hi(): return "Hi").',
      check: (code) => {
        const result = /^\s*def\s+\w+\s*\(.+\)\s*:/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Define a function using def.',
      success: '✅ Correct! You defined a function.'
    },
    {
      title: "Lists, Tuples, Sets, and Dictionaries",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Python Data Structures</h4>
          <p>
            <b>🔹 Lists</b><br />
            Ordered, mutable:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`fruits = ["apple", "banana", "mango"]\nfruits.append("orange")  # add\nprint(fruits[0])  # apple`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Tuples</b><br />
            Ordered, immutable:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`point = (1, 2)\nprint(point[0])  # 1`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Sets</b><br />
            Unordered, unique elements:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`numbers = {1, 2, 3}\nnumbers.add(4)\nprint(numbers)  # {1, 2, 3, 4}`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Dictionaries</b><br />
            Key-value pairs:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`person = {"name": "Alex", "age": 25}\nprint(person["name"])  # Alex\nperson["city"] = "Delhi"  # add`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Methods</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Type</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Method</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">List</td>
                  <td className="border border-green-400 p-2">append()</td>
                  <td className="border border-green-400 p-2">Add element</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">List</td>
                  <td className="border border-green-400 p-2">pop()</td>
                  <td className="border border-green-400 p-2">Remove last element</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">Set</td>
                  <td className="border border-green-400 p-2">add()</td>
                  <td className="border border-green-400 p-2">Add element</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">Dict</td>
                  <td className="border border-green-400 p-2">keys()</td>
                  <td className="border border-green-400 p-2">Get all keys</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Create or manipulate a list, tuple, set, or dictionary (e.g., fruits = ["apple", "banana"] or person = {"name": "Alex"}).',
      check: (code) => {
        const result = /^\s*(\w+\s*=\s*\[.*\]|\w+\s*=\s*\(.*\)|\w+\s*=\s*\{.*['"].*:.*\}|\w+\s*=\s*set\s*\(.+\)|\w+\.append\s*\(.+\)|\w+\.add\s*\(.+\)|\w+\[\s*['"].+['"]\s*\]\s*=.*)$/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Create or manipulate a list, tuple, set, or dictionary.',
      success: '✅ Correct! You worked with a data structure.'
    }
  ];

  const handlePrev = () => {
    if (currentLesson > 0) {
      console.log(`Navigating to previous lesson: ${currentLesson - 1}`);
      setCurrentLesson(currentLesson - 1);
      setCode("");
      setMessage("");
    }
  };

  const handleNext = () => {
    if (currentLesson < lessons.length - 1) {
      console.log(`Navigating to next lesson: ${currentLesson + 1}`);
      setCurrentLesson(currentLesson + 1);
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
          console.log("Completing Level 1");
          localStorage.setItem("level1Completed", "true");
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

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 1: Python Basics</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 1</h2>
          <Link href="/level2" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 2 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}