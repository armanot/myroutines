const routineList = [
    { time: "5:00 AM", task: "Wake up..Baca doa bangun tidur, Akhir Surah al-Imran dan akhir surah al-Hasyr" },
    { time: "5:30 AM", task: "Streching..Tahajjud 2 rakaat, 2 pages" },
    { time: "6:00 AM", task: "Sunat Subuh, Subuh time" },
    { time: "7:00 AM", task: "Breakfast" },
    { time: "10:00 AM", task: "Dhuha, 2 pages" },
    { time: "1:00 PM", task: "2 pages, Zuhr prayer" },
    { time: "4:30 PM", task: "Asar, 2 pages" },
    { time: "6:00 PM", task: "Get sweat" },
    { time: "7:30 PM", task: "Maghrib, 2 pages" },
    { time: "8:30 PM", task: "Isyak, 2 pages" },
    { time: "9:00 PM", task: "Light dinner" },
    { time: "10:00 PM", task: "Relaxing activity" },
    { time: "11:00 PM", task: "al-Mulk, Lights off and niat Allah bangunkan kita sebelum subuh.." },
  ];

  const titles = [
    "Your Daily Adventure Awaits!",
    "Let's Shine Today, guys!",
    "A Fun Day Starts Here!",
    "Your Daily Journey to Success!",
    "Ready to Conquer the Day?",
    "Steps to an Amazing Day!",
    "Today's Magical Moments!",
    "Your Daily Fun & Learning Plan!",
    "Let’s Make Today Awesome!",
  ];
  
  const themes = [
    "linear-gradient(to bottom, #d5f3e5, #ffffff)", // Green spa theme
    "linear-gradient(to bottom, #fef9d7, #d299c2)", // Soft pastel theme
    "linear-gradient(to bottom, #a1c4fd, #c2e9fb)", // Blue sky theme
    "linear-gradient(to bottom, #fbc2eb, #a18cd1)", // Pink and purple theme
    "linear-gradient(to bottom, #ff9a9e, #fecfef)", // Sunset theme
    "linear-gradient(to bottom, #ffecd2, #fcb69f)", // Peach theme
    "linear-gradient(to bottom, #cfd9df, #e2ebf0)", // Cool gray theme
  ];

  // Randomly select a theme
 const randomTheme = themes[Math.floor(Math.random() * themes.length)];

  // Select a random title
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  
  // Update the title dynamically
  document.querySelector(".spa-header h1").textContent = randomTitle;
  
  // Apply random background theme
  document.body.style.background = randomTheme;
  const routineUl = document.getElementById("routine");
  
  function renderRoutine() {
    routineUl.innerHTML = ""; // Clear the list first
    routineList.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<span><strong>${item.time}:</strong> ${item.task}</span> 
                      <button onclick="removeRoutine(${index})">Remove</button>`;
      routineUl.appendChild(li);
    });
  }
  
  function removeRoutine(index) {
    routineList.splice(index, 1); // Remove the task
    renderRoutine();
  }
  
  function addNewRoutine() {
    const time = prompt("Enter time (e.g., 7:00 PM):");
    const task = prompt("Enter task description:");
    if (time && task) {
      routineList.push({ time, task });
      renderRoutine();
    }
  }
  
  // Add routine rendering and button click event listener
  document.getElementById("addRoutineBtn").addEventListener("click", addNewRoutine);
  
  // Render the initial routine
  renderRoutine();
  