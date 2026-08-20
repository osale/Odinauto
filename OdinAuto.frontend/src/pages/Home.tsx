import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import odinAutoImage from "../assets/odin-auto.png.png";
import "../App.css";

function Home() {
  const [started, setStarted] = useState(false);

  function getStarted() {
    setStarted(true);
  }

  return (
    <div className="page">
      <Navbar />

      <div className="content hero">
        <div className="hero-text">
          <h1>Your HR knowledge, available instantly.</h1>

          <h2>Odin Auto HR Knowledge Assistant</h2>

          <p>
            Ask questions about HR policies, procedures and company documents.
          </p>

          <button onClick={getStarted}>Get Started</button>

          {started && <p>Welcome! Let's get started.</p>}
        </div>

        <div className="hero-image">
          <img src={odinAutoImage} alt="Odin Auto" />
        </div>
      </div>

      <section className="features">
        <h2>How Odin Auto helps</h2>

        <div className="feature-list">
          <div className="feature">
            <h3>📄 HR Documents</h3>
            <p>
              Store and organize important HR documents in one central place.
            </p>
          </div>

          <div className="feature">
            <h3>🤖 AI Assistant</h3>
            <p>
              Ask questions and get answers based on your company's HR
              knowledge.
            </p>
          </div>

          <div className="feature">
            <h3>🔎 Source References</h3>
            <p>See which document the AI used to provide the answer.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
