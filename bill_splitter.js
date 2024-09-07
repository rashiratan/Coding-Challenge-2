//Task 1: Calculate the Tip
let x = 500; //let bill amount be x
if (x >= 50 && x <= 300) {//using the && operator to identify bill values within required range
    var t = x*0.15;// let tip be t

} else {
    var t = x*0.2;
}

//Task 2: Output Details

var TotalAmount= x + t; //calculate total amount by adding bill and tip amounts

console.log(`The Bill was $${x}, the tip was $${t} and the total value is $${TotalAmount}.`)
//output the calculated amounts in string format


//Task 3: Create a Function calculateTip

function calculateTip(Bill) {
    if (Bill >= 50 && Bill <= 300) { //using the logic created in task 1
        var Tip = Bill*0.15;
    
    } else {
        var Tip = Bill*0.2;
    }
     return Tip; //outputting the tip
}
console.log(`Test run for function with input of $100 gives $${calculateTip(100)}`)
//testing function use

//Task 4: Utilize Arrays
let bills = [125, 555, 44];
let tips = bills.map(bill => calculateTip(bill)); //using created function to calculate tips for bills array
console.log(`Your tips for the given bill amounts of $125, $555, $44 are: $${tips} respectively.`);
let totals = bills.map(bill => bill+ calculateTip(bill)); //calculating the totals for each amount and storing in totals array
console.log(`Your totals for the given bill amounts of $125, $555, $44 including tips are: $${totals} respectively.`);
