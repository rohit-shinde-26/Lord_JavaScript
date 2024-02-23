// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};
// const newBand = band.bandName;
// console.log(newBand)


let { bandName, famousSong, ...restProps } = band;
// let { bandName:var1, famousSong, ...restProps } = band;
// console.log(var1)
console.log(bandName);
console.log(restProps);
