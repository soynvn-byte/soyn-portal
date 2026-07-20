(function () {
  if (!window.SOYN_DATA || !Array.isArray(window.SOYN_DATA.posts)) return;

  const posts = [
    {
      slug: "tranh-treo-tuong-can-ho-nho",
      title: "Tranh treo tường cho căn hộ nhỏ: 6 cách tạo điểm nhấn mà không làm chật không gian",
      category: "Cảm hứng không gian",
      date: "2026-07-20",
      excerpt: "Gợi ý chọn kích thước, màu sắc và bố cục tranh phù hợp với căn hộ nhỏ để không gian có điểm nhấn nhưng vẫn thoáng.",
      coverImage: "news/news_14.jpg",
      content: [
        { heading: "Ưu tiên tỷ lệ vừa đủ và khoảng thở", paragraphs: ["Căn hộ nhỏ không có nghĩa là chỉ dùng tranh rất bé. Một bức tranh có tỷ lệ phù hợp với sofa hoặc bàn ăn thường tạo cảm giác gọn hơn nhiều khung nhỏ đặt rời rạc.", "Nên giữ khoảng trắng quanh tranh và hạn chế lấp kín toàn bộ mảng tường. Khoảng thở giúp mắt nghỉ, đồng thời làm căn phòng có cảm giác rộng hơn."] },
        { heading: "Dùng màu sáng và hình ảnh có chiều sâu", paragraphs: ["Tranh có nền sáng, phong cảnh mở, đường nét đơn giản hoặc mảng màu nhẹ dễ tạo cảm giác thoáng. Nếu dùng màu đậm, nên giới hạn ở một điểm nhấn thay vì trải rộng khắp bố cục.", "Khung mảnh, màu gỗ sáng hoặc đen thanh thoát thường phù hợp hơn loại khung dày trong không gian nhỏ."] },
        { heading: "Chọn vị trí có giá trị thị giác cao", paragraphs: ["Các vị trí hiệu quả gồm mảng tường sau sofa, bàn ăn, đầu giường hoặc hành lang ngắn. Thay vì treo tranh ở nhiều chỗ, hãy ưu tiên một hoặc hai điểm nhìn chính.", "Khi cần treo bộ tranh, nên dùng hai hoặc ba khung có cùng ngôn ngữ hình ảnh để giữ sự gọn gàng."] }
      ]
    },
    {
      slug: "tranh-treo-tuong-phong-an",
      title: "Tranh treo tường phòng ăn: chọn chủ đề và màu sắc để không gian ấm cúng hơn",
      category: "Cảm hứng không gian",
      date: "2026-07-19",
      excerpt: "Cách chọn tranh cho phòng ăn theo kích thước bàn, ánh sáng và bảng màu nội thất để bữa ăn thêm gần gũi.",
      coverImage: "news/news_15.jpg",
      content: [
        { heading: "Phòng ăn cần cảm giác ấm và dễ gần", paragraphs: ["Tranh trong phòng ăn nên hỗ trợ không khí sum họp. Chủ đề thực vật, tĩnh vật, phong cảnh, hình khối mềm hoặc tranh trừu tượng có màu ấm thường dễ ứng dụng.", "Không nên chọn hình ảnh quá nặng nề hoặc tương phản gay gắt nếu không gian dùng hàng ngày cho gia đình."] },
        { heading: "Cân đối theo chiều dài bàn ăn", paragraphs: ["Một tranh ngang hoặc bộ hai đến ba tranh thường phù hợp với bàn dài. Tổng chiều rộng tranh nên nhỏ hơn chiều dài bàn để bố cục không bị nặng.", "Nếu bàn tròn, có thể dùng tranh vuông, tranh dọc hoặc một tác phẩm có bố cục tập trung để tạo điểm nhìn cân bằng."] },
        { heading: "Kết nối với ánh sáng và vật liệu", paragraphs: ["Ánh sáng vàng, gỗ, mây tre hoặc vải tự nhiên thường hợp với bảng màu be, nâu, đỏ đất và xanh olive. Tranh nên lặp lại một vài sắc độ này để tạo sự thống nhất.", "Tránh treo tranh ở vị trí dễ bám dầu mỡ hoặc hơi nóng; nên chọn bề mặt và khung dễ vệ sinh."] }
      ]
    },
    {
      slug: "tranh-treo-tuong-phong-cach-minimalism",
      title: "Tranh treo tường phong cách Minimalism: ít chi tiết nhưng không đơn điệu",
      category: "Phong cách nội thất",
      date: "2026-07-18",
      excerpt: "Hướng dẫn chọn tranh tối giản theo màu sắc, hình khối và tỷ lệ để tạo điểm nhấn tinh tế cho không gian hiện đại.",
      coverImage: "news/news_16.jpg",
      content: [
        { heading: "Tối giản không đồng nghĩa với trống trải", paragraphs: ["Tranh Minimalism thường sử dụng ít màu, ít chi tiết và bố cục rõ. Giá trị nằm ở tỷ lệ, đường nét và khoảng trắng thay vì số lượng hình ảnh.", "Một tác phẩm đúng tỷ lệ có thể tạo điểm nhấn mạnh hơn nhiều món decor nhỏ đặt cạnh nhau."] },
        { heading: "Chọn bảng màu có kiểm soát", paragraphs: ["Đen trắng, be, xám, nâu đất hoặc một màu nhấn duy nhất là lựa chọn phổ biến. Hãy chọn tranh có ít nhất một sắc độ liên kết với sofa, rèm, thảm hoặc vật liệu trong phòng.", "Nếu nội thất đã rất trung tính, một mảng màu nổi vừa phải giúp không gian có cá tính mà vẫn giữ sự gọn gàng."] },
        { heading: "Ưu tiên một điểm nhìn chính", paragraphs: ["Một tranh lớn trên sofa, đầu giường hoặc bàn console thường phù hợp hơn gallery wall dày đặc. Nếu dùng bộ tranh, nên giữ cùng kiểu khung và khoảng cách đều nhau.", "Không cần treo tranh trên mọi mảng tường; khoảng trống là một phần của thiết kế tối giản."] }
      ]
    },
    {
      slug: "tranh-treo-tuong-phong-kham-nha-khoa",
      title: "Tranh treo tường cho phòng khám và nha khoa: thân thiện, sạch và chuyên nghiệp",
      category: "Không gian kinh doanh",
      date: "2026-07-17",
      excerpt: "Gợi ý chọn tranh cho lễ tân, phòng chờ và khu điều trị nhằm giảm cảm giác căng thẳng và tăng nhận diện thương hiệu.",
      coverImage: "news/news_17.jpg",
      content: [
        { heading: "Hình ảnh có thể làm dịu tâm lý chờ đợi", paragraphs: ["Khách đến phòng khám thường có tâm lý lo lắng. Tranh thiên nhiên, phong cảnh nhẹ, hình khối mềm hoặc minh họa tích cực giúp không gian bớt lạnh và dễ tiếp cận hơn.", "Nên tránh hình ảnh quá phức tạp, màu quá tối hoặc nội dung có thể gây liên tưởng tiêu cực."] },
        { heading: "Phân bố theo từng khu vực", paragraphs: ["Lễ tân cần một điểm nhấn rõ, có thể kết nối với màu thương hiệu. Phòng chờ phù hợp với bộ tranh nhẹ nhàng, còn hành lang nên dùng tranh có nhịp để dẫn hướng.", "Khu điều trị cần hình ảnh đơn giản, dễ vệ sinh và không gây phân tán cho nhân viên y tế."] },
        { heading: "Chú ý vật liệu và tiêu chuẩn vận hành", paragraphs: ["Khung và bề mặt tranh nên dễ lau chùi, hạn chế bám bụi và phù hợp môi trường cần vệ sinh thường xuyên. Phương án treo phải chắc chắn, không cản trở thiết bị hoặc lối đi.", "Một hệ tranh đồng bộ giúp chuỗi phòng khám duy trì nhận diện nhất quán giữa nhiều cơ sở."] }
      ]
    },
    {
      slug: "tranh-treo-tuong-lam-qua-doanh-nghiep",
      title: "Tranh treo tường làm quà tặng doanh nghiệp: cách chọn để tinh tế và có dấu ấn",
      category: "Quà tặng & Cá nhân hóa",
      date: "2026-07-16",
      excerpt: "Gợi ý chọn tranh làm quà tặng đối tác, khách hàng hoặc nhân viên theo dịp, ngân sách và nhận diện thương hiệu.",
      coverImage: "news/new_18.jpg",
      content: [
        { heading: "Món quà cần phù hợp với người nhận", paragraphs: ["Tranh là quà tặng có giá trị sử dụng lâu dài, nhưng cần chọn chủ đề đủ linh hoạt. Phong cảnh, kiến trúc, trừu tượng nhẹ hoặc hình ảnh gắn với địa phương thường dễ phù hợp nhiều đối tượng.", "Với đối tác quan trọng, có thể phát triển thiết kế riêng dựa trên câu chuyện hợp tác hoặc giá trị thương hiệu."] },
        { heading: "Cá nhân hóa vừa đủ", paragraphs: ["Logo, thông điệp hoặc tên người nhận nên được thể hiện tinh tế ở mặt sau, bao bì hoặc thiệp đi kèm thay vì đặt quá lớn trên tác phẩm.", "Cách làm này giúp món quà vẫn có tính thẩm mỹ và dễ sử dụng trong nhiều không gian."] },
        { heading: "Đồng bộ từ sản phẩm đến đóng gói", paragraphs: ["Kích thước, kiểu khung, hộp đựng và thiệp cần được thiết kế như một tổng thể. Với số lượng lớn, nên chuẩn hóa mẫu và quy cách để kiểm soát chất lượng.", "Một bộ quà được hoàn thiện chỉn chu giúp doanh nghiệp truyền tải sự chuyên nghiệp mà không cần phô trương."] }
      ]
    },
    {
      slug: "cach-chon-khung-tranh-treo-tuong",
      title: "Cách chọn khung tranh treo tường: màu khung, độ dày và chất liệu nào phù hợp?",
      category: "Sản phẩm & Chất liệu",
      date: "2026-07-15",
      excerpt: "Hướng dẫn chọn khung gỗ, khung đen, khung sáng và độ dày phù hợp với phong cách tranh và nội thất.",
      coverImage: "news/new_19.jpg",
      content: [
        { heading: "Khung là phần kết nối tranh với không gian", paragraphs: ["Cùng một bức tranh nhưng kiểu khung khác nhau có thể tạo cảm giác hoàn toàn khác. Khung đen mảnh mang tính hiện đại, khung gỗ sáng tạo sự nhẹ nhàng, còn khung nâu đậm phù hợp không gian ấm và cổ điển hơn.", "Nên chọn khung dựa trên cả tranh lẫn vật liệu nội thất xung quanh."] },
        { heading: "Độ dày cần tương xứng với kích thước", paragraphs: ["Tranh nhỏ thường hợp khung mảnh để không bị nặng. Tranh lớn cần khung đủ chắc nhưng vẫn nên giữ tỷ lệ thanh thoát nếu nội thất theo hướng hiện đại.", "Với bộ nhiều tranh, cùng một kiểu khung giúp tổng thể liền mạch và dễ sắp xếp hơn."] },
        { heading: "Chú ý độ bền và cách bảo quản", paragraphs: ["Khung cần được hoàn thiện phẳng, chắc, không cong vênh và có phụ kiện treo phù hợp. Trong khí hậu nóng ẩm, nên tránh đặt tranh sát khu vực có hơi nước hoặc nắng trực tiếp.", "Lau bụi bằng khăn mềm, không dùng hóa chất mạnh lên bề mặt khung hoặc tranh."] }
      ]
    }
  ];

  const existing = new Set(window.SOYN_DATA.posts.map(post => post.slug));
  posts.forEach(post => {
    if (!existing.has(post.slug)) window.SOYN_DATA.posts.push(post);
  });
})();