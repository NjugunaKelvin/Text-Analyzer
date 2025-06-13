const button = document.getElementById('Btn');
const input = document.getElementById('inputText');
const results = document.getElementById('results');

button.addEventListener('click', () => {
    const text = input.value.trim();

    if (text === "") {
        results.innerHTML = "<p>Please enter some text.</p>";
        results.style.display = "block";
        return;
    }

            // loading effect
    results.innerHTML = "<p>Analyzing...</p>";
    results.style.display = "block";

    setTimeout(() => {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const charCount = text.length;
    const longestWord = words.reduce((a, b) => a.length >= b.length ? a : b, "");

    results.innerHTML = `
    <p><strong>Original Text:</strong> ${text}</p>
    <p><strong>Word Count:</strong> ${wordCount}</p>
    <p><strong>Character Count:</strong> ${charCount}</p>
    <p><strong>Longest Word:</strong> ${longestWord}</p>
        `;
    }, 300);
});

        // Apressing Enter key to analyze
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
            utton.click();
        }
});