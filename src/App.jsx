import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';

const firstQuestionAnswers = [
  {
    text: 'I am putting effort in but still look the same',
    profile: 'plateau',
    score: 2,
  },
  {
    text: 'I keep starting again every Monday',
    profile: 'consistency',
    score: 1,
  },
  {
    text: 'I know what to do but cannot stay consistent',
    profile: 'structure',
    score: 1,
  },
  {
    text: 'I do not know where to start',
    profile: 'direction',
    score: 1,
  },
  {
    text: 'I am always too busy',
    profile: 'time',
    score: 1,
  },
];

function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [startingAnswer, setStartingAnswer] = useState(null);

  function beginAssessment(answer) {
    setStartingAnswer(answer);
    setShowQuiz(true);
  }

  function closeAssessment() {
    setShowQuiz(false);
    setStartingAnswer(null);
  }

  if (showQuiz) {
    return (
      <Quiz
        onClose={closeAssessment}
        startingAnswer={startingAnswer}
      />
    );
  }

  return (
    <main className="page">
      <nav className="nav">
        <div className="brand">
          <div className="logo">BFZ</div>
          <span>Built From Zero</span>
        </div>

        <a
          className="navButton"
          href="https://linktr.ee/Builtfromzero?"
          target="_blank"
          rel="noreferrer"
        >
          Apply for coaching
        </a>
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
            They are stuck because they are guessing. Answer seven short
            questions to identify the biggest barrier between you and
            consistent progress.
          </p>

          <div className="homeQuestion">
            <div className="homeAssessmentTop">
              <span className="assessmentPill">
                2 minute assessment
              </span>

              <span className="homeQuestionCount">
                Question 1 of 7
              </span>
            </div>

            <div className="homeProgress">
              <span className="homeProgressActive">1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
            </div>

            <p className="homeQuestionLabel">
              Step 1 — Your current frustration
            </p>

            <h2>
              What feels most frustrating about your progress right now?
            </h2>

            <p className="homeQuestionHelp">
              Choose the answer that feels closest. Your next question
              will load automatically.
            </p>

            <div className="homeAnswerList">
              {firstQuestionAnswers.map((answer, index) => (
                <button
                  type="button"
                  className="homeAnswerButton"
                  key={answer.text}
                  onClick={() => beginAssessment(answer)}
                >
                  <span className="answerLetter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span>{answer.text}</span>

                  <span className="answerArrow">→</span>
                </button>
              ))}
            </div>

            <p className="homeQuestionPrivacy">
              Your answers are used to build your personalised Starting
              Point report.
            </p>
          </div>
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
                <strong>
                  You start strong, then lose momentum.
                </strong>

                <p>
                  Your plan only works when the week is perfect.
                </p>
              </div>
            </div>

            <div className="painItem">
              <span>02</span>

              <div>
                <strong>
                  You train, but your body is not reflecting the work.
                </strong>

                <p>
                  You are doing enough to feel busy, not enough to feel
                  certain.
                </p>
              </div>
            </div>

            <div className="painItem">
              <span>03</span>

              <div>
                <strong>
                  You know the basics, but cannot make them stick.
                </strong>

                <p>
                  The issue is not more information. It is the right
                  structure.
                </p>
              </div>
            </div>

            <div className="painItem">
              <span>04</span>

              <div>
                <strong>
                  You are unsure what needs fixing first.
                </strong>

                <p>
                  Everything feels important, so nothing becomes the
                  priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="contentSection foundersSection">
  <div className="foundersGrid">
    <article className="founderCard">
      <div className="founderImageWrap">
        <img
          src="/images/coaches/Jonny.png"
          alt="Jonny Carter"
          className="founderImage"
        />
      </div>

      <div className="founderDetails">
        <h3>Jonny Carter</h3>
        <p>Co-Founder &amp; Coach</p>
      </div>
    </article>

    <article className="founderCard">
      <div className="founderImageWrap">
        <img
          src="/images/coaches/Ben.png"
          alt="Ben Neilson"
          className="founderImage"
        />
      </div>

      <div className="founderDetails">
        <h3>Ben Neilson</h3>
        <p>Co-Founder &amp; Coach</p>
      </div>
    </article>
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
            <p className="cardLabel">
              Built From Zero is for you if
            </p>

            <ul>
              <li>You are tired of repeatedly starting again.</li>
              <li>
                You want to lose body fat or build muscle properly.
              </li>
              <li>You need structure around a busy schedule.</li>
              <li>
                You want guidance without fitness taking over your life.
              </li>
              <li>
                You are prepared to be consistent and communicate.
              </li>
            </ul>
          </div>

          <div className="fitCard negativeCard">
            <p className="cardLabel">
              We may not be right for you if
            </p>

            <ul>
              <li>You are looking for a quick fix.</li>
              <li>
                You want results without changing your habits.
              </li>
              <li>You expect every week to be perfect.</li>
              <li>
                You are only looking for a generic workout plan.
              </li>
              <li>
                You are not currently ready to commit to the process.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionHeader">
          <p className="eyebrow">
            The Built From Zero method
          </p>

          <h2>
            Progress comes from getting the important things working
            together.
          </h2>
        </div>

        <div className="methodGrid">
          <div className="methodCard">
            <span>01</span>
            <h3>Training</h3>

            <p>
              A clear programme designed around your goal and ability.
            </p>
          </div>

          <div className="methodCard">
            <span>02</span>
            <h3>Nutrition</h3>

            <p>
              A realistic approach that supports progress and your
              lifestyle.
            </p>
          </div>

          <div className="methodCard">
            <span>03</span>
            <h3>Accountability</h3>

            <p>
              Regular check-ins, honest feedback and clear next steps.
            </p>
          </div>

          <div className="methodCard">
            <span>04</span>
            <h3>Lifestyle</h3>

            <p>
              A routine that still works when work and life become busy.
            </p>
          </div>
        </div>
      </section>

      <section className="finalCta" id="coaching">
        <p className="eyebrow">
          Ready for 1-to-1 support?
        </p>

        <h2>
          Apply for Built From Zero coaching.
        </h2>

        <p>
          Already know you need structure, accountability and a plan built
          around you? Apply for coaching and tell us what you
          are working towards.
        </p>

        <a
          className="primaryButton"
          href="https://linktr.ee/Builtfromzero?"
          target="_blank"
          rel="noreferrer"
        >
          Apply for coaching →
        </a>
      </section>
    </main>
  );
}

export default App;