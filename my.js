function addGS() {

  const url="https://script.google.com/macros/s/AKfycbwOH3UM0Qi9CpOaZMuePqIwosDiyDQ0SGxvCXcUp3oFI6NrJ4F5HupgRGYzHA_jAuQL-A/exec"
  const data = { name: "John" }
  fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })

}

function testGS() {

  const url="https://script.google.com/macros/s/AKfycbwOH3UM0Qi9CpOaZMuePqIwosDiyDQ0SGxvCXcUp3oFI6NrJ4F5HupgRGYzHA_jAuQL-A/exec"

  fetch(url)
    .then(d => d.json())
    .then(d => {
      document.getElementById("app").textContent = d[0].status
    })

}

document.getElementById("btn2").addEventListener("click", addGS)

document.getElementById("btn").addEventListener("click", testGS)
