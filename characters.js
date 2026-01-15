const characterData = {
    // --- VUI VẺ / KÝ ỨC (Hệ mới 4.0+) ---
    "yao-guang": { name: "Yao Guang", relics: "Di Vật Mới 4.0", relic_id: "vui-ve", ornaments: "Salsotto", planar_id: "salsotto", path: "Vui Vẻ", element: "Băng", lightCone: "Bình Minh Rực Cháy", stats: "Tốc độ > Crit" },
    "sparxie": { name: "Sparxie", relics: "Di Vật Mới 4.0", relic_id: "vui-ve", ornaments: "Keel Gãy", planar_id: "keel", path: "Vui Vẻ", element: "Lượng Tử", lightCone: "Điệu Nhảy Aha", stats: "Tốc độ > HP%" },
    "aglaea": { name: "Aglaea", relics: "Tiên Phong", relic_id: "tien-phong", ornaments: "Salsotto", planar_id: "salsotto", path: "Ký Ức", element: "Lôi", lightCone: "Tỏa Sáng", stats: "Crit DMG > Crit Rate" },
    "the-herta": { name: "Đại Herta", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Tri Thức", element: "Băng", lightCone: "Sự Khởi Đầu", stats: "Crit Rate > Công %" },
    "castorice": { name: "Castorice", relics: "Thợ Săn Tuyết", relic_id: "luong-tu", ornaments: "Salsotto", planar_id: "salsotto", path: "Ký Ức", element: "Băng", lightCone: "Ký Ức Đóng Băng", stats: "Crit DMG > Tốc độ" },
    "mydei": { name: "Mydei", relics: "Thiết Kỵ", relic_id: "thiet-ky", ornaments: "Talia", planar_id: "talia", path: "Hủy Diệt", element: "Vật Lý", lightCone: "Bến Đỗ", stats: "Kích phá > Tốc độ" },

    // --- HÒA HỢP (HARMONY) ---
    "sunday": { name: "Sunday", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel Gãy", planar_id: "keel", path: "Hòa Hợp", element: "Số Ảo", lightCone: "Nghỉ Ngơi", stats: "Crit DMG > Tốc độ" },
    "robin": { name: "Robin", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel Gãy", planar_id: "keel", path: "Hòa Hợp", element: "Vật Lý", lightCone: "Đêm Rực Rỡ", stats: "Công % > Tốc độ" },
    "ruan-mei": { name: "Ruan Mei", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel Gãy", planar_id: "keel", path: "Hòa Hợp", element: "Băng", lightCone: "Dòng Chảy", stats: "Kích phá > Tốc độ" },
    "sparkle": { name: "Sparkle", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel Gãy", planar_id: "keel", path: "Hòa Hợp", element: "Lượng Tử", lightCone: "Thú Vui", stats: "Crit DMG > Tốc độ" },
    "tribbie": { name: "Tribbie", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel Gãy", planar_id: "keel", path: "Hòa Hợp", element: "Số Ảo", lightCone: "Bản Giao Hưởng", stats: "HP% > Tốc độ" },
    "bronya": { name: "Bronya", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel Gãy", planar_id: "keel", path: "Hòa Hợp", element: "Phong", lightCone: "Cuộc Chiến", stats: "Crit DMG > Tốc độ" },
    "tingyun": { name: "Tingyun", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel Gãy", planar_id: "keel", path: "Hòa Hợp", element: "Lôi", lightCone: "Điểm Hẹn", stats: "Công % > Tốc độ" },
    "asta": { name: "Asta", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel Gãy", planar_id: "keel", path: "Hòa Hợp", element: "Hỏa", lightCone: "Điểm Hẹn", stats: "Tốc độ > Công %" },
    "hanya": { name: "Hanya", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel Gãy", planar_id: "keel", path: "Hòa Hợp", element: "Vật Lý", lightCone: "Ký Ức", stats: "Tốc độ > Công %" },
    "yukong": { name: "Yukong", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel Gãy", planar_id: "keel", path: "Hòa Hợp", element: "Số Ảo", lightCone: "Quá Khứ", stats: "Tốc độ > Crit" },
    "cerydra": { name: "Cerydra", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel Gãy", planar_id: "keel", path: "Hòa Hợp", element: "Phong", lightCone: "Lửa Thử Vàng", stats: "Tốc độ > Chính xác" },

    // --- HƯ VÔ (NIHILITY) ---
    "acheron": { name: "Acheron", relics: "Tiên Phong", relic_id: "tien-phong", ornaments: "Izumo / Salsotto", planar_id: "salsotto", path: "Hư Vô", element: "Lôi", lightCone: "Bờ Sông", stats: "Crit DMG > Crit Rate" },
    "fugue": { name: "Fugue", relics: "Thiết Kỵ", relic_id: "thiet-ky", ornaments: "Kalpagni", planar_id: "kalpagni", path: "Hư Vô", element: "Hỏa", lightCone: "Lửa Địa Ngục", stats: "Kích phá > Tốc độ" },
    "jiaoqiu": { name: "Jiaoqiu", relics: "Tù Nhân", relic_id: "tu-nhan", ornaments: "Trạm Phong Ấn", planar_id: "tram-phong-an", path: "Hư Vô", element: "Hỏa", lightCone: "Số Phận", stats: "Chính xác > Tốc độ" },
    "kafka": { name: "Kafka", relics: "Tù Nhân", relic_id: "tu-nhan", ornaments: "Trạm Phong Ấn", planar_id: "tram-phong-an", path: "Hư Vô", element: "Lôi", lightCone: "Chờ Đợi", stats: "Công % > Tốc độ" },
    "black-swan": { name: "Black Swan", relics: "Tù Nhân", relic_id: "tu-nhan", ornaments: "Trạm Phong Ấn", planar_id: "tram-phong-an", path: "Hư Vô", element: "Phong", lightCone: "Ký Ức", stats: "Chính xác > Tốc độ" },
    "silver-wolf": { name: "Silver Wolf", relics: "Thiên Tài", relic_id: "luong-tu", ornaments: "Keel", planar_id: "keel", path: "Hư Vô", element: "Lượng Tử", lightCone: "Mưa Không Ngớt", stats: "Chính xác > Tốc độ" },
    "welt": { name: "Welt", relics: "Tiên Phong", relic_id: "tien-phong", ornaments: "Salsotto", planar_id: "salsotto", path: "Hư Vô", element: "Số Ảo", lightCone: "Nhân Danh", stats: "Crit > Chính xác" },
    "pela": { name: "Pela", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel Gãy", planar_id: "keel", path: "Hư Vô", element: "Băng", lightCone: "Chúc Ngủ Ngon", stats: "Chính xác > Tốc độ" },
    "guinaifen": { name: "Guinaifen", relics: "Tù Nhân", relic_id: "tu-nhan", ornaments: "Trạm Phong Ấn", planar_id: "tram-phong-an", path: "Hư Vô", element: "Hỏa", lightCone: "Chúc Ngủ Ngon", stats: "Chính xác > Công %" },
    "sampo": { name: "Sampo", relics: "Tù Nhân", relic_id: "tu-nhan", ornaments: "Trạm Phong Ấn", planar_id: "tram-phong-an", path: "Hư Vô", element: "Phong", lightCone: "Mắt Con Mồi", stats: "Chính xác > Công %" },
    "luka": { name: "Luka", relics: "Võ Sĩ", relic_id: "dai-cong-tuoc", ornaments: "Trạm Phong Ấn", planar_id: "tram-phong-an", path: "Hư Vô", element: "Vật Lý", lightCone: "Chúc Ngủ Ngon", stats: "Công % > Chính xác" },
    "cipher": { name: "Cipher", relics: "Tiên Phong", relic_id: "tien-phong", ornaments: "Keel Gãy", planar_id: "keel", path: "Hư Vô", element: "Số Ảo", lightCone: "Mật Mã", stats: "Chính xác > Tốc độ" },

    // --- HỦY DIỆT (DESTRUCTION) ---
    "firefly": { name: "Firefly", relics: "Thiết Kỵ", relic_id: "thiet-ky", ornaments: "Kalpagni", planar_id: "kalpagni", path: "Hủy Diệt", element: "Hỏa", lightCone: "Ước Nguyện Xa Vời", stats: "Kích phá > Tốc độ" },
    "dan-heng-il": { name: "Dan Heng IL", relics: "Phế Tích", relic_id: "luong-tu", ornaments: "Đấu Trường", planar_id: "dau-truong", path: "Hủy Diệt", element: "Số Ảo", lightCone: "Rực Rỡ", stats: "Crit Rate > Crit DMG" },
    "jingliu": { name: "Jingliu", relics: "Thợ Săn Tuyết", relic_id: "luong-tu", ornaments: "Đấu Trường", planar_id: "dau-truong", path: "Hủy Diệt", element: "Băng", lightCone: "Thân Này", stats: "Crit DMG > Tốc độ" },
    "blade": { name: "Blade", relics: "Môn Đệ", relic_id: "tin-su", ornaments: "Salsotto", planar_id: "salsotto", path: "Hủy Diệt", element: "Phong", lightCone: "Bến Đỗ", stats: "HP% > Crit Rate" },
    "yunli": { name: "Yunli", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Hủy Diệt", element: "Vật Lý", lightCone: "Múa Trình Diễn", stats: "Crit Rate > Crit DMG" },
    "clara": { name: "Clara", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Hủy Diệt", element: "Vật Lý", lightCone: "Bến Đỗ", stats: "Công % > Crit" },
    "misha": { name: "Misha", relics: "Tiên Phong", relic_id: "tien-phong", ornaments: "Salsotto", planar_id: "salsotto", path: "Hủy Diệt", element: "Băng", lightCone: "Bến Đỗ", stats: "Crit DMG > Crit Rate" },
    "xueyi": { name: "Xueyi", relics: "Thiết Kỵ", relic_id: "thiet-ky", ornaments: "Talia", planar_id: "talia", path: "Hủy Diệt", element: "Lượng Tử", lightCone: "Aeon", stats: "Kích phá > Crit" },
    "phainon": { name: "Phainon", relics: "Di Vật Lâu Đài", relic_id: "luong-tu", ornaments: "Salsotto", planar_id: "salsotto", path: "Hủy Diệt", element: "Hỏa", lightCone: "Mặt Trời Mọc", stats: "Crit Rate > Công %" },
    "saber": { name: "Saber (Collab)", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Hủy Diệt", element: "Số Ảo", lightCone: "Thanh Kiếm Thề", stats: "Crit DMG > Tốc độ" },
    "arlan": { name: "Arlan", relics: "Ban Nhạc Sấm", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Hủy Diệt", element: "Lôi", lightCone: "Aeon", stats: "Crit Rate > Công %" },
    "hook": { name: "Hook", relics: "Thợ Rèn Lửa", relic_id: "tu-nhan", ornaments: "Salsotto", planar_id: "salsotto", path: "Hủy Diệt", element: "Hỏa", lightCone: "Bến Đỗ", stats: "Crit Rate > Công %" },

    // --- SĂN BẮN (HUNT) ---
    "feixiao": { name: "Feixiao", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Săn Bắn", element: "Phong", lightCone: "Săn Lùng", stats: "Crit Rate > Crit DMG" },
    "boothill": { name: "Boothill", relics: "Thiết Kỵ", relic_id: "thiet-ky", ornaments: "Talia", planar_id: "talia", path: "Săn Bắn", element: "Vật Lý", lightCone: "Khát Vọng", stats: "Kích phá > Tốc độ" },
    "dr-ratio": { name: "Dr. Ratio", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Săn Bắn", element: "Số Ảo", lightCone: "Rửa Tội", stats: "Crit Rate > Crit DMG" },
    "seele": { name: "Seele", relics: "Thiên Tài", relic_id: "luong-tu", ornaments: "Đấu Trường", planar_id: "dau-truong", path: "Săn Bắn", element: "Lượng Tử", lightCone: "Trong Đêm Tối", stats: "Crit Rate > Crit DMG" },
    "topaz": { name: "Topaz", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Săn Bắn", element: "Hỏa", lightCone: "Sự Phiền Não", stats: "Crit Rate > Crit DMG" },
    "march-7th-hunt": { name: "March 7th (Săn Bắn)", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Săn Bắn", element: "Số Ảo", lightCone: "Sự Rửa Tội", stats: "Crit Rate > Tốc độ" },
    "moze": { name: "Moze", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Săn Bắn", element: "Lôi", lightCone: "Ánh Sao", stats: "Crit DMG > Tốc độ" },
    "archer": { name: "Archer (Collab)", relics: "Tiên Phong", relic_id: "tien-phong", ornaments: "Salsotto", planar_id: "salsotto", path: "Săn Bắn", element: "Hỏa", lightCone: "Cung Tuyệt Diệt", stats: "Crit Rate > Tốc độ" },
    "dan-heng": { name: "Dan Heng", relics: "Chim Ưng", relic_id: "luong-tu", ornaments: "Salsotto", planar_id: "salsotto", path: "Săn Bắn", element: "Phong", lightCone: "Trong Đêm Tối", stats: "Crit Rate > Tốc độ" },
    "sushang": { name: "Sushang", relics: "Võ Sĩ", relic_id: "thiet-ky", ornaments: "Talia", planar_id: "talia", path: "Săn Bắn", element: "Vật Lý", lightCone: "Quay Trở Lại", stats: "Tốc độ > Kích phá" },
    "yanqing": { name: "Yanqing", relics: "Thợ Săn Tuyết", relic_id: "luong-tu", ornaments: "Salsotto", planar_id: "salsotto", path: "Săn Bắn", element: "Băng", lightCone: "Trong Đêm Tối", stats: "Crit DMG > Công %" },

    // --- TRI THỨC (ERUDITION) ---
    "rappa": { name: "Rappa", relics: "Thiết Kỵ", relic_id: "thiet-ky", ornaments: "Kalpagni", planar_id: "kalpagni", path: "Tri Thức", element: "Số Ảo", lightCone: "Nhẫn Chữ Khắc", stats: "Kích phá > Công %" },
    "jade": { name: "Jade", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Tri Thức", element: "Lượng Tử", lightCone: "Hy Vọng", stats: "Crit DMG > Crit Rate" },
    "argent": { name: "Argenti", relics: "Võ Sĩ", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Tri Thức", element: "Vật Lý", lightCone: "Ngay Lúc Này", stats: "Crit DMG > Công %" },
    "jing-yuan": { name: "Jing Yuan", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Tri Thức", element: "Lôi", lightCone: "Trước Bình Minh", stats: "Crit Rate > Crit DMG" },
    "himeko": { name: "Himeko", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Tri Thức", element: "Hỏa", lightCone: "Chuyến Tàu Đêm", stats: "Crit Rate > Công %" },
    "herta": { name: "Herta", relics: "Đại Công Tước", relic_id: "dai-cong-tuoc", ornaments: "Salsotto", planar_id: "salsotto", path: "Tri Thức", element: "Băng", lightCone: "Khởi Đầu", stats: "Crit Rate > Công %" },
    "serval": { name: "Serval", relics: "Tù Nhân", relic_id: "tu-nhan", ornaments: "Salsotto", planar_id: "salsotto", path: "Tri Thức", element: "Lôi", lightCone: "Trước Bình Minh", stats: "Crit Rate > Công %" },
    "qingque": { name: "Qingque", relics: "Thiên Tài", relic_id: "luong-tu", ornaments: "Đấu Trường", planar_id: "dau-truong", path: "Tri Thức", element: "Lượng Tử", lightCone: "Ngày Lành", stats: "Crit Rate > Crit DMG" },
    "anaxa": { name: "Anaxa", relics: "Tiên Phong", relic_id: "tien-phong", ornaments: "Salsotto", planar_id: "salsotto", path: "Tri Thức", element: "Số Ảo", lightCone: "Phán Quyết", stats: "Crit DMG > Công %" },

    // --- BẢO HỘ (PRESERVATION) ---
    "aventurine": { name: "Aventurine", relics: "Thánh Kỵ Sĩ", relic_id: "thanh-ky-si", ornaments: "Salsotto", planar_id: "salsotto", path: "Bảo Hộ", element: "Số Ảo", lightCone: "Công Bằng", stats: "Phòng Thủ > Crit" },
    "fu-xuan": { name: "Fu Xuan", relics: "Thánh Kỵ Sĩ", relic_id: "thanh-ky-si", ornaments: "Keel", planar_id: "keel", path: "Bảo Hộ", element: "Lượng Tử", lightCone: "Ánh Mắt", stats: "HP% > Tốc độ" },
    "gepard": { name: "Gepard", relics: "Thánh Kỵ Sĩ", relic_id: "thanh-ky-si", ornaments: "Keel", planar_id: "keel", path: "Bảo Hộ", element: "Băng", lightCone: "Chiến Thắng", stats: "Phòng Thủ > Tốc độ" },
    "trailblazer-preservation": { name: "Khai Phá (Bảo Hộ)", relics: "Thánh Kỵ Sĩ", relic_id: "thanh-ky-si", ornaments: "Keel", planar_id: "keel", path: "Bảo Hộ", element: "Hỏa", lightCone: "Xu Hướng", stats: "Phòng Thủ > HP%" },
    "dan-heng-terrae": { name: "Dan Heng - Permansor Terrae", relics: "Thánh Kỵ Sĩ", relic_id: "thanh-ky-si", ornaments: "Keel", planar_id: "keel", path: "Bảo Hộ", element: "Lôi", lightCone: "Tháp Canh", stats: "Phòng Thủ > Tốc độ" },
    "march-7th": { name: "March 7th", relics: "Thánh Kỵ Sĩ", relic_id: "thanh-ky-si", ornaments: "Keel", planar_id: "keel", path: "Bảo Hộ", element: "Băng", lightCone: "Chiến Thắng", stats: "Phòng Thủ > Tốc độ" },

    // --- TRÙ PHÚ (ABUNDANCE) ---
    "lingsha": { name: "Lingsha", relics: "Thiết Kỵ", relic_id: "thiet-ky", ornaments: "Kalpagni", planar_id: "kalpagni", path: "Trù Phú", element: "Hỏa", lightCone: "Hương Thơm", stats: "Kích phá > Tốc độ" },
    "huohuo": { name: "Huohuo", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel", planar_id: "keel", path: "Trù Phú", element: "Phong", lightCone: "Kinh Hoàng", stats: "HP% > Tốc độ" },
    "luocha": { name: "Luocha", relics: "Tín Sứ", relic_id: "tin-su", ornaments: "Keel", planar_id: "keel", path: "Trù Phú", element: "Số Ảo", lightCone: "Vọng Tưởng", stats: "Công % > Tốc độ" },
    "gallagher": { name: "Gallagher", relics: "Thiết Kỵ", relic_id: "thiet-ky", ornaments: "Kalpagni", planar_id: "kalpagni", path: "Trù Phú", element: "Hỏa", lightCone: "Cuộc Trò Chuyện", stats: "Kích phá > Tốc độ" },
    "bailu": { name: "Bailu", relics: "Lãng Khách", relic_id: "tin-su", ornaments: "Keel", planar_id: "keel", path: "Trù Phú", element: "Lôi", lightCone: "Thời Gian", stats: "HP% > Tốc độ" },
    "lynx": { name: "Lynx", relics: "Lãng Khách", relic_id: "tin-su", ornaments: "Keel", planar_id: "keel", path: "Trù Phú", element: "Lượng Tử", lightCone: "Phẫu Thuật", stats: "HP% > Tốc độ" },
    "natasha": { name: "Natasha", relics: "Lãng Khách", relic_id: "tin-su", ornaments: "Keel", planar_id: "keel", path: "Trù Phú", element: "Vật Lý", lightCone: "Phẫu Thuật", stats: "HP% > Tốc độ" },

    // --- KÝ ỨC (REMEMBRANCE - Vận mệnh mới) ---
    "cyrene": { name: "Cyrene", relics: "Di Vật Mới", relic_id: "luong-tu", ornaments: "Keel", planar_id: "keel", path: "Ký Ức", element: "Lôi", lightCone: "Ánh Sáng Cổ Đại", stats: "Tốc độ > Công %" },
    "march-7th-evernight": { name: "March 7th • Evernight", relics: "Di Vật Mới", relic_id: "luong-tu", ornaments: "Keel", planar_id: "keel", path: "Ký Ức", element: "Lượng Tử", lightCone: "Màn Đêm Vĩnh Cửu", stats: "Chính xác > Tốc độ" },
    "hyacine": { name: "Hyacine", relics: "Di Vật Mới", relic_id: "luong-tu", ornaments: "Keel", planar_id: "keel", path: "Ký Ức", element: "Phong", lightCone: "Cánh Hoa Rơi", stats: "Tốc độ > HP%" },
};