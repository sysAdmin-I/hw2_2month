// 1 задание
var arr = [10, 20, 30, 50, 235, 3000];
for(let i of arr){
  if(String(i)[0]==="1" || String(i)[0]==="2" || String(i)[0]==="5"){
    console.log(i)
  }

}


for (var a = 20; a >= 0; a--) {
  console.log(a);
}



var colors = prompt("Введите один цвет, из трех цветов светофора (красный, желтый, зеленый)");

var obj = {
  color1: "red",
  color2: "yellow!",
  color3: "green"
};
if(colors === obj.color1){
    alert("stop")
}else if(colors === obj.color2){
  alert("wait")
}else if(colors === obj.color3){
  alert("go")
}else{
  alert("choose one from this list : red , yellow , green")
}

