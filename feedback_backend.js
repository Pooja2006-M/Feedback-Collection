// feedback_backend.js
const feedbackList = [];

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const user = this.user.value.trim();
  const feedback = this.feedback.value.trim();

  if (user && feedback) {
    feedbackList.push({ user, feedback });
    console.log(`${user} submitted feedback: ${feedback}`);
    alert("Thank you for your feedback!");
    this.reset();
  }
});
