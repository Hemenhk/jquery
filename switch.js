/**
 * The switch statement in JS is used to perform a multi-way branch
 * based on the value of an expression. It allows you to test a single
 * expression against multiple cases, and execute different code blocks
 * based on the match.
 */

const color = 'yellow';

switch(color) {
    case 'red':
        console.log('The color is red');
        break;
    case 'green':
        console.log('The color is green');
        break;
    case 'blue':
        console.log('The color is blue');
        break;
    default:
        console.log('The color is unknown');
};