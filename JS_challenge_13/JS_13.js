// N ededi ve bir string verilir (string.length > N). String sozunun N’ci herfini N defe ekrana yazan proqram
// Example: 
// N =3, string = “Azerbaycan” >>>>>>>>> Output: eee
// N =5, string = “pufdik” >>>>>>>>> Output: iiiii

var num = prompt ("Your Number: ");
numInt = Number (num);

var word = prompt ("Your word: ");
var result = word[numInt-1];

var topla = result;

if (word.length > numInt) {
    for (var i = 1; i < numInt; i++){
        topla = topla + result;
    }
}

alert (topla);
//=======================================

var word = prompt ("Your word: ");
var result = word[numInt-1];

if (word.length > numInt) {
    for (var i = 1; i < numInt; i++){
        result = result + word[numInt-1];
    }
}

alert (result);

//=======================================

var word = prompt ("Your word: ");
var result = "";

if (word.length > numInt) {
    for (var i = 1; i <= numInt; i++){
        result = result + word[numInt-1];
    }
}

alert (result);
