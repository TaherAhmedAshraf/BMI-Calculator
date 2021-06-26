
function getBMI(){
    document.getElementById('ResultRed').innerHTML = " "
    document.getElementById('ResultRedD').innerHTML = " "
    document.getElementById('ResultGreen').innerHTML = " "
    document.getElementById('ResultGreenD').innerHTML = " "
    var Height = document.getElementById("Height").value;
    var Weight = document.getElementById("Weight").value;
    var BMI = " ";
    Height = Height * 0.3048;
    BMI = Weight / (Height * Height);
    BMI = Math.round(BMI)
    if(BMI <= 17){
        document.getElementById('ResultRed').innerHTML = BMI
        document.getElementById('ResultRedD').innerHTML = "UnderWeigth"
        document.getElementById("Sugg").innerHTML = "You have to <b>Increase</b> Your weight"
    }else if(BMI <= 25){
        document.getElementById('ResultGreen').innerHTML = BMI
        document.getElementById('ResultGreenD').innerHTML = "Normal"
        document.getElementById("Sugg").innerHTML = "Great!!! You are fit"
    }else if(BMI <= 29.9){
        document.getElementById('ResultRed').innerHTML = BMI
        document.getElementById('ResultRedD').innerHTML = "OverWeight"
        document.getElementById("Sugg").innerHTML = "You have to <b>Decrease</b> Your weight"
    }else{
        document.getElementById('ResultRed').innerHTML = BMI
        document.getElementById('ResultRedD').innerHTML = "Obese"
        document.getElementById("Sugg").innerHTML = "You are super weighty person!! Go & <b>Decrease</b> Your weight"
    }
}


