"use client";
import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { loader } from "@monaco-editor/react";

// Load Monaco only on client
const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function PythonEditor() {
  // ✅ Python tasks list
  const tasks = [
    "Print 'Hello, Python!'",
    "Declare a variable and print it",
    "Create a function that adds two numbers",
    "Loop through numbers 1 to 5",
    "Use a list and print its elements",
    "Write a dictionary with name and age",
    "Check if a number is even or odd",
    "Create a class with a constructor",
    "Read a string and print its length",
    "Use list comprehension to square numbers",
    "Handle an exception with try...except",
    "Write a lambda function",
    "Iterate through a dictionary",
    "Import the math module and use sqrt()",
    "Define a recursive function (factorial)",
    "Use range() to generate numbers",
    "Write a file and read it back",
    "Use f-strings for formatting",
    "Create a generator function",
    "Use enumerate() in a loop",
  ];

  // ✅ Starter Python code snippets
  const starterCodes = useMemo(
    () => [
      `print("Hello, Python!")`,
      `x = 10\nprint(x)`,
      `def add(a, b):\n    return a + b\nprint(add(2, 3))`,
      `for i in range(1, 6):\n    print(i)`,
      `arr = [1, 2, 3, 4, 5]\nfor num in arr:\n    print(num)`,
      `person = { "name": "Alex", "age": 25 }\nprint(person)`,
      `num = 7\nprint("Even" if num % 2 == 0 else "Odd")`,
      `class Person:\n    def __init__(self, name):\n        self.name = name\n\np = Person("Alex")\nprint(p.name)`,
      `s = "Python"\nprint(len(s))`,
      `nums = [1, 2, 3]\nsquares = [n**2 for n in nums]\nprint(squares)`,
      `try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")`,
      `double = lambda x: x * 2\nprint(double(5))`,
      `person = { "name": "Alex", "age": 25 }\nfor key, value in person.items():\n    print(key, value)`,
      `import math\nprint(math.sqrt(16))`,
      `def factorial(n):\n    return 1 if n == 0 else n * factorial(n-1)\nprint(factorial(5))`,
      `for i in range(5):\n    print(i)`,
      `with open("test.txt", "w") as f:\n    f.write("Hello File")\n\nwith open("test.txt", "r") as f:\n    print(f.read())`,
      `name = "Alex"\nage = 25\nprint(f"My name is {name} and I am {age} years old.")`,
      `def generator():\n    yield 1\n    yield 2\n    yield 3\n\nfor val in generator():\n    print(val)`,
      `for i, val in enumerate(["a", "b", "c"]):\n    print(i, val)`,
    ],
    []
  );

  const [currentTask, setCurrentTask] = useState(0);
  const [code, setCode] = useState(starterCodes[0]);
  const [output, setOutput] = useState("⏳ Loading Python runtime...");
  const [pyodide, setPyodide] = useState(null);

  // 🔄 Update editor when task changes
  useEffect(() => {
    setCode(starterCodes[currentTask]);
  }, [currentTask, starterCodes]);

  // ✅ Setup Monaco custom theme
  useEffect(() => {
    if (typeof window !== "undefined") {
      loader.init().then((monaco) => {
        monaco.editor.defineTheme("neon-night", {
          base: "vs-dark",
          inherit: true,
          rules: [
            { token: "comment", foreground: "6a9955" },
            { token: "keyword", foreground: "00f2ea", fontStyle: "bold" },
            { token: "identifier", foreground: "ffffff" },
            { token: "string", foreground: "a855f7" },
            { token: "number", foreground: "ffb86c" },
            { token: "delimiter", foreground: "00cba9" },
          ],
          colors: {
            "editor.background": "#0f0f0f",
            "editor.foreground": "#e0e0e0",
            "editor.lineHighlightBackground": "#111111",
            "editor.selectionBackground": "#00cba955",
            "editorCursor.foreground": "#00f2ea",
            "editorCursor.background": "#000000",
            "editor.selectionHighlightBackground": "#00f2ea33",
            "editorIndentGuide.background": "#333333",
            "editorLineNumber.foreground": "#555555",
            "editorLineNumber.activeForeground": "#00f2ea",
            "editorWhitespace.foreground": "#222222",
          },
        });
      });
    }
  }, []);

  // ✅ Load Pyodide
  useEffect(() => {
    const init = async () => {
      if (window.loadPyodide) {
        const py = await window.loadPyodide();
        setPyodide(py);
        setOutput("✅ Python ready!");
      } else {
        setOutput("❌ Pyodide not found. Did you add it in layout.js?");
      }
    };
    init();
  }, []);

  // ✅ Run Python code
  const handleRun = async () => {
    if (!pyodide) {
      setOutput("⏳ Python is still loading...");
      return;
    }
    try {
      let logs = [];
      pyodide.globals.set("print", (msg) => logs.push(msg.toString()));

      let result = await pyodide.runPythonAsync(code);
      if (result !== undefined) logs.push(result.toString());

      setOutput(logs.join("\n") || "✅ Code ran successfully.");
    } catch (err) {
      setOutput("❌ Error: " + err.message);
    }
  };

  return (
    <div className="glitch-form-wrapper">
      <div className="glitch-car">
        {/* Header */}
        <div className="card-header">
          <div className="card-title"><span>🐍 Python Editor</span></div>
          <div className="card-dots"><span></span><span></span><span></span></div>
        </div>

        {/* Body */}
        <div className="card-body">
          {/* Task Row */}
          <div className="task-row">
            <p className="task-text">
              Task {currentTask + 1}: {tasks[currentTask]}
            </p>
            <button
              onClick={() => setCurrentTask((prev) => (prev + 1) % tasks.length)}
              className="task-button"
              data-text="Next"
            >
              Next ➝
            </button>
          </div>

          {/* Editor */}
          <Editor
            height="400px"
            theme="neon-night"
            defaultLanguage="python"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              fontSize: 15,
              fontFamily: '"Fira Code", Consolas, "Courier New", monospace',
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              cursorSmoothCaretAnimation: "on",
              cursorBlinking: "phase",
              renderLineHighlight: "all",
              smoothScrolling: true,
            }}
          />

          {/* Output Section */}
          <div className="card-body">
            <div className="card-header">
              <div className="card-title"><span>Output</span></div>
              <button onClick={handleRun} className="task-button" data-text="Run_Code">
                ▶ Run Code
              </button>
            </div>
            <div className="card-body">
              <pre className="output-text">{output}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
