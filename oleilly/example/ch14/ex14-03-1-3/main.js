function countdown(seconds) {
  return new Promise(
    function (onFulfilled, onRejected) {
      for (let i = seconds; i >= 0; i--) {
        setTimeout(function () {
          if (i > 0) console.log(i + "...");
          else onFulfilled(console.log('Go!!'));
        }, (seconds - i) * 1000);
      }
    }
  );
}
const p = countdown(5);
p.then(function () {
  console.log("カウントダウン成功");
});
p.catch(function (err) {
  console.log("カウントダウンでエラーがおこった" + err.message);
});