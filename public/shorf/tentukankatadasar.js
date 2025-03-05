function tentukankatadasar(th, masuk) {

    let katadasar = [];
    let type = [];
      //fiil nahi 
    if (masuk[0] == "ل" && th[2] == " ") {
        if (th[6] == "ّ") { // la tamudda
            const ambil = th.split(" ")[1];
            const ajw = ambil[1] + "ا" + ambil[2];
            const mud = ambil[1] + ambil[2] + "ّ";
            console.log(th[th.length-2]);
            if(th[th.length-2] == "ن"){
                if(kumajwafr.indexOf(ajw) >= 0){ // ada di daftar ajwaf
                    katadasar.push(ajw);
                    type.push("fiil nahiy untuk domir أنتن ajwaf")}
                if(kummudoafr.indexOf(mud) >= 0){ // ada di daftar mudoaf
                    katadasar.push(mud);
                    type.push("fiil nahiy mudoaf")}
            } else {
                katadasar.push(ambil[1] + ambil[2] + "ّ");
                type.push("fiil nahiy mudhoaf")
            }
        } else if (th[5] === th[6]) { //laa tamdudna
            const ambil = th.split(" ")[1];
            katadasar.push(ambil.slice(1, 3) + "ّ");
            type.push("fi'il nahiy untuk dhomir أنتنّ");
        } else { // shohih
            const ambil = th.split(" ")[1];
            if (ambil.length == 3) {
                katadasar.push(ambil[1] + "ا" + ambil[2]);
                type.push("f'il nahiy ajwaf");
            } else if(ambil[2] =="و" || ambil[2] =="ي" || ambil[2] == "ا") {
                katadasar.push(ambil[1] + "ا" + ambil[3]);
                type.push("f'il nahiy ajwaf");
            }else if(ambil[ambil.length-1] =="ن" && ambil.length == 4) {
                katadasar.push(ambil[1] + "ا" + ambil[2]);
                type.push("f'il nahiy ajwaf")
            } else{
            katadasar.push(ambil.slice(1, 4));
            type.push("fi'il nahiy");
            }
        }
        
        //fiil amr berawalan ا
    } else if (masuk[0] == "ا") {
        if(th.length == 4) {// اكتب
            if(masuk[masuk.length-1] == "ْ") {
                katadasar.push(th.slice(1, 4));
                type.push("fiil amr (kata kerja perintah)");
            } else {
                if(th[3] == "ّ") { // افرّ
                    katadasar.push(th.slice(1, 4));
                    type.push("fi'il mudhori mudhoaf")
                }else if (th[2]=="و" || th[2] == "ي" || th[2] =="ا"){
                    katadasar.push(th[1] + "ا" + th[3]);
                    type.push("fiil mudhori ajwaf");
                } else {
                    katadasar.push(th.slice(1, 4));
                    type.push(["fiil amr", "fiil mudhori untuk dhomir أنا"]);
                }
            }
        } else if(th.length == 5 && th[4] == "ن") { //uktubna umdudna
            if(th[2] == th[3]){
                katadasar.push(th.slice(1, 3) + "ّ"); // مدّ
                type.push("fiil amr untuk dhomir أنتن")
            } else {
                katadasar.push(th.slice(1, 4));
                type.push("fiil amr untuk dhomir أنتن");
            }
        } else {
            katadasar.push(th.slice(1, 4));
            type.push("fiil amr");
        }

        // isim fail 
    } else if (th[1] == "ا" && th[2] != " " &&th.length >=4 && hurufmadhi.indexOf(th[3]) == -1) {
        if(th[3] == "ّ") {// مادّ 
            katadasar.push(th[0] +th[2] + "ّ");
            type.push("isim fa'il mudhoaf");
        } else if(th[2] == "أ") {// قائل
            const ajw = th[0] + "ا" + th[3];
            const mhzain = th[0] + th[2] + th[3];
            if(kumajwafr.indexOf(ajw) >= 0) {katadasar.push(ajw); type.push("isim fa'il ajwaf")}
            if(kummhzainr.indexOf(mhzain) >= 0) {katadasar.push(mhzain); type.push("isim fa'il mahmuz 'ain")}
        } else if(th.length == 4 && th[3] == "ي") {// خافي
            katadasar.push(th[0] + "ا" + th[2]);
            type.push("fi'il amr ajwaf")
        } else { //shohih
            katadasar.push(th.replace(/ا/, "").slice(0, 3));
            type.push("isim fa'il");
        }
        
        //isim maf'ul = done
    } else if(th[0] =="م" && th[3] == "و" && th.length >= 5 && th[4] !== "ا") {
        if (th[2] == th[4]) { // mamduud
            katadasar.push(th.replace(/م/, "").replace(/و/, "").slice(0, 2) + "ّ");
            type.push("isim maf'ul");
        } else{ //shohih
        katadasar.push(th.replace(/م/, "").replace(/و/, "").slice(0, 3));
        type.push("isim maf'ul");
        }

        // farrot dan farrota
    } else if (th.length >= 2 && masuk[2] == "ّ" && th[3] == "ت") {
        katadasar.push(th[0] + th[1] + "ّ");
        type.push("fiil madhi")

        //fiil mudore
    } else if (th.length >= 4 && mudoroah.indexOf(th[0]) >= 0){ // semua yang diawali mudoroah anaitu
        if (hurufmadhi.indexOf(th[3]) >= 0 && th.length == 4 && th[3] != "ا") { // semua yang huruf keempatnya hurufmadhi dan hurufnya cmn 4
            if (masuk[3]=="ْ"){//ada sukun nya
                katadasar.push(th.replace(/[يأنات]/, "").slice(0, 3));
                type.push("fi'il mudhori");
            } else if(masuk[3]==("َ" || "ِ" || "ُ")){
                if(th[1] == th[2]) {// تممت mudhoaf
                    katadasar.push(th.slice(0,2) + "ّ")
                    type.push("fiil madhi mudho'af")
                } else { // تعبت sisaa semua madhi berhuruf 4
                    katadasar.push(th.slice(0, 3));
                    type.push("fiil madhi")
                }
            } else if (th[2] == "و" || th[2] == "ي" || th[2] == "ا"){
                katadasar.push(th[1] + "ا" + th[3]);
                type.push("fiil mudhori' ajwaf")
            
            }else if(confirm("apakah yang anda maksudkan \n adalah " + th[0] + "َ" + th[1] + th[2] + "ْ" + th[3] + "? \ntekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){ // تعبْت  semua madhi
                if(th[1] == th[2]) {// تممت mudhoaf
                    katadasar.push(th.slice(0,2) + "ّ")
                    type.push("fiil madhi mudho'af")
                } else { // تعبت sisaa semua madhi berhuruf 4 daan ternyata يقلن dan semua ajwaf mudore antunna masuk sini
                    katadasar.push(th.slice(0, 3));
                    type.push("fiil madhi");
                    const ajw = katadasar[0][1] + "ا" +  katadasar[0][2];
                    const soh = katadasar[0];
                    if(th[0]=="ي" || th[0] == "ت") { // 
                        katadasar=[]; type=[];
                        if(kumajwafr.indexOf(ajw) >= 0 && th[3] == "ن") {
                            katadasar.push(ajw);
                            type.push("fiil mudhori' ajwaf untuk أنتنّ atau هنّ") }
                        if(kumsohr.indexOf(soh) >=0 ){
                            katadasar.push(soh);
                            type.push("fiil madhi")
                        }
                    }
                }
            } else { // masuk fiil mudhore
                if (confirm("bukan ya,, kalau gitu apakah \n " + th[0] + "َ" + th[1] + "ْ" + th[2] + th[3] + "? \n tekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){ // تَعْبت
                    katadasar.push(th.replace(/[يأنات]/, "").slice(0, 3));
                    type.push("fi'il mudhori")
                } else {
                    alert("coba masukkan lengkap dengan harokatnya")
                }

            }
            
        // huruf nya 4 tapi ga ada tanda madhi //يكسب
        } else if (th.length==4 && hurufmadhi.indexOf(th[3]) == -1){
            katadasar.push(th.slice(1, 4));
            type.push("fiil mudhori nah begini");
            const ajw = th[1] + "ا" + th[2];
            const mud = th[1] + th[2] + "ّ"
            if (th[2]=="و" || th[2]=="ا" || th[2]=="ي"){ // ajwaf
                katadasar=[]; type = [];
                katadasar.push(th[1] + "ا"+ th[3]);
                type.push("fiil mudhori' ajwaf")
            } else if (th[3] == "ّ"){ //yg ada tasydidnya يصنّ تفرّ
                katadasar = []; type = []; 
                if(kumajwafr.indexOf(ajw) >= 0){ // ada di daftar ajwaf
                    katadasar.push(ajw);
                    type.push("fiil mudhori ajwaf")}
                if(kummudoafr.indexOf(mud) >= 0){ // ada di daftar mudoaf
                    katadasar.push(mud);
                    type.push("fiil mudhori mudoaf")}
            } 
        // untuk yang huruf nya lebih dari 4 yang masih termasuk madhi yang huruf awalnya anaitu
        } else if (th.length >= 4) {
            if (th[th.length-1] == "ن") { // klo berakhiran nun bberarti mudore
                if(th[3] == "ّ" || th [2] == th[3]) { // يمدّ
                   katadasar.push(th.replace(/[يأنات]/, "").slice(0, 2) + "ّ");
                   type.push("fiil mudhori' mudho'af")
                } else { // shohih
                   katadasar.push(th.replace(/[يأنات]/, "").slice(0, 3));
                   type.push("fiil mudhori' yang ini kah");
                   console.log(th[2])
                   if (th[2]=="و" || th[2] == "ا" || th[2] == "ي") {
                       katadasar = []; type = [];
                       katadasar.push(th[1] + "ا" + th[3]);
                       type.push("fiil mudhori ajwaf");
                   }
                }
            } else { //ternyata fiil yang belakangnya nun klo antunna jad tasydid nun nya masuk sini
                if(th[3] == "ن"){
                    if(th[4] == "ّ") { //يلعنّ
                        katadasar.push(th.slice(1,4));
                        type.push("fiil mudhori'")
                    }
                }else{
                    katadasar.push(th.slice(0, 3));
                    type.push("fiil madhi")
                }
            }
        }
        // end fiil fiil berawalan anaitu

        
        // huruf mim di depan!!
    } else if (th[0] == "م") {
            // madhi, berawalan mim humaa
        if (th[3] == "ا" && th.length == 4){ 
            if(th[2] == "ّ"){ // mudoaf
                katadasar.push(th.slice(0, 3));
                type.push("fiil madhi untuk dhomir هما", "fiil amr untuk dhomir أنتما")      
            } else { //shohih
                katadasar.push(th.slice(0, 3));
                type.push("fiil madhi untuk dhomir هما")  
            }
        // isim alat  مِفعل
        } else if(masuk[1] == "ِ" ) {
            if( th[3] == "ّ") { // mudoaf
                katadasar.push(th.replace(/م/, "").replace(/ا/, "").slice(0, 3));
                type.push("isim alat");
            } else if(th[2] =="ي"){
                katadasar.push(th[1] + "ا" +th[3]);
                type.push("isim alat ajwaf")
            } else { // shohih
                katadasar.push(th.replace(/م/, "").replace(/ا/, "").slice(0, 3));
                type.push("isim alat");
            }
            // مفعال
        } else if (th[3] == "ا") {
            katadasar.push(th.replace(/م/, "").replace(/ا/, "").slice(0, 3));
            type.push("isim alat");

            //isim makan atau alat berharokat
        } else if(masuk[3] == "ْ" ) {
            katadasar.push(th.replace(/م/, "").slice(0, 3));
            type.push("isim makan atau zaman", "isim alat");

            // madhi berharokat
        } else if (masuk[3] == "َ") {
            if (th[1] == th[2]) {
                katadasar.push(th.slice(0, 2)+ "ّ");
                type.push("fiil madhi");
            } else {
                katadasar.push(th.slice(0, 3));
                type.push("fiil madhi");
            }
            //maf'ul ajwaf dan isim makan ajwaf
        }else if(th[2] =="و" || th[2] == "ا" || th[2] == "ي") {
            katadasar.push(th[1] + "ا" +th[3]);
            type.push("isim maf'ul ajwaf", "isim makan/zaman ajwaf", "isim alat")
            
            //fiil madhi yang huruf awalnya mim selain dhomir huwa
        } else if (th[2] != "ّ" && th[1] != th[2]){ //memastikan bukan madhi mudoaf, tapi makan mudoaf masuk sini
            if(hurufmadhi.indexOf(th[3]) >= 0 && th.length == 4){   // huruf nya 4, dan ada tanda madhi
                if(confirm("apakah yang anda maksudkan \n adalah " + th[0] + "َ" + th[1] + "ْ" + th[2] + th[3] + "? \n tekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){ // مسكن
                    katadasar.push(th.replace(/م/, "").slice(0, 3));
                    type.push("isim makan atau zaman", "isim alat")
                } else { // مسكت 
                    if (confirm("bukan ya,, kalau gitu apakah \n " + th[0] + "َ" + th[1] + "َ" + th[2] + th[3] + "? \n tekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){
                        if (th[1] == th[2]) {
                            katadasar.push(th.slice(0, 2)+ "ّ");
                            type.push("fiil madhi");
                        } else {
                            katadasar.push(th.slice(0, 3));
                            type.push("fiil madhi");
                        }
                    } else{
                            alert("coba masukkan kata, lengkap dengan harokatnya...");
                    }
                }
            } else if (th.length > 4) { // fiil madhi depannya mim huruf lebih dari 4
                if(th[th.length-1] == "ن" && th[th.length-2] == "ا") { // semua isim makan
                        katadasar.push(th.replace(/م/, "").slice(0, 3));
                        type.push("isim makan atau zaman", "isim alat sink iki po yo");
                } else if(th[th.length-1] == "ن" && th[th.length-2] == "و") { // semua isim makan
                        katadasar.push(th.replace(/م/, "").slice(0, 3));
                        type.push("isim makan atau zaman", "isim alat sink iki po yo");
                } else if(th[4] == "ة" || th[5] == "ت") { // مدرسة مدرسات
                    katadasar.push(th.replace(/م/, "").slice(0, 3));
                    type.push("isim makan atau zaman", "isim alat dalam bentuk muannast")
                } else {
                    katadasar.push(th.slice(0, 3));
                    type.push("fiil madhi kayaknya")
                }
            } else { //masjid
                katadasar.push(th.replace(/م/, "").slice(0, 3));
                type.push("isim makan atau zaman", "isim alat sink iki po yo");
            }
            // dibawah ini penanganan mudoaf madhi
        
            // madhi berawalan mim مدّ مدّوا  
        } else if (th[3] != "ت") {
            if(th[2] == "ّ"){ // mudoaf
                if(th[3] == "ي") { //maddiiii
                    katadasar.push(th.slice(0, 3));
                    type.push("fi'il amr untuk dhomir أنتِ")
                } else {
                katadasar.push(th.slice(0, 3));
                type.push("fiil madhi", "fiil amr");
                }     
            } else { //shohih & مررنا
                if (th[1] == th[2]) {
                    katadasar.push(th.slice(0, 2) + "ّ");
                    type.push("fiil madhi mudhoaf")
                } else {
                    katadasar.push(th.slice(0, 3));
                    type.push("fiil madhi"  )
                }    
            }
            // مدّت  
        } else if (th[3] == "ت") {
            if(th[2] == "ّ"){ // mudoaf
                katadasar.push(th.slice(0, 3));
                type.push("fiil madhi");        
            } else { //shohih & مددت
                if (th[1] == th[2]) {
                    katadasar.push(th.slice(0, 2) + "ّ");
                    type.push("fiil madhi mudhoaf yang inikok bisa piye")
                } else {
                    katadasar.push(th.slice(0, 3));
                    type.push("fiil madhi"  )
                }  
            }
        }    

        // end fiil fiil berawalan mim
    
        //fiil madhi sdh termasuk misal
    } else if(th[1] == th[2]) {
        katadasar.push(th.slice(0, 2) + "ّ");
        type.push("fiil madhi mudho'af");
    }else if(th[1] =="ي" || th[1] == "و") {
        katadasar.push(th[0] + "ا" + th[2]);
        type.push("fiil amr ajwaf hahaha")
    }else if(th[1] == "ا" ) { //صائن
        if(th[2] == "أ"){
            katadasar.push(th[0] + "ا" + th[3]);
            type.push("isim fa'il ajwaf disini")
        } else{
            if(th.length == 3) {
                katadasar.push(th);
                type.push("fiil madhi ajwaf untuk dhomir huwa")
            } else{
                katadasar.push(th[0] + "ا" + th[2]);
                type.push("fiil amr ajwaf hihihi")
            }
        }
    } else { // madhi shohih termasuk ajwaf sunta suntuma suntum suntunna
        const ambil = th.replace("تما", "").replace("تم", "").replace("تن", "").replace("ّ", "").replace("نا", "");
        if(th.length == 2) {// صنّ
            katadasar.push(ambil[0] + "ا"+ ambil[1]);
            type.push("fiil amr ajwaf satu")
        } else if (ambil.length == 2){ //utk ajwaf
            const ajw = ambil[0] + "ا"+ ambil[1];
            const mud = ambil[0] + ambil[1] + "ّ";
            if (th[2]=="ّ"){ //صنّ فرّ
                if(kumajwafr.indexOf(ajw) >= 0) {katadasar.push(ajw); type.push("fiil madhi ajwaf", "fiil amr ajwaf")}
                if(kummudoafr.indexOf(mud) >= 0) {katadasar.push(mud); type.push("fiil madhi mudhoaf", "fiil amr mudhoaf")}
            }
        } else if (ambil[2]== "ت"){ // shunta dan shohih lain
            if (masuk[3]== "ْ"){ // ada sukun
                katadasar.push(ambil[0] + "ا"+ ambil[1])
                type.push("fiil madhi ajwaf");
            }else if (masuk[3]==("َ" || "ِ" || "ُ")){ // gada sukun
                katadasar.push(ambil);
                type.push("fiil madhi shohih")
            }else if (confirm("apakah yang kamu maksudkan adalah " + ambil[0] + "َ" + ambil[1] + "َ" + ambil[2] + "َ atau "+ ambil[0] + "َ" + ambil[1] + "ِ" + ambil[2] + "َ atau "+ ambil[0] + "َ" + ambil[1] + "ُ" + ambil[2] + "َ")){// yg gapake harokat
                katadasar.push(th.slice(0, 3));
                type.push("fiil madhi")
            }else {
                katadasar.push(ambil[0] + "ا"+ ambil[1]);
                type.push("fiil madhi ajwaf dua")
            }
        }else if(th[1] == "ن" && th[2] == "ّ" && th[3] == "ا") { //صنّا
            const ajw = th[0] + "ا" + th[1];
            const mud = th[0] + th[1] + "ّ"
            if (th[2] == "ّ"){ 
                if(kumajwafr.indexOf(ajw) >= 0){ // ada di daftar ajwaf
                    katadasar.push(ajw);
                    type.push("fiil madhi ajwaf")}
                if(kummudoafr.indexOf(mud) >= 0){ // ada di daftar mudoaf
                    katadasar.push(mud);
                    type.push("fiil madhi mudoaf")}
            }
       
        } else if (th.length == 3 && th[2] == "ن") {// خفن
            const ajw = th[0] + "ا" +th[1];
            const soh = th;
            if(kumajwafr.indexOf(ajw) >= 0) {katadasar.push(ajw); type.push("fi'il amr ajwaf")}
            if(kumsohr.indexOf(soh) >= 0) {katadasar.push(soh); type.push("fi'il madhi")}
        }else { //akhir sisa fiil madhi 
            katadasar.push(th.slice(0, 3));
            type.push("fiil madhi masuk sini ada ga" ); 
        }
    } 
  
   console.log(katadasar);
   console.log(type);
    return {katadasar, type};
}