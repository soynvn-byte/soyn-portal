# Soyn Portal

Portal tĩnh giới thiệu **Profile · Projects · Stories** của Soyn. Thiết kế trắng – xám, tối giản, responsive và có thể đưa thẳng lên GitHub Pages mà không cần cài đặt Node.js.

## 1. Xem thử trên máy

Mở `index.html` trực tiếp, hoặc chạy web server cục bộ:

```bash
python -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## 2. Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub, ví dụ `soyn-portal`.
2. Upload toàn bộ file và thư mục trong bộ source này vào nhánh `main`.
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**.
5. Chọn nhánh `main`, thư mục `/ (root)` và bấm **Save**.
6. GitHub sẽ cung cấp đường dẫn website sau vài phút.

## 3. Cập nhật dự án và bài viết

Toàn bộ dữ liệu nằm trong:

```text
assets/js/content.js
```

- `projects`: danh sách dự án.
- `posts`: tin tức/bài viết.
- `facebookUrl`: URL bài đăng Facebook cụ thể.
- `demo: true`: hiển thị nhãn “Nội dung mẫu”. Khi đã thay bằng nội dung thật, đổi thành `false`.
- `art`: hình minh họa CSS. Khi có ảnh thật, xem hướng dẫn trong `HUONG_DAN_CAP_NHAT_NOI_DUNG.md`.

## 4. Cấu trúc

```text
soyn-portal/
├── index.html
├── profile.html
├── projects.html
├── news.html
├── detail.html
├── 404.html
├── assets/
│   ├── css/styles.css
│   ├── js/content.js
│   ├── js/site.js
│   ├── js/listing.js
│   ├── js/detail.js
│   └── images/
└── HUONG_DAN_CAP_NHAT_NOI_DUNG.md
```

## 5. Facebook

Bản này dùng phương án **bán tự động và an toàn**:

1. Đăng bài trên fanpage.
2. Sao chép nội dung/hình ảnh cần lưu trữ vào Portal.
3. Dán URL bài Facebook cụ thể vào `facebookUrl`.
4. Portal hiển thị bài theo giao diện Soyn và có nút dẫn về Facebook.

Không đặt Meta Page Access Token trong JavaScript phía trình duyệt. Nếu muốn tự động đồng bộ hoàn toàn, cần bổ sung backend/serverless function và cấu hình Meta Pages API riêng.

## 6. Thông tin đã cài sẵn

- Website bán hàng: https://soyn.vn/
- Fanpage: https://www.facebook.com/soyn.vn
- Màu nhận diện: trắng, xám, đen.
- Logo: đã cắt gọn và tạo bản PNG nền trong suốt từ file người dùng cung cấp.


## Bảng màu nhận diện

- Trắng: `#ffffff`
- Xám nền: `#f5f5f2`
- Đen chữ: `#121212`
- Warm Gold nhấn: `#b58950`

Màu Warm Gold được dùng có tiết chế ở tiêu đề nhấn, nút hành động, đường dẫn, chi tiết hình học và trạng thái tương tác.
