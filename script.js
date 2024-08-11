let b1= document.getElementById("color-1");
let b2 = document.getElementById("color-2");

let num = "0123456789abcdef";

const cgen1 =()=>{
var color1="#"
for ( let i =0; i<6;i++){
color1 += num[Math.floor(Math.random()*15)];
}   
return color1

}


const but1 = () =>{
    rgb1 = cgen1();
    console.log(rgb1);
    document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2}`;
    document.getElementById("csscode").innerHTML=`background-image: linear-gradient(to right top, ${rgb1},  ${rgb2})`;
    document.getElementById("color-1").innerText=rgb1

}


const but2 = () =>{
    rgb2 = cgen1();
    console.log(rgb2);
     document.body.style.backgroundImage = `linear-gradient(to right top,${rgb1},  ${rgb2}`;
     document.getElementById("csscode").innerHTML=`background-image: linear-gradient(to right top, ${rgb1},  ${rgb2})`;
     document.getElementById("color-2").innerText=rgb2
}



// c1=(cgen())
// c2=(cgen())

// console.log(c1)
// console.log(c2)
  b1.addEventListener("click", but1);
  b2.addEventListener("click", but2);
  csscode.addEventListener("click",() => {
   navigator.clipboard.writeText(csscode.innerText);
  })

  document.body.style.backgroundImage  = ` linear-gradient(to right top, ${rgb1},#8ac07d)`;