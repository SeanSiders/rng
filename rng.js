/*
rng generates random numbers within [min, max] inclusive.
An array of random numbers will be returned if the caller specifies a values for "randCount" larger than 1.
*/

function rng(min, max, randCount = 1) {
    let rands = [];

    if (min > max) throw new Error('"min" must be less than or equal to "max"');
    if (randCount <= 0) throw new Error('"randCount" must be a positive non-zero integer');

    for (let i = 0; i < randCount; ++i)
        rands.push(Math.floor(min + Math.random() * (max - min + 1)));

    // If only one number was generated return an int rather than an array
    return  randCount > 1 ? rands : rands[0];
}

export default rng;