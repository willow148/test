
function console.log(arg) {
    /*
    let outstr = "";
    for (let arg of args) {
        // console.logに入力された文字列を改行つきで保持
        outstr = outstr + arg + "<br>";
    }
    */
    // HTMLのid="console"に対して文字列outstrを設定する
    document.getElementById("console").innerHTML = arg;
}

function showMessage() {
    document.getElementById('message').textContent = '外部スクリプトからこんにちは！';
    
    console.log(["あああああああああああああああああ"]);
}

/*
        // ページ読み込み時のイベントを登録
        window.onload = function () {
            // ブラウザ上に表示する文字列を保持する一時変数
            let outstr = "";
            // console.logの挙動
            console.log = (...args) => {
                for (let arg of args) {
                    // console.logに入力された文字列を改行つきで保持
                    outstr = outstr + arg + "<br>";
                }
                // HTMLのid="console"に対して文字列outstrを設定する
                document.getElementById("console").innerHTML = outstr;
            }

            // 1～100までを出力するコード
            const testObj = {kye1:"AAA", key2:12345}
            console.log(JSON.stringify(testObj));
            //for (let i = 1; i < 100; i++) {
            //    console.log(i);
            //}
        }
  */
