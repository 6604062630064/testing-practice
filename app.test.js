const {
	capitalize,
	reverse,
	calculator,
	caesarCiper,
	analyzeArray,
} = require("./app.js");

test("Capitalizing", () => {
	expect(capitalize("abc")).toBe("ABC");
	expect(capitalize("cAz")).toBe("CAZ");
});

test("Reverse string", () => {
	expect(reverse("abc")).toBe("cba");
	expect(reverse("cAz")).toBe("zAc");
	expect(reverse("16_-_owo")).toBe("owo_-_61");
	expect(reverse("abc def")).toBe("fed cba");
});

describe("Calculator", () => {
	describe("addition", () => {
		it("should work with positive numbers", () => {
			expect(calculator.add(3, 4)).toBe(7);
		});

		it("should work with negative numbers", () => {
			expect(calculator.add(-3, -4)).toBe(-7);
		});

		it("should only accept numbers", () => {
			expect(() => calculator.add(3, "eerer")).toThrow(TypeError);
		});
	});

	describe("subtraction", () => {
		it("should work with positive numbers", () => {
			expect(calculator.subtract(3, 4)).toBe(-1);
		});

		it("should work with negative numbers", () => {
			expect(calculator.subtract(-3, -4)).toBe(1);
		});

		it("should only accept numbers", () => {
			expect(() => calculator.subtract(3, "eerer")).toThrow(TypeError);
		});
	});

	describe("division", () => {
		it("should work with positive numbers", () => {
			expect(calculator.divide(8, 4)).toBe(2);
		});

		it("should work with negative numbers", () => {
			expect(calculator.divide(-8, -4)).toBe(2);
		});

		it("should only accept numbers", () => {
			expect(() => calculator.divide(8, "4")).toThrow(TypeError);
		});

		it("should not accept 0 as divider", () => {
			expect(() => calculator.divide(8, 0)).toThrow(
				Error("Divider cannot be 0!")
			);
		});

		describe("multiple", () => {
			it("should work with positive numbers", () => {
				expect(calculator.multiply(8, 4)).toBe(32);
			});

			it("should work with negative numbers", () => {
				expect(calculator.multiply(8, -4)).toBe(-32);
			});

			it("should only accept numbers", () => {
				expect(() => calculator.multiply(8, "4")).toThrow(TypeError);
			});
		});
	});
});

describe("Caesar Cipher", () => {
	it("should only accept a-Z", () => {
		expect(() => caesarCiper("-_ABC")).toThrow(TypeError);
	});

	it("should work normally", () => {
		expect(caesarCiper("ABCDEF")).toBe("BCDEFG");
	});

	it("should work with the same case", () => {
		expect(caesarCiper("ABCDEf")).toBe("BCDEFg");
	});

	it("should work with punctuation", () => {
		expect(caesarCiper("aB CD ef")).toBe("bC DE fg");
	});
});

describe("Array Analyzer", () => {
	it("should only accept array type", () => {
		expect(() => analyzeArray("34")).toThrow(TypeError);
	});

	it("should only accept the array where it only has numbers", () => {
		expect(() => analyzeArray(["a", 3, 4, 12, 45, 999])).toThrow(TypeError);
	});

	it("should work normally", () => {
		expect(analyzeArray([3, 4, 999, -5, 1000])).toStrictEqual({
			average: 400.2,
			min: -5,
			max: 1000,
			length: 5,
		});
	});
});
