// Use this cmd: 'npm install dayjs' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
import dayjs from 'dayjs';

// export function calculateBiorhythm(birthDate, targetDate) { 
const calculateBiorhythm = (birthDate, targetDate, cycle) => { // This is the same func also but with arrows (=>) way 
    const birthDay = dayjs(birthDate).startOf('day');
    const targetDay = dayjs(targetDate).startOf('day');
    const diff = targetDay.diff(birthDay, 'days');
    return Math.sin(2 * Math.PI * diff / cycle);
};

// export function calculateBiorhythms(birthDate, targetDate) { 
export const calculateBiorhythms = (birthDate, targetDate) => { // This is the same func also but with arrows (=>) way (ES6)
    return {
        date: targetDate,
        physical: calculateBiorhythm(birthDate, targetDate, 23),
        emotional: calculateBiorhythm(birthDate, targetDate, 28),
        intellectual: calculateBiorhythm(birthDate, targetDate, 33)
    };
};

// export function calculateBiorhythmsSeries(birthDate, targetDate, size) { 
export const calculateBiorhythmsSeries = (birthDate, startDate, size) => { // This is the same func also but with arrows (=>) way (ES6)
    const series = [];
    const startDay = dayjs(startDate).startOf('day');
    for (let i = 0; i < size; i++) {
        const targetDate = startDay.add(i, 'days').toISOString();
        series.push(calculateBiorhythms(birthDate, targetDate));
    }
    return series;
};