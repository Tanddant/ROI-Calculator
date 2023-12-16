export const hoursToPrettyString: (hours: number) => string = (hours: number) => {
    let days = hours / 24;
    let weeks = days / 7;
    let months = days / (365 / 12);
    let years = months / 12;

    if (hours < 1) {
        return `${(hours * 60).toFixed(2).replace(".", ",")} minute(s)`
    } else if (hours < 24) {
        return `${hours.toFixed(2).replace(".", ",")} hour(s)`
    } else if (months > 1 && months < 12) {
        return `${months.toFixed(2).replace(".", ",")} month(s)`
    } else if (months >= 12) {
        return `${years.toFixed(2).replace(".", ",")} year(s)`
    } else if (weeks > 1) {
        return `${weeks.toFixed(2).replace(".", ",")} week(s)`
    } else {
        return `${days.toFixed(2).replace(".", ",")} day(s)`
    }

}