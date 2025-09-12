"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level9() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level8Completed, setLevel8Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel8Completed(localStorage.getItem("level8Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Generators and Decorators",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Generators and Decorators</h4>
          <p>
            Generators yield values one at a time, and decorators modify function behavior.
          </p>
          <p className="mt-2">
            <b>🔹 Creating a Generator</b><br />
            Use <code>yield</code> to create a generator:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nfor num in fibonacci(5):\n    print(num)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Creating a Decorator</b><br />
            Define a decorator to wrap a function:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`def my_decorator(func):\n    def wrapper():\n        print("Before function")\n        func()\n        print("After function")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print("Hello!")`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Decorator with Arguments</b><br />
            Handle function arguments:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`def repeat(n):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef greet(name):\n    print(f"Hello, {name}!")`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using a generator (yield) or decorator (@decorator).',
      check: (code) => {
        const result = /(yield\s+.*|@[\w_]+|def\s+\w+\s*\(.+\):\s*\n\s+def\s+wrapper)/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use yield for a generator or define a decorator with @decorator.',
      success: '✅ Great! You used a generator or decorator.'
    },
    {
      title: "Context Managers",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Context Managers</h4>
          <p>
            Context managers manage resources using <code>with</code> statements.
          </p>
          <p className="mt-2">
            <b>🔹 Using with for Files</b><br />
            Safely handle file operations:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`with open('file.txt', 'w') as f:\n    f.write('Hello, World!')`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Custom Context Manager</b><br />
            Define a context manager with <code>__enter__</code> and <code>__exit__</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`class MyContext:\n    def __enter__(self):\n        print("Entering context")\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("Exiting context")\n\nwith MyContext():\n    print("Inside context")`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Using contextlib</b><br />
            Create a context manager with <code>@contextmanager</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from contextlib import contextmanager\n\n@contextmanager\ndef temp_resource():\n    print("Setup")\n    yield\n    print("Teardown")\n\nwith temp_resource():\n    print("Using resource")`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using a context manager (e.g., with statement or @contextmanager).',
      check: (code) => {
        const result = /(with\s+[\w_\.\(\)]+\s*:|contextlib\.contextmanager|__enter__)/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use a with statement, @contextmanager, or define __enter__ for a context manager.',
      success: '✅ Great! You used a context manager.'
    },
    {
      title: "Asynchronous Programming with asyncio",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Asynchronous Programming with asyncio</h4>
          <p>
            The <code>asyncio</code> module enables asynchronous programming for concurrent tasks.
          </p>
          <p className="mt-2">
            <b>🔹 Async Functions</b><br />
            Define and run async functions:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import asyncio\n\nasync def say_hello():\n    await asyncio.sleep(1)\n    print("Hello")\n\nasyncio.run(say_hello())`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Running Multiple Tasks</b><br />
            Use <code>asyncio.gather</code> for concurrent execution:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import asyncio\n\nasync def task1():\n    await asyncio.sleep(1)\n    return "Task 1"\n\nasync def task2():\n    await asyncio.sleep(1)\n    return "Task 2"\n\nasync def main():\n    results = await asyncio.gather(task1(), task2())\n    print(results)\n\nasyncio.run(main())`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Event Loop</b><br />
            Manage tasks with an event loop:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import asyncio\n\nasync def task():\n    await asyncio.sleep(1)\n    print("Task done")\n\nloop = asyncio.get_event_loop()\nloop.run_until_complete(task())`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using asyncio (e.g., async def, await, or asyncio.run()).',
      check: (code) => {
        const result = /(async\s+def|await\s+|asyncio\.(run|gather)\s*\(.+\))/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use async def, await, or asyncio.run() for asynchronous programming.',
      success: '✅ Great! You used asyncio for asynchronous programming.'
    },
    {
      title: "Type Hinting and Static Typing",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Type Hinting and Static Typing</h4>
          <p>
            Type hints improve code readability and enable static type checking with tools like <code>mypy</code>.
          </p>
          <p className="mt-2">
            <b>🔹 Basic Type Hints</b><br />
            Add type annotations to variables and functions:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`def add(a: int, b: int) -> int:\n    return a + b\n\nname: str = "Alice"\nprint(add(2, 3))`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Complex Types</b><br />
            Use <code>typing</code> for lists, dictionaries, etc.:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from typing import List, Dict\n\ndef process_items(items: List[str]) -> Dict[str, int]:\n    return {item: len(item) for item in items}\n\nprint(process_items(["apple", "banana"]))`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Optional Types</b><br />
            Handle optional values with <code>Optional</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from typing import Optional\n\ndef find_user(user_id: int) -> Optional[str]:\n    users = {1: "Alice"}\n    return users.get(user_id)\n\nprint(find_user(1))`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Type Hints</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Type</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">int, str</td>
                  <td className="border border-green-400 p-2">Basic type annotations</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">List, Dict</td>
                  <td className="border border-green-400 p-2">Collections from typing module</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">Optional</td>
                  <td className="border border-green-400 p-2">Handle None values</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write code using type hints (e.g., : int or -> str).',
      check: (code) => {
        const result = /(:|->)\s*(int|str|float|bool|List|Dict|Optional)\[?[\w,\s]*\]?/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use type hints, e.g., : int or -> str, or import List/Dict/Optional.',
      success: '✅ Great! You used type hints for static typing.'
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
          console.log("Completing Level 9");
          localStorage.setItem("level9Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 9: Advanced Topics</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 9, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level8Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 9: Advanced Topics</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 8 First</h3>
          <p>
            You need to complete Level 8 before accessing Level 9. Go back and finish the Testing and Debugging lessons!
          </p>
          <Link href="/level8" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 8
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 9: Advanced Topics</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 9</h2>
          <Link href="/Certificate" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Get your Certificate
          </Link>
        </div>
      )}
    </div>
  );
}