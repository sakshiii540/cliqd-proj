import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Feed from "./components/Feed";
import BottomNav from "./components/BottomNav";
import "./components/global.css";

/**
 * App
 * Root component — composes the full Cliqd home page.
 * Layout: sticky Navbar → Stories → Feed → fixed BottomNav
 */
function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      {/* Sticky top navigation */}
      <Navbar />

      {/* Scrollable content area — padded at bottom for BottomNav */}
      <main
        style={{
          maxWidth: 480,
          margin: "0 auto",
          paddingBottom: 80,
        }}
      >
        {/* Stories row */}
        <Stories />

        {/* Post feed */}
        <Feed />
      </main>

      {/* Fixed bottom navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
