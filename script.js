// function myLanguages(results) {
//   return Object.keys(results)
//     .filter((r) => results[r] > 59)
//     .sort((a, b) => results[b] - results[a]);
// }
// console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));

function myLanguages(results) {
  return Object.keys(results)
    .filter((r) => results[r] > 59)
    .sort((a, b) => results[b] - results[a]);
}
console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
