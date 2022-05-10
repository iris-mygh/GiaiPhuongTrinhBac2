// declaring constant variables
const h1 = document.querySelector("h1");
const formula = document.querySelector(".formula");
const aUser = document.querySelector("#a");
const bUser = document.querySelector("#b");
const cUser = document.querySelector("#c");
const calculateBtn = document.querySelector("#calculateBtn");
const realUneq = document.querySelector("#realUneq");
const realEq = document.querySelector("#realEq");
const unreal = document.querySelector("#unreal");
const resultBox = document.querySelector(".resultBox");
const discriminantBox = document.querySelector(".discriminant");
let x1, x2;

// text content
h1.textContent = "Giải Phương Trình Bậc 2";
formula.innerHTML = "ax<sup>2</sup> + bx + c = 0. Nhập a, b, c với a, b,c là các số thực và a ≠ 0";
realUneq.innerHTML = "Phương trình có 2 nghiệm phân biệt";
realEq.innerHTML = "Phương trình có nghiệm kép";
unreal.innerHTML = "Phương trình vô nghiệm";

const getRoots = (e) => {
    realUneq.style.opacity = 0.5;
    realEq.style.opacity = 0.5;
    unreal.style.opacity = 0.5;
    e.preventDefault();
    const a = aUser.value;
    const b = bUser.value;
    const c = cUser.value;
    
    // calculate discriminant
    const discriminant = (b*b) - (4*a*c);
    console.log(a, b, c);
    console.log(discriminant);
    discriminantBox.innerHTML = `Delta: ${discriminant}`;

    // for real and different roots
    if(discriminant > 0){
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        realUneq.style.opacity = 1;
        resultBox.innerHTML = `Phương trình có 2 nghiệm phân biệt là x1 = ${x1} và x2 = ${x2}.`;
    }

    // for real and equal roots
    else if(discriminant == 0){
        x1 = x2 = -b / (2 * a); // no discriminant because discriminant is zero...
        realEq.style.opacity = 1;
        resultBox.innerHTML = `Phương trình có nghiệm kép là x1 = x2 = ${x1}.`
    }

    // for unreal roots
    else{
        unreal.style.opacity = 1;
        resultBox.innerHTML = `Phương trình vô nghiệm.`;
    }
}

calculateBtn.addEventListener("click", getRoots)