function findFrequency(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        console.log(arr[i] + ":" + count);
    }
}


findFrequency([1, 2, 2, 3, 3, 3]);
findFrequency([4, 4, 4, 5]);
