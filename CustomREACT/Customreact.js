// EK KHUD KA CUSTOM REACT BNAYA

/* main kai andar react ek root create krta hai uske andar document pass krte hai , 
jo app bnate ho usko render krta hai, 
app kya hai : ek simple saa function jsike anadt jsx likhte hai 

*/

// DOM
function customRender(reactElement, Container) {
  /*
    / 4 ( DOO APPROACHES )
  const domElement = document.createElement(reactElement.type); //element create hogya
  domElement.innerHTML = reactElement.children;// kuch content bhi dalna hai element kai andar
  domElement.setAttribute("href", reactElement.props.href);

  domElement.setAttribute("target", reactElement.props.target);

  Container.appendChild(domElement); // container ko add krdo jo root sai liya hai
}
  */
  // BETTER CODE
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  // USING FOR IN LOOP dom elements ko repaet becoz upar ek ek karke elemnt set kr rhe thai
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  Container.appendChild(domElement);
}

// jo function mai html return kiya hai usko react kaise dekhta hai
// compile krne kai baad react kaise dekhta hai tree bnane ki koshish krta hai
const reactElement = {
  //2
  type: "a", //element div h ya para ya anchor
  props: {
    // yeh property object hota hai
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click on me ",
};
const mainContainer = document.querySelector("#root"); //1

// upar element ko add krde root kai andar INJECT KRDE //3
// 2 ELEMENT LO KUCH & INJECT KARDO ISLYE KHUD SAI LIYE //2
customRender(reactElement, mainContainer); // (kya inject krna ,& kaha pe)
