# 🚀 HƯỚNG DẪN DEPLOY LÊN GITHUB PAGES

## 📌 Bước 1: Tạo tài khoản GitHub (nếu chưa có)

1. Truy cập: https://github.com
2. Click **Sign up** để tạo tài khoản mới (miễn phí)
3. Xác nhận email

## 📌 Bước 2: Tạo Repository mới

1. Đăng nhập vào GitHub
2. Click vào biểu tượng **+** ở góc trên bên phải → chọn **New repository**
3. Điền thông tin:
   - **Repository name:** `tot-nghiep` (hoặc tên bạn muốn)
   - **Description:** "Thư mời lễ tốt nghiệp - Nguyễn Minh Tân"
   - **Public** ✅ (BẮT BUỘC phải chọn Public để dùng GitHub Pages miễn phí)
   - **KHÔNG** tích vào "Add a README file"
   - **KHÔNG** tích vào "Add .gitignore"
   - **KHÔNG** chọn license
4. Click nút màu xanh **Create repository**

## 📌 Bước 3: Upload code lên GitHub

Sau khi tạo repository, bạn sẽ thấy trang hướng dẫn. Có 2 cách:

### Cách 1: Upload trực tiếp (Dễ nhất) ⭐

1. Trên trang repository mới tạo, click vào **"uploading an existing file"**
2. Kéo thả các file sau vào:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `graduation.jpg`
   - `README.md`
   - `.gitignore`
3. Scroll xuống dưới, điền commit message: "Initial commit - Graduation invitation"
4. Click **Commit changes**

### Cách 2: Dùng Git (Nâng cao)

Mở PowerShell hoặc Command Prompt trong thư mục `TotNghiep` và chạy:

```bash
git init
git add .
git commit -m "Initial commit - Graduation invitation"
git branch -M main
git remote add origin https://github.com/TEN-GITHUB-CUA-BAN/tot-nghiep.git
git push -u origin main
```

**Lưu ý:** Thay `TEN-GITHUB-CUA-BAN` bằng tên GitHub của bạn, và `tot-nghiep` bằng tên repository bạn đã tạo.

## 📌 Bước 4: Bật GitHub Pages

1. Vào repository vừa tạo trên GitHub
2. Click vào tab **Settings** (ở menu trên cùng)
3. Scroll xuống, tìm phần **Pages** (ở menu bên trái)
4. Trong phần **Build and deployment**:
   - **Source:** Chọn **Deploy from a branch**
   - **Branch:** Chọn **main**
   - **Folder:** Chọn **/ (root)**
5. Click **Save**
6. Đợi khoảng 1-2 phút để GitHub build trang web

## 📌 Bước 5: Lấy link chia sẻ

Sau khi bật GitHub Pages, bạn sẽ thấy một hộp màu xanh với link:
```
https://TEN-GITHUB-CUA-BAN.github.io/tot-nghiep/
```

**Link này sẽ tự động cập nhật mỗi khi bạn thay đổi code!**

## 📱 Chia sẻ với bạn bè

### Cách 1: Gửi link trực tiếp
- Copy link và gửi qua Zalo, Facebook, Messenger, Email

### Cách 2: Tạo QR Code
1. Truy cập: https://www.qr-code-generator.com
2. Dán link GitHub Pages vào
3. Tải QR code về và in vào thiệp mời

### Cách 3: Chia sẻ trên mạng xã hội
- Post link lên Facebook, Instagram story với ảnh đẹp

## 🔄 Cập nhật trang web sau này

Nếu bạn muốn thay đổi nội dung:

1. Sửa file trong thư mục `TotNghiep`
2. Upload lại file đã sửa lên GitHub (cách 1) hoặc dùng git push (cách 2)
3. Đợi 1-2 phút, trang web sẽ tự động cập nhật!

## ❓ Câu hỏi thường gặp

**Q: Có mất phí không?**  
A: Hoàn toàn miễn phí! GitHub Pages miễn phí cho repository Public.

**Q: Link có bị thay đổi không?**  
A: Không, link sẽ giữ nguyên trừ khi bạn đổi tên repository.

**Q: Có thể đổi tên miền riêng không?**  
A: Có! Bạn có thể mua domain và trỏ về GitHub Pages (nâng cao).

**Q: Ảnh có bị mất không?**  
A: Không, ảnh sẽ được lưu trên GitHub và hiển thị bình thường.

---

**Chúc bạn thành công! 🎉**

Nếu gặp vấn đề, hãy kiểm tra:
- Repository phải là **Public**
- File `index.html` phải có trong thư mục gốc
- Đã bật GitHub Pages trong Settings

