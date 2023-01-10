function bottonclick(val)
{
    document.getElementById("screen").value+=val;
}
function clearScreen(){

    document.getElementById("screen").value="";

}
function equalClick(){
 var text = document.getElementById("screen").value;
 var result = eval(text);
 document.getElementById("screen").value =  result;
}
// function action(res)
// {
//     document.getElementById("screen").value+=res;
//     var text1 = document.getElementById("screen").value
//     var  result1 = eval(text1);
//     document.getElementById("screen").value =  result1;
// }