export default class MathUtil {
  static factorial (num: number): number {
    return num <= 1 ? 1 : num * MathUtil.factorial(num - 1)
  }

  /**
   * Similar to factorial but instead we add a number to all previous integers.
   *
   * @param num
   */
  static combineNumberWithPreviousNumbers (num: number): number {
    return num <= 1 ? num : num + MathUtil.combineNumberWithPreviousNumbers(num - 1)
  }
}
