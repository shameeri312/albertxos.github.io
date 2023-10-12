let parent = document.getElementById("blocks")
let array = [""];
let col0 = [""];
let col1 = [""];
let col2 = [""];
let col3 = [""];
let col4 = [""];
let col5 = [""];
let col6 = [""];
let j = 0
j = Number.parseInt(j)

for (let i = 0; i < parent.childNodes.length; i++) {
    if (i % 2 !== 0) {
        let a = parent.childNodes[i]
        array[j] = a;
        j++;
    }
}
let k = 0
array.forEach((i) => {
    // ---------------------------------- //
    console.log("| The elements in the blocks", i.childNodes.[0]);

    k++

})

