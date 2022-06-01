const solution = (input) => {
    let arr = []

    let tempt = input
    for (let i = 0; i < input; i++) {
        tempt = tempt / 2
        arr.push(tempt)
    }
    console.log(arr)
}

solution(4)