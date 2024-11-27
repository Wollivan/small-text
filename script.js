const input = document.querySelector("input");
const smol = document.getElementById("smol");

let params = new URLSearchParams(document.location.search);
let text = params.get("text"); // is the string "Jonathan"
if (!text) {
  updateUrl("hello")
  input.value = "hello";
  smol.textContent = "hello";
} else {
  input.value = text;
  smol.textContent = text;
}



input.addEventListener("input", (e) => {
  const str = e.target.value
  smol.textContent = str
  updateUrl(str)
})

function updateUrl(str) {
  if ('URLSearchParams' in window) {
    const url = new URL(window.location)
    url.searchParams.set("text", str)
    history.pushState(null, '', url);
    document.querySelector('title').textContent = str;

  }
}

