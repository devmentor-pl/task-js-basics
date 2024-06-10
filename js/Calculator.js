function Calculator() {
	this.actions = ['+', '-', '*', '/', '^'];
	this.history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
}

Calculator.prototype.addToHistory = function(number1, number2, action, result) {
	this.history.push(operationMessage(number1, number2, action, result));
	localStorage.setItem('history', JSON.stringify(this.history));
}

Calculator.prototype.isCorrectAction = function(action) {
	return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
	const history = this.history;
	const shortenHistory = history.slice(-19);
	shortenHistory.unshift('(...)')
	
	return history.length > 20 ? shortenHistory.join('\n') : history.join('\n');
}

Calculator.prototype.clearHistory = function() {
	localStorage.clear();
	this.history = [];
}

const operationMessage = (number1, number2, action, result) => {
	return `${number1} ${action} ${number2} = ${result}`
}

Calculator.prototype.operationAction = function (number1, number2, action, result) {
	this.addToHistory(number1, number2, action , result);
	alert(operationMessage(number1, number2, action , result));
}

Calculator.prototype.add = function(number1, number2) {
	const result = number1 + number2;
	this.operationAction(number1, number2, '+' , result);
}

Calculator.prototype.sub = function(number1, number2) {
	const result = number1 - number2;
	this.operationAction(number1, number2, '-' , result);
}

Calculator.prototype.multi = function(number1, number2) {
	const result = number1 * number2;
	this.operationAction(number1, number2, '*' , result);
}

Calculator.prototype.div = function(number1, number2) {
	const result = number1 / number2;
	this.operationAction(number1, number2, '/' , result);
}

Calculator.prototype.exp = function(number1, number2) {
	try {
		if (number1 < 0 && number2 !== parseInt(number2)) {
			throw new Error('Nie można wyciągnąć pierwiastka z liczby ujemnej')
		}
		const result = number1 ** number2;
		
		this.operationAction(number1, number2, '^', result);
		
	} catch (error) {
		alert(error.message);
	}
}

Calculator.prototype.init = function() {
	const userInput = {
		action: null,
		number1: null,
		number2: null,
	}
	
	if (confirm('Wyczyścić historię operacji?')) {
		this.clearHistory()
	}
	do {
		const promptContent = `Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź.
Jeśli chcesz zrezygnować wciśnij Anuluj.
Lista poprzednich operacji:
${this.getHistoryAsString()}`
		
		userInput.action = prompt(promptContent);
		const isCorrectAction = this.isCorrectAction(userInput.action);
		
		if(isCorrectAction) {
			
			userInput.number1 = Number(prompt('Podaj liczbę nr 1'));
			userInput.number2 = Number(prompt('Podaj liczbę nr 2'));
			
			const { action, number1, number2 } = userInput;
			
			try {
				if(isNaN(number1) || isNaN(number2)) {
					throw new Error('Musisz podać liczby! Pamiętaj, że w przypadku ułamków część dziesiętna powinna być oddzielona kropką (.)')
				}
				
			} catch (error) {
				alert(error.message)
				break
			}
			
			switch (action) {
				case '+':
					this.add(number1, number2);
					break;
				case '-':
					this.sub(number1, number2);
					break;
				case '*':
					this.multi(number1, number2);
					break;
				case '/':
					this.div(number1, number2);
					break;
				case '^':
					this.exp(number1, number2);
					break;
			}
		} else if (userInput.action !== null){
			alert(
				'Podano niepoprawny symbol działania.'
			)
		} else {
			const message = `Dziękujemy za skorzystanie z kalkulatora!
${this.history.length ? `
Lista wykonanych operacji:
${this.getHistoryAsString()}` : '' }`;
			
			alert(message)
		}
		
	} while(this.isCorrectAction(userInput.action));
	
}