function getmarks(){
    var maths = Number(document.getElementById("maths").value);
    var english = Number(document.getElementById("english").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var pythics = Number(document.getElementById("pythics").value);
    var totalMarks = 400;
    var marksObtained = maths + english + chemistry + pythics;
    var percentage = (marksObtained / totalMarks) * 100;
    var grade = "";
    document.getElementById("percentage").innerHTML = percentage + "%";
   
if(percentage > 90){
    grade = "A+";
}else if(percentage < 90 && percentage > 80){
    grade = "A";
}else if(percentage < 80 && percentage > 60){
    grade = "B";
}else if(percentage < 60 ){
    grade = "F";
}

document.getElementById("grade").innerHTML = grade;
if(percentage < 60){
    document.getElementById("pass").innerHTML = "Sorry! You Failed! Please Try Next Time";
}else{
    document.getElementById("pass").innerHTML = "Congratulations! You Have Passed";
}

}