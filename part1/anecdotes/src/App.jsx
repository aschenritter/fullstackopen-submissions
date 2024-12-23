import { useState } from "react";

const Anecdote = ({ text, votes }) => (
	<>
		<p>{text}</p>
		<p>has {votes} votes</p>
	</>
);

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	const [selected, setSelected] = useState(
		Math.floor(Math.random() * anecdotes.length),
	);
	const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
	const mostVotesIndex = votes.indexOf(Math.max(...votes));

	const handleVoteClick = () => {
		const newVotes = [...votes];
		newVotes[selected] += 1;
		setVotes(newVotes);
	};

	const handleNextClick = () => {
		setSelected(Math.floor(Math.random() * anecdotes.length));
	};

	return (
		<div>
			<h1>Anecdote of the day</h1>
			<Anecdote text={anecdotes[selected]} votes={votes[selected]} />
			<Button handleClick={handleVoteClick} text="vote" />
			<Button handleClick={handleNextClick} text="next anecdote" />
			<h1>Anecdote with the most votes</h1>
			<Anecdote text={anecdotes[mostVotesIndex]} votes={votes[mostVotesIndex]} />
		</div>
	);
};

export default App;
