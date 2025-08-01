// feedback.js
const feedbackList = [];

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const user = this.user.value.trim();
  const feedback = this.feedback.value.trim();

  if (user && feedback) {
    // Store feedback
    feedbackList.push({ user, feedback });
    console.log(`${user} submitted feedback: ${feedback}`);

    // Display feedback dynamically
    const listDiv = document.getElementById('feedbackList');
    const item = document.createElement('div');
    item.className = 'feedback-item';
    item.textContent = `${user}: ${feedback}`;
    listDiv.appendChild(item);

    alert("Thank you for your feedback!");
    this.reset();
  }
});
