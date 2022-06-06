var surname=prompt("Введите вашу фамилию");
var name1=prompt("Введите ваше имя");
var patronymic=prompt("Введите ваше отчество");
var age=prompt("Введите ваш возраст");
var ageAfterFiveYears=parseInt(age)+5;
var ageInDays=parseInt(age)*365;
var gender=confirm("Ваш пол мужской?");
var pension=(age<60)?"Нет":"Да";
switch (gender) {
    case true:
        gender="Мужской";
        break;
    default:
        gender="Женский";
        break;
}
alert(
    "Ваше ФИО: "+surname+" "+name1+" "+patronymic+"\n"+
    "Ваш возраст в годах: "+age+"\n"+
    "Ваш возраст в днях: "+ageInDays+"\n"+
    "Через 5 лет вам будет: "+ageAfterFiveYears+"\n"+
    "Ваш пол: "+gender+"\n"+
    "Вы на пенсии: "+pension
    );