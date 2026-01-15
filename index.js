let counter = 0;
 prefixIncrement = + + counter;
 postfixIncrement = counter + +;
 prefixDecrement = - - counter;
 postfixDecrement = counter - -;
document.getElementById("result").innerHTML = counter;



//    ✕ should assign the prefix incremented value of counter to a variable named prefixIncrement (130 ms)// 
//    ✕ should assign the postfix incremented value of counter to a variable named postfixIncrement (137 ms)
//    ✕ should assign the prefix decrement value of counter to a variable named prefixDecrement (132 ms)
//    ✕ should assign the postfix decrement value of counter to a variable named postfixDecrement (131 ms)
//    ✕ should assign the innerHTML of the HTML element with the id result to the counter (136 ms)