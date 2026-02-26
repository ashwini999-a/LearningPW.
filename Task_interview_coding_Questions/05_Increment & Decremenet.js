//let a = 5; 
//let b = a++ + ++a;
//let c = a++ + ++a + ++a + ++a + a++;

//console.log(b);
//console.log(a);
//console.log(c);

let a = 5;
let b = a++ + ++a
console.log(b);
console.log(a);
//b= a++ + ++a
//b= 5(6) +(7) 7
//b=5+7=12
//a= 7, b=12




let c = a++ + ++a + ++a + ++a + a++;
console.log(c);
console.log(a);
//c= a++ + ++a +++a +++a +a++
//c= 7(8)+9(9) +10(10) +11(11) +11(12)
//c=7+9+10+11+11
//c==48