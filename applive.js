var btnTranslate = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/valyrian.json"

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text
}


function errorHandler() {
  console.log("error occured", error);
  alert("something wrong with the server! try again after sometime");
}

function clickHandler() {

  var inputText = txtInput.value; //taking input
  //calling server for processing 

  fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)

  // outputDiv.innerText="haha ha haha ha " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)