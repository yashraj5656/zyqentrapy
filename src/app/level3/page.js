"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level3() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level2Completed, setLevel2Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel2Completed(localStorage.getItem("level2Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Reading and Writing Files",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Reading and Writing Files in Python</h4>
          <p>
            Python provides built-in functions to read from and write to files.
          </p>
          <p className="mt-2">
            <b>🔹 Reading a File</b><br />
            Use <code>open()</code> with mode <code>'r'</code> to read:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`with open('file.txt', 'r') as file:\n    content = file.read()\n    print(content)`}
            </pre>
            The <code>with</code> statement ensures the file is properly closed.
          </p>
          <p className="mt-2">
            <b>🔹 Writing to a File</b><br />
            Use mode <code>'w'</code> to write (overwrites the file):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`with open('file.txt', 'w') as file:\n    file.write('Hello, Python!')`}
            </pre>
            Use mode <code>'a'</code> to append instead of overwriting.
          </p>
          <p className="mt-2">
            <b>🔹 Reading Line by Line</b><br />
            Iterate over a file to read lines:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`with open('file.txt', 'r') as file:\n    for line in file:\n        print(line.strip())`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code to read or write a file (e.g., use open() with mode "r" or "w").',
      check: (code) => {
        const result = /open\s*\(.+\s*,\s*['"](r|w|a)['"]\)/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use open() with mode "r", "w", or "a", e.g., open("file.txt", "w").',
      success: '✅ Great! You performed a file operation.'
    },
    {
      title: "Exception Handling with try/except",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Exception Handling in Python</h4>
          <p>
            Use <code>try/except</code> to handle errors gracefully.
          </p>
          <p className="mt-2">
            <b>🔹 Basic try/except</b><br />
            Catch specific exceptions like <code>FileNotFoundError</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`try:\n    with open('file.txt', 'r') as file:\n        content = file.read()\nexcept FileNotFoundError:\n    print("File not found!")`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Multiple Exceptions</b><br />
            Handle multiple exception types:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`try:\n    num = int(input("Enter a number: "))\n    result = 10 / num\nexcept ValueError:\n    print("Invalid input!")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 else and finally</b><br />
            Use <code>else</code> for code that runs if no exception occurs, and <code>finally</code> for cleanup:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`try:\n    file = open('file.txt', 'r')\nexcept FileNotFoundError:\n    print("File not found!")\nelse:\n    content = file.read()\n    file.close()\nfinally:\n    print("Cleanup done.")`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a try/except block to handle an exception (e.g., try: ... except FileNotFoundError: ...).',
      check: (code) => {
        const result = /try\s*:.*\n\s*except\s+\w+:/ms.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Write a try/except block, e.g., try: ... except ValueError: ...',
      success: '✅ Great! You handled an exception.'
    },
    {
      title: "Working with JSON Files",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Working with JSON Files in Python</h4>
          <p>
            The <code>json</code> module handles JSON data for reading and writing.
          </p>
          <p className="mt-2">
            <b>🔹 Writing JSON</b><br />
            Use <code>json.dump()</code> to write data to a JSON file:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import json\n\ndata = {"name": "Alex", "age": 25}\nwith open('data.json', 'w') as file:\n    json.dump(data, file)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Reading JSON</b><br />
            Use <code>json.load()</code> to read JSON data:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import json\n\nwith open('data.json', 'r') as file:\n    data = json.load(file)\n    print(data["name"])  # Alex`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Handling JSON Errors</b><br />
            Handle invalid JSON with <code>json.JSONDecodeError</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import json\n\ntry:\n    with open('data.json', 'r') as file:\n        data = json.load(file)\nexcept json.JSONDecodeError:\n    print("Invalid JSON!")`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code to read or write a JSON file using json.load() or json.dump().',
      check: (code) => {
        const result = /json\.(load|dump)\s*\(.+\)/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use json.load() or json.dump(), e.g., json.dump(data, file).',
      success: '✅ Great! You worked with a JSON file.'
    },
    {
      title: "Working with CSV Files",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Working with CSV Files in Python</h4>
          <p>
            The <code>csv</code> module handles CSV data for reading and writing.
          </p>
          <p className="mt-2">
            <b>🔹 Writing CSV</b><br />
            Use <code>csv.writer</code> to write rows:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import csv\n\nwith open('data.csv', 'w', newline='') as file:\n    writer = csv.writer(file)\n    writer.writerow(['Name', 'Age'])\n    writer.writerow(['Alex', 25])`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Reading CSV</b><br />
            Use <code>csv.reader</code> to read rows:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import csv\n\nwith open('data.csv', 'r') as file:\n    reader = csv.reader(file)\n    for row in reader:\n        print(row)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Using DictReader/DictWriter</b><br />
            Work with dictionaries for CSV data:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import csv\n\nwith open('data.csv', 'r') as file:\n    reader = csv.DictReader(file)\n    for row in reader:\n        print(row['Name'])`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code to read or write a CSV file using csv.reader, csv.writer, csv.DictReader, or csv.DictWriter.',
      check: (code) => {
        const result = /csv\.(reader|writer|DictReader|DictWriter)\s*\(.+\)/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use csv.reader, csv.writer, csv.DictReader, or csv.DictWriter.',
      success: '✅ Great! You worked with a CSV file.'
    },
    {
      title: "File Automation Tasks",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">File Automation Tasks in Python</h4>
          <p>
            Combine file operations and exception handling for automation tasks.
          </p>
          <p className="mt-2">
            <b>🔹 Example: Log File Parser</b><br />
            Read a log file and extract specific lines:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`try:\n    with open('log.txt', 'r') as file:\n        errors = [line for line in file if 'ERROR' in line]\n        print(errors)\nexcept FileNotFoundError:\n    print("Log file not found!")`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Example: CSV to JSON Conversion</b><br />
            Convert CSV data to JSON:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import csv, json\n\nwith open('data.csv', 'r') as csv_file:\n    reader = csv.DictReader(csv_file)\n    data = list(reader)\nwith open('output.json', 'w') as json_file:\n    json.dump(data, json_file)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Modules</b><br />
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
                  <td className="border border-green-400 p-2">os</td>
                  <td className="border border-green-400 p-2">os.remove()</td>
                  <td className="border border-green-400 p-2">Delete a file</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">os</td>
                  <td className="border border-green-400 p-2">os.path.exists()</td>
                  <td className="border border-green-400 p-2">Check if file exists</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">shutil</td>
                  <td className="border border-green-400 p-2">shutil.move()</td>
                  <td className="border border-green-400 p-2">Move/rename a file</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a file automation task (e.g., read specific lines or convert CSV to JSON).',
      check: (code) => {
        const result = /(open\s*\(.+\s*,\s*['"](r|w|a)['"].*\n.*(csv|json|os|shutil)\.)|(os\.path\.exists\s*\(.+\))|(shutil\.move\s*\(.+\))/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Write a file automation task using open(), csv, json, os, or shutil.',
      success: '✅ Great! You performed a file automation task.'
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
          console.log("Completing Level 3");
          localStorage.setItem("level3Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 3: Work with File Systems and Exceptions</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 3, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level2Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 3: Work with File Systems and Exceptions</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 2 First</h3>
          <p>
            You need to complete Level 2 before accessing Level 3. Go back and finish the Object-Oriented Programming lessons!
          </p>
          <Link href="/level2" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 2
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 3: Work with File Systems and Exceptions</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 3</h2>
          <Link href="/level4" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 4 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}