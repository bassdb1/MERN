// Before #1

console.log(hello);                                   
var hello = 'world';   

// After

var hello = 'world';  
console.log(hello);                                   


// Before # 2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// After 

var needle = 'haystack';
function test(){

    var needle = 'magnet';
    console.log(needle);
}

test();

// Before # 3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// After
var brendan;

function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

// #4 Before

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// 5 Before

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// After
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
// #6 Before

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
rewind();
// #6 After

var genre;
genre = disco;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre =  "r&b";
    console.log(genre);
}

rewind();
console.log(genre);

// #7 Before
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// after
dojo = "Hendersonville";
function learn() {
    var dojo;
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
learn();
console.log(dojo);