
import "./globals.css";
import { AuthProvider } from "@/components/AuthContext";
import Navbar from "@/components/Navbar";
import Script from "next/script";

export const metadata = {
  title: "Zyqentra - Python",
  description: "Learn Python step by step",
  icons: {
    icon: "/favicon.png", // ✅ Path to your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script
          src="https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <AuthProvider>
          <Navbar />

          <div className="app">
           {/* <header className="header">
              <h1>Zyqentra</h1>
              <p>Level up your coding skills step by step</p>
            </header>*/}

            {/* Page Content */}
            <main>{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
