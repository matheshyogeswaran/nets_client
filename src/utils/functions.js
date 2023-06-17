import jwt_decode from "jwt-decode";
const date = new Date();

export function removeHTMLTags(str) {
    if ((str === null) || (str === ''))
        return "";
    else
        str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
}

export function getLoggedinUserData() {
    return jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData
}

export function getTimeFormat(timeString) {
    const assignmentDeadline = new Date(timeString);
    const now = new Date()
    const diffInMs = (assignmentDeadline.getTime() - now.getTime()) / 60000;
    const minutes = Math.abs(Math.floor(diffInMs))
    let days = Math.floor(minutes / 1440);
    let hours = Math.floor((minutes % 1440) / 60);
    let remainingMinutes = minutes % 60;
    let result = "";
    if (days > 0) {
        result += days + " day" + (days === 1 ? "" : "s") + ", ";
    }
    if (hours > 0) {
        result += hours + " hour" + (hours === 1 ? "" : "s") + ", ";
    }
    result += remainingMinutes + " minute" + (remainingMinutes === 1 ? "" : "s");
    let status;
    if (diffInMs <= 0) {
        status = false;
    } else {
        status = true;
    }
    return { "timeString": result, "status": status };
}

export function DateInputToday() {
    const minDate = `
        ${date.getFullYear().toString().padStart(4, "0")}
        -
        ${(date.getMonth() + 1).toString().padStart(2, "0")}
        -
        ${date.getDate().toString().padStart(2, "0")}
        T
        ${date.getHours().toString().padStart(2, "0")}
        :
        ${date.getMinutes().toString().padStart(2, "0")}
    `;
    return minDate
}

export function DateInputGetMaxDate(months) {
    const maxDate = `
    ${date.getFullYear().toString().padStart(4, "0")}
    -
    ${(date.getMonth() + 1 + months).toString().padStart(2, "0")}
    -
    ${date.getDate().toString().padStart(2, "0")}
    T
    ${date.getHours().toString().padStart(2, "0")}
    :
    ${date.getMinutes().toString().padStart(2, "0")}
    `;
    return maxDate
}