function addUpTo(n) { 
    let total = 0;  
    for (let i = 1; i <= n; i++) {    
        total += i;  
    }  
    return total;
} 
console.log(addUpTo(5))



let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();
console.log(`Time elasped:${(t2 - t1) / 10000} seconds`)