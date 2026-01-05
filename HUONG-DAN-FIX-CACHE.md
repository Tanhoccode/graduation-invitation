# 🔧 CÁCH SỬA LỖI KHÔNG THẤY THAY ĐỔI SAU KHI PUSH

## ❓ Nguyên nhân thường gặp:

1. **Cache của trình duyệt** - Trình duyệt đang hiển thị phiên bản cũ
2. **GitHub Pages chưa rebuild** - Cần thời gian để GitHub cập nhật
3. **File chưa được commit/push** - Thay đổi chưa được đẩy lên GitHub

## ✅ CÁCH SỬA:

### Bước 1: Kiểm tra và Push lại

Mở PowerShell/CMD trong thư mục `TotNghiep` và chạy:

```bash
# Kiểm tra thay đổi
git status

# Nếu có file thay đổi, add và commit
git add .
git commit -m "Fix: Update changes"
git push origin main
```

**HOẶC** chạy file `update.bat` (double-click vào file đó)

### Bước 2: Xóa cache trình duyệt

#### Chrome/Edge:
- Nhấn **Ctrl + Shift + Delete**
- Chọn "Cached images and files"
- Chọn "All time"
- Click **Clear data**

#### Hoặc Hard Refresh:
- **Windows:** `Ctrl + F5` hoặc `Ctrl + Shift + R`
- **Mac:** `Cmd + Shift + R`

### Bước 3: Force refresh GitHub Pages

Có 2 cách:

#### Cách 1: Thêm version vào URL
Thêm `?v=2` (hoặc số bất kỳ) vào cuối link:
```
https://TEN-GITHUB.github.io/tot-nghiep/?v=2
```

#### Cách 2: Rebuild GitHub Pages
1. Vào repository trên GitHub
2. Vào **Settings** → **Pages**
3. Tắt GitHub Pages (chọn "None")
4. Click **Save**
5. Đợi 10 giây
6. Bật lại (chọn "Deploy from a branch" → "main" → "/")
7. Click **Save**
8. Đợi 1-2 phút

### Bước 4: Kiểm tra trên GitHub

1. Vào repository trên GitHub
2. Click vào file bạn đã sửa (ví dụ `index.html`)
3. Xem nội dung file có đúng thay đổi của bạn không
4. Nếu chưa đúng → bạn chưa commit/push đúng cách

## 🚀 SỬ DỤNG SCRIPT TỰ ĐỘNG

Tôi đã tạo file `update.bat` cho bạn:

1. **Double-click** vào file `update.bat`
2. Nhập commit message (hoặc Enter để dùng mặc định)
3. Script sẽ tự động:
   - Add tất cả thay đổi
   - Commit với message
   - Push lên GitHub

## 🔍 KIỂM TRA NHANH

### Kiểm tra file đã được commit chưa:
```bash
git log --oneline -3
```

### Kiểm tra file đã được push chưa:
```bash
git status
```

Nếu thấy "Your branch is ahead of 'origin/main' by X commits" → chưa push!

### Xem thay đổi:
```bash
git diff
```

## 💡 MẸO:

1. **Luôn kiểm tra git status** trước khi push
2. **Dùng hard refresh** (Ctrl+F5) sau mỗi lần push
3. **Đợi 1-2 phút** sau khi push để GitHub rebuild
4. **Thêm version vào URL** để bypass cache: `?v=3`

## ⚠️ NẾU VẪN KHÔNG ĐƯỢC:

1. Kiểm tra file trên GitHub có đúng không
2. Kiểm tra GitHub Pages đã bật chưa
3. Thử mở link ở chế độ ẩn danh (Incognito)
4. Thử mở link trên điện thoại (không có cache)

---

**Nếu vẫn không được, hãy cho tôi biết lỗi cụ thể!** 🛠️

