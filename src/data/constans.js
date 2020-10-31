import { MUSICALS, BALLET_OPERA, SHOW, DANCE_THEATER } from './data';
export const SLIDE_INFO = [
    { backgroundColor: '#ff7c7c', title: 'Slide 1' },
    { backgroundColor: '#ffb6b9', title: 'Slide 2' },
    { backgroundColor: '#8deaff', title: 'Slide 3' },
    { backgroundColor: '#ffe084', title: 'Slide 4' },
    { backgroundColor: '#d9d9d9', title: 'Slide 5' },
];

export const getPerformances = (categoryName) => {
    if (categoryName === 'MUSICALS') {
        return MUSICALS;
    } else if (categoryName === 'BALLET_OPERA') {
        return BALLET_OPERA;
    } else if (categoryName === 'SHOW') {
        return SHOW;
    } else if (categoryName === 'DANCE_THEATER'){
        return DANCE_THEATER;
    } else {
        // all performances
        return [...MUSICALS, ...BALLET_OPERA, ...SHOW, ...DANCE_THEATER]
    }
}