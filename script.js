let inputBox = document.getElementById("input");

inputBox.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");


function calculateAge(){

    let birthDate = new Date(inputBox.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let currentDate = new Date();

    let d2 = currentDate.getDate();
    let m2 = currentDate.getMonth() + 1;
    let y2 = currentDate.getFullYear();

    let y3,m3,d3;

    y3 = y2 - y1;

    if(m2 >= m1)
    {
       m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1)
    {
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = theFirstMonthandYear(y1, m1) + d2 - d1;
    }
    if(m3 < 0)
    {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are <span class="year">${y3} Years</span> ,<span class="month">${m3} Months</span> and <span class="day">${d3}</span> days old`;

}

function theFirstMonthandYear(year,month){
    return new Date(year, month, 0).getDate();
}