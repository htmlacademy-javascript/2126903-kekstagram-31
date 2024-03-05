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
