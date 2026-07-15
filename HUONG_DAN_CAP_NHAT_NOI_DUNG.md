# Hướng dẫn cập nhật nội dung Soyn Portal

## A. Thêm một dự án

Mở `assets/js/content.js`, tìm phần `projects` và sao chép một khối dữ liệu:

```js
{
  slug: "ten-du-an-khong-dau",
  title: "Tên dự án",
  category: "Không gian sống",
  date: "2026-07-15",
  excerpt: "Mô tả ngắn khoảng 1–2 câu.",
  art: "art-1",
  demo: false,
  facebookUrl: "https://www.facebook.com/.../posts/...",
  content: [
    {
      heading: "Bối cảnh",
      paragraphs: ["Nội dung đoạn 1.", "Nội dung đoạn 2."]
    },
    {
      heading: "Giải pháp của Soyn",
      paragraphs: ["Nội dung giải pháp."]
    }
  ]
}
```

Lưu ý đặt dấu phẩy giữa các phần tử.

## B. Thêm một bài viết

Thực hiện tương tự trong mảng `posts`. Trường `source` có thể dùng `Facebook`, `Blog` hoặc `Portal`.

## C. Dùng ảnh thật thay hình minh họa

Phiên bản mẫu dùng các class `art-1` đến `art-6`. Để dùng ảnh thật:

1. Chép ảnh vào `assets/images/projects/` hoặc `assets/images/posts/`.
2. Thêm trường `image`, ví dụ:

```js
image: "assets/images/projects/du-an-can-ho.jpg"
```

3. Trong `assets/js/site.js`, `assets/js/listing.js` và `assets/js/detail.js`, thay phần:

```html
<div class="art ${item.art}"></div>
```

bằng:

```html
<img src="${item.image}" alt="${item.title}">
```

Hoặc có thể nhờ đơn vị kỹ thuật sửa một lần để tự động ưu tiên `image` nếu trường này tồn tại.

## D. Lấy URL bài Facebook cụ thể

1. Mở bài đăng trên fanpage Soyn.
2. Bấm vào ngày/giờ đăng để mở đường dẫn riêng của bài.
3. Sao chép URL.
4. Dán vào trường `facebookUrl`.

## E. Gợi ý nội dung case study

- Bối cảnh/yêu cầu.
- Không gian hoặc đối tượng sử dụng.
- Ý tưởng chủ đạo.
- Sản phẩm/vật liệu đã dùng.
- Quy trình thực hiện.
- Hình ảnh trước – sau.
- Kết quả/phản hồi.
- Liên kết bài fanpage gốc.
