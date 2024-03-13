

let btnConcat0 = document.getElementById("btn-concat0");
btnConcat0.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
     
    document.getElementById("h1-output").innerText = "Good Morning, " + FullName;
    console.log(Output);
});

let btnConcat1 = document.getElementById("btn-concat1");
btnConcat1.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
     
    document.getElementById("h1-output").innerText = "Good Evening, " + FullName;
    console.log(Output);
});

let btnConcat2 = document.getElementById("btn-concat2");
btnConcat2.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
     
    document.getElementById("h1-output").innerText = "Good Afternoon, " + FullName;
    console.log(Output);
});
