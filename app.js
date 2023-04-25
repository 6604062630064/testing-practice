const capitalize = (str) => {
	return str.toUpperCase();
};

const reverse = (str) => {
	if (str === "")
		// This is the terminal case that will end the recursion
		return "";
	else return reverse(str.substr(1)) + str.charAt(0);
};

const calculator = {
	add: (a, b) => {
		if (typeof a === "number" && typeof b === "number") {
			return a + b;
		} else {
			throw new TypeError();
		}
	},

	subtract: (a, b) => {
		if (typeof a === "number" && typeof b === "number") {
			return a - b;
		} else {
			throw new TypeError();
		}
	},

	divide: (a, b) => {
		if (typeof a === "number" && typeof b === "number") {
			if (b !== 0) {
				return a / b;
			} else {
				throw new Error("Divider cannot be 0!");
			}
		} else {
			throw new TypeError();
		}
	},

	multiply: (a, b) => {
		if (typeof a === "number" && typeof b === "number") {
			return a * b;
		} else {
			throw new TypeError();
		}
	},
};

const caesarCiper = (str) => {
	const english = /^[A-Za-z\s]*$/;
	const checkString = Array.from(str).every((element) => {
		return english.test(str);
	});

	if (checkString) {
		// do stuff
		let arrStr = Array.from(str);
		let newArr = [];

		arrStr.forEach((element, i) => {
			if (element === " ") {
				newArr.push(" ");
				return;
			}

			const charCode = element.charCodeAt(0);
			newArr.push(String.fromCharCode(charCode + 1));
		});

		return newArr.join("");
	} else {
		throw new TypeError();
	}
};

const analyzeArray = (arr) => {
	if (!Array.isArray(arr)) {
		throw new TypeError();
	}

	const areNumbers = arr.every((element) => typeof element === "number");

	if (areNumbers) {
		// do stuff

		return {
			average:
				arr.reduce((accumulator, currentValue) => accumulator + currentValue) /
				arr.length,
			min: Math.min.apply(Math, arr),
			max: Math.max.apply(Math, arr),
			length: arr.length,
		};
	} else {
		throw new TypeError();
	}
};

module.exports = {
	capitalize,
	reverse,
	calculator,
	caesarCiper,
	analyzeArray,
};
