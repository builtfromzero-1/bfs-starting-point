import { useState } from 'react';

const questions = [
  {
    category: 'Your current frustration',
    question: 'What feels most frustrating about your progress right now?',
    help: 'Choose the answer that feels closest, even if more than one applies.',
    answers: [
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
    ],
  },
  {
    category: 'Training',
    question: 'Which best describes your training right now?',
    help: 'Think about the last four weeks, not your best week.',
    answers: [
      { text: 'I mostly make it up as I go', score: 1 },
      { text: 'I have a rough plan but do not track it', score: 2 },
      { text: 'I follow a plan most weeks', score: 3 },
      { text: 'I follow and track a clear programme', score: 4 },
    ],
  },
  {
    category: 'Consistency',
    question: 'How often does your routine still work when the week is not perfect?',
    help: 'Think about work pressure, weekends, tiredness and social plans.',
    answers: [
      { text: 'Almost never', score: 1 },
      { text: 'Sometimes', score: 2 },
      { text: 'Most weeks', score: 3 },
      { text: 'Nearly always', score: 4 },
    ],
  },
  {
    category: 'Nutrition',
    question: 'Which best describes your eating across the full week?',
    help: 'Include evenings, weekends and social occasions.',
    answers: [
      { text: 'It feels completely unstructured', score: 1 },
      { text: 'Good for a few days, then it slips', score: 2 },
      { text: 'Mostly consistent with a few weak spots', score: 3 },
      { text: 'Flexible, consistent and supports my goal', score: 4 },
    ],
  },
  {
    category: 'Lifestyle',
    question: 'How much does your job or routine make looking after yourself harder?',
    help: 'Think missed sessions, rushed food and constantly putting yourself last.',
    answers: [
      { text: 'It controls almost everything', score: 1 },
      { text: 'It gets in the way most weeks', score: 2 },
      { text: 'It is manageable with planning', score: 3 },
      { text: 'My routine works around it well', score: 4 },
    ],
  },
  {
    category: 'Recovery',
    question: 'How often do low energy, poor sleep or stress make consistency harder?',
    help: 'Choose what reflects most weeks, not one difficult day.',
    answers: [
      { text: 'Most days', score: 1 },
      { text: 'Several times a week', score: 2 },
      { text: 'Sometimes', score: 3 },
      { text: 'Rarely', score: 4 },
    ],
  },
  {
    category: 'Confidence',
    question: 'How confident are you that your current approach will work over the next 12 weeks?',
    help: 'This is about trust in your process, not hope.',
    answers: [
      { text: 'Not confident at all', score: 1 },
      { text: 'Unsure', score: 2 },
      { text: 'Fairly confident', score: 3 },
      { text: 'Very confident', score: 4 },
    ],
  },
];

const results = {
  plateau: {
    title: 'The Plateaued Trainer',
    summary:
      'You are probably doing enough work. The next step is making that work more intentional, measurable and progressive.',
    opportunity: 'Turn effort into evidence.',
    actions: [
      'Track the few progress markers that genuinely matter.',
      'Use a programme with clear progression.',
      'Review trends before changing direction.',
    ],
  },
  consistency: {
    title: 'The Inconsistent Achiever',
    summary:
      'You are not lacking effort. You are lacking a routine that survives real life.',
    opportunity: 'Build a plan that works on your worst week.',
    actions: [
      'Choose a realistic minimum training week.',
      'Plan around the moments that normally throw you off.',
      'Measure completed weeks before chasing faster results.',
    ],
  },
  structure: {
    title: 'The Strong Starter',
    summary:
      'You can get going. The difficulty is maintaining direction once the first burst of motivation fades.',
    opportunity: 'Replace motivation with structure.',
    actions: [
      'Set your training week before it begins.',
      'Use fewer targets and follow them more consistently.',
      'Create one weekly review point.',
    ],
  },
  direction: {
    title: 'The Direction Seeker',
    summary:
      'You do not need more information. You need fewer decisions and a clear first priority.',
    opportunity: 'Remove the second guessing.',
    actions: [
      'Choose one clear 12-week outcome.',
      'Identify the behaviour with the biggest payoff.',
      'Add complexity only after consistency exists.',
    ],
  },
  time: {
    title: 'The Busy Professional',
    summary:
      'Your routine is competing with work and life instead of being designed around them.',
    opportunity: 'Make the plan fit your calendar.',
    actions: [
      'Identify the genuine windows available in your week.',
      'Protect the highest-return habits first.',
      'Create backup options instead of missing entire weeks.',
    ],
  },
};

function Quiz({ onClose }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [profile, setProfile] = useState('direction');
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [lead, setLead] = useState({
    firstName: '',
    email: '',
    phone: '',
    consent: false,
  });

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  function selectAnswer(answer) {
    if (currentQuestion === 0 && answer.profile) {
      setProfile(answer.profile);
    }

    const updatedAnswers = [
      ...selectedAnswers,
      {
        question: question.question,
        answer: answer.text,
        score: answer.score,
      },
    ];

    setSelectedAnswers(updatedAnswers);

    if (currentQuestion === questions.length - 1) {
      setShowLeadCapture(true);
      return;
    }

    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
  }

  function goBack() {
    if (currentQuestion === 0) {
      onClose();
      return;
    }

    setSelectedAnswers((previousAnswers) =>
      previousAnswers.slice(0, -1)
    );

    setCurrentQuestion((previousQuestion) => previousQuestion - 1);
  }

  function handleLeadChange(event) {
    const { name, value, type, checked } = event.target;

    setLead((previousLead) => ({
      ...previousLead,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function submitLead(event) {
    event.preventDefault();

    if (!lead.firstName || !lead.email || !lead.consent) {
      return;
    }

    console.log('Lead details:', lead);
    console.log('Quiz answers:', selectedAnswers);
    console.log('Result profile:', profile);

    setShowLeadCapture(false);
    setShowResult(true);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setProfile('direction');
    setShowLeadCapture(false);
    setShowResult(false);
    setLead({
      firstName: '',
      email: '',
      phone: '',
      consent: false,
    });
  }

  const scoredAnswers = selectedAnswers.slice(1);

  const averageScore =
    scoredAnswers.length > 0
      ? scoredAnswers.reduce(
          (total, answer) => total + answer.score,
          0
        ) / scoredAnswers.length
      : 0;

  const score = Math.round((averageScore / 4) * 100);
  const result = results[profile];

  if (showLeadCapture) {
    return (
      <section className="quizScreen">
        <div className="quizCard leadCaptureCard">
          <div className="quizTop lightQuizTop">
            <span>Your Starting Point is ready</span>

            <button className="closeButton lightCloseButton" onClick={onClose}>
              ×
            </button>
          </div>

          <div className="progressTrack lightProgressTrack">
            <div className="progressFill" style={{ width: '100%' }} />
          </div>

          <div className="leadCaptureContent">
            <p className="leadEyebrow">Almost there</p>

            <h2>Unlock your personalised result.</h2>

            <p className="leadIntro">
              Enter your details below to see your Starting Point score,
              biggest opportunity and three recommended actions.
            </p>

            <form className="leadForm" onSubmit={submitLead}>
              <label>
                First name
                <input
                  type="text"
                  name="firstName"
                  value={lead.firstName}
                  onChange={handleLeadChange}
                  placeholder="Your first name"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  value={lead.email}
                  onChange={handleLeadChange}
                  placeholder="you@email.com"
                  required
                />
              </label>

              <label>
                Phone number <span>Optional</span>
                <input
                  type="tel"
                  name="phone"
                  value={lead.phone}
                  onChange={handleLeadChange}
                  placeholder="Your phone number"
                />
              </label>

              <label className="consentRow">
                <input
                  type="checkbox"
                  name="consent"
                  checked={lead.consent}
                  onChange={handleLeadChange}
                  required
                />

                <span>
                  I agree to Built From Zero using my details to send my
                  result and contact me about coaching.
                </span>
              </label>

              <button className="unlockButton" type="submit">
                Unlock my Starting Point report →
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  if (showResult) {
    return (
      <section className="quizScreen">
        <div className="quizCard resultCard">
          <div className="quizTop">
            <span>
              {lead.firstName}, here is your Built From Zero Starting Point
            </span>

            <button className="closeButton" onClick={onClose}>
              ×
            </button>
          </div>

          <div className="progressTrack">
            <div className="progressFill" style={{ width: '100%' }} />
          </div>

          <div className="resultGrid">
            <div className="resultSummary">
              <p className="eyebrow">Your Starting Point</p>

              <h2 className="resultTitle">{result.title}</h2>

              <p>{result.summary}</p>

              <div className="scoreNumber">{score}</div>

              <span className="scoreCaption">
                Starting Point score out of 100
              </span>
            </div>

            <div className="resultDetails">
              <p className="eyebrow">Your biggest opportunity</p>

              <h3>{result.opportunity}</h3>

              <div className="actionList">
                {result.actions.map((action, index) => (
                  <div className="actionItem" key={action}>
                    <span>{index + 1}</span>
                    <p>{action}</p>
                  </div>
                ))}
              </div>

              <a
                className="primaryButton bookingButton"
                href="https://calendly.com/builtfromzero/15-minute-introduction"
                target="_blank"
                rel="noreferrer"
              >
                Book a free 15 min consultation call →
              </a>

              <button className="restartButton" onClick={restartQuiz}>
                Run the assessment again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="quizScreen">
      <div className="quizCard lightQuizCard">
        <div className="quizTop lightQuizTop">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>

          <button className="closeButton lightCloseButton" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="progressTrack lightProgressTrack">
          <div
            className="progressFill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="quizContent">
          <p className="leadEyebrow">{question.category}</p>

          <h2 className="quizQuestion lightQuizQuestion">
            {question.question}
          </h2>

          <p className="quizHelp lightQuizHelp">
            {question.help}
          </p>

          <div className="answerList">
            {question.answers.map((answer) => (
              <button
                type="button"
                className="answerButton lightAnswerButton"
                key={answer.text}
                onClick={() => selectAnswer(answer)}
              >
                {answer.text}
                <span>→</span>
              </button>
            ))}
          </div>

          <button className="backButton lightBackButton" onClick={goBack}>
            ← Back
          </button>
        </div>
      </div>
    </section>
  );
}

export default Quiz;