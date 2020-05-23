function counter(){
    var x = document.getElementById("DepartMents");
    console.log(x.options.length);
    var txt = "";
    for(i = 0;i<x.options.length;i++){
        txt = txt +"\n" + x.options[i].value;
    }
    alert("Count of Items in the Drop Down List is :: "+x.options.length
    +"\n"+"The items are -> "+txt);
}