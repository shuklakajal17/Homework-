    function removeDuplicates(arr) {
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            if (result.includes(arr[i])){
                result.push(arr[i]);
            }
        }
        return result;
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
    console.log(removeDuplicates([5, 5, 6, 7, 7]));