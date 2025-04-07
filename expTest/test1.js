import App from './cycle';

function consoleLog(arg) {
  const replacer = (key, value) =>
    typeof value === "bigint" ? value.toString() : value;
  
  const typeval = typeof(arg);
  if (typeval === "object") {
    let rtn;
    try {
      rtn = JSON.stringify(JSON.decycle(arg), replacer);
    } catch(e) {
      if (e instanceof TypeError) {
        document.getElementById("console").innerHTML += JSON.stringify(e) + "<br />";
      } else {
        document.getElementById("console").innerHTML += JSON.stringify(e) + "<br />";
      }
    }
    document.getElementById("console").innerHTML += rtn + "<br />";
  } else {
    document.getElementById("console").innerHTML += arg + "<br />";
  }
}
