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
  chat.scrollTop = chat.scrollHeight;}

  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  function calculateBMI() {
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value / 100;
    let bmi = (w / (h * h)).toFixed(1);

    let msg = "";
    if (bmi < 18.5) msg = "Underweight";
    else if (bmi < 25) msg = "Normal";
    else if (bmi < 30) msg = "Overweight";
    else msg = "Obese";

    document.getElementById("bmiResult").innerText =
      "Your BMI is " + bmi + " (" + msg + ")";
  }

  function generateWorkout() {
    let workouts = [
      "20 Pushups",
      "30 Squats",
      "15 Burpees",
      "1 Minute Plank",
      "25 Jumping Jacks"
    ];

    let r = Math.floor(Math.random() * workouts.length);
    document.getElementById("workout").innerText = workouts[r];
  }

  
</script>

