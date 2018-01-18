// Q1

function triangleArea(base, height){
    return base * height / 2;
}

console.log(triangleArea(3,2));
console.log(triangleArea(5,3));

// Q2

function circleArea(radius){
    var radiusSquared = Math.pow(radius, 2);
    return radiusSquared * Math.PI;
}

console.log(circleArea(5));
console.log(circleArea(6));

// Q3

var multiAreas = function(name, one, two){
    if(name === "circle"){
        return circleArea(one);
    }
    else if(name === "triangle"){
        return triangleArea(one, two);
    }
    else if( name === "rectangle"){
        return one * two;
    }
    else {
        return -1;
    }
}

console.log(multiAreas("triangle",5,3));
console.log(multiAreas("circle",5,0));
console.log(multiAreas("rectangle",3,5));
console.log(multiAreas("invalid",3,5));