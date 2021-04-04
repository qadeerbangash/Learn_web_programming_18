// function btn(){
//     var a=document.getElementById('Example')
//     a.disabled=true
// }

// function addtocard(){
//     var i=document.getElementById("product");
//     var n=document.getElementById("name");
//     var p=document.getElementById("price");

//     console.log(i.src)
//     console.log(n.innerHTML)
//     console.log(p.innerHTML)
// }

// var list =document.getElementById("li1")
// console.log(list)

// var m =document.getElementsByClassName("li1")
// console.log(m)


// var p=document.createElement('h1');
// console.log(p)

// var p=document.createElement('h1');
// var text=document.createTextNode("Hello")
// p.appendChild(text)
// console.log(p)

// var p=document.createElement('h1');
// var text=document.createTextNode("Hello")
// p.appendChild(text)
// var m=document.getElementById("Main")
// m.appendChild(p)

function addMessage(){
    var val=document.getElementById("val")
    var p=document.createElement("p")
    var text=document.createTextNode(val.value)
    p.appendChild(text)
    var m=document.getElementById("messages")
    m.appendChild(p)

    val.value=""
}