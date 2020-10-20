const text = prompt('').split('');

function twogram(text) {
  if (!text[1]) return;
   console.log(text[0], text[1]);
  return twogram(text.splice(1))
}

twogram(text);