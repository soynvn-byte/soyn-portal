(function () {
  if (!window.SOYN_DATA || !Array.isArray(window.SOYN_DATA.projects)) return;
  const slug = "van-phong-maserati-viet-nam-quan-7";
  if (window.SOYN_DATA.projects.some(project => project.slug === slug)) return;

  window.SOYN_DATA.projects.unshift({
    slug,
    title: "Maserati Việt Nam — Tranh trang trí cho không gian văn phòng",
    category: "Văn phòng & Doanh nghiệp",
    date: "2026-07-17",
    year: "Quận 7",
    excerpt: "Soyn thực hiện hạng mục tranh trang trí cho văn phòng Maserati Việt Nam tại Quận 7, TP.HCM, tạo nên hệ điểm nhấn đồng bộ với không gian làm việc hiện đại.",
    coverImage: "assets/images/projects/maserati-vietnam/04-maserati-triptych.jpg",
    facebookUrl: "https://www.facebook.com/soyn.vn",
    facts: [
      { value: "Quận 7", label: "Địa điểm" },
      { value: "Văn phòng", label: "Loại hình không gian" },
      { value: "Đồng bộ", label: "Giải pháp phối tranh" }
    ],
    content: [
      { heading: "Điểm nhấn nghệ thuật trong không gian làm việc hiện đại", paragraphs: ["Soyn thực hiện hạng mục tranh trang trí cho văn phòng Maserati Việt Nam tại Quận 7, TP.HCM. Không gian được định hình bởi bảng màu xám, trắng và xanh trầm, kết hợp hệ vách kính, ánh sáng tuyến tính cùng nội thất văn phòng tối giản.", "Trong tổng thể ấy, tranh đóng vai trò làm mềm các bề mặt kiến trúc và bổ sung điểm nhìn cho từng khu vực. Mỗi bộ tranh được lựa chọn để hiện diện vừa đủ, tạo cảm xúc thị giác nhưng vẫn giữ sự chuyên nghiệp, tập trung và thông thoáng cần có của môi trường làm việc."] },
      { heading: "Ngôn ngữ hình ảnh đồng điệu cùng nhận diện Maserati", paragraphs: ["Các tác phẩm sử dụng sắc xanh, trắng và đen làm chủ đạo, nối tiếp bảng màu nội thất và tinh thần sang trọng, mạnh mẽ của thương hiệu Maserati.", "Ở những không gian còn lại, hình ảnh sóng biển, thực vật, hoa và các bố cục trừu tượng được tiết chế về màu sắc, duy trì mạch thẩm mỹ nhất quán xuyên suốt văn phòng."] }
    ],
    gallery: [
      { src: "assets/images/projects/maserati-vietnam/01-ocean-palms.jpg", alt: "Bộ tranh sắc xanh tại không gian làm việc Maserati Việt Nam", layout: "landscape" },
      { src: "assets/images/projects/maserati-vietnam/04-maserati-triptych.jpg", alt: "Bộ ba tranh nhận diện Maserati trong phòng họp", layout: "wide" },
      { src: "assets/images/projects/maserati-vietnam/07-monstera-meeting-room.jpg", alt: "Bộ tranh lá monstera trong phòng họp", layout: "wide" }
    ]
  });
})();