$(()=>{
    $(".test").text("Hello World!!!");
});

var arr = [];
var fstVal, secVal, opr, y;
var val = 0;
var opname = ["add", "subtract", "multiply", "divide", "percent", "des"];
var inpt = document.querySelector("input");

document.querySelectorAll(".numKey").forEach(el =>{
    el.onclick = ()=> 
    (inpt.value = inpt.value !== "0"? inpt.value + el.innerText : el.innerText )
})

document.querySelector(".opKey[op=clear]").onclick = () =>{
    inpt.value = 0;
    arr.length = 0;
}

document.querySelector(".opKey[op=back]").onclick = () =>{
    var xx = inpt.value;
    console.log(xx.substring(0, xx.length-1));
    if(xx === "0"){inpt.value = 0}
    else if(xx.length) { inpt.value =  xx.substring(0, xx.length-1)}
    else if (xx.length = 1){ inpt.value = 0}
    else{ inpt.value = 0}
}

document.querySelector(".opKey[op=negate]").onclick = ()=>
inpt.value = -(parseFloat(inpt.value))

for (let itm of opname){
        document.querySelector(`.calKey[op=${itm}]`).onclick = ()=>{
        opr = document.querySelector(`.calKey[op=${itm}]`).getAttribute("op");
        if(opr === "percent"){ 
             inpt.value = parseFloat(inpt.value) * 0.01
         }
        else if (opr === "des"){
            var x = inpt.value + "."
            console.log("x = " + inpt.value + ".")
            inpt.value = x;
        }
        else
            {   
                fstVal = inpt.value;
                inpt.value = "";
                arr.push(fstVal);
                console.log(opname)
            }
    }
}

document.querySelector(".eqKey").onclick = () => {
    console.log(inpt.value)

        if(arr && arr.length){
             if (opr === "add"){
                 arr.map((y)=>{
                 inpt.value = parseFloat(inpt.value) + parseFloat(y)
                 })
                  arr.length=0;
             }
             else if (opr === "multiply"){
                 arr.map((y)=>{
                 inpt.value = parseFloat(inpt.value) * parseFloat(y)
                 })
                  arr.length=0;
             }
             else if (opr === "subtract"){
                arr.map((y)=>{
                inpt.value = parseFloat(y) - parseFloat(inpt.value) 
                })
                 arr.length=0;
            }
            else if (opr === "divide"){
                arr.map((y)=>{
                inpt.value = parseFloat(y) / parseFloat(inpt.value);
                })
                 arr.length=0;
            }
            else {
                inpt.value = "ERR";
                 arr.length=0;
            }


     }
}


