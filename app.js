let displaay=document.querySelector("#display");
console.log(displaay)

let bttn=document.querySelectorAll("button")

bttn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(
            btn.value === "=" || 
            btn.value==="⌫" ){
          return ;
        }
         let find=     displaay.value += btn.value;
         console.log(find)
        
      
        
if (displaay.value.length > 7) {
    displaay.style.fontSize = "18px";
}

    });
});
let clear=document.querySelector(".clear")

clear.addEventListener("click",()=>{
    displaay.value="";
})



let equal=document.querySelector(".equal");

   equal.addEventListener("click",()=>{
  calculate()
})


function calculate(){
    let value = displaay.value;
     if (value.includes("+")) { 
        let parts = value.split("+");
         let result = Number(parts[0]) + Number(parts[1]);
          displaay.value = result; } 
    else if (value.includes("-")) {
         let parts = value.split("-");
          let result = Number(parts[0]) - Number(parts[1]);
           displaay.value = result; }
     else if (value.includes("*")) { 
        let parts = value.split("*"); 
        let result = Number(parts[0]) * Number(parts[1]);
         displaay.value = result; }
      else if (value.includes("/")) { 
        let parts = value.split("/"); 
        let result = Number(parts[0]) / Number(parts[1]);
         displaay.value = result; } 

}
let backspace=document.querySelector(".backspace");
 backspace.addEventListener("click",()=>{
  displaay.value=displaay.value.slice(0,-1);
})
