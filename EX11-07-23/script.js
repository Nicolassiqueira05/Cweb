const all = document.getElementsByTagName("*")
let tags = document.getElementById("tags")
let total = document.getElementById("total")

let allTags = ""

for(let i = 0; i < all.length; i++){
    allTags = allTags + "<br>" + all[i].tagName    
}
total.innerText = "total: " + all.length
tags.innerHTML = allTags