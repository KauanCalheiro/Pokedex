function captalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function addZero( num, length ) {
    var str = '' + num;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}