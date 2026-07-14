import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) {
    return <Quiz onClose={() => setShowQuiz(false)} />;
  }

  return (
    <main className="page">
      <nav className="nav">
        <div className="brand">
          <div className="logo">BFZ</div>
          <span>Built From Zero</span>
        </div>

        <button
          className="navButton"
          onClick={() => setShowQuiz(true)}
        >
          Start the assessment
        </button>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">
            The Built From Zero Starting Point
          </p>

          <h1>
            We’re here to help you find
            <span> what’s holding you back.</span>
          </h1>

          <p className="heroText">
            Most people are not stuck because they are lazy.
            They are stuck because they are guessing.
            This short assessment identifies the biggest barrier
            between you and consistent progress.
          </p>

          <button
            className="primaryButton"
            onClick={() => setShowQuiz(true)}
          >
            Show me what is holding me back →
          </button>

          <p className="smallText">
            Takes around two minutes.
          </p>
        </div>

        <div className="painCard">
          <p className="cardLabel">
            Does this feel familiar?
          </p>

          <h2>
            You are putting effort in, but something is not clicking.
          </h2>

          <div className="painList">
            <div className="painItem">
              <span>01</span>
              <div>
                <strong>You start strong, then lose momentum.</strong>
                <p>Your plan only works when the week is perfect.</p>
              </div>
            </div>

            <div className="painItem">
              <span>02</span>
              <div>
                <strong>You train, but your body is not reflecting the work.</strong>
                <p>You are doing enough to feel busy, not enough to feel certain.</p>
              </div>
            </div>

            <div className="painItem">
              <span>03</span>
              <div>
                <strong>You know the basics, but cannot make them stick.</strong>
                <p>The issue is not more information. It is the right structure.</p>
              </div>
            </div>

            <div className="painItem">
              <span>04</span>
              <div>
                <strong>You are unsure what needs fixing first.</strong>
                <p>Everything feels important, so nothing becomes the priority.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;