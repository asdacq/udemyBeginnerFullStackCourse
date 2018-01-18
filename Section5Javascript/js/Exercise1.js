// Q1

for(var index = 0; index <= 15; index++){
    if(index % 2 === 0){ 
        console.log(index + " is even")
    }
    else{
        console.log(index + " is odd")
    }
}

// Q2

var star = "*";
for(var index2 = 0; index2 < 5; index2++){
    console.log(star);
    star += "*";
}

for(var index3 = 1; index3 <= 100; index3++){
    if(index3 % 3 == 0 && index3 % 5 == 0){
        console.log("CodeMonkey");
    }
    else if(index3 % 3 == 0){
        console.log("Code");
    }
    else if(index3 % 5 == 0){
        console.log("Monkey");
    }
    else{
        console.log(index3);
    }
}