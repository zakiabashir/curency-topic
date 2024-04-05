#! /usr/bin/env  node
import inquirer from "inquirer"
// arrys and variables are both datatypes, but variables aik hi values kly istamal hoty hn or arrys aik list ko store krny kly hoti h
// such as
// these are simple variables in which we use data type string, bolean and number
// let std1 = "ali";
// let std2 ="ayesha";
// this is an array data type
// let student_name = ["ali", "ayesha","mona"]
// object 
// {
//     name: "zakia";
// type: "string";
// message: "what are you doing"
// }
// this is an object in which we add data

const currency:any = {
    USD: 1,
    EUR:0.91,
    GBP:0.76,
    INR:74.45,
    PKR: 280,
};
let answer= await inquirer.prompt([{
    name: "to",
    message: " Enter to cruncey",
    type: "list",
    choices:[ "USD","EUR", "GBP","INR", "PKR"]
},
{
    name: "from",
    message: " Enter from cruncey",
    type: "list",
    choices:["USD","EUR", "GBP","INR", "PKR"]
},
{
    name: "amount",
    message: " Enter your amount",
    type: "number",
}
]);
let fromamount = currency[answer.from]
let toamount = currency[answer.from]
let amount = answer.amount;
let baseamount = amount/fromamount; //usd base currency
let convertedamount = baseamount*toamount
console.log(convertedamount);
console.log(fromamount);
console.log(toamount);
console.log(amount);