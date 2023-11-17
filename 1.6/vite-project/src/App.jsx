import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalFeedback = good + neutral + bad;
  const averageScore = (good - bad) / totalFeedback;
  const positivePercentage = (good / totalFeedback) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => setGood((prev) => prev + 1)}>good</button>
        <button onClick={() => setNeutral((prev) => prev + 1)}>neutral</button>
        <button onClick={() => setBad((prev) => prev + 1)}>bad</button>
      </div>
      <h1>statistics</h1>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {averageScore}</p>
        <p>positive {positivePercentage}</p>
      </div>
    </div>
  )
}

export default App