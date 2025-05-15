function mergeObject(obj1, obj2) {
     return Object.assign({}, obj1, obj2);

    }

    console.log(mergeObject({a: 1}, {b: 2}));
     console.log(mergeObject({x: 5}, {y: 10}));