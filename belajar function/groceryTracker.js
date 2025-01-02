let grocery1;
let grocery2;
let grocery3;
let disc;

function sumGrocery(){
    grocery1 =  parseFloat(document.getElementById('grocery1').value);
    grocery2 =  parseFloat(document.getElementById('grocery2').value);
    grocery3 =  parseFloat(document.getElementById('grocery3').value);
    disc = parseFloat(document.getElementById('disc').value / 100);

    let total_sebelumdiskon = grocery1 + grocery2 + grocery3;
    let jumlah_diskon = total_sebelumdiskon * disc;
    let total = total_sebelumdiskon - jumlah_diskon;
    document.getElementById('result').innerText = `The total amount is: Rp ${total}`;
}