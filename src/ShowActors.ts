import { Containers } from "./Containers";
import { gsap } from "gsap";

interface Enemy {
  name: string;
  strength: number;
  levelAssign: number;
}

export class ShowActors {
  static nameArray: string[] = ["Death Smokie", "Black Scum", "Ping Pang"];

  static myContentArray: string[] = [
    "Ninja Killer dont touch him",
    "Black Scum is a Ninja Killer",
    "Just some penguin Shit",
  ];

  static imageArray: string[] = [
    "death-smokie.png",
    "black-alien-scum.png",
    "angry-ping.png",
  ];

  static information: { strength: number; lives: number }[] = [
    { strength: 100, lives: 10 },
    { strength: 90, lives: 5 },
    { strength: 80, lives: 4 },
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

    let getMenuItems = document.querySelectorAll(
      "#menuItemContainer > .menuItem"
    );

    getMenuItems.forEach((element: any, index: number) => {
      element.setAttribute("data-index", index); //index = `${index}`
      element.textContent = ShowActors.nameArray[index];
      element?.addEventListener("click", this.changeContent);
      
    });

    let cardDeck = document.querySelector("#card");
    let info = document.querySelector("#info") as HTMLElement;
    let infoChild = document.querySelector("#infochild") as HTMLElement;
    info.appendChild(infoChild);

    cardDeck.addEventListener("click", () => {
      if (ShowActors.currentDataIndex > -1) {
        info.style.display = "block";

        gsap.to(info,{
          duration: 0.07,
          rotate: 10,
          scale: 1.3,
          repeat: 3,
          transformOrigin: "center",
          yoyo: true,
        });

        let addInfo = ShowActors.information[ShowActors.currentDataIndex];
  
        let mStrength = document.querySelector("#strength");
        mStrength.textContent=`${addInfo.strength}`;
  
        let mLives = document.querySelector("#lives");
        mLives.textContent=`${addInfo.lives}`;
      } //END if


    }); //END eventlistener

    const imgNinja = require("./assets/images/ninja.png");
    const showImg = document.createElement("img");
    showImg.id = "showImg";
    showImg.src = imgNinja;
    document.querySelector("#imagecon").appendChild(showImg);
  } //END constructor

  changeContent(this: HTMLElement, event: Event) {
    //parseInt konventere string til number
    ShowActors.currentDataIndex = parseInt(this.dataset.index);


    let info = document.querySelector("#info") as HTMLElement;
    info.style.display = "none";


    let mHeadline = document.querySelector("#headline") as HTMLElement;
    mHeadline.textContent = ShowActors.nameArray[ShowActors.currentDataIndex];

    const imageSrc = ShowActors.imageArray[ShowActors.currentDataIndex];
    const img = require("./assets/images/" + imageSrc);
    let mImg = document.querySelector("#showImg") as HTMLImageElement;
    mImg.src = img;

    let mContent = document.querySelector("#content") as HTMLElement;
    mContent.textContent =
      ShowActors.myContentArray[ShowActors.currentDataIndex];

    let elem = document.querySelector("#cardContainer") as HTMLElement;
    gsap.to(elem, {
      duration: 0.05,
      scaleX: -1,
      alpha: 0,
      repeat: 3,
      yoyo: true,
    });
  }
} //END class
