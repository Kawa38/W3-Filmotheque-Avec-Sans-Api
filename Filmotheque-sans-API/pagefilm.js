

const filmId = new URLSearchParams(window.location.search).get("id");
console.log(filmId);
console.log(baseFilm);


let body = document.querySelector("body");
let page = document.querySelector("#page");

const templateElement = (element_name, text, parent) => {
    const template = document.createElement(element_name);
    text ? template.textContent = text : "";
    parent ? parent.appendChild(template) : "";
    return template;
  }

let divF =  templateElement('div',"" ,page);
divF.id = "filmTitre";
let titre = templateElement("h1",baseFilm[filmId].titre , divF);
titre.id = "filmTitre";
let qui = templateElement("h1",baseFilm[filmId].qui, divF);
let description = templateElement("h1",baseFilm[filmId].description , divF);
let  affImage = templateElement("img","",divF);
affImage.style.display="block";
affImage.src=baseFilm[filmId].image;
affImage.id = "ImgGrand";


let affvideo = templateElement("iframe","",divF);
console.log (baseFilm[filmId].bandeAnnonce)
affvideo.innerhtml= baseFilm[filmId].bandeAnnonce;
// A finir - faire afficher la video  

let totalD = templateElement("h1",baseFilm[filmId].totalD , divF);
totalD.id ="filmD";
totalD.textContent =  baseFilm[filmId].totalD + "Mn / "+ (Math.round(baseFilm[filmId].totalD/60)) +'H' + (baseFilm[filmId].totalD 
    %60);




