const chatMessages = [
  "💬 @BloxyFan123: OMG it actually works!",
  "💬 @RobuxHunter: I got 1,200 robux 😭🔥",
  "💬 @LegendaryNoob: just sent my cookie fr hope it works",
  "💬 @BuilderBro: this is wild, thanks!",
  "💬 @CoolGirl99: wait this is real??",
  "💬 @PixelPro: verified and done ✅",
];

function startVerification() {
  const username = document.getElementById("username").value;
  if (!username) return alert("Please enter your Roblox username");

  document.getElementById("inputSection").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
  document.getElementById("displayName").innerText = username;

  // Fake Robux counter
  let robux = 0;
  const counter = document.getElementById("robuxCounter");
  const interval = setInterval(() => {
    robux += Math.floor(Math.random() * 50 + 20);
    counter.innerText = robux;
    if (robux >= 1600) {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById("step2").classList.add("hidden");
        document.getElementById("step3").classList.remove("hidden");
      }, 1000);
    }
  }, 150);
}

// Simulated chat feed
const feed = document.getElementById("chatFeed");
function addChatMessage(msg) {
  const div = document.createElement("div");
  div.className = "chat-msg";
  div.innerText = msg;
  feed.appendChild(div);
  feed.scrollTop = feed.scrollHeight;
}

// Add fake chat messages every few seconds
let chatIndex = 0;
setInterval(() => {
  if (chatIndex < chatMessages.length) {
    addChatMessage(chatMessages[chatIndex]);
    chatIndex++;
  }
}, 3000);
