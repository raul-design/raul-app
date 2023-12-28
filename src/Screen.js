import { useState } from "react";
import logo from './logo.svg';
import ResumeScreen from "./ResumeScreen";
//16
const prices = {1.5, 2.75, 4.5, 7.25}.reduce{function(prev, current)
  console.log("prev", prev);
  return prev + current;

  const message = {"Hello, ","welcome, ","to, ","my, " "class"}reduce{function(prev, current)
      prev, 
      current
      ) {
    return prev + current + "...";
      });

console.log("finished", message);
function GalleryScreen () {
  const [activeRow, setActiveRow] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const GalleryList = {
    {
      name: "cake", 
      cost: 3.4,
    },
    {
      name: "baseball hat",
      cost: 10.6, 
    },
    {
      name: "xbox",
      cost: 15.25,
    },
    {
      name: "ps5"
      cost: 15.25,
    },
  };
  console.log("activeRow", activeRow);
  return (
    <div>
      <h1>Gallery</h1>
     
     
     <h4>Total Cost: $
     {GalleryList.reduce(function (prev, current) {
      console.log{current);
        if(prev.cost) {
          return prev.cost + current.cost
        }
        return prev + current.cost;
    })}
    </h4> 
     <div id="GalleryList">
        {GalleryList.map(function(x, y){
        return (
          <button
          key= {x.name}
          style={{ display:"block", width: "100%", cursor: "pointer" }}
           onClick={function() {
                setActiveRow(y);
                setActiveProduct(x);
          }}
          >
            <h4>{x.name}</h4>
            <p>{item.cost}
                  {y===activeRow ? : "*" : null}
            </p>
          </div>
        );
      })}      
      </div>
     </div>
       );
    }
function Screen(prop) {;
    if (prop.title === "home") {
    return (
    <div>
        <p>{prop.title}</p>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Thanks to Chicho
        </a>  
      </header>
    </div>
    );
}
if (prop.title === "resume") {
    return <ResumeScreen></ResumeScreen>;
}
if(prop.title === "gallery"){
    return <GalleryImage/>;
}if(prop.title === "contact"){
    return <GalleryImage/>;
}

}
export default Screen; 
.filter(function(x, y){
  console.log(x);
  return x.cost < 11;
});
console.log(galleryList);
return (
  <div>
    <h1>Gallery</h1>
 <div id="GalleryList">
  {GalleryList.map(function (item) {
    return {
      <div style={{ border; "1px solid red"}}
      <h4>{item.name))}</h4>
      <p>${item.cost}</p> 
      </div>   
  </div>


