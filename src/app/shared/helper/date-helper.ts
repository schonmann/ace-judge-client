import * as moment from 'moment';

export class DateHelper {

    public static durationToTimeString(duration: moment.Duration): string {
        let hours = Math.floor(duration.asHours());
        let minutes = Math.floor(duration.asMinutes()%60);
        return `${hours}:${minutes.toString().padStart(2, '0')}`
    }

    public static getTimeStringFromDate(date : Date) : string {
        return `${date.getHours()}:${date.getMinutes()}`
    }

    public static mergeDateHour(date : Date, hour : string) {
        let d = new Date(date.getTime());
        let h = parseInt(hour.split(":")[0]);
        let m = parseInt(hour.split(":")[1]);
        d.setUTCHours(date.getUTCHours() + h + m/60.0);
        return d;
    }

    public static dateWithoutTime(date : Date) : Date {
        let d = new Date(date.getTime())
        d.setHours(0)
        d.setMinutes(0)
        return d
    }
}