function chunk(array, size) {
    if (!array || size < 1) return []; 

    var chunkedArr = [];
    var index = 0;
    while (index < array.length) {
        chunkedArr.push(array.slice(index, index + size)); 
        index += size;
    }
    
    return chunkedArr;
    }

module.exports = chunk;