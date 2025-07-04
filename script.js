document.addEventListener('DOMContentLoaded', () => {
  const adviceText = document.getElementById('advice');
  const button = document.getElementById('getAdvice');

  button.addEventListener('click', async () => {
    adviceText.textContent = 'Loading advice...';
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      adviceText.textContent = `"${data.slip.advice}"`;
    } catch (err) {
      adviceText.textContent = 'Failed to fetch advice. Try again!';
    }
  });
});
