
let english = document.getElementById("eng");
let math = document.getElementById("math");
let dataStructure = document.getElementById("data-s");
let compProgramming = document.getElementById("comp-p");
let webProgramming = document.getElementById("web-p");
let average= document.getElementById("ave-g");



english.addEventListener('keyup', function(){
    let totals =Number(english.value) + Number(math.value) + Number(dataStructure.value) + Number(compProgramming.value) +Number(webProgramming.value);

    document.getElementById("total-g").value=totals;
    average.value=totals/5;
})

webProgramming.addEventListener('keyup', function(){
    let totals =Number(english.value) + Number(math.value) + Number(dataStructure.value) + Number(compProgramming.value) +Number(webProgramming.value);

    document.getElementById("total-g").value=totals;
    average.value=totals/5;
})

compProgramming.addEventListener('keyup', function(){
    let totals =Number(english.value) + Number(math.value) + Number(dataStructure.value) + Number(compProgramming.value) +Number(webProgramming.value);

    document.getElementById("total-g").value=totals;
    average.value=totals/5;
})

math.addEventListener('keyup', function(){
    let totals =Number(english.value) + Number(math.value) + Number(dataStructure.value) + Number(compProgramming.value) +Number(webProgramming.value);

    document.getElementById("total-g").value=totals;
    average.value=totals/5;
})

dataStructure.addEventListener('keyup', function(){
    let totals =Number(english.value) + Number(math.value) + Number(dataStructure.value) + Number(compProgramming.value) +Number(webProgramming.value);

    document.getElementById("total-g").value=totals;
    average.value=totals/5;
})



