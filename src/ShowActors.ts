import { Containers } from "./Containers";


interface Enemy {
  name: string;
  strength: number;
  levelAssign: number;
}

export class ShowActors {

  static nameArray: string[] = [
    "Death Smokie",
    "Black Scum",
    "Ping Pamg"
  ];

  static myContentArray: string[] = [
    "Ninja Killer dont touch him",
    "Black Scum is a Ninja Killer",
    "Just some penguin Shit"
  ];

  static imageArray: string[] = [
    "death.smokie.png",
    "black-alien-scum.png",
    "angry-ping.png"
  ];

  static information: { strength: number, lives: number }[] = [
    { "strength": 100, "lives": 10 },
    { "strength": 90, "lives": 5 },
    { "strength": 80, "lives": 4 }
  ];

  static currentDataIndex: number = -1;

  constructor() {

    const Alien: Enemy = {
      name: "Ninja",
      strength: 100, //man kunne godt bruge data fra vores ShowActors.information[0].strength
      levelAssign: 0,
    };
    const Black: Enemy = {
      name: "Black Scum",
      strength: 90,
      levelAssign: 5,
    };
    const Red: Enemy = {
      name: "Red Scum",
      strength: 80,
      levelAssign: 4,
    };

    const enemyArray: Array<string> = [Alien.name, Black.name, Red.name];


    new Containers();

    /* const menuContainer = document.createElement("nav");
    menuContainer.id = "menuContainer";
    document.body.appendChild(menuContainer);

    const menuItemContainer = document.createElement("div");
    menuItemContainer.id = "menuItemContainer"; <
      menuContainer.appendChild(menuItemContainer);

    const app = document.createElement("div");
    app.id = "app";
    document.body.appendChild(app);

    const content = document.createElement("div");
    content.id = "content";
    content.textContent = "default start text";
    app.appendChild(content);
    
    const showImg = document.createElement("img");
    showImg.id = "img";
    app.appendChild(showImg); */

  }//END constructor
}//END class