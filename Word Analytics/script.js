document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("textarea");
  const characterCount = document.querySelector(".charCount");
  const wordsCount = document.querySelector(".WordCount");
  const sentenceCount = document.querySelector(".sentCount");

  input.addEventListener("input", () => {
    const text = input.value.trim();

    // Character count
    characterCount.textContent = text.length;

    // Words count
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    wordsCount.textContent = words.length;

    // Sentence count
    const sentneces = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.length > 0);
    sentenceCount.textContent = sentneces.length;
  });
});
