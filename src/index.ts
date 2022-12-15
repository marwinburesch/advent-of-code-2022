const dayNumber = process.argv[2];
let day = await import(`./${dayNumber}.js`);

console.log(await day.default());

export {};
