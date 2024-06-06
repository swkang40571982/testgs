function testGS() {

  const url="https://script.google.com/macros/s/AKfycbwVhbvPoLe3uOTv0WaVu8zTQ_esLZIcJWHmBRYznY_YLywRWVyJPGWRitNWtAVkRo8Q0A/exec"

  fetch(url)
    .then(d => d.json())
    .then(d => {
      document.getElementById("app").textContent = d[0].status
    })

}

document.getElementById("btn").addEventListener("click", testGS)