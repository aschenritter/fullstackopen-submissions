import { useState } from "react";

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = (props) => {
	if (props.all === 0) {
		return <p>No feedback given</p>;
	}
	return (
		<table>
			<tbody>
				<StatisticLine value={props.good} text="good" />
				<StatisticLine value={props.neutral} text="neutral" />
				<StatisticLine value={props.bad} text="bad" />
				<StatisticLine value={props.all} text="all" />
				<StatisticLine value={props.average} text="average" />
				<StatisticLine value={`${props.positive} %`} text="positive" />
			</tbody>
		</table>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const all = good + neutral + bad;
	const average = all === 0 ? 0 : (good * 1 + bad * -1) / all;
	const positive = all === 0 ? 0 : (good / all) * 100;

	const handleGoodClick = () => {
		setGood(good + 1);
	};

	const handleNeutralClick = () => {
		setNeutral(neutral + 1);
	};

	const handleBadClick = () => {
		setBad(bad + 1);
	};

	return (
		<div>
			<h1> give feedback </h1>
			<Button handleClick={handleGoodClick} text="good" />
			<Button handleClick={handleNeutralClick} text="neutral" />
			<Button handleClick={handleBadClick} text="bad" />

			<h1> statistics </h1>
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				all={all}
				average={average}
				positive={positive}
			/>
		</div>
	);
};

export default App;
