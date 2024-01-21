var editor = CodeMirror(document.getElementById("editor"), {
  mode: "javascript",
  lineNumbers: true
});

function runCode() {
  var code = editor.getValue();

  try {
      var result = eval(code);
      document.getElementById("output").innerText = result;
  } catch (error) {
      document.getElementById("output").innerText = "Error: " + error.message;
  }
}