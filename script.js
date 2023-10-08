var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
// var remove = document.querySelector("#remove")
var cheack = 0
btn.addEventListener("click",function(){
    if(cheack==0)
    {istatus.innerHTML = "Friends"
    console.log("bn gye friend")
    btn.innerHTML = "Remove friend"
        cheack=1
    }
    else{
        istatus.innerHTML = "strangers"
    console.log("katti")
    btn.innerHTML = "Add friend"

        cheack=0
    }
})
// remove.addEventListener("click",function(){
//     istatus.innerHTML = "strangers"
// })
