//? ITERABLE
// sebuah data yang dapat di loop
let coba = "string"
// for (let i = 0; i < coba.length; i++) {
//     console.log(coba[i]);
// }

//? ARRAY
// kumpulan data
let day = ['senin', 'selasa', 'rabu', ['kamis', 'jumat', 'sabtu',]]
console.log(day[3]);
// console.log(Array.isArray(city));
// for (let i = 0; i < day.length; i++) {
//     const element = day[i];
//     console.log(element);
// }

//? PUSH
// tambahin ke paling terakhir
day.push('kamis')
day.push('jumat')


//? UNSHIFT
// tambah ke paling awal
day.unshift('coba')

//? POP
// hapus paling terakhir
day.pop()

//? SHIFT
// hapus paling awal
day.shift()

//? find highest number
let numbers = [-1, -3, -5, -10, -11]
let highestNumber = -Infinity
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (highestNumber < element) highestNumber = element
}

console.log(highestNumber);


let randomNumbers = Array.from({length: 10}, () => Math.ceil(Math.random() * 100))

console.log(randomNumbers);