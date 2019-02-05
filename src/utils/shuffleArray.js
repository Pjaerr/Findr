const shuffleArray = (array) =>
{
	let shuffledArray = array;

	let counter = shuffledArray.length;

	// While there are elements in the array
	while (counter > 0)
	{
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = shuffledArray[counter];
		shuffledArray[counter] = shuffledArray[index];
		shuffledArray[index] = temp;
	}

	return shuffledArray;
}

export default shuffleArray;