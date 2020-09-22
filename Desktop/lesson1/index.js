function findValues(arr) {
    let max = undefined
    let min = undefined
    let sum = undefined

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if(max && min && sum) {
                max = arr[i] > max ? arr[i] : max
                min = arr[i] < min ? arr[i] : min
                sum = sum + arr[i]
            } else {
                max = arr[i]
                min = arr[i]
                sum = arr[i]
            }
        }
    }

    return {
        min,
        max,
        sum,
    }
}
const array =  ['1',-5, 1.23, {}, 'undefined', 74, 'qwe'];
console.log(findValues(array)) 