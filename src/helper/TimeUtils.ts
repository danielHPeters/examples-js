export default class TimeUtils {
  static readonly MINUTES_PER_HOUR = 60

  static convertMinutesToHoursAndMinutesString (minutes: number): string {
    return `${Math.floor(minutes / TimeUtils.MINUTES_PER_HOUR)}:${minutes % TimeUtils.MINUTES_PER_HOUR}`
  }
}
