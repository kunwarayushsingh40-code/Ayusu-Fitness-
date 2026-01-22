<script>
function sendMsg() {
  let msg = document.getElementById("msg").value.toLowerCase();
  let chat = document.getElementById("chat");

  if (!msg) return;

  // User message
  chat.innerHTML += "<div style='text-align:right; margin:8px 0; color:#fff;'>You: " + msg + "</div>";

  // Bot reply logic
  let botReply = "Sorry, I didn't understand. Try asking about workouts or diet.";

  if (msg.includes("hi") || msg.includes("hello")) botReply = "Hey! How can I help you with fitness today?";
  if (msg.includes("workout")) botReply = "Do you want a beginner workout or muscle building workout?";
  if (msg.includes("beginner")) botReply = "Try 3 days/week: Squats, Pushups, Plank, Jogging. Keep it simple!";
  if (msg.includes("muscle")) botReply = "For muscle: 4 days/week, heavy compound lifts + protein diet.";
  if (msg.includes("diet")) botReply = "Eat protein, vegetables, and carbs in balance. Drink water and avoid junk.";
  if (msg.includes("fat loss") || msg.includes("lose weight")) botReply = "Fat loss = calorie deficit + cardio + strength training. Stay consistent.";
  if (msg.includes("bye")) botReply = "Bye! Stay strong 💪";

  // Bot message
  chat.innerHTML += "<div style='color:#22c55e; margin:8px 0;'>Bot: " + botReply + "</div>";

  document.getElementById("msg").value = "";
  chat.scrollTop = chat.scrollHeight;
}
</script>

