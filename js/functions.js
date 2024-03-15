// Функция для проверки длины строки

function comparesStringLength(string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
}

comparesStringLength('проверяемая строка', 20);
comparesStringLength('проверяемая строка', 18);
comparesStringLength('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом.

function checksPalindrome(string) {
  const stringReplaceUpperCase = string.toUpperCase().replaceAll(' ', '');
  let invertedString = '';
  for (let i = stringReplaceUpperCase.length - 1; i >= 0; i--) {
    invertedString += stringReplaceUpperCase.at(i);
  }

  if (stringReplaceUpperCase === invertedString) {
    return true;
  } else {
    return false;
  }
}

checksPalindrome('топот');
checksPalindrome('ДовОд');
checksPalindrome('Кекс');
checksPalindrome('Лёша на полке клопа нашёл ');

const checkTime = (startDay, endDay, startMeeting, durationMeeting) => {
  const startDayNumber = startDay.split(':');
  const endDayNumber = endDay.split(':');
  const startMeetingNumber = startMeeting.split(':');

  const startDayMinutes = (+startDayNumber[0] * 60 + (+startDayNumber[1]));
  const endDayMinutes = (+endDayNumber[0] * 60 + (+endDayNumber[1]));
  const startMeetingMinutes = (+startMeetingNumber[0] * 60 + (+startMeetingNumber[1]));
  return startDayMinutes <= startMeetingMinutes && startMeetingMinutes + durationMeeting <= endDayMinutes;
};

checkTime('08:00', '17:30', '14:00', 90);

//Функция для правильного склонения числа
const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  const num1 = num % 10;
  const num2 = num % 100;

  if (num2 === 11 || num2 === 12 || num2 === 13 || num2 === 14) {
    return (genitivePlural);
  } else if (num1 >= 2 && num1 <= 4) {
    return (genitiveSingular);
  } else if (num1 === 1) {
    return (nominative);
  } else {
    return (genitivePlural);
  }
};


numDecline(38, 'рубль', 'рубля', 'рублей');
numDecline(220, 'рубль', 'рубля', 'рублей');
numDecline(12, 'гость', 'гостя', 'гостей');
numDecline(121, 'рубль', 'рубля', 'рублей');
