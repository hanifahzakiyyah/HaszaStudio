// catatan :
// bnrin wzn dbuat arr aja =  done
// coba masukin fiil madhi selain untuk huwa = done
// lengkpin popup confirm bbrp plihn kt
// bnerin utk bhs inggris
// wazan dan irob dibuat select aja
// input untuk hamzah yang bewrmacam macam spt iqraiii = done
// kasi keterangan bentuk fiil di samping wazan

// bagian pencarian ketika masukin musyabbih
// masdar masih banyak yg harus ditambahkan
// termasuk jamak taksirnya nanti
// marfuat dan majzumat



// constant declaration
const kata = document.querySelector(".kata .klik");
const info = document.querySelector(".kata .info");
const sorof = document.querySelector(".sorof");
const madhi = document.querySelectorAll(".madi")
const mudore = document.querySelectorAll(".mudore");
const amr = document.querySelectorAll(".amr");
const nahi = document.querySelectorAll(".nahi");
const fail = document.querySelectorAll(".fail");
const maful = document.querySelectorAll(".maful");

const mamaj = document.querySelectorAll(".mamaj");
const mumaj = document.querySelectorAll(".mumaj");
const makan = document.querySelectorAll(".makan");
const masdar = document.querySelectorAll(".masdar");
const alat = document.querySelectorAll(".alat");


const mudoroah = ["ا", "أ", "ي", "ت", "ن"];
const hurufmadhi = ["ا", "و", "ت", "ن"];
const hurufmutal = ["ا", "ي", "و"];
const wazanau = ["au", "aumzfa", "aumzlam", "aumzain", "aumud", "aumis", "auaj", "aunaq", "aumaf", "aumaq"];
const wazanai = ["ai", "aimzfa", "aimzlam", "aimzain", "aimud", "aimis", "aiaj", "ainaq", "aimaf", "aimaq"];
const wazanuu = ["uu", "uumzfa", "uumzlam", "uumzuun", "uumud", "uumis", "uuaj", "uunaq", "uumaf", "uumaq"];
const wazanaa = ["aa", "aamzfa", "aamzlam", "aamzaan", "aamud", "aamis", "aaaj", "aanaq", "aamaf", "aamaq"];
const wazania = ["ia", "iamzfa", "iamzlam", "iamzian", "iamud", "iamis", "iaaj", "ianaq", "iamaf", "iamaq"];
const wazanii = ["ii", "iimzfa", "iimzlam", "iimziin", "iimud", "iimis", "iiaj", "iinaq", "iimaf", "iimaq"];
const wazanmudoaf = ["aumud", "aimud", "iimud", "uumud", "aamud", "iamud"];
const wazanajwaf = ["auaj", "aiaj", "iiaj", "uuaj", "aaaj", "iaaj"];
const wazanmisal = ["aumis", "aimis", "iimis", "uumis", "aamis", "iamis"];

const tulisanwazan = document.querySelector(".wazan p");
const tombolau = document.getElementById("au");
const tombolai = document.getElementById("ai");
const tombolaa = document.getElementById("aa");
const tombolia = document.getElementById("ia");
const tombolii = document.getElementById("ii");
const tomboluu = document.getElementById("uu");
const tombolwazan = document.querySelectorAll(".wazan span");
const menu = document.querySelector(".menu");
const menuul = document.querySelector(".menu ul");
const tombolbahasa = document.querySelector("select");

// tentang bahasa user!
let bahasa = "ind";
tombolbahasa.addEventListener("change", ()=>{
    if (tombolbahasa.value == "ind"){
        bahasa= "ind";
        kata.innerHTML = "✍️  masukkan kata";
        document.querySelector(".komen").innerHTML = `
        <strong>CARA MENGGUNAKAN:</strong>
            <ul>
                <li>bacalah bismillah</li>
                <li>klik tombol "✍️ masukkan kata" </li>
                <li>masukkan kata dasar (fi'il madhi). seperti contoh:
                    <ol>
                        <li>قرأ</li>
                        <li>قام</li>
                        <li>بقي</li>
                    </ol>
                </li>
                <li>jangan memasukkan selain kata dasar. seperti:
                    <ol>
                        <li>يبيع</li>
                        <li>مبروك</li>
                        <li>ظالمين</li>
                    </ol>
                </li>
                <li>harakat tasydid _ّ harus ditulis. selain tasydid boleh ditulis boleh tidak</li>
                <li>jika anda tidak memiliki keyboard arabic, kami menyediakannya. silahkan klik tombol keyboard di atas</li>
                <li>jika anda menemukan kesalahan, <a href='https://api.whatsapp.com/send?phone=6282231259145'>laporkan kepada kami.</a></p><br></a></li>
            </ul>
        `
    } else {
        bahasa = "eng";
        kata.innerHTML = "✍️  enter the word";
        document.querySelector(".komen").innerHTML = `
        <strong> HOW TO USE: </strong>
        <ul>
            <li> read bismillah </li>
            <li> click the "✍️ enter the word" button </li>
            <li> enter a base word (fi'il madhi). for example:
                <ol>
                    <li> قرأ </li>
                    <li> قام </li>
                    <li> بقي </li>
                </ol>
            </li>
            <li> do not enter anything other than the base word. such as:
                <ol>
                    <li> يبيع </li>
                    <li> مبروك </li>
                    <li> المين </li>
                </ol>
            </li>
            <li> harakat tasydid _ّ must be written. other than tasydid can be written or not </li>
            <li> if you don't have an arabic keyboard, we provide one. please click the keyboard button above </li>
            <li>if you found a mistake, <a href='https://api.whatsapp.com/send?phone=6282231259145'>report us.</a></p><br></a></li>
        </ul>
        `
    };
})
function kalimatalert() {
    if (bahasa == "ind") {
        return "yang anda masukkan belum ada dalam data kami. yang anda masukkan sudah benar stulasti mujarrod shahih? silahkan beritahu kami lewat kolom komentar"
    } else {
        return "the word you enter is not on our library, sulasi mujarrad right? report us on comment section"
    }
}
function kalimatpromp () {
    if (bahasa == "ind") {
    return "masukkan kata: fiil madhi, mudhori, amr, atau nahi, isim fail ataupun maf'ul. " 
    } else {
     return "enter the word: fiil madhi, mudhori, amr, nahi, isim fail or maf'ul. "
    } 
    
}
function kalimathasil(masuk, bahasa) {
    let katdas;
    if(bahasa == "ind") {
        katdas = "menampilkan daftar tasrif dari kata " + masuk;
    } else {
        katdas = "showing tashrif table from the word " + masuk;
    }
    return katdas;
    
};



//percobaan dan debugging
madhi[0].addEventListener("click", ()=>{
    //user entering
//  const masuk = prompt(kalimatpromp());

    // //hilangkan harokat
//  const th = masuk.replace(/[َُِْ]/g,"").replace(/[ئءؤ]/, "أ").replace(/آ/, "أا" );
  
    // console.log(katadasar);
    // console.log(type);
});


//main function
kata.addEventListener("click", mainfunction);

function mainfunction() {

    // //user entering
   const masuk = prompt(kalimatpromp());

    // hilangkan harokat
    const th = masuk.replace(/[َُِْ]/g,"").replace(/[ئءؤ]/, "أ").replace(/آ/, "أا" );  

    //mengembalikan ke bentuk dasar dan menentukan type
    // const {katadasar, type} = tentukankatadasar(th, masuk);
    const katadasar = [th];
    
    // menentukan wazan 
    let wazan = tentukanwazan(katadasar);
    
    // matikan semua highlight wazan
    for (let i= 0; i< tombolwazan.length; i++) {
        tombolwazan[i].classList.remove("active");
    };
    
    // menyalakan highligttertentu
    tampilkanwazan(wazan);

    // menampilkan menu
    // menu.classList.add("muncul");

    //merangkai shighoh
    const rangka = rangkaisigoh(wazan, katadasar);
    
    const {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat} = rangka;
    
    //menampilkan hasil ke layar
    info.innerHTML = kalimathasil(masuk, bahasa);
    

    //memasukkan ke dalam tabel
    document.querySelector("div.tabel").classList.add("muncul");
    masukintabel(rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat, wazan);

    // tombol wazan
    for (let j = 0; j < tombolwazan.length; j++) {
        tombolwazan[j].addEventListener("click", () => {
            for (let i = 0; i< wazan.length; i++) {
                if(wazanmudoaf.indexOf(wazan[i]) >= 0) {
                    wazan = [];
                }else if (wazanajwaf.indexOf(wazan[i]) >= 0){
                    wazan= "string"
                }
            }
            for (let a = 0; a< tombolwazan.length; a++) {
                tombolwazan[a].classList.remove("kepencet")
            } tombolwazan[j].classList.add("kepencet");

            if (wazan.length === 0) {
                wazan.push(tombolwazan[j].attributes.id.value + "mud");
            }else if (typeof(wazan) == "string"){
                wazan = [];
                wazan.push(tombolwazan[j].attributes.id.value + "aj");
            } else {
                wazan = [];
                wazan.push(tombolwazan[j].attributes.id.value);
            }
            // tasrifan
            const rangka = rangkaisigoh(wazan, katadasar);
            const {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat} = rangka;
            masukintabel(rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat, wazan);

        })
    }

    // irob
    menu.addEventListener("click", ()=>{
        menuul.classList.toggle("naik");
    })
};


function tentukanwazan(k) {
    let wazan = [];
for (let i = 0; i< k.length; i++){
    if (auarray.indexOf(k[i]) >= 0) {wazan.push("au");}
    if (aiarray.indexOf(k[i]) >= 0) {wazan.push("ai");}
    if (iaarray.indexOf(k[i]) >= 0) {wazan.push("ia");}
    if (iiarray.indexOf(k[i]) >= 0) {wazan.push("ii");}
    if (aaarray.indexOf(k[i]) >= 0) {wazan.push("aa");}
    if (uuarray.indexOf(k[i]) >= 0) {wazan.push("uu");}
    if (aumahmuzfar.indexOf(k[i]) >= 0) { wazan.push("aumzfa");}
    if (iamahmuzfar.indexOf(k[i]) >= 0) { wazan.push("iamzfa");}
    if (uumahmuzfar.indexOf(k[i]) >= 0) { wazan.push("uumzfa");}
    if (aamahmuzfar.indexOf(k[i]) >= 0) { wazan.push("aamzfa");}
    if (iimahmuzfar.indexOf(k[i]) >= 0) { wazan.push("iimzfa");}
    if (aimahmuzfar.indexOf(k[i]) >= 0) { wazan.push("aimzfa");}
    if (aumahmuzlamr.indexOf(k[i]) >= 0) { wazan.push("aumzlam");} 
    if (iamahmuzlamr.indexOf(k[i]) >= 0) { wazan.push("iamzlam");} 
    if (uumahmuzlamr.indexOf(k[i]) >= 0) { wazan.push("uumzlam");}
    if (iimahmuzlamr.indexOf(k[i]) >= 0) { wazan.push("iimzlam");}
    if (aamahmuzlamr.indexOf(k[i]) >= 0) { wazan.push("aamzlam");}
    if (aimahmuzlamr.indexOf(k[i]) >= 0) { wazan.push("aimzlam");}
    if (aumahmuzainr.indexOf(k[i]) >= 0) { wazan.push("aumzain");}
    if (iamahmuzainr.indexOf(k[i]) >= 0) { wazan.push("iamzain");}
    if (uumahmuzainr.indexOf(k[i]) >= 0) { wazan.push("uumzain");}
    if (iimahmuzainr.indexOf(k[i]) >= 0) { wazan.push("iimzain");}
    if (aamahmuzainr.indexOf(k[i]) >= 0) { wazan.push("aamzain");} 
    if (aimahmuzainr.indexOf(k[i]) >= 0) { wazan.push("aimzain");}
    if (aumudoafr.indexOf(k[i]) >= 0) { wazan.push("aumud");}
    if (iamudoafr.indexOf(k[i]) >= 0) { wazan.push("iamud");}
    if (uumudoafr.indexOf(k[i]) >= 0) { wazan.push("uumud");}
    if (aamudoafr.indexOf(k[i]) >= 0) { wazan.push("aamud");}
    if (iimudoafr.indexOf(k[i]) >= 0) { wazan.push("iimud");}
    if (aimudoafr.indexOf(k[i]) >= 0) { wazan.push("aimud");}
    if (aumisalr.indexOf(k[i]) >= 0) { wazan.push("aumis");}
    if (aimisalr.indexOf(k[i]) >= 0) { wazan.push("aimis");}
    if (uumisalr.indexOf(k[i]) >= 0) { wazan.push("uumis");}
    if (iimisalr.indexOf(k[i]) >= 0) { wazan.push("iimis");}
    if (aamisalr.indexOf(k[i]) >= 0) { wazan.push("aamis");}
    if (iamisalr.indexOf(k[i]) >= 0) { wazan.push("iamis");}
    if (auajwafr.indexOf(k[i]) >= 0) { wazan.push("auaj");}
    if (aiajwafr.indexOf(k[i]) >= 0) { wazan.push("aiaj");}
    if (uuajwafr.indexOf(k[i]) >= 0) { wazan.push("uuaj");}
    if (iiajwafr.indexOf(k[i]) >= 0) { wazan.push("iiaj");}
    if (aaajwafr.indexOf(k[i]) >= 0) { wazan.push("aaaj");}
    if (iaajwafr.indexOf(k[i]) >= 0) { wazan.push("iaaj");}
    if (aunaqisr.indexOf(k[i]) >= 0) { wazan.push("aunaq");}
    if (ainaqisr.indexOf(k[i]) >= 0) { wazan.push("ainaq");}
    if (uunaqisr.indexOf(k[i]) >= 0) { wazan.push("uunaq");}
    if (iinaqisr.indexOf(k[i]) >= 0) { wazan.push("iinaq");}
    if (aanaqisr.indexOf(k[i]) >= 0) { wazan.push("aanaq");}
    if (ianaqisr.indexOf(k[i]) >= 0) { wazan.push("ianaq");}
    if (iamaqrunr.indexOf(k[i]) >= 0) { wazan.push("iamaq");}
    if (aimaqrunr.indexOf(k[i]) >= 0) { wazan.push("aimaq");}
    if (iamafruqr.indexOf(k[i]) >= 0) { wazan.push("iamaf");}
    if (aimafruqr.indexOf(k[i]) >= 0) { wazan.push("aimaf");}
    if (iimafruqr.indexOf(k[i]) >= 0) { wazan.push("iimaf");}
    if(wazan.length == 0){alert(kalimatalert())};
}
console.log(wazan);
    return wazan;
}

function tampilkanwazan(wazan) {
    tulisanwazan.classList.add("active");
    for(let i = 0; i< wazan.length; i++) {
        if ( wazanau.indexOf(wazan[i]) >=  0 ) {         
            tombolau.classList.add("active");}
        if ( wazanai.indexOf(wazan[i]) >=  0 ) {         
            tombolai.classList.add("active");}
        if ( wazanaa.indexOf(wazan[i]) >=  0 ) {         
            tombolaa.classList.add("active");}
        if ( wazanii.indexOf(wazan[i]) >=  0 ) {         
            tombolii.classList.add("active");}
        if ( wazanuu.indexOf(wazan[i]) >=  0 ) {         
            tomboluu.classList.add("active");}
        if ( wazania.indexOf(wazan[i]) >=  0 ) {         
            tombolia.classList.add("active");} 
    }
    for(let i = 0; i< wazan.length; i++) {
        if ( wazanau.indexOf(wazan[i]) >=  0 ) {         
            tombolau.classList.add("kepencet"); return;
        } else if ( wazanai.indexOf(wazan[i]) >=  0 ) {         
            tombolai.classList.add("kepencet"); return;
        } else if ( wazanaa.indexOf(wazan[i]) >=  0 ) {         
            tombolaa.classList.add("kepencet"); return;
        } else if ( wazanii.indexOf(wazan[i]) >=  0 ) {         
            tombolii.classList.add("kepencet"); return;
        } else if ( wazanuu.indexOf(wazan[i]) >=  0 ) {         
            tomboluu.classList.add("kepencet"); return;
        } else if ( wazania.indexOf(wazan[i]) >=  0 ) {         
            tombolia.classList.add("kepencet"); return;
        }
    }
    return true;
}

function rangkaisigoh(wazan, katadasar) {

      //deklarasi constan rangka
      let rangkaMadi; let rangkaMudore; let rangkaAmr; let rangkaNahi; let rangkaFail; let rangkaMaful; let rangkamamaj; let rangkamumaj; let rangkamasdar; let rangkamakan; let rangkaalat;
    const rangka = katadasar[0]; 
  for (let i = 0; i< wazan.length; i++) {
    if (wazan[i] === "au" || wazan[i] === "aumzfa" || wazan[i] === "aumzlam" || wazan[i] === "aumzain") {
        rangkaMadi = rangka[0] + "َ" + rangka[1] + "َ" + rangka[2];
        rangkaMudore = rangka[0] + "ْ" + rangka[1] + "ُ" + rangka[2];
        rangkaAmr = "اُ" + rangka[0] + "ْ" + rangka[1] + "ُ" + rangka[2];
        rangkaNahi = "لَا تَ" + rangka[0] +  "ْ" + rangka[1] + "ُ" + rangka[2];
        rangkaFail = rangka[0] + "َا" + rangka[1] + "ِ" + rangka[2];
        rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ُوْ" + rangka[2];
        rangkamamaj = rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2];
        rangkamumaj = "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkamasdar;
            if(rangka === ("خرج") || ("حضر") || ("دخل")) {
                rangkamasdar = rangka[0] + "ُ" + rangka[1] + "ُوْ" + rangka[2];
            } else {
                rangkamasdar = rangka[0] + "َ" + rangka[1] + "ْ" + rangka[2];
            }
        rangkamakan = "مَ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaalat = "مِ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if (wazan[i] === "ai" || wazan[i] === "aimzfa" || wazan[i] === "aimzlam" || wazan[i] === "aimzain") {
        rangkaMadi = rangka[0] + "َ" + rangka[1] + "َ" + rangka[2];
        rangkaMudore = rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2];
        rangkaAmr = "اِ" + rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2];
        rangkaNahi = "لَا تَ" + rangka[0] +  "ْ" + rangka[1] + "ِ" + rangka[2];
        rangkaFail = rangka[0] + "َا" + rangka[1] + "ِ" + rangka[2];
        rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ُوْ" + rangka[2];
        rangkamamaj = rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2];
        rangkamumaj = "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkamasdar = rangka[0] + "َ" + rangka[1] + "ْ" + rangka[2];
        rangkamakan = "مَ" + rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2];
        rangkaalat = "مِ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if(wazan[i] === "ia" || wazan[i] === "iamzfa" || wazan[i] === "iamzlam" || wazan[i] === "iamzain") {
        rangkaMadi = rangka[0] + "َ" + rangka[1] + "ِ" + rangka[2];
        rangkaMudore = rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaAmr = "اِ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaNahi = "لَا تَ" + rangka[0] +  "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaFail = rangka[0] + "َا" + rangka[1] + "ِ" + rangka[2];
        rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ُوْ" + rangka[2];
        rangkamamaj = rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2];
        rangkamumaj = "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkamasdar = rangka[0] + "َ" + rangka[1] + "ْ" + rangka[2];
        rangkamakan = "مَ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaalat = ""
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if (wazan[i] === "ii" || wazan[i] === "iimzfa" || wazan[i] === "iimzlam" || wazan[i] === "iimzain") {
            rangkaMadi = rangka[0] + "َ" + rangka[1] + "ِ" + rangka[2];
            rangkaMudore = rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2];
            rangkaAmr = "اِ" + rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2];
            rangkaNahi = "لَا تَ" + rangka[0] +  "ْ" + rangka[1] + "ِ" + rangka[2];
            rangkaFail = rangka[0] + "َا" + rangka[1] + "ِ" + rangka[2];
            rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ُوْ" + rangka[2];
            rangkamamaj = rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2];
        rangkamumaj = "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkamasdar = rangka[0] + "ُ" + rangka[1] + "ْ" + rangka[2] + "َان";
        rangkamakan = "مَ" + rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2];
        rangkaalat = ""
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if (wazan[i] === "aa" || wazan[i] === "aamzfa" || wazan[i] === "aamzlam" || wazan[i] === "aamzain") {
            rangkaMadi = rangka[0] + "َ" + rangka[1] + "َ" + rangka[2];
            rangkaMudore = rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
            rangkaAmr = "اِ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
            rangkaNahi = "لَا تَ" + rangka[0] +  "ْ" + rangka[1] + "َ" + rangka[2];
            rangkaFail = rangka[0] + "َا" + rangka[1] + "ِ" + rangka[2];
            rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ُوْ" + rangka[2];
            rangkamamaj = rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2];
        rangkamumaj = "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkamasdar = rangka[0] + "َ" + rangka[1] + "ْ" + rangka[2];
        rangkamakan = "مَ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaalat = "مِ" + rangka[0] + "ْ" + rangka[1] + "َا" + rangka[2]
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if (wazan[i] === "uu" || wazan[i] === "uumzfa" || wazan[i] === "uumzlam" || wazan[i] === "uumzain") {
        rangkaMadi = rangka[0] + "َ" + rangka[1] + "ُ" + rangka[2];
        rangkaMudore = rangka[0] + "ْ" + rangka[1] + "ُ" + rangka[2];
        rangkaAmr = "اُ" + rangka[0] + "ْ" + rangka[1] + "ُ" + rangka[2];
        rangkaNahi = "لَا تَ" + rangka[0] +  "َ" + rangka[1] + "ُ" + rangka[2];
        rangkaFail;
            if (hasanray.indexOf(rangka) >= 0) {
                rangkaFail = rangka[0] + "َ" + rangka[1] + "َ" + rangka[2]; //حَسَنٌ
            }else if (baidray.indexOf(rangka) >=0) {
                rangkaFail = rangka[0] + "َ" + rangka[1] + "ِيْ" + rangka[2];//بَعِيْدٌ
            }else if (sahlray.indexOf(rangka) >=0) {
                rangkaFail = rangka[0] + "َ" + rangka[1] + "ْ" + rangka[2]//ضَخْمٌ
            } else if (jildray.indexOf(rangka)>=0){
                rangkaFail = rangka[0] + "ِ" + rangka[1] + "ْ" + rangka[2];// جلد
            // }else if (junub.window(rangka)>0){
            //     rangkaFail = rangka[0] + "ُ" + rangka[1] + "ُ" + rangka[2]//جُنُبٌ
            }else if (sujaray.indexOf(rangka)>=0){
                rangkaFail = rangka[0] + "ُ" + rangka[1] + "َا" + rangka[2];//شجاع
            }else if (jabanray.indexOf(rangka)>=0){
                rangkaFail = rangka[0] + "َ" + rangka[1] + "َا" + rangka[2];//شجاع
            }else {
                rangkaFail = rangka[0] + "َا" + rangka[1] + "ِ" + rangka[2];
            }
        rangkaMaful = "";
        rangkamamaj = rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2];
        rangkamumaj = "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkamasdar;
            if (rangka == "ضخم" || rangka == "جبن" || rangka == "شجع" || rangka == "جنب"){
                rangkamasdar = rangka[0] + "َ" + rangka[1] + "َا" + rangka[2] + ""
            } else {
                rangkamasdar = rangka[0] + "ُ" + rangka[1] + "ْ" + rangka[2];
            }
        rangkamakan = "مَ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaalat = ""
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};

    } else if(wazanmudoaf.indexOf(wazan[0]) >= 0) { //masuk mudoaf apapun wazanenam nya
            
            if(wazan[i] === "aumud" || wazan[i] === "uumud") {
                rangkaMudore = [
                    (rangka[0] + "ُ" + rangka[1] + "ّ"),
                    (rangka[0] + "ْ" + rangka[1] + "ُ" + rangka[1])
                ]
                rangkaAmr = [
                    rangka[0] + "ُ" + rangka[1] + rangka[2], //مدّ
                    "ا" + rangka[0] + "ْ" + rangka[1] + "ُ" + rangka[1]
                ];
                rangkaNahi = [
                    "لَا تَ" + rangka[0] +  "ُ" + rangka[1] + rangka[2],
                    "لَا تَ" + rangka[0] +  "ْ" + rangka[1] + "ُ" + rangka[1]
                ];
                rangkamakan = "مَ" + rangka[0] + "َ" + rangka[1] + "ّ";
            } else if (wazan[i] === "iamud" || wazan[i] === "aamud"){
                rangkaMudore = [
                    (rangka[0] + "َ" + rangka[1] + "ّ"),
                    (rangka[0] + "ْ" + rangka[1] + "َ" + rangka[1])
                ]
                rangkaAmr = [
                    rangka[0] + "َ" + rangka[1] + rangka[2], //عض
                    "ا" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[1]
                ];
                rangkaNahi = [
                    "لَا تَ" + rangka[0] +  "َ" + rangka[1] + rangka[2],
                    "لَا تَ" + rangka[0] +  "ُ" + rangka[1] + "َ" + rangka[1]
                ];
                rangkamakan = "مَ" + rangka[0] + "َ" + rangka[1] + "ّ"
            } else {
                rangkaMudore = [
                    (rangka[0] + "ِ" + rangka[1] + "ّ"),
                    (rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[1])
                ]
                rangkaAmr = [
                    rangka[0] + "ِ" + rangka[1] + rangka[2],
                    "ا" + rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[1]
                ];
                rangkaNahi = [
                    "لَا تَ" + rangka[0] +  "ِ" + rangka[1] + rangka[2],
                    "لَا تَ" + rangka[0] +  "ُ" + rangka[1] + "ِ" + rangka[1]
                ];
                rangkamakan = "مَ" + rangka[0] + "ِ" + rangka[1] + "ّ";
            };

            rangkaMadi = [
                (rangka[0] + "َ" + rangka[1] + "ّ"), 
                (rangka[0] + "َ" + rangka[1] + "َ" + rangka[1])
            ];
            rangkamamaj = [
                (rangka[0] + "ُ" + rangka[1] + "ّ"), 
                (rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[1])
            ];
            rangkamumaj = [
                ("ُ" + rangka[0] + "َ" + rangka[1] + "ّ"),
                ("ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[1])
            ]
            rangkaFail = rangka[0] + "َآ" + rangka[1] + rangka[2];
            rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ُوْ" + rangka[1];
            rangkamasdar = rangka[0] + "َ" + rangka[1] + "ّ";
            rangkaalat = "مِ" + rangka[0] + "َ" + rangka[1] + "ّ";
            return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if(wazan[i] == "auaj"|| wazan[i] == "uuaj") {//صان يصون
        rangkaMadi= [
            (rangka[0] + "َ" + rangka[1] + rangka[2]),
            (rangka[0] + "ُ" + rangka[2])
        ];
        rangkamamaj= [
            (rangka[0] + "ِي" + rangka[2]),
            (rangka[0] + "ِ" + rangka[2])
        ];
        rangkaMudore = [
            (rangka[0] + "ُو" + rangka[2]),
            (rangka[0] + "ُ" + rangka[2])
        ];
        rangkamumaj = [
            ("ُ" + rangka[0] + "َا" + rangka[2]),
            ("ُ" + rangka[0] + "َ" + rangka[2])
        ];
        rangkaAmr = [
            rangka[0] + "ُ" + rangka[2],
            rangka[0] + "ُو" + rangka[2],
            "yei"
        ];
        rangkaNahi = [
            "لَا تَ" + rangka[0] +  "ُ" + rangka[2],
            "لَا تَ" + rangka[0] +  "ُو" + rangka[2],
            "yei"
        ];
        rangkaFail = rangka[0] + "َ" + rangka[1] + "ئِ" + rangka[2];
        rangkaMaful = "مَ" + rangka[0] + "ُو" + rangka[2];
        rangkamasdar = rangka[0] + "َوْ" + rangka[2]
        rangkamakan = "مَ" + rangka[0] + "َا" + rangka[2];
        rangkaalat = "مِ" + rangka[0] + "ْوَ" + rangka[2];
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};

    } else if(wazan[i] == "aaaj" || wazan[i] == "aiaj" || wazan[i] == "iaaj" || wazan[i] == "iiaj") {// باع يبيع خاف يخاف
        rangkaMadi = [
            (rangka[0] + "َ" + rangka[1] + rangka[2]),
            (rangka[0] + "ِ" + rangka[2])
        ];
        rangkamamaj = [
            (rangka[0] + "ِي" + rangka[2]),
            (rangka[0] + "ِ" + rangka[2])
        ];
        rangkaFail = rangka[0] + "َ" + rangka[1] + "ئِ" + rangka[2];
        rangkaalat = "مِ" + rangka[0] + "ْيَ" + rangka[2];
        
        if(wazan[i] == "iaaj" || wazan[i] == "aaaj"){ // خاف
            rangkaMudore = [
                rangka[0] + "َا" + rangka[2],
                rangka[0] + "َ" + rangka[2]
            ]
            rangkamumaj = [
                "ُ" + rangka[0] + "َا" + rangka[2],
                "ُ" + rangka[0] + "َ" + rangka[2]
            ]
            rangkaAmr = [
                rangka[0] + "َ" + rangka[2],
                rangka[0] + "َا" + rangka[2],
                "yei"
            ];
            rangkaNahi = [
                "لَا تَ" + rangka[0] +  "َ" + rangka[2],
                "لَا تَ" + rangka[0] +  "َا" + rangka[2],
                "yei"
            ];
            rangkaMaful = "مَ" + rangka[0] + "ُو" + rangka[2];
            rangkamasdar = rangka[0] + "َوْ" + rangka[2];
            rangkamakan = "مَ" + rangka[0] + "َا" + rangka[2];

        } else{ // باع
            rangkaMudore = [
                rangka[0] + "ِي" + rangka[2],
                rangka[0] + "ِ" + rangka[2]
            ];
            rangkamumaj = [
                "ُ" + rangka[0] + "َا" + rangka[2],
                "ُ" + rangka[0] + "َ" + rangka[2]
            ]
            rangkaAmr = [
                rangka[0] + "ِ" + rangka[2],
                rangka[0] + "ِي" + rangka[2],
                "yei"
            ]
            rangkaNahi = [
                "لَا تَ" + rangka[0] +  "ِ" + rangka[2],
                "لَا تَ" + rangka[0] +  "ِي" + rangka[2],
                "yei"
            ]
            rangkaMaful = "مَ" + rangka[0] + "ِي" + rangka[2];
            rangkamasdar = rangka[0] + "َيْ" + rangka[2];
            rangkamakan = "مَ" + rangka[0] + "ِي" + rangka[2];
        }
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};

    } else if (wazan[i] == "ianaq"){ //if (wazanmisal.indexOf(wazan[i]) >= 0 && rangka[2] == "ي") { // رضي adanya cm ia doang
        rangkaMadi = [
            rangka[0] + "َ" + rangka[1] + "ِ" + rangka[2],
            rangka[0] + "َ" + rangka[1],
            "naqisia"
        ]
        rangkaMudore = [
            rangka[0] + "ْ" + rangka[1] + "َى",
            rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2]
        ]
        rangkaAmr = [
            "اِ" + rangka[0] + "ْ" + rangka[1] + "َ",
            "اِ" + rangka[0] + "ْ" + rangka[1] + "َيَ"
        ]
        rangkaNahi = [
            "لَا تَ" + rangka[0] + "ْ" +rangka[1] + "َ",
            "لَا تَ" + rangka[0] + "ْ" +rangka[1] + "َيَ"
        ]
        rangkamumaj = [
            "ُ" + rangka[0] + "ْ" + rangka[1] + "َى",
            "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2]
        ]
        rangkamamaj = [
            rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2],
            rangka[0] + "ُ" + rangka[1]
        ]
        rangkaFail = [
            rangka[0] + "َا" + rangka[1],
            rangka[0] + "َا" + rangka[1] + "ِي"
        ];
        rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2] + "ّ";
        rangkamasdar = [
            rangka[0] + "ِ" + rangka[1] + "ىً",
            rangka[0] + "ِ" + rangka[1] + "ى"
        ];
        rangkamakan = [
            "مَ" + rangka[0] + "ْ" + rangka[1] + "ًا",
            "مَ" + rangka[0] + "ْ" + rangka[1] + "َي"
        ]
        rangkaalat = ""
        console.log({rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat});
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if(wazan[i] == "ainaq") {
        
    }
  } // endfor

  
}// endfunction

function masukintabel(rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat, wazan) {
    function gantihamzah(str) {
       return str.replace( /أَا/ , "ءَا" ).replace( /أِي/ , "ئِي" ).replace( /اأ/ , "اء" ).replace( /أَأْ/ , "آ" ).replace( /أُأْ/ , "أُو" )
    }
    const rangkaimudoroah = ["يَ","يَ","يَ","تَ","تَ","يَ","تَ","تَ","تَ","تَ","تَ","تَ","أَ","نَ"];
    const rangkaimajhul = ["ي","ي","ي","ت","ت","ي","ت","ت","ت","ت","ت","ت","أ","ن"]
    const rangkaimadi = ["َ", "َا", "ُوْا", "َتْ", "َتَا", "ْنَ", "ْتَ", "ْتُمَا", "ْتُمْ", "ْتِ", "ْتُمَا", "ْتُنَّ", "ْتُ", "ْنَا"];
    const rangkaimudore = ["ُ","َانِ","ُوْنَ","ُ","َانِ","ْنَ", "ُ", "َانِ", "ُوْنَ", "ِيْنَ", "َانِ", "ْنَ", "ُ", "ُ"];
    const rangkaimudorenaqisia = ["ُ","َانِ","وْنَ","ُ","َانِ","ْنَ", "ُ", "َانِ", "وْنَ", "يْنَ", "َانِ", "ْنَ", "ُ", "ُ"];
    const rangkaimumaj = rangkaimudore;
    const rangkaimumajnaqisia = rangkaimudorenaqisia;
    const rangkaimamaj = rangkaimadi;
    const rangkaiamr = [ "ْ", "َا", "ُوْا", "ِيْ", "َا", "ْنَ"];
    const rangkaiamrnaqisia = [ "","ا", "وْا", "يْ", "ا", "يْنَ"];
    const rangkainahi = rangkaiamr;
    const rangkaiisim = ["ٌ","َانِ","ُوْنَ","َةٌ","َتَانِ","َاتٌ"];
    
    if (typeof(rangkaMadi) === "string") { //bukan mudoaf
        
        for(let i = 0; i< madhi.length; i++) {
            madhi[i].innerHTML = gantihamzah(rangkaMadi + rangkaimadi[i]);
        }
        
        for(let i = 0; i< mudore.length; i++) {
            mudore[i].innerHTML = gantihamzah(rangkaimudoroah[i] + rangkaMudore + rangkaimudore[i]);
        }
        
        for(let i = 0; i< mamaj.length; i++) {
            mamaj[i].innerHTML = gantihamzah(rangkamamaj + rangkaimamaj[i]);
        }
        
        for(let i = 0; i< mumaj.length; i++) {
            mumaj[i].innerHTML = gantihamzah(rangkaimajhul[i] + rangkamumaj + rangkaimumaj[i]);
        }
        
        for(let i = 0; i< amr.length; i++) {
            amr[i].innerHTML = gantihamzah(rangkaAmr + rangkaiamr[i]);
        }
        
        for(let i = 0; i< nahi.length; i++) {
            nahi[i].innerHTML = gantihamzah(rangkaNahi + rangkainahi[i]);
        }
    } else if(typeof(rangkaMadi) == "object" && rangkaMadi[2] !== "naqisia") { //mudoaf dan ajwaf
        for(let i = 0; i<= 4; i++) {
            madhi[i].innerHTML = gantihamzah(rangkaMadi[0] + rangkaimadi[i]);
        }
        for(let i = 5; i<= 13; i++) {
            madhi[i].innerHTML = gantihamzah(rangkaMadi[1] + rangkaimadi[i]);
        }        
        for(let i = 0; i< mudore.length; i++) {
            mudore[i].innerHTML = gantihamzah(rangkaimudoroah[i] + rangkaMudore[0] + rangkaimudore[i]);
            if(i == 5 || i == 11) {
                mudore[i].innerHTML = gantihamzah(rangkaimudoroah[i] + rangkaMudore[1] + rangkaimudore[i]);
            }
        }
        for(let i = 0; i<= 4; i++) {
            mamaj[i].innerHTML = gantihamzah(rangkamamaj[0] + rangkaimamaj[i]);
        }
        for(let i = 5; i<= 13; i++) {
            mamaj[i].innerHTML = gantihamzah(rangkamamaj[1] + rangkaimamaj[i]);
        }
        for(let i = 0; i< mumaj.length; i++) {
            mumaj[i].innerHTML = gantihamzah(rangkaimajhul[i] + rangkamumaj[0] + rangkaimumaj[i]);
            if(i == 5 || i == 11) {
                mumaj[i].innerHTML = gantihamzah(rangkaimajhul[i] + rangkamumaj[1] + rangkaimumaj[i]);
            }
        }
        if(rangkaAmr.length == 3){ // ajwaf dibuat length 3
            for(let i = 0; i< amr.length; i++) {
                amr[i].innerHTML = gantihamzah(rangkaAmr[1] + rangkaiamr[i]);
                if(i == 0 || i == 5) {
                    amr[i].innerHTML = gantihamzah(rangkaAmr[0] + rangkaiamr[i]);
                }
            }
            for(let i = 0; i< nahi.length; i++) {
                nahi[i].innerHTML = gantihamzah(rangkaNahi[1] + rangkainahi[i]);
                if(i == 0 || i == 5) {
                    nahi[i].innerHTML = gantihamzah(rangkaNahi[0] + rangkainahi[i]);
                }
            }

        } else{
            for(let i = 0; i< amr.length; i++) {
                amr[i].innerHTML = gantihamzah(rangkaAmr[0] + rangkaiamr[i]);
                if(i == 5) {
                    amr[i].innerHTML = gantihamzah(rangkaAmr[1] + rangkaiamr[i]);
                }
            }
            for(let i = 0; i< nahi.length; i++) {
                nahi[i].innerHTML = gantihamzah(rangkaNahi[0] + rangkainahi[i]);
                if(i == 5) {
                    nahi[i].innerHTML = gantihamzah(rangkaNahi[1] + rangkainahi[i]);
                }
            }
        }

        // misal radhiya
    } else if(rangkaMadi[2] == "naqisia") {
        for (let i = 0; i< madhi.length; i++ ) {
            if(i == 2){
                madhi[i].innerHTML = gantihamzah(rangkaMadi[1] + rangkaimadi[i]);
                mamaj[i].innerHTML = gantihamzah(rangkamamaj[1] + rangkaimadi[i]);
            } else {
                madhi[i].innerHTML = gantihamzah(rangkaMadi[0] + rangkaimadi[i]);
                mamaj[i].innerHTML = gantihamzah(rangkamamaj[0] + rangkaimadi[i]);
            }
        }
        for (let i = 0; i< mudore.length; i++) {
            mudore[i].innerHTML = gantihamzah(rangkaimudoroah[i] + rangkaMudore[0] + rangkaimudorenaqisia[i]);
            mumaj[i].innerHTML = gantihamzah(rangkaimajhul[i] + rangkamumaj[0] + rangkaimudorenaqisia[i]);
            if(i == 0 || i ==3 || i == 6 || i == 12 || i ==13) {
                mudore[i].innerHTML = gantihamzah(rangkaimudoroah[i] + rangkaMudore[0]);    
                mumaj[i].innerHTML = gantihamzah(rangkaimajhul[i] + rangkamumaj[0]);    
            } else if (i == 1 || i == 4 || i == 5 || i ==7 || i == 10 || i == 11) {
                mudore[i].innerHTML = gantihamzah(rangkaimudoroah[i] + rangkaMudore[1] + rangkaimudorenaqisia[i]);
                mumaj[i].innerHTML = gantihamzah(rangkaimajhul[i] + rangkamumaj[1] + rangkaimumajnaqisia[i]);
            } else if (i == 9) {
                mudore[i].innerHTML = gantihamzah(rangkaimudoroah[i] + rangkaMudore[0] + rangkaimudorenaqisia[i]);
                mumaj[i].innerHTML = gantihamzah(rangkaimajhul[i] + rangkamumaj[0] + rangkaimumajnaqisia[i]);
            }
        }
        for(let i = 0; i< amr.length; i++) {
            amr[i].innerHTML = gantihamzah(rangkaAmr[0] + rangkaiamrnaqisia[i]);
            if(i == 1 || i == 4 ) {
                amr[i].innerHTML = gantihamzah(rangkaAmr[1] + rangkaiamrnaqisia[i]); 
            }
        }
        for(let i = 0; i < nahi.length; i++) {
            nahi[i].innerHTML = gantihamzah(rangkaNahi[0] + rangkaiamrnaqisia[i]);
            if(i == 1 || i == 4) {
                nahi[i].innerHTML = gantihamzah(rangkaNahi[1] + rangkaiamrnaqisia[i]); 
            }
        }
    }


    if(typeof(rangkaFail) == "object") {
        for(let i = 0; i< fail.length; i++) {
            if(i == 0) {
                fail[i].innerHTML = gantihamzah(rangkaFail[0] + "ٍ")
            }else if(i == 2) {
                fail[i].innerHTML = gantihamzah(rangkaFail[0] + rangkaiisim[i]);
            } else {
                fail[i].innerHTML = gantihamzah(rangkaFail[1] + rangkaiisim[i]);
            }
        }
        
    } else {
        for(let i = 0; i< fail.length; i++) {
            fail[i].innerHTML = gantihamzah(rangkaFail + rangkaiisim[i]);
        }
    }

    if (wazan[0] === "uu" || wazan[0] === "uumzfa" || wazan[0] === "uumzlam" || wazan[0] === "uumzain") {
        for(let i = 0; i< maful.length; i++) {
            maful[i].innerHTML = "---";
        }
    } else {
        for(let i = 0; i< maful.length; i++) {
            maful[i].innerHTML = gantihamzah(rangkaMaful + rangkaiisim[i]);
        }
    }

// masdar oi
    if(typeof(masdar) == "string") {
        for(let i = 0; i< masdar.length; i++) {
            masdar[i].innerHTML = gantihamzah(rangkamasdar + rangkaiisim[i]);
        }
    } else {
        for(let i = 1; i< masdar.length; i++) {
            masdar[i].innerHTML = gantihamzah(rangkamasdar[1] + rangkaiisim[i]);
            if (i == 2) {
                masdar[i].innerHTML = gantihamzah(rangkamasdar[1] + rangkaiisim[i]).replace("ُ", "َ");
            }
        }
        masdar[0].innerHTML = gantihamzah(rangkamasdar[0]);
    }
    if(typeof(makan) == "string") {
        for(let i = 0; i< makan.length; i++) {
            makan[i].innerHTML = gantihamzah(rangkamakan + rangkaiisim[i]);
        }
    } else {
        for(let i = 1; i< makan.length; i++) {
            makan[i].innerHTML = gantihamzah(rangkamakan[1] + rangkaiisim[i]);
            if (i == 2) {
                makan[i].innerHTML = gantihamzah(rangkamakan[0].replace("ًا", "") + rangkaiisim[i]).replace("ُ", "َ");
            }
        }
        makan[0].innerHTML = gantihamzah(rangkamakan[0]);
    }

    if (wazanuu.indexOf(wazan[0]) < 0 || wazanii.indexOf(wazan[0]) < 0 || wazania.indexOf(wazan[0]) < 0)  {
        for(let i = 0; i< alat.length; i++) {
            alat[i].innerHTML = "---";
        }
    } else {
        for(let i = 0; i< alat.length; i++) {
            alat[i].innerHTML = gantihamzah(rangkaalat + rangkaiisim[i]);
        }
    }

}