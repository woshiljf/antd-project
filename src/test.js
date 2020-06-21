function dataTransfrom(str){

    var data = str.replace(/，/g,',').split(',')
    var newarr = []
    for (var item of data) {
       item = item.replace(/[\r\n\s]/g, '').trim()
       if(item){
        newarr.push(item)
       }
    }
    return newarr
}

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        obj[key] = dataTransfrom(obj[key])
    }
}
console.log(obj)