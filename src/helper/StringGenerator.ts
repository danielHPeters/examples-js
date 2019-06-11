enum Position {
  START = 0, END = 1
}

export default class StringGenerator {
  private static readonly RANGES = {
    ASCII: [0, 255],
    DECIMAL: [97, 122],
    UPPER_ALPHA: [65, 90],
    LOWER_ALPHA: [97, 122]
  }

  /**
   * Creates a random number ranging from min to max.
   *
   * @param min Min value
   * @param max Max value
   */
  static createRandomNumberWithinRange (min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min
  }

  static createRandomDecimalCharacter (): string {
    return String.fromCharCode(StringGenerator.createRandomNumberWithinRange(
      StringGenerator.RANGES.DECIMAL[Position.END], StringGenerator.RANGES.DECIMAL[Position.START]
    ))
  }

  static createRandomUpperCaseAlphaCharacter (): string {
    return String.fromCharCode(StringGenerator.createRandomNumberWithinRange(
      StringGenerator.RANGES.UPPER_ALPHA[Position.END], StringGenerator.RANGES.UPPER_ALPHA[Position.START]
    ))
  }

  static createRandomLowerCaseAlphaCharacter (): string {
    return String.fromCharCode(StringGenerator.createRandomNumberWithinRange(
      StringGenerator.RANGES.LOWER_ALPHA[Position.END], StringGenerator.RANGES.LOWER_ALPHA[Position.START]
    ))
  }

  /**
   * Refer to the full ascii code table.
   *
   * https://theasciicode.com.ar/
   */
  static createRandomAsciiCharacter (): string {
    return String.fromCharCode(StringGenerator.createRandomNumberWithinRange(
      StringGenerator.RANGES.ASCII[0], StringGenerator.RANGES.ASCII[1]
    ))
  }

  static createRandomLowerCaseString (length: number): string {
    let randomString = ''

    while (randomString.length < length) {
      randomString += StringGenerator.createRandomLowerCaseAlphaCharacter()
    }

    return randomString
  }

  static reverseString (string: string): string {
    return string.split('').reverse().join('')
  }

  static letterChanges (str: string) {
    let result = ''

    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i)

      if (/[a-z]/i.test(str.charAt(i))) {

        if (charCode === 90 || charCode === 122) {
          charCode -= 25
        } else {
          charCode += 1
        }
      }

      result += String.fromCharCode(charCode)
    }

    return result.replace(/[aeiou]/ig, (letter) => letter.toUpperCase())
  }

  static shiftLetter (string: string): string {
    return string.replace(/[a-z]/ig, (char) => {
      let next = String.fromCharCode(char.charCodeAt(0) + 1)

      if (/[aeiou]/g.test(next)) {
        next = next.toUpperCase()
      }

      return char === 'z' || char === 'Z' ? 'A' : next
    })
  }

  static capitalizeFirstLetters (string: string): string {
    return string
      .split(' ')
      .map(stringPart => stringPart.charAt(0).toUpperCase() + stringPart.slice(1))
      .join(' ')
  }

  static checkIfCharactersAreSurroundedByPlusCharacter (string: string): boolean {
    return string.split('').every((char, key) => {
      let valid = true

      if (char.match(/[a-z]/i)) {
        valid = string.charAt(key - 1) === '+' && string.charAt(key + 1) === '+'
      }
      return valid
    })
  }

  static findLongestWordInSentence (sentence: string) {
    const cleanedSentence = sentence.replace(/[^0-9A-Za-z\s]/g, '')
    const words = cleanedSentence.split(' ')

    words.sort((a, b) => b.length - a.length)

    return words.shift()
  }

  static sortStringCharactersByAlphabet(string: string): string {
    return string.split('').sort().join('');
  }
}
