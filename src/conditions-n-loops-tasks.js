/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result = a;
  if (result < b) result = b;
  if (result < c) result = c;
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let result = false;
  if (a === 0 || b === 0 || c === 0) return false;
  if (
    (a === b && a + b >= c) ||
    (a === c && a + c >= b) ||
    (b === c && c + b >= a)
  )
    result = true;
  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let nRoman = '';
  let nCurrent = num;
  if (nCurrent >= 30) {
    nRoman = 'XXX';
    nCurrent -= 30;
  }
  if (nCurrent >= 20) {
    nRoman = 'XX';
    nCurrent -= 20;
  }
  if (nCurrent >= 10) {
    nRoman = 'X';
    nCurrent -= 10;
  }
  if (nCurrent === 10) nRoman += 'X';
  if (nCurrent === 9) nRoman += 'IX';
  if (nCurrent === 8) nRoman += 'VIII';
  if (nCurrent === 7) nRoman += 'VII';
  if (nCurrent === 6) nRoman += 'VI';
  if (nCurrent === 5) nRoman += 'V';
  if (nCurrent === 4) nRoman += 'IV';
  if (nCurrent === 3) nRoman += 'III';
  if (nCurrent === 2) nRoman += 'II';
  if (nCurrent === 1) nRoman += 'I';
  return nRoman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let wordStr = '';
  const wordNumbr = (x) => {
    let word = '';
    switch (x) {
      case '-':
        word = 'minus';
        break;
      case '.':
      case ',':
        word = 'point';
        break;
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      default:
        break;
    }
    return word;
  };
  for (let i = 0; i < numberStr.length; i += 1) {
    if (wordStr !== '') wordStr += ' ';
    wordStr += wordNumbr(numberStr[i]);
  }
  return wordStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  return str === newStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  for (let i = 0; i < str.length; i += 1) {
    if (+str[i] === digit) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length <= 2) return -1;
  let sumL = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    let sumR = 0;
    for (let j = arr.length - 1; j > i; j -= 1) {
      sumR += arr[j];
    }
    if (sumL === sumR) return i;
    sumL += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = 0;
    }
  }

  let i = 0;
  let imin = 1;
  let imax = size - 1;
  let j = 0;
  let jmin = 0;
  let jmax = size - 1;
  let step = 1;
  for (let k = 1; k <= size * size; k += 1) {
    arr[i][j] = k;

    if (step === 1) {
      if (j === jmax) {
        step = 2;
        jmax -= 1;
        i += 1;
      } else {
        j += 1;
      }
    } else if (step === 2) {
      if (i === imax) {
        step = 3;
        imax -= 1;
        j -= 1;
      } else {
        i += 1;
      }
    } else if (step === 3) {
      if (j === jmin) {
        step = 4;
        jmin += 1;
        i -= 1;
      } else {
        j -= 1;
      }
    } else if (step === 4) {
      if (i === imin) {
        step = 1;
        imin += 1;
        j += 1;
      } else {
        i -= 1;
      }
    }
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrixCopy = matrix;
  let sItem = 0;
  let rItem = 0;
  let iNew = 0;
  let jNew = 0;
  for (let i = 0; i < Math.floor(matrixCopy.length / 2); i += 1) {
    for (let j = i; j < matrixCopy.length - (i + 1); j += 1) {
      for (let k = 1; k <= 4; k += 1) {
        if (k === 1) {
          iNew = j;
          jNew = matrixCopy.length - (i + 1);
          sItem = matrixCopy[iNew][jNew];
          matrixCopy[iNew][jNew] = matrixCopy[i][j];
        } else if (k === 2 || k === 3) {
          rItem = sItem;
          if (k === 2) {
            iNew = jNew;
            jNew = matrixCopy.length - (j + 1);
          } else {
            iNew = jNew;
            jNew = i;
          }
          sItem = matrixCopy[iNew][jNew];
          matrixCopy[iNew][jNew] = rItem;
        } else if (k === 4) {
          matrixCopy[i][j] = sItem;
        }
      }
    }
  }
  return matrixCopy;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const partition = (arrSort, start, end) => {
    const arrCopy = arrSort;
    const pivot = arrCopy[end];
    let i = start;

    for (let j = start; j <= end - 1; j += 1) {
      if (arrCopy[j] <= pivot) {
        [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
        i += 1;
      }
    }

    [arrCopy[i], arrCopy[end]] = [arrCopy[end], arrCopy[i]];
    return i;
  };

  const quickSort = (arrSort, start, end) => {
    if (start < end) {
      const pi = partition(arrSort, start, end);
      quickSort(arrSort, start, pi - 1);
      quickSort(arrSort, pi + 1, end);
    }
    return arrSort;
  };

  quickSort(arr, 0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let srtCopy = str;
  for (let k = 1; k <= iterations; k += 1) {
    let t1 = '';
    let t2 = '';
    for (let i = 0; i < srtCopy.length; i += 1) {
      if (i % 2 === 0) {
        t1 += srtCopy[i];
      } else {
        t2 += srtCopy[i];
      }
    }
    srtCopy = t1 + t2;
    if (srtCopy === str) return shuffleChar(str, iterations % k);
  }
  return srtCopy;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let str = `${number}`;
  const arrStrRight = [];
  const arrStrLeft = [];
  let numbMin = 0;
  let numbMax = 0;

  for (let i = str.length - 1; i > 0; i -= 1) {
    arrStrRight.push(`${str[i]}`);
    if (+str[i] > +str[i - 1]) {
      numbMin = +str[i - 1];
      numbMax = +str[i];
      arrStrRight.push(`${str[i - 1]}`);
      for (let j = 0; j < i - 1; j += 1) {
        arrStrLeft.push(`${str[j]}`);
      }
      break;
    }
  }

  arrStrRight.sort((a, b) => a - b);
  const index = arrStrRight.findIndex((e) => e > numbMin && e <= numbMax);
  const numbStr = +arrStrRight[index];
  arrStrRight.splice(index, 1);

  str = '';
  for (let i = 0; i < arrStrLeft.length; i += 1) {
    str += arrStrLeft[i];
  }
  str += numbStr;
  for (let i = 0; i < arrStrRight.length; i += 1) {
    str += arrStrRight[i];
  }

  return +str;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
