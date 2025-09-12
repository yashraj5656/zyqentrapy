"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level8() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level7Completed, setLevel7Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel7Completed(localStorage.getItem("level7Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Writing Unit Tests with unittest",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Writing Unit Tests with unittest</h4>
          <p>
            The <code>unittest</code> module provides tools for writing and running unit tests.
          </p>
          <p className="mt-2">
            <b>🔹 Basic Test Case</b><br />
            Create a test class:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import unittest\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(1 + 1, 2)\n\nif __name__ == '__main__':\n    unittest.main()`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Testing Functions</b><br />
            Test a specific function:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import unittest\n\ndef add(a, b):\n    return a + b\n\nclass TestAdd(unittest.TestCase):\n    def test_add_positive(self):\n        self.assertEqual(add(2, 3), 5)\n    def test_add_negative(self):\n        self.assertEqual(add(-1, -1), -2)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Common Assertions</b><br />
            Use various assertion methods:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import unittest\n\nclass TestString(unittest.TestCase):\n    def test_string(self):\n        self.assertTrue('hello'.islower())\n        self.assertIn('a', 'abc')\n        self.assertRaises(ValueError, int, 'abc')`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a unittest test case (e.g., using TestCase or assertEqual).',
      check: (code) => {
        const result = /unittest\.TestCase|assert\w+\s*\(.+\)/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use unittest.TestCase or an assertion like assertEqual().',
      success: '✅ Great! You wrote a unit test with unittest.'
    },
    {
      title: "Debugging Applications with pdb",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Debugging Applications with pdb</h4>
          <p>
            The <code>pdb</code> module is Python’s built-in debugger for stepping through code.
          </p>
          <p className="mt-2">
            <b>🔹 Setting Breakpoints</b><br />
            Insert a breakpoint in code:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import pdb\n\ndef divide(a, b):\n    pdb.set_trace()\n    return a / b\n\nprint(divide(10, 2))`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Debugging in a Loop</b><br />
            Debug iterative processes:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import pdb\n\nnumbers = [1, 2, 3, 0]\nfor num in numbers:\n    pdb.set_trace()\n    print(10 / num)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Common pdb Commands</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Command</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">n (next)</td>
                  <td className="border border-green-400 p-2">Execute next line</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">s (step)</td>
                  <td className="border border-green-400 p-2">Step into function</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">p variable</td>
                  <td className="border border-green-400 p-2">Print variable value</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write code using pdb (e.g., pdb.set_trace()).',
      check: (code) => {
        const result = /pdb\.set_trace\s*\(\)/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use pdb.set_trace() for debugging.',
      success: '✅ Great! You used pdb for debugging.'
    },
    {
      title: "Application Monitoring with logging",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Application Monitoring with logging</h4>
          <p>
            The <code>logging</code> module tracks application events and errors.
          </p>
          <p className="mt-2">
            <b>🔹 Basic Logging</b><br />
            Log messages with different levels:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import logging\n\nlogging.basicConfig(level=logging.INFO)\nlogging.info('Starting application')\nlogging.warning('Low disk space')`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Logging to a File</b><br />
            Save logs to a file:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import logging\n\nlogging.basicConfig(filename='app.log', level=logging.DEBUG)\nlogging.debug('Debugging info')\nlogging.error('An error occurred')`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Custom Logger</b><br />
            Create a custom logger:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import logging\n\nlogger = logging.getLogger('my_app')\nlogger.setLevel(logging.INFO)\nhandler = logging.FileHandler('my_app.log')\nlogger.addHandler(handler)\nlogger.info('Custom logger message')`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using logging (e.g., logging.info() or logging.basicConfig()).',
      check: (code) => {
        const result = /logging\.(basicConfig|info|warning|error|debug)\s*\(.+\)/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use logging, e.g., logging.info() or logging.basicConfig().',
      success: '✅ Great! You used logging for application monitoring.'
    },
    {
      title: "Combining Testing, Debugging, and Logging",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Combining Testing, Debugging, and Logging</h4>
          <p>
            Combine <code>unittest</code>, <code>pdb</code>, and <code>logging</code> for robust applications.
          </p>
          <p className="mt-2">
            <b>🔹 Testing with Logging</b><br />
            Log test execution:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import unittest\nimport logging\n\nlogging.basicConfig(level=logging.INFO)\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        logging.info('Testing addition')\n        self.assertEqual(1 + 1, 2)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Debugging with Logging</b><br />
            Log variable states during debugging:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import pdb\nimport logging\n\nlogging.basicConfig(level=logging.DEBUG)\n\ndef process(data):\n    logging.debug(f'Data: {data}')\n    pdb.set_trace()\n    return data * 2\n\nprint(process(5))`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Techniques</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Module</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Function</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">unittest</td>
                  <td className="border border-green-400 p-2">assertEqual()</td>
                  <td className="border border-green-400 p-2">Check equality in tests</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">pdb</td>
                  <td className="border border-green-400 p-2">set_trace()</td>
                  <td className="border border-green-400 p-2">Set debugging breakpoint</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">logging</td>
                  <td className="border border-green-400 p-2">info()</td>
                  <td className="border border-green-400 p-2">Log informational messages</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write code combining unittest, pdb, or logging (e.g., assertEqual with logging.info()).',
      check: (code) => {
        const result = /(unittest\.TestCase|assert\w+\s*\(.+\)|pdb\.set_trace\s*\(\)|logging\.(basicConfig|info|warning|error|debug)\s*\(.+\))/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Combine unittest, pdb, or logging, e.g., assertEqual() with logging.info().',
      success: '✅ Great! You combined testing, debugging, and logging.'
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
          console.log("Completing Level 8");
          localStorage.setItem("level8Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 8: Testing and Debugging</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 8, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level7Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 8: Testing and Debugging</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 7 First</h3>
          <p>
            You need to complete Level 7 before accessing Level 8. Go back and finish the Automate Tasks and Web Scraping lessons!
          </p>
          <Link href="/level7" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 7
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 8: Testing and Debugging</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 8</h2>
          <Link href="/level9" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 9 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}