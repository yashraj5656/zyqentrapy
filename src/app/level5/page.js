"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level5() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level4Completed, setLevel4Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel4Completed(localStorage.getItem("level4Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "NumPy for Numerical Computations",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">NumPy for Numerical Computations</h4>
          <p>
            The <code>numpy</code> library provides efficient array operations and mathematical functions.
          </p>
          <p className="mt-2">
            <b>🔹 Creating Arrays</b><br />
            Use <code>np.array()</code> or functions like <code>np.zeros()</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import numpy as np\n\narr = np.array([1, 2, 3])\nprint(arr)  # [1 2 3]\nzeros = np.zeros((2, 3))\nprint(zeros)  # [[0. 0. 0.] [0. 0. 0.]]`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Array Operations</b><br />
            Perform element-wise operations:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import numpy as np\n\narr = np.array([1, 2, 3])\nprint(arr * 2)  # [2 4 6]\nprint(np.sum(arr))  # 6`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Mathematical Functions</b><br />
            Use NumPy for advanced math:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import numpy as np\n\nangles = np.array([0, 90, 180])\nprint(np.sin(np.radians(angles)))  # [0. 1. 0.]`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using NumPy (e.g., np.array() or np.sum()).',
      check: (code) => {
        const result = /np\.\w+\s*\(.+\)/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use NumPy, e.g., np.array([1, 2, 3]) or np.sum(arr).',
      success: '✅ Great! You used NumPy for numerical computations.'
    },
    {
      title: "Pandas for Data Analysis",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Pandas for Data Analysis</h4>
          <p>
            The <code>pandas</code> library is ideal for data manipulation and analysis.
          </p>
          <p className="mt-2">
            <b>🔹 Creating a DataFrame</b><br />
            Use <code>pd.DataFrame()</code> to create tabular data:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import pandas as pd\n\ndata = {'Name': ['Alex', 'Bob'], 'Age': [25, 30]}\ndf = pd.DataFrame(data)\nprint(df)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Basic Operations</b><br />
            Filter, group, and summarize data:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import pandas as pd\n\ndf = pd.DataFrame({'Age': [25, 30, 35]})\nprint(df['Age'].mean())  # 30.0\nprint(df[df['Age'] > 25])  # Filter rows`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Reading Data</b><br />
            Load data from CSV files:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import pandas as pd\n\ndf = pd.read_csv('data.csv')\nprint(df.head())  # First 5 rows`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using Pandas (e.g., pd.DataFrame() or pd.read_csv()).',
      check: (code) => {
        const result = /pd\.\w+\s*\(.+\)/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use Pandas, e.g., pd.DataFrame(data) or pd.read_csv("file.csv").',
      success: '✅ Great! You used Pandas for data analysis.'
    },
    {
      title: "Matplotlib for Data Visualization",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Matplotlib for Data Visualization</h4>
          <p>
            The <code>matplotlib</code> library creates plots and visualizations.
          </p>
          <p className="mt-2">
            <b>🔹 Basic Plot</b><br />
            Create a line plot:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import matplotlib.pyplot as plt\n\nx = [1, 2, 3]\ny = [4, 5, 6]\nplt.plot(x, y)\nplt.show()`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Customizing Plots</b><br />
            Add labels and titles:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import matplotlib.pyplot as plt\n\nplt.plot([1, 2, 3], [4, 5, 6])\nplt.xlabel('X-axis')\nplt.ylabel('Y-axis')\nplt.title('Simple Plot')\nplt.show()`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Other Plot Types</b><br />
            Create scatter plots or bar charts:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import matplotlib.pyplot as plt\n\nplt.scatter([1, 2, 3], [4, 5, 6])\nplt.show()`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using Matplotlib (e.g., plt.plot() or plt.scatter()).',
      check: (code) => {
        const result = /plt\.\w+\s*\(.+\)/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use Matplotlib, e.g., plt.plot(x, y) or plt.scatter(x, y).',
      success: '✅ Great! You created a visualization with Matplotlib.'
    },
    {
      title: "Seaborn for Advanced Visualization",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Seaborn for Advanced Visualization</h4>
          <p>
            The <code>seaborn</code> library builds on Matplotlib for statistical visualizations.
          </p>
          <p className="mt-2">
            <b>🔹 Basic Seaborn Plot</b><br />
            Create a box plot:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import seaborn as sns\n\ndata = [1, 2, 2, 3, 4, 7]\nsns.boxplot(data=data)\nplt.show()`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Using Pandas with Seaborn</b><br />
            Visualize DataFrame data:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import seaborn as sns\nimport pandas as pd\n\ndf = pd.DataFrame({'x': [1, 2, 3], 'y': [4, 5, 6]})\nsns.scatterplot(data=df, x='x', y='y')\nplt.show()`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Heatmaps</b><br />
            Create a correlation heatmap:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import seaborn as sns\nimport numpy as np\n\ndata = np.array([[1, 2], [3, 4]])\nsns.heatmap(data)\nplt.show()`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using Seaborn (e.g., sns.boxplot() or sns.scatterplot()).',
      check: (code) => {
        const result = /sns\.\w+\s*\(.+\)/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use Seaborn, e.g., sns.boxplot(data) or sns.scatterplot(x, y).',
      success: '✅ Great! You created an advanced visualization with Seaborn.'
    },
    {
      title: "Practice with Real-world Datasets",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Practice with Real-world Datasets</h4>
          <p>
            Combine NumPy, Pandas, Matplotlib, and Seaborn to analyze and visualize real-world data.
          </p>
          <p className="mt-2">
            <b>🔹 Example: Analyzing Sales Data</b><br />
            Load and analyze a CSV dataset:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv('sales.csv')\nsns.barplot(data=df, x='Month', y='Sales')\nplt.show()`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Example: Numerical Analysis</b><br />
            Use NumPy for computations:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv('data.csv')\nmean = np.mean(df['Price'])\nprint(mean)`}
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
                  <td className="border border-green-400 p-2">Pandas</td>
                  <td className="border border-green-400 p-2">groupby()</td>
                  <td className="border border-green-400 p-2">Group data for aggregation</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">NumPy</td>
                  <td className="border border-green-400 p-2">mean()</td>
                  <td className="border border-green-400 p-2">Calculate average</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">Seaborn</td>
                  <td className="border border-green-400 p-2">pairplot()</td>
                  <td className="border border-green-400 p-2">Visualize pairwise relationships</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write code combining NumPy, Pandas, Matplotlib, or Seaborn for data analysis or visualization (e.g., sns.barplot() or np.mean(df["col"])).',
      check: (code) => {
        const result = /(np|pd|plt|sns)\.\w+\s*\(.+\)/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use NumPy, Pandas, Matplotlib, or Seaborn, e.g., sns.barplot() or np.mean(df["col"]).',
      success: '✅ Great! You worked with a real-world dataset.'
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
          console.log("Completing Level 5");
          localStorage.setItem("level5Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 5: Data Handling and Libraries</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 5, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level4Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 5: Data Handling and Libraries</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 4 First</h3>
          <p>
            You need to complete Level 4 before accessing Level 5. Go back and finish the Standard Libraries & Modules lessons!
          </p>
          <Link href="/level4" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 4
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 5: Data Handling and Libraries</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 5</h2>
          <Link href="/level6" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 6 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}