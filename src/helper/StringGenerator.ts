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
}
