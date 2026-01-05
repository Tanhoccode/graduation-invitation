// Script để tự động thêm timestamp vào ảnh, tránh cache
// Chạy: node fix-image-cache.js

const fs = require('fs');
const path = require('path');

const htmlFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlFile, 'utf8');

// Tạo version từ timestamp
const version = Date.now();

// Thay thế graduation.jpg thành graduation.jpg?v=TIMESTAMP
html = html.replace(
    /graduation\.jpg(\?v=\d+)?/g,
    `graduation.jpg?v=${version}`
);

fs.writeFileSync(htmlFile, html, 'utf8');
console.log(`✅ Đã cập nhật version ảnh: graduation.jpg?v=${version}`);
console.log('📝 Bây giờ commit và push lại nhé!');

