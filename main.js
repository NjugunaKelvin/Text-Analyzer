const button = document.getElementById('Btn');
const input = document.getElementById('inputText');
const results = document.getElementById('results');

button.addEventListener('click', () => {
  const text = input.value.trim();

  if (text === "") {
    results.innerHTML = "<p>Please enter some text.</p>";
    return;
  }

  const words = text.split(/\s+/);
  const wordCount = words.length;
  const charCount = text.length;
  const longestWord = words.reduce((a, b) => a.length >= b.length ? a : b);

  results.innerHTML = `
    <p><strong>Original Text:</strong> ${text}</p>
    <p><strong>Word Count:</strong> ${wordCount}</p>
    <p><strong>Character Count:</strong> ${charCount}</p>
    <p><strong>Longest Word:</strong> ${longestWord}</p>
  `;
});
