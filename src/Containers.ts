import Wireframe from "./wireframe.json";

export class Containers {

  constructor(){

    let child: HTMLElement;
    let getKey:string[];
    
    Wireframe.html.forEach((element: any, index: number)=> {
      getKey = Object.keys(element.parent);

      const parent = document.createElement(element.parent.type);

      getKey[1] === "id"
        ? parent.id = element.parent.id
        : parent.className = element.parent.class;
        document.body.appendChild(parent)

        if (Wireframe.html[index].hasOwnProperty("child")) {
          element.child.forEach((inner: any, index: number) => {
          child = document.createElement(inner.type);
          getKey[1] === "id"
          ? child.id = inner.id
          : child.className = inner.class;
          parent.appendChild(child);
          });// END foreach for child

          if (Wireframe.html[index].hasOwnProperty("innerChild")) {
            this.createInnerChild(element.innerChild, child);
          }

          } // END if for child

    });//END foreach for parent

  }//END constructor

  createInnerChild(e: string[], p: HTMLElement) {
    e.forEach((inner: any, index: number) => {
      let getKeyInner = Object.keys(inner);

      const div = document.createElement(inner.type);

      getKeyInner[1] =="id"
        ? div.id =inner.id
        : div.className = inner.class;

      p.appendChild(div)
    })
  }

}//END class