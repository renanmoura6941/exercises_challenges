console.log("paulo gay")

// let bill = document.getElementById("bill");
// let tip = document.getElementById("tip");



let calculate = () =>{
    console.log("calculate")
    let bill = document.getElementById("bill").value;
    let tip = document.getElementById("tip").value;
    
    document.getElementById("result").innerHTML = Number(bill) + Number(tip)


}



