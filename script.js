// let i_1 = [`Amin`, `Aminjon`, `bvnkdsjvbucsn`]
// let max
// for (let item of i_1) {

//     max = Math.max(item.length)
// }
// console.log(max);

let i
let f = [0, 1];
for (i = 2; i <= 10; i++) {
    f[i] = f[i - 2] + f[i - 1];
    console.log(f[i]);
}
