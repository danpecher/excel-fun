const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function letterToNumber(char: string): number {
  if (char.length != 1) {
    throw new Error("Not a character");
  }

  const result = letters.indexOf(char);

  if (result < 0) {
    throw new Error("Not a character");
  }

  return result;
}

export function numberToLetter(number: number): string {
  return letters[number];
}

export function numberToColumns(number: number): string {
  const letter = numberToLetter(number % 26);

  const division = Math.floor(number / 26);

  if (division <= 0) {
    return letter;
  }

  return numberToColumns(division - 1) + letter;
}

export function columnsToNumber(column: string): number {
  const letters = column.split("");
  const currentLetter = letters.shift()!;
  const number = letterToNumber(currentLetter);

  console.log(`${currentLetter} = ${number + 1} x 26^${column.length - 1}`);

  if (letters.length == 0) {
    return number;
  }

  const position = column.length - 1;
  const addition = (number + 1) * 26 ** position;

  return addition + columnsToNumber(letters.join(""));
}
