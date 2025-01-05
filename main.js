var mybutton = document.getElementById('btn');
var myinput = document.getElementById('txt');
var mynation = document.getElementById('nat');
var mybirthday = document.getElementById('birth');
var mygovernate = document.getElementById('gov');
var mycode = document.getElementById('govcode');
var mygender = document.getElementById('gen');
var myage = document.getElementById('age');
var inputvalue = myinput.value;
var cardbox = document.getElementById('search')
var contbox = document.getElementById('information')


mybutton.addEventListener('click' , ()=>{

    var inputvalue = myinput.value; // Update inputvalue
if(inputvalue.length!==14 ||!/^\d{14}$/.test(inputvalue) )    {
alert('الرجاء ادخال رقم قومي صحيح ')
return;
}

// const yearcode = inputvalue.substring(0, 1);
// const birthyear = (yearcode === "2" ? "19" : "20") + inputvalue.substring(1, 3);
// const birthmonth = inputvalue.substring(3, 5);
// const birthday = inputvalue.substring(5, 7);
// const date = new Date(`${birthyear} - ${birthmonth} - ${birthday}`);

// if (date.getFullYear() !== +birthyear || date.getMonth() !== +birthmonth - 1 || date.getDate() !== +birthday) {
//     alert('الرجاء إدخال رقم صحيح');
//     return
// }
    


datapeoble(inputvalue)

});

function datapeoble (inputvalue){
            mynation.value=inputvalue;
            let birthyear, birthdayy;
            
                    if(inputvalue[0]==="2"){
                        birthyear = "19" + inputvalue.substring(1, 3);
                        mybirthday.value = `${inputvalue[5]}${inputvalue[6]} /${inputvalue[3]}${inputvalue[4]} / ${birthyear}`;
                        birthdayy = new Date(`${inputvalue[3]}${inputvalue[4]}/${inputvalue[5]}${inputvalue[6]}/${birthyear}`);
                    }else if(inputvalue[0]==="3"){
                        birthyear = "20" + inputvalue.substring(1, 3);
                        mybirthday.value = `${inputvalue[5]}${inputvalue[6]} / ${inputvalue[3]}${inputvalue[4]} / ${birthyear}`;
                        birthdayy = new Date(`${inputvalue[3]}${inputvalue[4]}/${inputvalue[5]}${inputvalue[6]}/${birthyear}`);                
                    }else{
                        return false;
                    }
                    const currentData = new Date();
                    let age = currentData.getFullYear() - birthdayy.getFullYear();
                    let ageMonths = currentData.getMonth() - birthdayy.getMonth();
                
                    if (ageMonths < 0 || (ageMonths === 0 && currentData.getDate() < birthdayy.getDate())) {
                        age--;
                        ageMonths = 12 + ageMonths;
                    }
                
                    myage.value = `${age} سنة و ${ageMonths} شهور`;

                    var governorateobject = {
                        "01": "القاهرة", "02": "الإسكندرية", "03": "بورسعيد", "04": "السويس", 
                        "11": "دمياط", "12": "الدقهلية", "13": "الشرقية", "14": "القليوبية", 
                        "15": "كفرالشيخ", "16": "الغربية", "17": "المنوفية", "18": "البحيرة", 
                        "19": "الإسماعيلية", "21": "الجيزة", "23": "الفيوم", "24": "المنيا", 
                        "25": "أسيوط", "26": "سوهاج", "27": "قنا", "28": "أسوان", "29": "الأقصر", 
                        "31": "البحر الأحمر", "32": "الوادي الجديد", "33": "مطروح", "34": "شمال سيناء", 
                        "35": "جنوب سيناء", "88": "خارج مصر"
                    };
                
                    var govCode = inputvalue.substring(7, 9);
                    mycode.value = govCode;
                
                    if (governorateobject[govCode]) {
                        mygovernate.value = governorateobject[govCode];
                    } else {
                        mygovernate.value = "غير محدد";
                    }
                    if(inputvalue[13]%2==0){
mygender.value = "ذكر"

}else{
    mygender.value="انثي";
}
cardbox.style.display = "none";
contbox.style.display="block";
                }




