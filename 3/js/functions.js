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


