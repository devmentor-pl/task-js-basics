interface Operations {
	add: (firstNumber: number, secondNumber: number) => number;
	subtract: (firstNumber: number, secondNumber: number) => number;
	multiply: (firstNumber: number, secondNumber: number) => number;
	'**': (firstNumber: number, secondNumber: number) => number;
	'/': (firstNumber: number, secondNumber: number) => number;
	modulo: (firstNumber: number, secondNumber: number) => number;
}

export function setupCalculator(element: HTMLElement) {
	const buttonsList: HTMLUListElement = element.querySelector('#buttons-list')!;
	const display: HTMLHeadingElement = element.querySelector('#current-value')!;

	let firstNumber: number = 0;

	let previousOperation: string | null = null;
	let numberHistory: any = [];

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

	const initCalc = (event: Event): void => {
		const key = event.target as HTMLButtonElement;
		const keyValue = key.textContent!;
		const keyAction = key.dataset.action;
		let displayedNumber = display.textContent!;

		if (!keyAction) {
			checkNumber(displayedNumber, keyValue);
		}

		if (keyAction && !(keyAction === 'calculate') && !(keyAction === 'clear')) {
			calculateValue(keyAction, displayedNumber);
		}

		if (keyAction === 'clear') {
			clearHistory();
		}

		let operation = getOperation(keyAction);
		if (keyAction === 'calculate') {
			let secondNumber = parseFloat(display.textContent!);
			let result = 0;
			console.log(operation);
			numberHistory.push(secondNumber);

			for (let i = 0; i < numberHistory.length; i++) {
				if (i === 0) {
					firstNumber = numberHistory[i];
					continue;
				}
				secondNumber = numberHistory[i];
				result = operations[operation](firstNumber, secondNumber);
				firstNumber = result;
			}

			display.textContent = result.toString();
			previousOperation = 'operation';
			numberHistory = [];
		}
	};
	const checkNumber = (displayedNumber: string, keyValue: string) => {
		if (displayedNumber === '0' || previousOperation === 'operation') {
			display.textContent = keyValue;
			previousOperation = '';
		} else {
			display.textContent = displayedNumber + keyValue;
		}
		displayedNumber = display.textContent;
	};
	const showResult = (action: string) => {
		let secondNumber = parseFloat(display.textContent!);
		let result = 0;
		let operation = getOperation(action);
		console.log(operation);
		numberHistory.push(secondNumber);

		for (let i = 0; i < numberHistory.length; i++) {
			if (i === 0) {
				firstNumber = numberHistory[i];
				continue;
			}
			secondNumber = numberHistory[i];
			result = operations[operation](firstNumber, secondNumber);
			firstNumber = result;
		}

		display.textContent = result.toString();
		previousOperation = 'operation';
		numberHistory = [];
	};

	const calculateValue = (keyAction: string, displayedNumber: string) => {
		let inputNumber = parseFloat(displayedNumber);
		numberHistory.push(inputNumber);
		previousOperation = 'operation';
		let n1;
		let n2;
		console.log(numberHistory);
		if (numberHistory.length >= 2) {
			console.log(inputNumber);
			const displayNumbers: number[] = numberHistory.map((firstValue: number) => firstValue);
			const calc = getOperation(keyAction);
			n1 = displayNumbers[0];
			n2 = displayNumbers[1];

			inputNumber = calc(n1, n2);
			display.textContent = inputNumber.toString();
			numberHistory = [inputNumber];

			previousOperation = 'operation';
		} else {
			display.textContent = inputNumber.toString();
		}
	};

	const getOperation = (operation: string) => {
		return operations[operation];
	};

	const clearHistory = (): void => {
		display.textContent = '0';
		firstNumber = 0;
		previousOperation = '';
		numberHistory = [];
	};

	buttonsList.addEventListener('click', initCalc);
}
