//js contenant les données liées au films 

class Films {constructor(titre, qui, totalD, visioD, description,image,bandeAnnonce ){
   this.titre = titre;
   this.qui= qui;
   this.totalD = totalD;
   this.visioD = visioD;
   this.description =  description;
   this.image = image;
   this.bandeAnnonce = bandeAnnonce;
}
}

//les data
let  baseFilm = [new Films ("Voyages vers l’infini", "réalisateur1", 79, 50, "D’éminents mathématiciens, physiciens quantiques et cosmologistes se penchent sur l’infini et ses mystérieuses implications pour l’univers","./images/Film1.jpg",'<iframe width="560" height="315" src="https://www.youtube.com/embed/9Gn8cehhjGk?controls=0&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
new Films ("Le garçon qui dompta le vent  ", "réalisateur2", 113, 0, "Après avoir lu un livre de science, Willima Kamwamba, un adolescent de 13 ans, fabrique une éolienne et sauve son village malawite de la famine. Inspiré de faits réels. ","./images/Film2.jpg","https://youtu.be/msUcT9cRUrM"),
new Films ("Mémoire d’une Geisha", "réalisateur3", 145, 145, "Chiyo subit de mauvais traitement de la part des propriétaires et de la fourbe Sayuri, jalouse de sa beauté.","./images/Film3.jpg",'<iframe width="560" height="315" src="https://www.youtube.com/embed/rmlL2WEud2s?start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
new Films ("Forrest Gump", "réalisateur4", 143,0, "Témoin de nombreux événement marquant des années 60 et 70, un homme simple d’esprit et au grand cœur inspire ceux qui l’entourent à travers son optimisme constant","./images/Film4.jpg",'<iframe width="560" height="315" src="https://www.youtube.com/embed/vhbOdIJyalo?start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
new Films ("A l’ouest, rien de nouveau", "réalisateur5", 148, 80, "Violent – Sombre – En costume","./images/Film5.jpg",'<iframe width="560" height="315" src="https://www.youtube.com/embed/5ABgVzSc_BY?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),
new Films ("Le conte de la princess Kaguya ", "réalisateur6", 137, 120, "Doux Amer - Animé dramatique - Japonais","./images/Film6.jpg",'<iframe width="560" height="315" src="https://www.youtube.com/embed/f0p98qIdulo?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')];

// dans une prochaine vie, je ferai un formulaire pour pouvoir rajouter des enregistrement  ... et une fonction pour classer la liste par ordre alphabétique