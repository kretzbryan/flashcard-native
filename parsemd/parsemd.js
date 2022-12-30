const fs = require('fs');
const files = [
	{
		initialPath: 'search-engine-optimization/search-engine-optimization-quiz',
		newPath: 'search-engine-optimization_questions',
	},

	{
		initialPath: 'sketchup/sketchup-quiz',
		newPath: 'sketchup_questions',
	},

	{
		initialPath: 'reactjs/reactjs-quiz',
		newPath: 'reactjs_questions',
	},
	{
		initialPath: 'rest-api/rest-api-quiz',
		newPath: 'rest-api_questions',
	},
];

const extractMDQuestions = (initialPath, newPath) => {
	const fileContents = fs.readFileSync(
		`${__dirname}/${initialPath}.md`,
		'utf8'
	);
	// const { metadata, content } = parseMD(fileContents);
	// console.log(metadata);
	// console.log(content);

	const splitContents = fileContents.split('#### Q');

	const questionObjects = splitContents.slice(1).map((content, index) => {
		let splitContent = content.split('- [');
		const choiceStringMap = {
			A: true,
			B: true,
			C: true,
			D: true,
		};
		let answerDescription = [];
		let answer;
		let choices = splitContent.slice(1).map((choice) => {
			const isAnswer = choice[0] === 'x';
			let splitChoice = choice.slice(3).split('\n');

			for (let i = 0; i < splitChoice.length; i++) {
				const choiceChunk = splitChoice[i];
				if (
					choiceChunk.includes('Explanation:') ||
					choiceChunk.includes('**Explanation:**') ||
					(choiceChunk[0] === '[' && choiceChunk[1].match(/^[a-z]+$/i)) ||
					// choiceChunk.includes('[Reference]') ||
					// choiceChunk.includes('[Source:') ||
					choiceChunk.includes('![image]')
					// choiceChunk.includes('[Understanding') ||
					// choiceChunk.includes('[Res') ||
					// choiceChunk.includes('[Cache-') ||
					// choiceChunk.includes('[Code') ||
					// choiceChunk.includes('[Idempot') ||
					// choiceChunk.includes('[REST Architectural Constrain') ||
					// choiceChunk.includes('[North-South') ||
					// choiceChunk.includes('[OpenAPI') ||
					// choiceChunk.includes('[HTTP ') ||
					// choiceChunk.includes('[What is OpenID Connect') ||
					// choiceChunk.includes('[GraphQL vs') ||
					// choiceChunk.includes('[How to ea') ||
					// choiceChunk.includes('[OAuth') ||
					// choiceChunk.includes('[ref') ||
					// choiceChunk.includes('[The 5 l')
				) {
					answerDescription = [...answerDescription, ...splitChoice.slice(i)];
					splitChoice = splitChoice.slice(0, i);
					break;
				}
			}

			if (index === 31) {
				console.log('before');
				console.log('splitChoice', splitChoice);
				console.log('choice', choice);
			}

			splitChoice = splitChoice.filter((choiceChunk) => {
				return (
					choiceChunk !== 'A' &&
					choiceChunk !== 'B' &&
					choiceChunk !== 'C' &&
					choiceChunk !== 'D' &&
					choiceChunk !== ''
				);
			});

			if (isAnswer) {
				answer = splitChoice;
			}
			if (index === 31) {
				console.log('after');
				console.log('splitChoice', splitChoice);
				console.log('choice', choice);
			}

			// console.log('splitChoice', splitChoice);
			// console.log('answerDescription', answerDescription);
			return splitChoice;
		});

		let questionText = splitContent[0]
			.split('\n')
			.filter((chunk) => chunk !== '')
			.map((chunk) => chunk.replace('**\\_**', '___'));
		return {
			answerDescription: answerDescription.length ? answerDescription : null,
			questionText,
			choices,
			answer,
		};
	});

	fs.writeFileSync(
		`${__dirname}/${newPath}.json`,
		JSON.stringify(questionObjects)
	);
};

files.forEach(({ initialPath, newPath }) => {
	extractMDQuestions(initialPath, newPath);
});
