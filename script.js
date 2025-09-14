// Sidebar Navigation
document.querySelectorAll(".sidebar nav ul li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    document.getElementById(item.getAttribute("data-target")).classList.add("active");
  });
});

// Dark Mode Toggle
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// To-Do
function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;
  let li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Study Break
function randomActivity() {
  let activities = [
    "Stretch for 5 mins 🧘‍♀️",
    "Drink water 💧",
    "Listen to a song 🎶",
    "Do 10 pushups 💪",
    "Prepare a healthy snack or drink 🥗",
    "Take a short nap 😴",
    "Close your eyes and meditate 😌",
    "Do deep breathing 😮‍💨",
    "Go for a walk 🚶‍♂️",
    "Organize your desk 🗂️",
    "Spend time with friends 🧑‍🤝‍🧑",
    "Phone a friend 📱",
    "Play a brain teaser or puzzle 🤓",
    "Read a few pages 📖",
    "Clean your workspace 🖥️"
  ];
  document.getElementById("activityResult").textContent =
    activities[Math.floor(Math.random() * activities.length)];
}

// Mood Picker
function pickMood() {
  let mood = document.getElementById("moodSelect").value;
  let msg = "";

  if (mood === "Happy") msg = "Keep smiling 🌟 You're glowing today!";
  if (mood === "Awful") msg = "Hey, rough days happen… but they don’t define you ❤️";
  if (mood === "Calm") msg = "Enjoy the peace ☁️ Stay in this moment.";
  if (mood === "Anxious") msg = "Breathe in deep… exhale slow 🌿 You’ve got control.";
  if (mood === "Energetic") msg = "Channel that energy 💥 Go conquer something today!";
  if (mood === "Confused") msg = "It’s okay not to have it all figured out 🤔 Clarity will come.";
  if (mood === "Stressed") msg = "Relax your shoulders 💆 Take one step at a time.";
  if (mood === "Motivated") msg = "Fuel that fire 🔥 Nothing can stop you now!";
  if (mood === "Sleepy") msg = "Maybe a power nap will recharge you 😴💤";

  document.getElementById("moodMessage").textContent = msg;
}

// Compliment Board
function giveCompliment() {
  let compliments = [
    "You’re doing amazing! 🌸",
    "Your hard work shows ✨",
    "You’ve got great vibes 🌟",
    "You make things look effortless 💫",
    "You have a smile that can brighten anyone’s day ☀️",
    "Your creativity is inspiring 🎨",
    "You’re stronger than you realize 💪",
    "You’ve got such a kind heart ❤️",
    "You bring good energy wherever you go 🌈",
    "You’re literally glowing today ✨",
    "Your laugh is contagious 😂",
    "You’ve got great taste, always 🎶",
    "You’re someone people can rely on 🤝",
    "You make tough things look easy 🔥",
    "You’re leveling up every single day 🚀",
    "You have a way of making people feel comfortable 🌻",
    "You’re full of smart ideas 🧠",
    "Your presence makes the room better 🌹",
    "You deserve all the good things coming your way 🌌",
    "You’re unforgettable in the best way 🌟"
  ];

  document.getElementById("complimentText").textContent =
    compliments[Math.floor(Math.random() * compliments.length)];
}

// Open Lab Program
function openLab() {
  let link = document.getElementById("labSelect").value;
  if (link) window.open(link, "_blank");
}
