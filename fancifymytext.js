function makeBigger() {
    document.getElementById("Text").style.fontSize = "24pt";
}

function fancyStyle() {
  var textarea = document.getElementById("Text");
  if (document.getElementById("fancy").checked) {
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";
  } else {
    textarea.style.fontWeight = "normal";
    textarea.style.color = "black";
    textarea.style.textDecoration = "none";
  }
}

function mooify() {
  var textarea = document.getElementById("Text");
  var text = textarea.value.toUpperCase();
  var parts = text.split(".");
  for (var i = 0; i < parts.length; i++) {
    if (parts[i].trim() !== "") {
      parts[i] = parts[i].trimEnd() + "-MOO";
    }
  }
  textarea.value = parts.join(".");
}

