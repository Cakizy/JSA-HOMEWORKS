// // TASK 1
// testNumber = num => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num > 10) {
//                 resolve(`Success`)
//             } else {
//                 reject(`Error`)
//             }
//         }, 2000);
//     })
// }
// testNumber(20)
//     .then(success => console.log(success))
//     .catch(err => console.log(err))
//     .finally(() => console.log(`Everything is done at: ${Math.round(performance.now()) / 1000}s))

// TASK 2
let myArray = [`lolz`, `troll`, `wowz`, `afas`];
let newArray = [];

const checker = elements => {
    for (const element of elements) {
        if (typeof element !== `string`) {
            return false;
        }
    }
    return true;
}

const changeAllToCaps = stringArray => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (checker(stringArray)) {
                    resolve(`Success`);
                    newArray = stringArray.map(element => element.toUpperCase());
                } else {
                    reject(`Error`);
                }

            }, 2000);
        })
    }
    // changeAllToCaps(myArray)
    //     .then(success => {
    //         console.log(success)
    //         console.log(newArray)
    //     })
    //     .catch(err => console.log(err))
    //     .finally(() => console.log(`Everything is done at: ${Math.round(performance.now()) / 1000}s))


// TASK 2.2

// element bas i ne e opisno ime za nekoja niza ...
sorting = elements => elements.sort();
let sortedCaps = [];

const changeAllToCapsSorted = stringArray => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stringArray.length <= 1) {
                reject(`ERROR BLYET: There are not enough words to be sorted`);
            } else {
                resolve(`Success`);
                sortedCaps = sorting(stringArray);
            }
        }, 2000);
    })
}

// changeAllToCapsSorted(myArray)
//     .then(succsess => {
// console.log(succsess)
// console.log(sortedCaps)

// })
//     .catch(err => {
//         console.error(err)
//     })
//     .finally(() => console.log(`Everything is done at: ${Math.round(performance.now()) / 1000}s))

// Task 2.3
changeAllToCaps(myArray)
    .then(success => {
        console.log(success);
        return changeAllToCapsSorted(newArray);
    })
    .then(success => {
        console.log(success);
        console.log(sortedCaps);
    })
    .catch(err => console.log(err))
    .finally(() => console.log(`Everything is done at: ${Math.round(performance.now()) / 1000}s`))


// Task BONUS

// param1 uste pomalce :D
const asyncFunc = async param1 => {
    try {
        let changeCaps = await changeAllToCaps(param1);
        console.log(changeCaps);
        let checkedArray = await changeAllToCapsSorted(newArray);
        console.log(checkedArray);
        console.log(sortedCaps);
        console.log(`Everything finished in ${Math.round(performance.now()) / 1000}s`);
    } catch (err) {
        console.log(err);
    }
}

asyncFunc(myArray);