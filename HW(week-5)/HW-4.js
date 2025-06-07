function printObjects(obj) {
    let keys = Objects.keys(obj);
    let values = Object.values(obj);

    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i] + ":" + values[i]);
    }
}


printObjects({name: "alice", city: "delhi"});
printObjects({ x: 1, y: 2});