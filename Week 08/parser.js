
const EOF = Symbol("EOF");  
function data(c){

}
module.exports.parseHTML = function parseHTML(html) {
  // console.log(html);
  let state = data;
  for(let c of data){
    state = state(c);
  }
  state = state(EOF)
}