import { useState } from "react";

const Button = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>next anecdote</button>
    </div>
  );
};

const VoteButton = ({ handleVote }) => {
  return (
    <div>
      <button onClick={handleVote}>vote</button>
    </div>
  );
};

const AnecdoteDisplay = ({ title, anecdote, votes }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  // Array(anecdotes.length): This creates a new array with a length specified by anecdotes.length. The array is initially empty, meaning it doesn't contain any elements.
  // .fill(0): This fills each element of the array with the value 0. After this operation, every element in the array will be set to zero.
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleClick = () => setSelected((prev) => prev + 1);
  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const indexOfMaxVotes = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <VoteButton handleVote={handleVote} />
      <Button handleClick={handleClick} />

      {votes[indexOfMaxVotes] > 0 && (
        <AnecdoteDisplay title="Anecdote with Most Votes" anecdote={anecdotes[indexOfMaxVotes]} votes={votes[indexOfMaxVotes]} />
      )}
    </div>
  );
};

export default App;
