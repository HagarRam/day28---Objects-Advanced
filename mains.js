//ex2
const people = {
	person1: { name: 'John', age: 25 },
	person2: { name: 'Mike', age: 32 },
	person3: { name: 'Sara', age: 28 },
};
const lil = {
	person1: 1,
	person2: 3,
	person3: 2,
};

// 1

let firstFunction = (x) => {
	Object.keys(x);
	console.log(firstFunction);
};
//2
const secondFunction = (x) => {
	for (let a in x) {
		console.log(a.toUpperCase());
	}
};
// secondFunction();

//3
const thirdFunction = (x) => {
	let value = Object.values(x);
	console.log(value);
};
// thirdFunction(lil);
//4
const fourthFunction = (x) => {
	for (let y of Object.values(x)) {
		y = y * 2;
		console.log(y);
	}
};
// fourthFunction(lil);
//5
const fifthFunction = (x) => {
	for (let [key, value] of Object.entries(x)) {
		x[value] = key;
		x[key] = value;
	}
	return x;
};
console.log(fifthFunction(lil));

//6
const sixFunction = (x) => {
	let sum = 0;
	for (let value in Object.values(x)) {
		sum = +value;
	}
	console.log(sum);
};
sixFunction(lil);

//7
const sevenFunction = (x) => {
	let sum = 0;
	for (let value in Object.values(x)) {
		sum = +value;
	}
	let average = sum / Object.values(x).length;
	console.log(average);
};
sevenFunction(lil);
//8

//9
const checkIfPersonExist = (key, word) => {
	Object.values(key).forEach((x) => {
		if (x.name === word) {
			return true;
		} else {
			return false;
		}
	});
};
console.log(checkIfPersonExist(people, 'Mike'));
//19
const wordFrequency = (words) => {
	let wordCounts = {};
	words.forEach((word) => {
		if (wordCounts.hasOwnProperty(word.toLowerCase())) {
			wordCounts[word]++;
		} else {
			wordCounts[word.toLowerCase()] = 1;
		}
	});
	return wordCounts;
};
