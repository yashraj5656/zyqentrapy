"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level7() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level6Completed, setLevel6Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel6Completed(localStorage.getItem("level6Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Automating Repetitive Tasks with Scripts",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Automating Repetitive Tasks with Scripts</h4>
          <p>
            Python scripts can automate repetitive tasks like file manipulation or data processing.
          </p>
          <p className="mt-2">
            <b>🔹 File Renaming</b><br />
            Rename multiple files in a directory:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import os\n\nfor filename in os.listdir('.'):\n    if filename.endswith('.txt'):\n        new_name = filename.replace('old', 'new')\n        os.rename(filename, new_name)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Processing CSV Files</b><br />
            Automate data extraction:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import csv\n\nwith open('data.csv', 'r') as file:\n    reader = csv.reader(file)\n    total = sum(float(row[1]) for row in reader if row[1].isdigit())\n    print(total)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Scheduling Tasks</b><br />
            Use <code>time</code> for delays:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import time\n\nwhile True:\n    print('Running task...')\n    time.sleep(60)  # Wait 1 minute`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a script to automate a task (e.g., using os.rename() or csv.reader()).',
      check: (code) => {
        const result = /(os\.\w+\s*\(.+\)|csv\.\w+\s*\(.+\)|time\.sleep\s*\(.+\))/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use os, csv, or time for automation, e.g., os.rename() or csv.reader().',
      success: '✅ Great! You automated a repetitive task.'
    },
    {
      title: "Web Scraping with BeautifulSoup",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Web Scraping with BeautifulSoup</h4>
          <p>
            The <code>BeautifulSoup</code> library extracts data from HTML and XML.
          </p>
          <p className="mt-2">
            <b>🔹 Fetching and Parsing HTML</b><br />
            Scrape a webpage:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import requests\nfrom bs4 import BeautifulSoup\n\nurl = 'https://example.com'\nresponse = requests.get(url)\nsoup = BeautifulSoup(response.text, 'html.parser')\nprint(soup.title.text)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Extracting Data</b><br />
            Find elements by tag or class:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from bs4 import BeautifulSoup\nimport requests\n\nresponse = requests.get('https://example.com')\nsoup = BeautifulSoup(response.text, 'html.parser')\nlinks = soup.find_all('a')\nfor link in links:\n    print(link.get('href'))`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Handling Errors</b><br />
            Manage connection issues:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import requests\nfrom bs4 import BeautifulSoup\n\ntry:\n    response = requests.get('https://example.com')\n    response.raise_for_status()\n    soup = BeautifulSoup(response.text, 'html.parser')\nexcept requests.RequestException:\n    print('Failed to fetch page')`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using BeautifulSoup (e.g., BeautifulSoup() or soup.find()).',
      check: (code) => {
        const result = /BeautifulSoup\s*\(.+\)|soup\.find(_all)?\s*\(.+\)/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use BeautifulSoup, e.g., BeautifulSoup(response.text, "html.parser") or soup.find().',
      success: '✅ Great! You scraped a webpage with BeautifulSoup.'
    },
    {
      title: "Working with APIs using requests",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Working with APIs using requests</h4>
          <p>
            The <code>requests</code> library simplifies HTTP requests to APIs.
          </p>
          <p className="mt-2">
            <b>🔹 GET Request</b><br />
            Fetch data from an API:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import requests\n\nresponse = requests.get('https://api.example.com/data')\ndata = response.json()\nprint(data['key'])`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 POST Request</b><br />
            Send data to an API:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import requests\n\npayload = {'key': 'value'}\nresponse = requests.post('https://api.example.com/submit', json=payload)\nprint(response.status_code)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Error Handling</b><br />
            Handle API errors:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import requests\n\ntry:\n    response = requests.get('https://api.example.com')\n    response.raise_for_status()\n    print(response.json())\nexcept requests.RequestException as e:\n    print(f'API error: {e}')`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using requests (e.g., requests.get() or requests.post()).',
      check: (code) => {
        const result = /requests\.(get|post|put|delete)\s*\(.+\)/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use requests, e.g., requests.get() or requests.post().',
      success: '✅ Great! You worked with an API using requests.'
    },
    {
      title: "Building CLI Tools with argparse",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Building CLI Tools with argparse</h4>
          <p>
            The <code>argparse</code> module creates command-line interfaces.
          </p>
          <p className="mt-2">
            <b>🔹 Basic CLI</b><br />
            Create a CLI with arguments:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import argparse\n\nparser = argparse.ArgumentParser(description='Process data')\nparser.add_argument('name', help='User name')\nargs = parser.parse_args()\nprint(f'Hello, {args.name}!')`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Optional Arguments</b><br />
            Add optional flags:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import argparse\n\nparser = argparse.ArgumentParser()\nparser.add_argument('--verbose', action='store_true', help='Verbose output')\nargs = parser.parse_args()\nif args.verbose:\n    print('Verbose mode enabled')`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Multiple Arguments</b><br />
            Handle multiple inputs:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import argparse\n\nparser = argparse.ArgumentParser()\nparser.add_argument('numbers', nargs='+', type=int, help='Numbers to sum')\nargs = parser.parse_args()\nprint(sum(args.numbers))`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using argparse (e.g., ArgumentParser() or add_argument()).',
      check: (code) => {
        const result = /argparse\.ArgumentParser\s*\(.+\)|add_argument\s*\(.+\)/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use argparse, e.g., ArgumentParser() or add_argument().',
      success: '✅ Great! You built a CLI tool with argparse.'
    },
    {
      title: "Combining Automation and Scraping/API Tasks",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Combining Automation and Scraping/API Tasks</h4>
          <p>
            Combine automation, scraping, and APIs for powerful scripts.
          </p>
          <p className="mt-2">
            <b>🔹 Example: Scrape and Save to CSV</b><br />
            Scrape data and save it:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import requests, csv\nfrom bs4 import BeautifulSoup\n\nresponse = requests.get('https://example.com')\nsoup = BeautifulSoup(response.text, 'html.parser')\nwith open('data.csv', 'w', newline='') as f:\n    writer = csv.writer(f)\n    writer.writerow(['Title', soup.title.text])`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Example: API to File</b><br />
            Fetch API data and automate processing:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import requests, json\n\nresponse = requests.get('https://api.example.com/data')\ndata = response.json()\nwith open('output.json', 'w') as f:\n    json.dump(data, f)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Techniques</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Library</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Function</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">os</td>
                  <td className="border border-green-400 p-2">listdir()</td>
                  <td className="border border-green-400 p-2">List directory contents</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">requests</td>
                  <td className="border border-green-400 p-2">get()</td>
                  <td className="border border-green-400 p-2">Fetch API or webpage data</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">csv</td>
                  <td className="border border-green-400 p-2">writer()</td>
                  <td className="border border-green-400 p-2">Write data to CSV</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write code combining automation with scraping or APIs (e.g., BeautifulSoup with csv or requests with json).',
      check: (code) => {
        const result = /(BeautifulSoup\s*\(.+\)|soup\.find(_all)?\s*\(.+\)|requests\.(get|post|put|delete)\s*\(.+\))(\n.*(csv|json|os)\.\w+\s*\(.+\))?/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Combine BeautifulSoup or requests with csv, json, or os, e.g., soup.find() with csv.writer().',
      success: '✅ Great! You combined automation with scraping or APIs.'
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
          console.log("Completing Level 7");
          localStorage.setItem("level7Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 7: Automate Tasks and Web Scraping</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 7, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level6Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 7: Automate Tasks and Web Scraping</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 6 First</h3>
          <p>
            You need to complete Level 6 before accessing Level 7. Go back and finish the Web Development with Python lessons!
          </p>
          <Link href="/level6" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 6
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 7: Automate Tasks and Web Scraping</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 7</h2>
          <Link href="/level8" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 8 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}