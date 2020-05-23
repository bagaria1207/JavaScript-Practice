function longStr(str){
    var arr = str.split(" ");
    var long = "";
    for(var a in arr){
        if(arr[a].length>long.length){
            long = arr[a];
        }
    }
    return long;
}