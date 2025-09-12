"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level6() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level5Completed, setLevel5Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel5Completed(localStorage.getItem("level5Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Flask Basics and Serving Web Pages",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Flask Basics and Serving Web Pages</h4>
          <p>
            Flask is a lightweight web framework for building web applications in Python.
          </p>
          <p className="mt-2">
            <b>🔹 Creating a Flask App</b><br />
            Set up a basic Flask application:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from flask import Flask\n\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return 'Hello, Flask!'\n\nif __name__ == '__main__':\n    app.run(debug=True)`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Serving Dynamic Pages</b><br />
            Use templates with Jinja2:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from flask import Flask, render_template\n\napp = Flask(__name__)\n\n@app.route('/user/<name>')\ndef user(name):\n    return render_template('user.html', name=name)`}
            </pre>
            Create a template file <code>templates/user.html</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`<h1>Hello, {{ name }}!</h1>`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Handling Forms</b><br />
            Process form data:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from flask import Flask, request\n\napp = Flask(__name__)\n\n@app.route('/submit', methods=['POST'])\ndef submit():\n    name = request.form['name']\n    return f'Hello, {name}!'`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write Flask code to define a route (e.g., @app.route("/") or render_template()).',
      check: (code) => {
        const result = /@app\.route\s*\(.+\)|render_template\s*\(.+\)/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Define a Flask route, e.g., @app.route("/") or render_template("template.html").',
      success: '✅ Great! You created a Flask route or template.'
    },
    {
      title: "Building REST APIs with Flask",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Building REST APIs with Flask</h4>
          <p>
            Flask can create REST APIs to handle HTTP requests and JSON data.
          </p>
          <p className="mt-2">
            <b>🔹 Creating a REST Endpoint</b><br />
            Return JSON data:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.route('/api/data', methods=['GET'])\ndef get_data():\n    return jsonify({'message': 'Hello, API!'})`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Handling POST Requests</b><br />
            Accept JSON input:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from flask import Flask, request, jsonify\n\napp = Flask(__name__)\n\n@app.route('/api/add', methods=['POST'])\ndef add():\n    data = request.get_json()\n    result = data['x'] + data['y']\n    return jsonify({'result': result})`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Error Handling</b><br />
            Handle invalid requests:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from flask import Flask, jsonify, abort\n\napp = Flask(__name__)\n\n@app.route('/api/item/<int:id>')\ndef get_item(id):\n    if id <= 0:\n        abort(400, description="Invalid ID")\n    return jsonify({'id': id})`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write Flask code for a REST API endpoint (e.g., jsonify() or request.get_json()).',
      check: (code) => {
        const result = /(jsonify|request\.get_json)\s*\(.+\)/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use jsonify() or request.get_json() for a REST API endpoint.',
      success: '✅ Great! You built a REST API endpoint.'
    },
    {
      title: "Working with SQLite Databases",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Working with SQLite Databases</h4>
          <p>
            Use SQLite with Flask to store and retrieve data.
          </p>
          <p className="mt-2">
            <b>🔹 Creating a Database</b><br />
            Create a table and insert data:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import sqlite3\n\nconn = sqlite3.connect('example.db')\nc = conn.cursor()\nc.execute('''CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)''')\nc.execute("INSERT INTO users (name) VALUES (?)", ('Alex',))\nconn.commit()\nconn.close()`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Querying Data</b><br />
            Retrieve data from a table:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`import sqlite3\n\nconn = sqlite3.connect('example.db')\nc = conn.cursor()\nc.execute("SELECT * FROM users")\nusers = c.fetchall()\nprint(users)\nconn.close()`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Flask with SQLite</b><br />
            Integrate SQLite with Flask:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from flask import Flask, jsonify\nimport sqlite3\n\napp = Flask(__name__)\n\n@app.route('/users')\ndef list_users():\n    conn = sqlite3.connect('example.db')\n    c = conn.cursor()\n    c.execute("SELECT * FROM users")\n    users = c.fetchall()\n    conn.close()\n    return jsonify(users)`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code using SQLite (e.g., sqlite3.connect() or cursor.execute()).',
      check: (code) => {
        const result = /sqlite3\.connect\s*\(.+\)|execute\s*\(.+\)/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use sqlite3.connect() or cursor.execute() for SQLite operations.',
      success: '✅ Great! You worked with SQLite.'
    },
    {
      title: "Handling Authentication",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Handling Authentication in Flask</h4>
          <p>
            Use <code>flask_login</code> or session-based authentication to secure routes.
          </p>
          <p className="mt-2">
            <b>🔹 Session-based Authentication</b><br />
            Store user data in sessions:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from flask import Flask, session, redirect, url_for\n\napp = Flask(__name__)\napp.secret_key = 'secret'\n\n@app.route('/login', methods=['POST'])\ndef login():\n    session['user'] = 'Alex'\n    return redirect(url_for('dashboard'))\n\n@app.route('/dashboard')\ndef dashboard():\n    if 'user' in session:\n        return f'Welcome, {session["user"]}!'\n    return redirect(url_for('login'))`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Using flask_login</b><br />
            Manage user authentication:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from flask import Flask\nfrom flask_login import LoginManager, login_required\n\napp = Flask(__name__)\napp.secret_key = 'secret'\nlogin_manager = LoginManager(app)\n\n@app.route('/protected')\n@login_required\ndef protected():\n    return 'Protected page!'`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Password Hashing</b><br />
            Secure passwords with <code>werkzeug.security</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from werkzeug.security import generate_password_hash, check_password_hash\n\npassword = 'mypassword'\nhashed = generate_password_hash(password)\nprint(check_password_hash(hashed, 'mypassword'))  # True`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write code for authentication (e.g., session, flask_login, or werkzeug.security).',
      check: (code) => {
        const result = /(session\s*\[.+?\]|flask_login\.LoginManager\s*\(.+\)|werkzeug\.security\.(generate_password_hash|check_password_hash)\s*\(.+\))/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use session, flask_login, or werkzeug.security for authentication.',
      success: '✅ Great! You implemented authentication.'
    },
    {
      title: "Middleware and Advanced Flask Features",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Middleware and Advanced Flask Features</h4>
          <p>
            Use middleware and advanced features to enhance Flask applications.
          </p>
          <p className="mt-2">
            <b>🔹 Custom Middleware</b><br />
            Create middleware with <code>before_request</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from flask import Flask\n\napp = Flask(__name__)\n\n@app.before_request\ndef before_request():\n    print('Processing request...')`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Error Handling</b><br />
            Handle custom errors:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.errorhandler(404)\ndef not_found(error):\n    return jsonify({'error': 'Not found'}), 404`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Flask Features</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Feature</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">before_request</td>
                  <td className="border border-green-400 p-2">Run code before each request</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">after_request</td>
                  <td className="border border-green-400 p-2">Run code after each request</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">url_for</td>
                  <td className="border border-green-400 p-2">Generate URLs for routes</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write Flask code for middleware or advanced features (e.g., before_request or errorhandler).',
      check: (code) => {
        const result = /@(before_request|after_request|errorhandler\s*\(.+\))/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use @before_request, @after_request, or @errorhandler for middleware.',
      success: '✅ Great! You used Flask middleware or advanced features.'
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
          console.log("Completing Level 6");
          localStorage.setItem("level6Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 6: Web Development with Python</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 6, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level5Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 6: Web Development with Python</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 5 First</h3>
          <p>
            You need to complete Level 5 before accessing Level 6. Go back and finish the Data Handling and Libraries lessons!
          </p>
          <Link href="/level5" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 5
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 6: Web Development with Python</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 6</h2>
          <Link href="/level7" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Back to Level 7 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}