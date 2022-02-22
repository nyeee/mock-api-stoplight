var path="/menu/"
var files=[
  "api-1.json",
  "api-2.json"
]
for (let i = 0; i < files.length; i++) {
  files[i] = path+files[i];
}
window.files=files;
