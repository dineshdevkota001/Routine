export function sendData(state) {
  var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
  xmlhttp.open("POST", "/json-handler");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(state));
}
