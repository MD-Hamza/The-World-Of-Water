//Southern countries by Karanvir and everything else by Muhammad
var countries = [];
const labels = document.getElementById("labels")
const cursor = document.getElementById("cursor")
cursor.style.position = 'absolute';

const markerContainer = document.getElementById("markers")
const map = document.getElementById("map")
const nav = document.getElementsByTagName("ul")
const doubleClick = document.getElementById("doubleClick")

console.log("Creating all country objects")
//Each country object is created and added to an array
var canada = new Country("Canada", 99.56, 98.88, 320, 202);
countries.push(canada);
var unitedStates = new Country("United States", 99.67, 96.97, 310, 279);
countries.push(unitedStates);
var mexico = new Country("Mexico", 100, 96.61, 309, 332);
countries.push(mexico);
var greenland = new Country("Greenland", 100, 100, 545, 123);
countries.push(greenland)
var portugal = new Country("Portugal", 100, 99.74, 682, 256);
countries.push(portugal)
var spain = new Country("Spain", 99.91, 100, 698, 258);
countries.push(spain)
var france = new Country("France", 100, 100, 721, 229);
countries.push(france)
var denmark = new Country("Denmark", 100, 100, 747, 193);
countries.push(denmark)
var germany = new Country("Germany", 100, 100, 751, 212);
countries.push(germany)
var poland = new Country("Poland", 99.85, 99.54, 789, 209);
countries.push(poland)
var czech = new Country("Czech", 99.90, 99.82, 776, 221);
countries.push(czech)
var norway = new Country("Norway", 100, 100, 752, 168)
countries.push(norway)
var sweden = new Country("Sweden", 100, 100, 774, 169)
countries.push(sweden)
var finland = new Country("Finland", 100, 100, 822, 157)
countries.push(finland)
var italy = new Country("Italy", 99.47, 99.38, 760, 244)
countries.push(italy)
var switzerland = new Country("Switzerland", 100, 100, 744, 232)
countries.push(switzerland)
var austria = new Country("Austria", 100, 100, 768, 232)
countries.push(austria)
var hungary = new Country("Hungary", 100, 100, 788, 232)
countries.push(hungary)
var romania = new Country("Romania", 100, 100, 809, 234)
countries.push(romania)
var greece = new Country("Greece", 100, 100, 798, 262)
countries.push(greece)
var bulgaria = new Country("Bulgaria", 99.47, 98.05, 808, 250)
countries.push(bulgaria)
var ukraine = new Country("Ukraine", 91.31, 99.37, 836, 216)
countries.push(ukraine)
var belarus = new Country("Belarus", 95.98, 98.30, 820, 210)
countries.push(belarus)
var lithuania = new Country("Lithuania", 99.84, 92.76, 805, 198)
countries.push(lithuania)
var united_kingdom = new Country("United Kingdom", 100, 100, 704, 202)
countries.push(united_kingdom)
var iceland = new Country("Iceland", 100, 100, 638, 160)
countries.push(iceland)
var ireland = new Country("Ireland", 96.98, 98.10, 680, 205)
countries.push(ireland)
var moldova = new Country("Moldova", 97.01, 83.16, 825, 232)
countries.push(moldova)
var latvia = new Country("Latvia", 98.83, 98.18, 809, 192)
countries.push(latvia)
var estonia = new Country("Estonia", 99.95, 99.19, 814, 185)
countries.push(estonia)
var russia = new Country("Russia", 98.64, 98.62, 1075, 165)
countries.push(russia)
var kazakhstan = new Country("Kazakhstan", 98.09, 92.31, 974, 226)
countries.push(kazakhstan)
var mongolia = new Country("Mongolia", 96.01, 55.87,1113, 231)
countries.push(mongolia)
var uzbekistan = new Country("Uzbekistan", 99.56, 96.08, 959, 249)
countries.push(uzbekistan)
var kyrgyzstan = new Country("Kyrgyzstan", 97.14, 81.98, 1004, 251)
countries.push(kyrgyzstan)
var china = new Country("China", 97.71, 86.15, 1112, 283)
countries.push(china)
var turkmenistan = new Country("Turkmenistan", 100, 97.57, 945, 260)
countries.push(turkmenistan)
var slovenia = new Country("Slovenia", 99.65, 99.40, 773, 235)
countries.push(slovenia)
var croatia = new Country("Croatia", 99.57, 99.61, 779, 236)
countries.push(croatia)
var bosnia = new Country("Bosnia", 94.85, 97.33, 783, 242)
countries.push(bosnia)
var tajikistan = new Country("Tajikistan", 96.24, 75.64, 992, 261)
countries.push(tajikistan)
var iran = new Country("Iran", 97.39, 89.01, 928, 288)
countries.push(iran)
var georgia = new Country("Georgia", 100, 96.16, 882, 248)
countries.push(georgia)
var turkey = new Country("Turkey", 98.62, 99.63, 848, 261)
countries.push(turkey)
var japan = new Country("Japan", 99.01, 99.01, 1262, 272)
countries.push(japan)
var afghanistan = new Country("Afghanistan", 95.91,57.32, 972, 282)
countries.push(afghanistan)
var pakistan = new Country("Pakistan", 94.23, 89.89, 983, 299)
countries.push(pakistan)
var india = new Country("India", 95.99, 91, 1021, 327)
countries.push(india)
var azerbaijan = new Country("Azerbaijan", 99.31, 81.57, 900, 255)
countries.push(azerbaijan)
var armenia = new Country("Armenia", 99.86, 100, 888, 255)
countries.push(armenia)
var nepal = new Country("Nepal", 86.04, 88.73, 1043, 302)
countries.push(nepal)
var slovakia = new Country("Slovakia", 99.61, 100, 790, 224)
countries.push(slovakia)
var south_korea = new Country("South Korea", 100, 100, 1217, 272)
countries.push(south_korea)
var north_korea = new Country("North Korea", 100, 100, 1212, 259)
countries.push(north_korea)
var saudi_arabia = new Country("Saudi Arabia", 100, 100, 887, 320)
countries.push(saudi_arabia)
var serbia = new Country("Serbia", 83.28, 88.37, 794, 240)
countries.push(serbia)
var iraq = new Country("Iraq", 99.85, 94.06, 885, 285)
countries.push(iraq)
var syria = new Country("Syria", 99, 95.17, 864, 278)
countries.push(syria)
var jordan = new Country("Jordan", 99.06, 97.70, 855, 294)
countries.push(jordan)
var oman = new Country("Oman", 99.4, 77.9, 934, 336)
countries.push(oman)
var united_arab_emirates = new Country("United Arab Emirates", 98, 98, 925, 322)
countries.push(united_arab_emirates)
var yemen = new Country("Yemen", 65.05, 54.70, 901, 353)
countries.push(yemen)
var bangladesh = new Country("Bangladesh", 97.49, 96.75, 1066, 321)
countries.push(bangladesh)
var myanmar = new Country("Myanmar", 92.96, 76.91, 1091, 329)
countries.push(myanmar)
var thailand = new Country("Thailand", 99.86, 100, 1111, 354)
countries.push(thailand)
var cambodia = new Country("Cambodia", 97.32, 72.9, 1126, 366)
countries.push(cambodia)
var laos = new Country("Laos", 94.83, 75.59, 1117, 337)
countries.push(laos)
var guatemala = new Country("Guatemala", 97.92, 88.56, 353, 356)
countries.push(guatemala)
var vietnam = new Country("Vietnam", 98.55, 92.64, 1142, 361)
countries.push(vietnam)
var belize = new Country("Belize", 98.92, 97.21, 357, 347)
countries.push(belize)
var honduras = new Country("Honduras", 99.42, 88.88, 367, 356)
countries.push(honduras)
var el_salvador = new Country("El Salvador", 99.47, 92.22, 359, 361)
countries.push(el_salvador)
var nicaragua = new Country("Nicaragua", 97.56, 59.11, 374, 365)
countries.push(nicaragua)
var cuba = new Country("Cuba", 96.83, 90.31, 400, 327)
countries.push(cuba)
var algeria = new Country("Algeria", 95.44, 88.69, 722, 306)
countries.push(algeria)
var libya = new Country("Libya", 98.6, 98.4, 783, 309)
countries.push(libya)
var egypt = new Country("Egypt", 99.49, 98.82, 827, 312)
countries.push(egypt)
var morroco = new Country("Morroco", 96.65, 70.72, 685, 289)
countries.push(morroco)
var tunisia = new Country("Tunisia", 99.7, 88.71, 749, 279)
countries.push(tunisia)
var mauritania = new Country("Mauritania", 89.26, 49.91, 670, 335)
countries.push(mauritania)
var mali = new Country("Mali", 92.19, 68.35, 699, 345)
countries.push(mali)
var niger = new Country("Niger", 84.29, 43.62, 749, 346)
countries.push(niger)
var chad = new Country("Chad", 69.85, 29.47, 786, 356)
countries.push(chad)
var sudan = new Country("Sudan", 73.76, 53.20, 828, 363)
countries.push(sudan)
var ethiopia = new Country("Ethiopia", 80.27, 30.06, 868, 380)
countries.push(ethiopia)
var somalia = new Country("Somalia", 82.91, 28.11, 899, 393)
countries.push(somalia)
var djibouti = new Country("Djibouti", 83.86, 47.06, 880, 369)
countries.push(djibouti)
var eritrea = new Country("Eritrea", 90.51, 30.99, 862, 352)
countries.push(eritrea)
var nigeria = new Country("Nigeria", 87.47, 55.59, 740, 379)
countries.push(nigeria)
var senegal = new Country("Senegal", 92.32, 70.46, 652, 354)
countries.push(senegal)
var central_africa = new Country("Central Africa", 81.87, 44.81,790, 388)
countries.push(central_africa)
var brazil = new Country("Brazil",89.74, 92.28 ,516, 508)
countries.push(brazil)
var uruguay = new Country("Uruguay",95.30, 94.59, 490, 547)
countries.push(uruguay)
var south_africa = new Country("South Africa",90.7, 80.3, 802,532)
countries.push(south_africa)//done 
var madagascar = new Country("Madagascar",85.82, 67.23, 898,493)//done 
countries.push(madagascar)
var namibia = new Country("Namibia",90.30, 96.59, 784, 503)//done 
countries.push(namibia)
var angola = new Country("Angola",71.23, 61.45, 779, 462)//done 
countries.push(angola)
var dRcongo = new Country("DR of Congo",84.3, 80.2, 806, 423)//done
countries.push(dRcongo)
var botswana = new Country("Botswana",85.22, 83.22, 806, 492)//done
countries.push(botswana)
var zimbabwe = new Country("Zimbabwe",94.5, 94.00, 829, 496)//done
countries.push(zimbabwe)
var zambia = new Country("Zambia",93.05, 92.05 , 835, 462)//done
countries.push(zambia)
var malawi = new Country("Malawi",83.23, 80.23, 845, 469)//done
countries.push(malawi)
var mozambique = new Country("Mozambique",84.59,80.12 , 848, 484)//done
countries.push(mozambique)
var uRtanzania= new Country("Tanzania",84.56, 60.23 , 848, 430)//done
countries.push(uRtanzania)
var kenya = new Country("Kenya",84.30, 80.59, 858, 413)
countries.push(kenya)//done
var uganda = new Country("Uganda",74.42, 69.01, 843, 407)
countries.push(uganda)//done
var argentina = new Country("Argentina",98.79, 99.56, 457, 558)//done
countries.push(argentina)
var chile = new Country("Chile",97.30, 98.59, 435, 518)
countries.push(chile)//done
var bolivia = new Country("Bolivia",95.20, 99.80, 455, 478)
countries.push(bolivia)//done
var paraguay = new Country("Paraguay",96.94,100.00, 476, 504)//done
countries.push(paraguay)
var peru = new Country("Peru",95.30, 94.59, 415, 459)
countries.push(peru)//done
var ecuador = new Country("Ecuador",92.78, 87.69, 404, 420)
countries.push(ecuador)//done
var colombia = new Country("Colombia",100.00,98.90 , 417, 404)//done
countries.push(colombia)
var venezuela = new Country("Venezuela",95.72, 95.72, 444, 385)
countries.push(venezuela)//done
var guyana = new Country("Guyana",100.00,92.45 ,480, 392)
countries.push(guyana)//done
var suriname = new Country("Suriname",98.39,97.43 , 490, 399
)
countries.push(suriname)//done
var australia = new Country("Australia",100.00, 100.00, 1246, 501)
countries.push(australia)//done
var newZealand = new Country("New Zealand",100.00, 100.00,1391, 588)//done
countries.push(newZealand)
var papuaNewGuinea = new Country("Papua New Guinea",83.23, 85.84, 1284, 436)//done
countries.push(papuaNewGuinea)
var indonasia = new Country("Indonasia",93.05, 92.54,1262, 438)//done
countries.push(indonasia)
var fGuiana = new Country("French Guiana",95.30, 94.59,499, 399)
countries.push(fGuiana)
var malaysia = new Country("Malaysia",99.37, 99.09,1164, 405)//done
countries.push(malaysia)
var philippines = new Country("Philippines",96.97, 96.97,1205, 386)//done
countries.push(philippines)

var congo = new Country("Congo",85.22, 82.22,775, 417)
countries.push(congo)//done
var gabon = new Country("Gabon",90.23, 89.59,758, 421)
countries.push(gabon)//done
var cameroon = new Country("Cameroon",85.30, 77.02,758, 398)
countries.push(cameroon)//done

var benin = new Country("Benin",75.30, 76.89,721, 380)
countries.push(benin)//done
var togo = new Country("Togo",89.45, 89.45,717, 389)
countries.push(togo)//done
var ghana = new Country("Ghana",88.52, 75.56,706, 392)
countries.push(ghana)//done
var cote = new Country("Côte D’Ivoire",89.45, 89.52, 686,392)//done
countries.push(cote)
var liberia = new Country("Liberia",83.29,76.56 ,673, 394)
countries.push(liberia)//done
var sierra  = new Country("Sierra Leone",75.30, 74.59,665,388)
countries.push(sierra )
var guinea = new Country("Guinea",95.30, 94.59,661,378)
countries.push(guinea)
var guineaB = new Country("Guinea-Bissau",95.30, 94.59,651,370)
countries.push(guineaB)

console.log("Objects created, adding markers")
//Adds markers to each of the countries location
for(var i = 0; i < countries.length; i++){
  var marker = document.createElement("img");
  marker.src = "images/marker.png";
  marker.width = 16;
  marker.id = countries[i].name
  marker.style.position = 'absolute';
  countries[i].markerY += 50
  marker.style.left = countries[i].markerX + "px";
  marker.style.top = countries[i].markerY + "px";
  marker.style.opacity = "0.25"
  markerContainer.appendChild(marker);
};

console.log("Checking if mosue is over country marker")
document.addEventListener('mousemove', event => {
  cursor.style.position = "absolute"
  if (event.pageY >= 140){
    cursor.style.left = event.pageX + "px";
    cursor.style.top = event.pageY + "px";
  }
  
  //Checking if mouse is over a country marker
  for(var i = 0; i < countries.length; i++){
    if (countries[i].checkMouseHover(event.pageX, event.pageY)){
      console.log("Mouse is over " + countries[i].name + ", displaying data")
      document.getElementById(countries[i].name).style.opacity = "1"
      if (labels.childElementCount < 1){
        const h1 = document.createElement("h1")
          h1.style.textAlign = 'center'
        const data = document.createElement('p')
        h1.appendChild(document.createTextNode(countries[i].name))
        var title = document.createTextNode("Percentage of Population with water")
        var urbanText = document.createTextNode("Urban: " + countries[i].accessibilityUrban + "%")
        var ruralText = document.createTextNode("Rural: " + countries[i].accessibilityRural + "%")
        data.appendChild(title)
        data.appendChild(document.createElement("br"))
        data.appendChild(urbanText)
        data.appendChild(document.createElement("br"))
        data.appendChild(ruralText)
        labels.appendChild(h1)
        labels.appendChild(data)
        labels.style.position = 'absolute';
        labels.style.left = countries[i].markerX + "px";
        labels.style.top = countries[i].markerY + "px";
        countries[i].displayed = true
      };
    } else {
      document.getElementById(countries[i].name).style.opacity = "0.25"
      if (countries[i].displayed) {
        countries[i].displayed = false
        while (labels.hasChildNodes()){
          labels.removeChild(labels.firstChild)  
        }  
      }
    };
  };

  if (event.target == doubleClick){
    setTimeout(() => {doubleClick.style.display = "none"}, 200)
  }
});

//Displays width of the window
window.addEventListener('load', event =>{
  console.log("Scaling map and markers on load")
  map.width = window.innerWidth
  doubleClick.style.width = window.innerWidth + "px"
  map.height = window.innerWidth / 2
  doubleClick.style.height = window.innerWidth / 2 + "px"
  console.log(doubleClick.style.width)
  var scaleX = map.width / 1425
  var scaleY = map.height / 713
  for (var i=0; i<countries.length; i++){
    countries[i].markerY -= map.y
    countries[i].markerX *= scaleX
    countries[i].markerY *= scaleY
    countries[i].markerY += map.y
    document.getElementById(countries[i].name).style.left = countries[i].markerX + "px"
    document.getElementById(countries[i].name).style.top = countries[i].markerY + "px"
  }

});

window.addEventListener('resize', event =>{ 
  console.log("scaling maps and markers on resize")
  var scaleX = window.innerWidth / map.width
  var scaleY = (window.innerWidth / 2) / map.height
  for (var i=0; i<countries.length; i++){
    countries[i].markerY -= map.y
    countries[i].markerX *= scaleX
    countries[i].markerY *= scaleY
    countries[i].markerY += map.y
    document.getElementById(countries[i].name).style.left = countries[i].markerX + "px"
    document.getElementById(countries[i].name).style.top = countries[i].markerY + "px"
  }
  map.width = window.innerWidth
  map.height = window.innerWidth / 2
});

document.addEventListener('dblclick', event => {
  if (map.style.zoom != 2){
    console.log("Zooming map in")
    map.style.zoom = 2
    window.scrollTo(event.pageX * 2 - window.innerWidth / 2, event.pageY*2 - window.innerHeight / 2)
    //Adjusts all marker position
    for (i = 0; i < countries.length; i++){
      countries[i].markerX *= 2
      countries[i].markerY *= 2
      countries[i].markerY -= 114
      document.getElementById(countries[i].name).style.top = countries[i].markerY + "px"
      document.getElementById(countries[i].name).style.left = countries[i].markerX + "px"
    }
  } else {
    console.log("Zooming map out")
    map.style.zoom = 1
    window.scrollTo(event.pageX / 2 - window.innerWidth / 2, event.pageY / 2 - window.innerHeight / 2)
    //Adjusts marker position
    for (i = 0; i < countries.length; i++){
      countries[i].markerY += 114
      countries[i].markerX *= 0.5
      countries[i].markerY *= 0.5
      document.getElementById(countries[i].name).style.top = countries[i].markerY + "px"
      document.getElementById(countries[i].name).style.left = countries[i].markerX + "px"
    }
  }
});
