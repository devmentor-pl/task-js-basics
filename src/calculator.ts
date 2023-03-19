type CalcOperation = (firstNumber: number, secondNumber: number) => number;
interface Operations {
	add: (firstNumber: number, secondNumber: number) => number;
	subtract: (firstNumber: number, secondNumber: number) => number;
	multiply: (firstNumber: number, secondNumber: number) => number;
	'**': (firstNumber: number, secondNumber: number) => number;
	'/': (firstNumber: number, secondNumber: number) => number;
	modulo: (firstNumber: number, secondNumber: number) => number;
}
const addition = (firstNumber: number, secondNumber: number): number => {
	return firstNumber + secondNumber;
};
const subtraction = (firstNumber: number, secondNumber: number): number => {
	return firstNumber - secondNumber;
};
const multiplication = (firstNumber: number, secondNumber: number): number => {
	return firstNumber * secondNumber;
};
const exponentiation = (firstNumber: number, secondNumber: number): number => {
	return firstNumber ** secondNumber;
};
const division = (firstNumber: number, secondNumber: number): number => {
	return firstNumber / secondNumber;
};
const modulus = (firstNumber: number, secondNumber: number): number => {
	return firstNumber % secondNumber;
};
const operations: Operations = {
	add: addition,
	subtract: subtraction,
	multiply: multiplication,
	'**': exponentiation,
	'/': division,
	modulo: modulus,
};
// const calcValue = (firstNumber: string | number, secondNumber: string | number, operation: CalcOperation) => {
//     return firstNumber operation secondNumber
// };

export function setupCalculator(element: HTMLElement) {
	const buttonsList: HTMLUListElement = element.querySelector('#buttons-list')!;
	const display: HTMLHeadingElement = element.querySelector('#current-value')!;
	const numberArray: number[] = [];

	const getOperation = (operation: any): void => {
		operations[operation];
	};
	const getNumber = (event: Event): void => {
		const key = event.target as HTMLButtonElement;
		const keyValue = key.textContent!;
		const keyAction = key.dataset.action;
		let displayedNumber = display.textContent!;

		if (!keyAction) {
			if (displayedNumber === '0') {
				display.textContent = keyValue;
			} else {
				display.textContent = displayedNumber + keyValue;
			}
		}

		if (keyAction && !(keyAction === 'calculate')) {
			numberArray.push(parseFloat(displayedNumber));
			display.textContent = '0';
			getOperation(keyAction);
		}
		if (keyAction === 'calculate') {
            console.log(object);
			// getResult();
		}
	};

	buttonsList.addEventListener('click', getNumber);
}
