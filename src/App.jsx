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

      <section className="contentSection">
        <div className="sectionHeader">
          <p className="eyebrow">Who we are</p>
          <h2>
            Coaching built around your real life.
          </h2>
        </div>

        <div className="introGrid">
          <div className="contentCard">
            <h3>Built From Zero</h3>

            <p>
              Built From Zero is a coaching company focused on helping
              people lose body fat, build muscle and improve their health
              and performance.
            </p>

            <p>
              We combine training, nutrition, accountability and lifestyle
              support into one clear system built around the individual.
            </p>
          </div>

          <div className="contentCard">
            <h3>What we do differently</h3>

            <p>
              We do not give everyone the same plan and hope it works.
              We identify what is currently holding you back, build around
              your schedule and adjust the process as your life changes.
            </p>

            <p>
              The goal is not perfection. The goal is an approach you can
              follow long enough to create meaningful results.
            </p>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionHeader">
          <p className="eyebrow">Is this for you?</p>

          <h2>
            We work best with people who are ready for a proper process.
          </h2>
        </div>

        <div className="fitGrid">
          <div className="fitCard positiveCard">
            <p className="cardLabel">Built From Zero is for you if</p>

            <ul>
              <li>You are tired of repeatedly starting again.</li>
              <li>You want to lose body fat or build muscle properly.</li>
              <li>You need structure around a busy schedule.</li>
              <li>You want guidance without fitness taking over your life.</li>
              <li>You are prepared to be consistent and communicate.</li>
            </ul>
          </div>

          <div className="fitCard negativeCard">
            <p className="cardLabel">We may not be right for you if</p>

            <ul>
              <li>You are looking for a quick fix.</li>
              <li>You want results without changing your habits.</li>
              <li>You expect every week to be perfect.</li>
              <li>You are only looking for a generic workout plan.</li>
              <li>You are not currently ready to commit to the process.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionHeader">
          <p className="eyebrow">The Built From Zero method</p>

          <h2>
            Progress comes from getting the important things working together.
          </h2>
        </div>

        <div className="methodGrid">
          <div className="methodCard">
            <span>01</span>
            <h3>Training</h3>
            <p>A clear programme designed around your goal and ability.</p>
          </div>

          <div className="methodCard">
            <span>02</span>
            <h3>Nutrition</h3>
            <p>A realistic approach that supports progress and your lifestyle.</p>
          </div>

          <div className="methodCard">
            <span>03</span>
            <h3>Accountability</h3>
            <p>Regular check-ins, honest feedback and clear next steps.</p>
          </div>

          <div className="methodCard">
            <span>04</span>
            <h3>Lifestyle</h3>
            <p>A routine that still works when work and life become busy.</p>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <p className="eyebrow">Find your starting point</p>

        <h2>
          Stop guessing what needs fixing first.
        </h2>

        <p>
          Complete the assessment and discover the biggest opportunity
          in your current approach.
        </p>

        <button
          className="primaryButton"
          onClick={() => setShowQuiz(true)}
        >
          Start the two-minute assessment →
        </button>
      </section>
    </main>
  );
}

export default App;