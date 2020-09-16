function findValues(arr) {
    let max = arr[0]
    let sum = 0
    let min = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            max = arr[i] > max ? max : max
            min = arr[i] < min ? min : min
            sum = sum + arr[i]
        }
    }

    return {
        min,
        max,
        sum
    }
}