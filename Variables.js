const socialNetworks = [
  {name:"Facebook", url:"https://www.facebook.com/"},
  {name:"Twitter", url:"https://twitter.com/"},
  {name:"Instagram", url:"https://www.instagram.com/"}
];

const handlerBarsContext = {
  "/index.html": {
      "title": "Vite"
  },
}
//https://codepen.io/paulnoble/pen/yVyQxv
const pageContext = (page)=>{
  const context= {...handlerBarsContext[page], socialNetworks}
  return context;
}
export default pageContext;