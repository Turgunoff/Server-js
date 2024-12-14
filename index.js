const express = require('express');
const app = express();
const port = 3000; // Istalgan portni tanlashingiz mumkin

app.get('/confirm', (req, res) => {
  const phoneNumber = req.query.phoneNumber;

  // 1. 6 xonali tasdiqlash kodini yarating
  const confirmationCode = generateConfirmationCode();

  // 2. Telegram botga yo'naltirish uchun URL hosil qiling
  const botUrl = `https://t.me/<bot_username>?start=<span class="math-inline">\{phoneNumber\}&code\=</span>{confirmationCode}`;

  // 3. URLni qaytaring
  res.send(botUrl);
});

// 6 xonali tasdiqlash kodini yaratish
function generateConfirmationCode() {
  const code = Math.floor(100000 + Math.random() * 900000);
  return code.toString();
}

app.listen(port, () => {
  console.log(`API ${port} portida ishga tushdi`);
});