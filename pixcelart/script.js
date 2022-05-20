(function () {
    var canvas = document.getElementById('canvas');
    canvas.width = 600;
    canvas.height = 600;
    var context = canvas.getContext('2d');
    var post_num = 357;
    var cvs_w=600,cvs_h=600;
    var px_w_cnt=25,px_h_cnt=25;
    var px_1_w=0,px_1_h=00;
    var pos_x=0,pos_y=0;
    var px_alpha=0.5;

    context.globalCompositeOperation = "color-dodge";
    context.globalAlpha = 1;

    // Image オブジェクトを生成
    var imgBg = new Image();
    imgBg.src = './image.jpeg';


    function matrix(n) {
        let result = new Array(n * n).fill();
        let maxtrix = new Array(n).fill().map(() => new Array(n).fill('')); ;

        let counter = 1;
        let startCol = 0;
        let endCol = n - 1;
        let startRow = 0;
        let endRow = n - 1;
        let max = n * n + 1;
        while (startCol <= endCol && startRow <= endRow) {
            for (let i = startCol; i <= endCol; i++) {
                result[max - counter] = {x: startRow, y: i};
                // maxtrix[startRow][i] = max - counter;
                counter++;
            }
            startRow++;
            for (let j = startRow; j <= endRow; j++) {
                result[max - counter] = {x: j, y: endCol};
                // maxtrix[j][endCol] = max - counter;
                counter++;
            }

            endCol--;

            for (let i = endCol; i >= startCol; i--) {
                result[max - counter] = {x: endRow, y: i};
                // maxtrix[endRow][i] = max - counter;
                counter++;
            }

            endRow--;
            for (let i = endRow; i >= startRow; i--) {
                result[max - counter] = {x: i, y: startCol};
                // maxtrix[i][startCol] = max - counter;
                counter++;
            }

            startCol++;

        }
        // console.log(result);
        // console.log(maxtrix);
        return result;

    }

    var fillBlackWhite = function(x,y,w,h){
        let imgData = context.getImageData(x, y, w, h);
        let pixels = imgData.data;
        for (var i = 0; i < pixels.length; i += 4) {
            let lightness = parseInt((pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3);
            pixels[i] = lightness;
            pixels[i + 1] = lightness;
            pixels[i + 2] = lightness;
        }
        context.putImageData(imgData, x, y);
    }

    px_1_w = cvs_w / px_w_cnt;
    px_1_h = cvs_h / px_h_cnt;
    for (let y = 0; y < px_h_cnt; y++) {
        for (let x = 0; x < px_w_cnt; x++) {
            context.beginPath () ;//パスのリセット
            context.lineWidth = 1;
            context.strokeStyle = 'black';
            context.rect( pos_x*px_1_w, pos_y*px_1_h, px_1_w, px_1_h );//座標(50,50)にサイズ75x50の四角を描画
            context.stroke() ;// 塗りつぶしを実行
            pos_x = x+1;
        }
        pos_x=0;
        pos_y = y+1;
    }

    posArray = matrix(25);
    // 画像読み込み終了してから描画
    imgBg.onload = function(){
        context.drawImage(imgBg, 0, 0, cvs_w, cvs_h);
        for (let idx = post_num + 1; idx <= px_w_cnt * px_h_cnt; idx++) {
            pos_x=posArray[idx].x;
            pos_y=posArray[idx].y;
            context.beginPath () ;//パスのリセット
            context.lineWidth = 1;
            context.strokeStyle = 'black';
            context.rect( pos_x*px_1_w, pos_y*px_1_h, px_1_w, px_1_h );//座標(50,50)にサイズ75x50の四角を描画
            context.stroke() ;// 塗りつぶしを実行
            fillBlackWhite(pos_x*px_1_w, pos_y*px_1_h, px_1_w, px_1_h)
        }
    }


})();