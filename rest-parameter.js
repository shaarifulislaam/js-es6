function sum(...numbers){
    let sum = 0;
    for(let i  of numbers){
        sum = sum +i ;
    }
    console.log(sum);
}
sum(40,30,10,20);

//jodi aro parameter add korte cai tokon..kora jabe..bt best practice holo rest parameter ke sobar shes e rakha

function sum2(a,b,...numbers){
    sum = 0;
    for(let i of numbers){
        sum = sum+ i;
    }
    console.log(sum)
}
sum2(10,20,10,230);