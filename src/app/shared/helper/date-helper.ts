import * as moment from 'moment';

export class DateHelper {
    public static durationToHours(duration: moment.Duration): any {
        return Math.floor(duration.asHours())
    }
}