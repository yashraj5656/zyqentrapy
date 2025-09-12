"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level2() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level1Completed, setLevel1Completed] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel1Completed(localStorage.getItem("level1Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Classes and Objects",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Classes and Objects in Python</h4>
          <p>
            Classes define blueprints for objects, which are instances of classes.
          </p>
          <p className="mt-2">
            <b>🔹 Defining a Class</b><br />
            Use the <code>class</code> keyword:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`class Dog:\n    def bark(self):\n        return "Woof!"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Creating Objects</b><br />
            Instantiate a class to create an object:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`my_dog = Dog()\nprint(my_dog.bark())  # Woof!`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Attributes</b><br />
            Classes can have attributes (data):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        return f"{self.name} says Woof!"\n\nmy_dog = Dog("Buddy")\nprint(my_dog.name)  # Buddy`}
            </pre>
            The <code>self</code> parameter refers to the instance.
          </p>
        </div>
      ),
      task: 'Define a class with at least one method (e.g., class Cat: def meow(self): return "Meow!").',
      check: (code) => {
        const result = /^\s*class\s+\w+\s*:\s*\n\s+def\s+\w+\s*\(self.*\):/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Define a class with a method, e.g., class Cat: def meow(self): ...',
      success: '✅ Great! You defined a class with a method.'
    },
    {
      title: "Inheritance",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Inheritance in Python</h4>
          <p>
            Inheritance allows a class to inherit attributes and methods from another class.
          </p>
          <p className="mt-2">
            <b>🔹 Parent and Child Classes</b><br />
            Define a parent class and a child class that inherits from it:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return "I make a sound"\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} says Woof!"\n\nmy_dog = Dog("Buddy")\nprint(my_dog.speak())  # Buddy says Woof!`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Using super()</b><br />
            Call the parent class's methods:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`class Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed`}
            </pre>
          </p>
        </div>
      ),
      task: 'Create a child class that inherits from a parent class (e.g., class Dog(Animal): ...).',
      check: (code) => {
        const result = /^\s*class\s+\w+\s*\(\w+\)\s*:/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Define a child class that inherits from a parent, e.g., class Dog(Animal): ...',
      success: '✅ Great! You created a child class with inheritance.'
    },
    {
      title: "Encapsulation",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Encapsulation in Python</h4>
          <p>
            Encapsulation hides data and exposes it through methods, often using private attributes.
          </p>
          <p className="mt-2">
            <b>🔹 Private Attributes</b><br />
            Use double underscores (<code>__</code>) to make attributes private:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n    def deposit(self, amount):\n        self.__balance += amount\n    def get_balance(self):\n        return self.__balance\n\naccount = BankAccount(1000)\naccount.deposit(500)\nprint(account.get_balance())  # 1500`}
            </pre>
            Private attributes like <code>__balance</code> cannot be accessed directly (e.g., <code>account.__balance</code> raises an error).
          </p>
          <p className="mt-2">
            <b>🔹 Getters and Setters</b><br />
            Use methods to access or modify private attributes:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n    def set_balance(self, balance):\n        if balance >= 0:\n            self.__balance = balance`}
            </pre>
          </p>
        </div>
      ),
      task: 'Define a class with a private attribute (e.g., self.__name) and a method to access it.',
      check: (code) => {
        const result = /self\.__\w+\s*=.*\n\s*def\s+\w+\s*\(self.*\):/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Define a class with a private attribute (self.__name) and a method.',
      success: '✅ Great! You implemented encapsulation with a private attribute.'
    },
    {
      title: "Polymorphism",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Polymorphism in Python</h4>
          <p>
            Polymorphism allows different classes to share the same method name with different implementations.
          </p>
          <p className="mt-2">
            <b>🔹 Method Overriding</b><br />
            Child classes can override parent methods:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`class Animal:\n    def speak(self):\n        return "Sound"\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof!"\n\nclass Cat(Animal):\n    def speak(self):\n        return "Meow!"\n\nanimals = [Dog(), Cat()]\nfor animal in animals:\n    print(animal.speak())`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Polymorphism with Functions</b><br />
            Use a common interface for different types:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`def make_sound(animal):\n    return animal.speak()\n\nprint(make_sound(Dog()))  # Woof!`}
            </pre>
          </p>
        </div>
      ),
      task: 'Define two classes with a common method name (e.g., speak) but different implementations.',
      check: (code) => {
        const result = /(class\s+\w+\s*:.*\n\s*def\s+\w+\s*\(self\):.*\n\s*class\s+\w+\s*:.*\n\s*def\s+\w+\s*\(self\):)/ms.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Define two classes with a common method name but different implementations.',
      success: '✅ Great! You demonstrated polymorphism.'
    },
    {
      title: "Special Methods and Real-world Example",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Special Methods and Real-world OOP</h4>
          <p>
            Special methods (magic methods) customize class behavior.
          </p>
          <p className="mt-2">
            <b>🔹 __init__ and __str__</b><br />
            <code>__init__</code> initializes objects, and <code>__str__</code> defines string representation:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n    def __str__(self):\n        return f"{self.title} by {self.author}"\n\nbook = Book("Python 101", "Jane Doe")\nprint(book)  # Python 101 by Jane Doe`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Real-world Example: Library System</b><br />
            Combine OOP concepts in a practical example:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`class Library:\n    def __init__(self):\n        self.__books = []\n    def add_book(self, book):\n        self.__books.append(book)\n    def list_books(self):\n        return [str(book) for book in self.__books]\n\nlibrary = Library()\nlibrary.add_book(Book("Python 101", "Jane Doe"))\nprint(library.list_books())  # ['Python 101 by Jane Doe']`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Other Special Methods</b><br />
            <code>__len__</code>: Return length of an object<br />
            <code>__eq__</code>: Compare objects for equality
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`class Book:\n    def __len__(self):\n        return len(self.title)`}
            </pre>
          </p>
        </div>
      ),
      task: 'Define a class with a special method like __init__ or __str__ (e.g., class Book: def __str__(self): ...).',
      check: (code) => {
        const result = /def\s+__(init|str|len|eq)__\s*\(self.*\):/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Define a class with a special method like __init__ or __str__.',
      success: '✅ Great! You used a special method.'
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
          console.log("Completing Level 2");
          localStorage.setItem("level2Completed", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 2: Master Object-Oriented Programming</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 2, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level1Completed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 2: Master Object-Oriented Programming</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 1 First</h3>
          <p>
            You need to complete Level 1 before accessing Level 2. Go back and finish the Python Basics lessons!
          </p>
          <Link href="/level1" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 1
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 2: Master Object-Oriented Programming</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 2</h2>
          <Link href="/level3" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 3 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}