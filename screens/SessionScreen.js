import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/color_constants';
import MainView from '../components/ui/MainView';
import { useState } from 'react';
import { useEffect } from 'react';
import uuid from 'react-uuid';
const reactQuestions = require('../parsemd/reactjs_questions.json');

const SessionScreen = () => {
	const [deck, setDeck] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answeredQuestions, setAnsweredQuestions] = useState([]);
	const choiceLetters = ['A', 'B', 'C', 'D'];
	const shuffle = (array) => {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex != 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	};

	const handleAnswer = (correctAnswer, chosenAnswer) => {
		const answerAttempt = {
			id: uuid(),
			deck_id: uuid(),
			session_id: uuid(),
			multichoice_question_id: uuid(),
			answeredCorrectly: correctAnswer === chosenAnswer,
			answer_snapshot: chosenAnswer,
		};
		setAnsweredQuestions([...answeredQuestions, answerAttempt]);
	};

	useEffect(() => {
		const shuffledQuestions = shuffle(reactQuestions);
		setDeck(shuffledQuestions.slice(1));
	}, []);
	return (
		<MainView>
			<View style={styles.container}>
				<View style={styles.progressBar}></View>
				<View style={styles.questionSection}>
					{reactQuestions
						? reactQuestions[50].questionText.map((chunk, index) =>
								chunk.includes('```') ? null : (
									<Text
										key={`question-text-${index}`}
										style={[styles.question]}>
										{chunk}
									</Text>
								)
						  )
						: null}
				</View>
				<ScrollView contentContainerStyle={styles.answerSection}>
					{reactQuestions
						? reactQuestions[50].choices.map((choice, choiceIndex) => {
								return (
									<Pressable style={styles.answer} key={choiceIndex}>
										{choice.map((choiceChunk, choiceChunkIndex) => {
											return choiceChunk.includes('```') ? null : (
												<Text
													style={[styles.question, styles.answerText]}
													key={`${choiceIndex}--${choiceChunkIndex}`}>
													{choiceChunkIndex === 0 ||
													(choiceChunkIndex === 1 && choice[0].includes('```'))
														? `${choiceLetters[choiceIndex]}.`
														: null}
													{choiceChunk}
												</Text>
											);
										})}
									</Pressable>
								);
						  })
						: null}
				</ScrollView>
			</View>
		</MainView>
	);
};

export default SessionScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.colorGreyBlue,
		borderTopRightRadius: 50,
		borderTopLeftRadius: 50,
		borderBottomRightRadius: 50,
		borderBottomLeftRadius: 50,
		margin: 5,
	},
	progressBar: { height: 35, flex: 0.25 },
	question: {
		fontSize: 20,
		fontWeight: 'bold',
		marginHorizontal: 30,
		color: colors.colorOffWhite,
		marginBottom: 15,

		// flex: 4,
	},
	answer: {
		backgroundColor: colors.colorLightGrey,
		width: '90%',
		marginBottom: 5,
		minHeight: 50,
		justifyContent: 'center',
		borderRadius: 20,
	},

	answerText: {
		fontSize: 16,
		color: colors.colorGreyBlue,
		marginTop: 10,
		marginBottom: 10,
	},
	answerSection: {
		flex: 1,
		alignItems: 'center',
	},
	questionSection: {
		flex: 1,
		justifyContent: 'center',
	},
});
