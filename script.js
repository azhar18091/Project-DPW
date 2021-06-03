var tiles ;
var tileId; 
var trueCh;  
var score = 0;
var loseEl = document.getElementById("lose");
var winEl = document.getElementById("win");  
var endEl = document.getElementById("end");  
var showTime ;

var kota_kota = [
    "Aceh Barat", 
    "Aceh Barat Daya", 
    "Aceh Besar", 
    "Aceh Jaya", 
    "Aceh Selatan", 
    "Aceh Singkil", 
    "Aceh Tamiang", 
    "Aceh Tengah", 
    "Aceh Tenggara", 
    "Aceh Timur", 
    "Aceh Utara", 
    "Agam", 
    "Alor", 
    "Ambon", 
    "Asahan", 
    "Asmat", 
    "Batam", 
    "Badung", 
    "Balangan", 
    "Balikpapan", 
    "Banda Aceh", 
    "Bandar Lampung", 
    "Bandung", 
    "Bandung Barat", 
    "Banggai", 
    "Banggai Kepulauan", 
    "Bangka", 
    "Bangka Barat", 
    "Bangka Selatan", 
    "Bangka Tengah", 
    "Bangkalan", 
    "Bangli", 
    "Banjar", 
    "Banjar Baru", 
    "Banjarmasin", 
    "Banjarnegara", 
    "Bantaeng", 
    "Bantul", 
    "Banyu Asin", 
    "Banyumas", 
    "Banyuwangi", 
    "Barito Kuala", 
    "Barito Selatan", 
    "Barito Timur", 
    "Barito Utara", 
    "Barru", 
    "Baru", 
    "Batang", 
    "Batang Hari", 
    "Batu", 
    "Batu Bara", 
    "Baubau", 
    "Bekasi", 
    "Belitung", 
    "Belitung Timur", 
    "Belu", 
    "Bener Meriah", 
    "Bengkalis", 
    "Bengkayang", 
    "Bengkulu", 
    "Bengkulu Selatan", 
    "Bengkulu Tengah", 
    "Bengkulu Utara", 
    "Berau", 
    "Biak Numfor", 
    "Bima", 
    "Binjai", 
    "Bintan", 
    "Bireuen", 
    "Bitung", 
    "Blitar", 
    "Blora", 
    "Boalemo", 
    "Bogor", 
    "Bojonegoro", 
    "Bolaang Mongondow", 
    "Bolaang Mongondow Selatan", 
    "Bolaang Mongondow Timur", 
    "Bolaang Mongondow Utara", 
    "Bombana", 
    "Bondowoso", 
    "Bone", 
    "Bone Bolango", 
    "Bontang", 
    "Boven Digoel", 
    "Boyolali", 
    "Brebes", 
    "Bukittinggi", 
    "Buleleng", 
    "Bulukumba", 
    "Bulungan", 
    "Bungo", 
    "Buol", 
    "Buru", 
    "Buru Selatan", 
    "Buton", 
    "Buton Utara", 
    "Ciamis", 
    "Cianjur", 
    "Cilacap", 
    "Cilegon", 
    "Cimahi", 
    "Cirebon", 
    "Dumai", 
    "Dairi", 
    "Deiyai", 
    "Deli Serdang", 
    "Demak", 
    "Denpasar", 
    "Depok", 
    "Dharmasraya", 
    "Dogiyai", 
    "Dompu", 
    "Donggala", 
    "Empat Lawang", 
    "Ende", 
    "Enrekang", 
    "Fakfak", 
    "Flores Timur", 
    "Garut", 
    "Gayo Lues", 
    "Gianyar", 
    "Gorontalo", 
    "Gorontalo Utara", 
    "Gowa", 
    "Gresik", 
    "Grobogan", 
    "Gunung Kidul", 
    "Gunung Mas", 
    "Gunungsitoli", 
    "Halmahera Barat", 
    "Halmahera Selatan", 
    "Halmahera Tengah", 
    "Halmahera Timur", 
    "Halmahera Utara", 
    "Hulu Sungai Selatan", 
    "Hulu Sungai Tengah", 
    "Hulu Sungai Utara", 
    "Humbang Hasundutan", 
    "Indragiri Hilir", 
    "Indragiri Hulu", 
    "Indramayu", 
    "Intan Jaya", 
    "Jakarta Barat", 
    "Jakarta Pusat", 
    "Jakarta Selatan", 
    "Jakarta Timur", 
    "Jakarta Utara", 
    "Jambi", 
    "Jayapura", 
    "Jayawijaya", 
    "Jember", 
    "Jembrana", 
    "Jeneponto", 
    "Jepara", 
    "Jombang", 
    "Kaimana", 
    "Kampar", 
    "Kapuas", 
    "Kapuas Hulu", 
    "Karang Asem", 
    "Karanganyar", 
    "Karawang", 
    "Karimun", 
    "Karo", 
    "Katingan", 
    "Kaur", 
    "Kayong Utara", 
    "Kebumen", 
    "Kediri", 
    "Keerom", 
    "Kendal", 
    "Kendari", 
    "Kepahiang", 
    "Kepulauan Anambas", 
    "Kepulauan Aru", 
    "Kepulauan Mentawai", 
    "Kepulauan Meranti", 
    "Kepulauan Sangihe", 
    "Kepulauan Selayar", 
    "Kepulauan Seribu", 
    "Kepulauan Sula", 
    "Kepulauan Talaud", 
    "Kepulauan Yapen", 
    "Kerinci", 
    "Ketapang", 
    "Klaten", 
    "Klungkung", 
    "Kolaka", 
    "Kolaka Utara", 
    "Konawe", 
    "Konawe Selatan", 
    "Konawe Utara", 
    "Kotamobagu", 
    "Kotawaringin Barat", 
    "Kotawaringin Timur", 
    "Kuantan Singingi", 
    "Kubu Raya", 
    "Kudus",];

function options(){
    document.getElementById('start').style.display = '';
    document.getElementById('end').style.display = 'none';
    tilesNumber = document.querySelector('input[name=jumlah-petak]:checked').value;
    console.log(typeof(tilesNumber));
    createEl(tilesNumber-1); 
    var boardWidth = Math.sqrt(tilesNumber) * 90 + 16; //
    document.getElementById('board').style.width = `${boardWidth}px`;
    document.getElementById('board').classList.add('show');
    document.getElementById('options').style.opacity = '0';
    switch(tilesNumber){
        case '9' : tiles = 4;
        break;
        case '16' : tiles = 7;
        break;
        case '25' : tiles = 10;
        break;
        case '36' : tiles = 14;
        break;
    }
    starter();
}

function starter(){
     
        document.getElementById('tiles').innerHTML= `tiles : ${tiles}`;
        var allTiles = document.querySelectorAll(".tile");
        allTiles.forEach(item => item.addEventListener('click',function(){
            choose(Number(item.id));
            this.classList.add('hover');
            document.getElementById('card-effect').play();
        }));
}
function createEl(n){
    for(var i= 0 ; i <= n ; i++){
           var t = document.createElement("div");
            t.id = i;
            t.className = "tile";
            var flipper = document.createElement('div');
            flipper.className = "flipper";
            var namaKota = document.createElement('p');
            namaKota.className = 'namaKota';
            var text = document.createTextNode(kota_kota[getRandomNumber(kota_kota.length)]);
            namaKota.appendChild(text);
            var front = document.createElement('div');
            front.className = "front";
            var back = document.createElement("div");
            back.className = "back";
            back.appendChild(namaKota);
            flipper.appendChild(front);
            flipper.appendChild(back);
            t.appendChild(flipper);
            document.querySelector('.matrix').appendChild(t);
    }
}
///2nd
function matrix() {
    switch(tilesNumber){
        case '9'  : showtime = 1500;
        break;
        case '16' : showTime = 2500;
        break;
        case '25' : showtime = 3500;
        break;
        case '36' : showTime = 4500;
        break;
    }
    document.getElementById('start').style.display = 'none'; 
     falseCh = 2;
     trueCh = tiles;
    
        setTimeout(function(){showTiles()},500);
        setTimeout(function(){clear()},showTime); 
    
}

// creating a random number
function getRandomNumber(max){
    
    return Math.floor(Math.random() * max);  
}    

//creating an array of random numbers
function getId(){
            var id=[];
            for(var i = 0 ; i < tiles ; i++){
                var a = getRandomNumber(tilesNumber);
                if(id.indexOf(a) > -1){
                    i--;
                }else{
                    id[i] = a;
                }
            }
    return id;
}

function showTiles(){
    tileId = getId();
    for(var i=0 ; i<tileId.length ; i++){
           var box = document.getElementById(tileId[i]);
           
           box.classList.add('hover');
    }  
}

//3rd

function choose(num){
    var scoreEl=document.getElementById('score');
    var a=tileId.indexOf(num);
    const clickedTile = document.getElementById(num);
    
      
    if(!clickedTile.classList.contains('hover')){
    
    
    if(a>-1){
       //the true choice 
        clickedTile.querySelector('.back').style.backgroundColor = "#2ECC71";
        trueCh--;
        score += 10;
        if(trueCh == 0){
            endEl.style.display = "block";
            winEl.style.display = "block";
            scoreEl.innerHTML=`score : ${score}`;
        }
    }else{
         //the false choice 
        clickedTile.querySelector('.back').style.backgroundColor = "#ED5565";
        
        falseCh--;
        score -=20;
        if(falseCh == 0){
            endEl.style.display = "block";
            loseEl.style.display = "block";
            scoreEl.innerHTML=`score : ${score}`;
        }
    }  
}
}


//back to default
function clear(){
    
    var hoverTiles = document.querySelectorAll(".hover");
    
    hoverTiles.forEach(item => {
        item.classList.remove('hover');
        item.querySelector('.back').removeAttribute('style');
    });

}

//checking the elements status (default or changed) 
function check(){
    
    var hoverTiles = document.querySelectorAll(".hover");
    return (hoverTiles.length > 0) ? false : true;
}

//playing again
function continu(){
    
    endEl.style.display = "none";
    loseEl.style.display = "none";
    winEl.style.display = "none";
    
      clear();
   
     if(check()){
       setTimeout(matrix,500);
     }

}

function removeEl(){
    var t = document.querySelectorAll('.tile');
    console.log(t);
    for(var i= 0 ; i < t.length ; i++){
        document.querySelector('.matrix').removeChild(t[i]);
    }
    document.getElementById('board').classList.remove('show');
    document.getElementById('options').style.opacity = '1';
}