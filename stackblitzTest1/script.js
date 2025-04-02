
console.log = (...args) => {
    for (let arg of args) {
        // console.logに入力された文字列を改行つきで保持
        outstr = outstr + arg + "<br>";
    }
    // HTMLのid="console"に対して文字列outstrを設定する
    document.getElementById("console").innerHTML = outstr;
}


console.log('Hello!');
