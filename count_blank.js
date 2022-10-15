var list = ["cake", "  ", "pudding", "", "  ",'']


function countBlank(arr){
    counter = 0
   arr.map(text => {
    if(text.trim().length === 0){
        counter++
    }
})
return counter
}

// console.log("  ".length)

console.log(countBlank(list))