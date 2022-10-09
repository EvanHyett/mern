/* 
    Recreate Object.entries method
    Given an object,
    return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
    Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

//hashmap==python dictionary==javascript object

const obj1 = {
    name: "Pizza",
    calories: 9001,

};

//expected => [["name","Pizza"], ["calories", 9001]]

// console.log(Object.entries(obj1));


// const expected1 = [
//     ["name", "Pizza"],
//     ["calories", 9001],
// ];

function entries(obj) {
    const ouputArray = [];

    for (const property in obj) {
        let tempArray = [];
        tempArray.push(property);
        tempArray.push(obj[property]);
        ouputArray.push(tempArray);
    }

    return ouputArray;
}


console.log(entries(obj1)) 
//      [     ["name", "Pizza"],   ["calories", 9001]  ];