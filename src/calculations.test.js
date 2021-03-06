////---- Testing 'calculations.js' file ----////

import { calculateBiorhythms } from './calculations';

//* NB: run cmd 'npm test' in the cmd of VS Code or Windows to run the tests

// 'it()' => allows us to 'Write / Describe' one 'Individual test (takes 2 args)'
it('Calculates the physical biorhythm', () => {
    //-- const { X } = Y; => This is an 'Object Distructure (Distructuring)' --> Means that we want to extract properties from 'Y' & Store them on 'X'
    const { physical } = calculateBiorhythms('1992-08-03', '2020-12-10');
    // 'expect' func => used every time you want to test a value. You will rarely call expect by itself.
    //-- 'toEqual' func => Used when you want to check that two objects have the same value
    //--                => This matcher recursively checks the equality of all fields, rather than checking for object identity.
    //--                ==> in our case :: we expect that our 'result === 0.9977'
    //--- 'toBeCloseTo' => it's 'OK' if there is a 'very small difference' between the 'expected & actual numbers'
    expect(physical).toBeCloseTo(0.9977); // '0.9977' => 'Physical' result => https://keisan.casio.com/exec/system/1340246447
});

// 'it()' => allows us to 'Write / Describe' one 'Individual test (takes 2 args)'
it('Calculates the emotional biorhythm', () => {
    //-- const { X } = Y; => This is an 'Object Distructure (Distructuring)' --> Means that we want to extract properties from 'Y' & Store them on 'X'
    const { emotional } = calculateBiorhythms('1992-08-03', '2020-12-10');
    // 'expect' func => used every time you want to test a value. You will rarely call expect by itself.
    //-- 'toEqual' func => Used when you want to check that two objects have the same value
    //--                => This matcher recursively checks the equality of all fields, rather than checking for object identity.
    //--                ==> in our case :: we expect that our 'result === 0.9977'
    //--- 'toBeCloseTo' => it's 'OK' if there is a 'very small difference' between the 'expected & actual numbers'
    expect(emotional).toBeCloseTo(-0.7818); // '-0.7818' => 'Emotional' result => https://keisan.casio.com/exec/system/1340246447
});

// 'it()' => allows us to 'Write / Describe' one 'Individual test (takes 2 args)'
it('Calculates the intellectual biorhythm', () => {
    //-- const { X } = Y; => This is an 'Object Distructure (Distructuring)' --> Means that we want to extract properties from 'Y' & Store them on 'X'
    const { intellectual } = calculateBiorhythms('1992-08-03', '2020-12-10');
    // 'expect' func => used every time you want to test a value. You will rarely call expect by itself.
    //-- 'toEqual' func => Used when you want to check that two objects have the same value
    //--                => This matcher recursively checks the equality of all fields, rather than checking for object identity.
    //--                ==> in our case :: we expect that our 'result === 0.9977'
    //--- 'toBeCloseTo' => it's 'OK' if there is a 'very small difference' between the 'expected & actual numbers'
    expect(intellectual).toBeCloseTo(-0.9096); // '-0.9096' => 'Intellectual' result => https://keisan.casio.com/exec/system/1340246447
});