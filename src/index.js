module.exports = function toReadable(number) {
	const oneDigitNumber = (n) => {
		switch (n) {
					case 0:
						return 'zero';
					case 1:
						return 'one';
					case 2:
						return 'two';
					case 3:
						return 'three';	
					case 4:
						return 'four';
					case 5:
						return 'five';
					case 6:
						return 'six';
					case 7:
						return 'seven';
					case 8:
						return 'eight';
					case 9:
						return 'nine';
	} 
}

	const twoDigitNumber = (m) => {
		switch (Math.floor(m/10)) {
				case 1:
					switch (m) {
						case 10:
							return 'ten';
						case 11:
							return 'eleven';
						case 12:
							return 'twelve';
						case 13: 
							return 'thirteen';
						case 14:
							return 'fourteen';
						case 15:
							return 'fifteen';
						case 16:
							return 'sixteen';
						case 17:
							return 'seventeen';
						case 18:
							return 'eighteen';
						case 19:
							return 'nineteen';
					}
				case 2:
					if (m === 20) return 'twenty';
					return 'twenty ' + oneDigitNumber(m%20);
				case 3:
					if (m === 30) return 'thirty';
					return 'thirty ' + oneDigitNumber(m%30);
				case 4:
					if (m === 40) return 'forty';
					return 'forty ' + oneDigitNumber(m%40);
				case 5:
					if (m === 50) return 'fifty';
					return 'fifty ' + oneDigitNumber(m%50);
				case 6:
					if (m === 60) return 'sixty';
					return 'sixty ' + oneDigitNumber(m%60);
				case 7:
					if (m === 70) return 'seventy';
					return 'seventy ' + oneDigitNumber(m%70);
				case 8:
					if (m === 80) return 'eighty';
					return 'eighty ' + oneDigitNumber(m%80);
				case 9:
					if (m === 90) return 'ninety';
					return 'ninety ' + oneDigitNumber(m%90);
		} 
	}

	const moreDigitNumbers = (b) => {
		switch (Math.floor(b/100)) {
			case 1:
					if (b === 100) return 'one hundred';
					if (b % 100 < 10) return 'one hundred ' + oneDigitNumber(b%100);
					return 'one hundred ' + twoDigitNumber(b%100);
			case 2:
					if (b === 200) return 'two hundred';
					if (b % 200 < 10) return 'two hundred ' + oneDigitNumber(b%200);
					return 'two hundred ' + twoDigitNumber(b%200);
			case 3:
					if (b === 300) return 'three hundred';
					if (b % 300 < 10) return 'three hundred ' + oneDigitNumber(b%300);
					return 'three hundred ' + twoDigitNumber(b%300);
			case 4:
					if (b === 400) return 'four hundred';
					if (b % 400 < 10) return 'four hundred ' + oneDigitNumber(b%400);
					return 'four hundred ' + twoDigitNumber(b%400);
			case 5:
					if (b === 500) return 'five hundred';
					if (b % 500 < 10) return 'five hundred ' + oneDigitNumber(b%500);
					return 'five hundred ' + twoDigitNumber(b%500);
			case 6:
					if (b === 600) return 'six hundred';
					if (b % 600 < 10) return 'six hundred ' + oneDigitNumber(b%600);
					return 'six hundred ' + twoDigitNumber(b%600);
			case 7:
					if (b === 700) return 'seven hundred';
					if (b % 700 < 10) return 'seven hundred ' + oneDigitNumber(b%700);
					return 'seven hundred ' + twoDigitNumber(b%700);
			case 8:
					if (b === 800) return 'eight hundred';
					if (b % 800 < 10) return 'eight hundred ' + oneDigitNumber(b%800);
					return 'eight hundred ' + twoDigitNumber(b%800);
			case 9:
					if (b === 900) return 'nine hundred';
					if (b % 900 < 10) return 'nine hundred ' + oneDigitNumber(b%900);
					return 'nine hundred ' + twoDigitNumber(b%900);
		}
	}

	switch (String(number).length) {
		case 1:
			return oneDigitNumber(number);
		case 2:
			return twoDigitNumber(number);
		case 3:
			return moreDigitNumbers(number);
	}
}