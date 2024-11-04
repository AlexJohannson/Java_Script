/*---------------------------    first_option   ------------------------*/

let temperature1 = [
    {
        day: 'monday',
        morning: +7,
        afternoon: +13,
        evening: +8
    },
    {
        day: 'tuesday',
        morning: +4,
        afternoon: +9,
        evening: +3
    },
    {
        day: 'wednesday',
        morning: +2,
        afternoon: +5,
        evening: +2
    },
    {
        day: 'thursday',
        morning: +1,
        afternoon: +4,
        evening: 0
    },
    {
        day: 'friday',
        morning: -2,
        afternoon: +3,
        evening: 0
    },
    {
        day: 'saturday',
        morning: -2,
        afternoon: -1,
        evening: -1
    },
    {
      day: 'sunday',
      morning: -3,
      afternoon: -2,
      evening: -4
    }
]
console.log(temperature1[1]);


/*-----------------------------  second_option  ------------------------------*/

let temperature2 = [
    ['monday', +7, +13, +8],
    ['tuesday', +4, +9, +3],
    ['wednesday', +2, +5, +2],
    ['thursday', +1, +4, 0],
    ['friday', -2, +3, 0],
    ['saturday', -2, -1, -1],
    ['sunday', -3, -2, -4]
]
console.log(temperature2);