const カードの束 = [];
for(let マーク of ['ハート', 'クローバー', 'ダイヤ', 'スペード']){
  for(let 数字 = 1; 数字 <= 13; 数字++) {
    カードの束.push({マーク, 数字});
  }
}
console.log(カードの束);
let 選択されたカード = カードの束.filter(カード => カード.数字 === 2);
console.log(選択されたカード);

選択されたカード = カードの束.filter(カード => カード.マーク === 'ダイヤ');
console.log(選択されたカード);

選択されたカード = カードの束.filter(カード => カード.数字 > 10);
console.log(選択されたカード);

選択されたカード = カードの束.filter(カード => カード.数字 > 10 && カード.マーク === "ハート");
console.log(選択されたカード);