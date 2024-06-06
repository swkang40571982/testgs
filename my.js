function testGS() {

  const url=""

  fetch(url)
    .then(d => d.json())
    .then(d => {
      document.getElementById("app").textContent = d[0].status
    })

}

document.getElementById("btn").addEventListener("click", testGS)
