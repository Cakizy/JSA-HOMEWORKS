// // TASK 1
// testNumber = num => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num > 10) {
//                 resolve(`Succsess`)
//             } else {
//                 reject(`Error`)
//             }
//         }, 2000);
//     })
// }
// testNumber(20)
//     .then(succsess => console.log(succsess))
//     .catch(err => console.log(err))
//     .finally(() => console.log(`Everything is done at: ${Math.round(performance.now()) / 1000}s))

// TASK 2
let myArray = [`lolz`, `troll`, `wowz`, `afas`];
let newArray = [];
checker = elements => {
    for (const element of elements) {
        if (typeof element != `string`) {
            return false
        }
    }
    return true;
}
changeAllToCaps = stringArray => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (checker(stringArray) === true) {
                    resolve(`Succsess`)
                    newArray = stringArray.map(element => element.toUpperCase())
                } else {
                    reject(`Error`)
                }

            }, 2000);
        })
    }
    // changeAllToCaps(myArray)
    //     .then(succsess => {
    //         console.log(succsess)
    //         console.log(newArray)
    //     })
    //     .catch(err => console.log(err))
    //     .finally(() => console.log(`Everything is done at: ${Math.round(performance.now()) / 1000}s))


// TASK 2.2

sorting = element => element.sort()
let sortedCaps = []
changeAllToCapsSorted = stringArray => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stringArray.length <= 1) {
                reject(`ERROR BLYET: There are not enough words to be sorted`)
            } else {
                resolve(`Succsess`)
                sortedCaps = sorting(stringArray)
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
// changeAllToCaps(myArray)
//     .then(succsess => {
//         console.log(succsess)
//         return changeAllToCapsSorted(newArray)
//     })
//     .then(succsess => {
//         console.log(succsess)
//         console.log(sortedCaps)
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log(`Everything is done at: ${Math.round(performance.now()) / 1000}s`))


// Task BONUS


asyncFunc = async(param1) => {
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