function startCounting() {
  let i = 0;
  return setInterval(() => console.log(i++), 1000)
}

function stopCounting(id) {
  clearInterval(id);
}

var id = startCounting();
setTimeout(() => stopCounting(id), 3000);