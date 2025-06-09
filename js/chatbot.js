
// Example safe chatbot.js - calls backend with businessId param
async function sendMessage(userMessage, businessId) {
    const response = await fetch(`https://your-backend.com/api/chat?businessId=${encodeURIComponent(businessId)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
    });
    const data = await response.json();
    console.log("Bot reply:", data.reply);
}
