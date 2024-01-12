const calbutton = document.getElementById('buttons');

function myagecalculator() {

const inputday= document.getElementById("day").value;
const inputmonth= document.getElementById('month').value;
const  inputyear = document.getElementById('years').value;



    const date = new Date();
    let currentdate = date.getDate();
    let currentmonth = 1 + date.getMonth();
    let currentyear = date.getFullYear();

    

const month =[31,28,31,30,31,30,31,31,30,31,30,31];

if(inputday > currentdate) {
    currentdate = currentdate + month[currentmonth-1];
    currentmonth = currentmonth - 1;
}

if(inputmonth > currentmonth){
    currentmonth =currentmonth + 12;
    currentyear = currentyear -1;
}
    const d = currentdate - inputday;
    const m = currentmonth - inputmonth;
    const y = currentyear - inputyear;

    
    document.getElementById("YY").innerHTML = y ;
    document.getElementById("MM").innerHTML = m ;
    document.getElementById("DD").innerHTML = d ;
    
console.log(` Your age is  + ${y} +  years  + ${m }+ months + ${d} +  days`);
console.log('beza');
};

calbutton.addEventListener('click',()=> {
    myagecalculator();
});


