//Write  a  function  called  power  which  accepts  a  base  and  an  exponent.
//The  function should return the power of the base to the exponent.
//This function should mimic the functionality of
//Math.pow() – do not worry about negative bases and exponents.


function power(base, exponent) {
let i, pow =1;
for(i=0; i<exponent; i++){
    pow = pow * base;
}
return  pow;
}

power();
(power());
(power(1, 2));
(power(4, 2));
(power(2, 2));
(power(2, 0));
(power(0, 2));


// power(2,0) // 1// power(2,2) // 4
