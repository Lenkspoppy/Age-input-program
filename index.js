const myInput = document.getElementById("myInput");
const myBtn = document.getElementById("myBtn");
let resultBtn = document.getElementById("resultBtn");
let age;

myBtn.onclick = function(){
    age = myInput.value;
    age = Number(age);

    if(age >=100){
        resultBtn.textContent = ("You are Too old for this site")

    }
    else if(age == 0){
        resultBtn.textContent = ("You are just born to enter the site")
    }
    else if(age >=18){
        resultBtn.textContent =("You are old to enter the site")
    }
    else if(age < 18){
        resultBtn.textContent =("You are too young to enter the site")
    }
    else{
        resultBtn.textContent =("You are entering the wrong format")
    }
}



