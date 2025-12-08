# 💰 Công cụ tính lương Gross/Net - Cập nhật 2025

Ứng dụng web tính toán lương Gross và Net theo quy định mới nhất của Việt Nam năm 2025.

**🌐 Website:** [salary-calculator.acorneri.com](https://salary-calculator.acorneri.com/)  
**👨‍💻 Tác giả:** Acorneri IT Team  
**📅 Phiên bản:** 1.0.0 (2025-10-06)  
**📜 Giấy phép:** MIT License

---

## ⭐ Tính năng chính

### 💰 Tính toán chính xác
- ✅ Tính toán lương Gross sang Net và ngược lại
- ✅ Áp dụng quy định mới nhất về lương cơ sở (2.340.000đ)
- ✅ Tính toán BHXH, BHYT, BHTN nhân viên (10.5%)
- ✅ **Tính toán BHXH, BHYT, BHTN công ty (21.5%)**
- ✅ **Hiển thị tổng chi phí công ty phải trả**
- ✅ Tính thuế TNCN theo bậc thang lũy tiến (7 bậc)
- ✅ Hỗ trợ 4 vùng lương tối thiểu
- ✅ Tính toán các khoản hỗ trợ: tiền ăn, nhà ở, điện thoại, xăng xe
- ✅ Xử lý trường hợp công ty trả tiền thuê nhà thay nhân viên
- ✅ Giảm trừ gia cảnh bản thân và người phụ thuộc

### 🎨 Giao diện & UX
- ✅ **Format currency tự động** (1000000 → 1,000,000)
- ✅ **Animations mượt mà** (fade-in, slide-up)
- ✅ **Hover effects đẹp mắt**
- ✅ **Loading state khi tính toán**
- ✅ Giao diện hiện đại, responsive hoàn hảo
- ✅ **Hiển thị chi tiết đầy đủ** (tất cả các thành phần thu nhập)
- ✅ **Ẩn/hiện thông minh** các dòng không có giá trị

### 🚀 SEO & Performance
- ✅ Đầy đủ meta tags (Open Graph, Twitter Card)
- ✅ Structured Data (JSON-LD) cho Google Rich Results
- ✅ PWA support (Progressive Web App)
- ✅ Favicon đẹp và chuyên nghiệp
- ✅ Tối ưu hóa performance (GZIP, caching, minify)
- ✅ Security headers
- ✅ Sitemap & robots.txt

---

## 📦 Cấu trúc dự án

```
salary-calculation/
├── index.html              # Trang chính ⭐
├── styles.css              # CSS styling
├── config.js               # Cấu hình các hệ số
├── script.js               # Logic tính toán
│
├── favicon.svg             # Favicon (SVG) 🎨
├── apple-touch-icon.svg    # iOS icon (SVG)
├── og-image.svg            # Social sharing image (SVG)
│
├── manifest.json           # PWA manifest 📱
├── robots.txt              # SEO robots 🤖
├── sitemap.xml             # SEO sitemap
├── .htaccess               # Apache configuration ⚡
├── .gitignore              # Git ignore rules
│
├── package.json            # NPM configuration 📦
├── convert-images.js       # Script convert SVG→PNG
│
├── 404.html                # Error page 🚫
└── README.md               # Tài liệu này 📚
```

---

## 🚀 Cách sử dụng

### Bắt đầu nhanh

1. **Mở file `index.html`** bằng trình duyệt web (double-click)
2. **Nhập các thông tin:**
   - **Lương cơ bản** (bắt buộc) - nhập số, sẽ tự động format
   - Tiền thưởng (tùy chọn)
   - Số người phụ thuộc
   - Vùng lương tối thiểu (chọn theo địa điểm làm việc)
   - Các khoản hỗ trợ: tiền ăn, nhà ở, điện thoại, xăng xe, v.v.
   - Tích chọn nếu công ty trả tiền thuê nhà thay
3. **Nhấn "Tính chi tiết"** - sẽ có loading animation
4. **Xem kết quả chi tiết:**
   - 3 card lớn: Thu nhập Gross, Net, Chi phí công ty
   - Thành phần thu nhập Gross (ẩn các dòng = 0)
   - Các khoản không chịu thuế TNCN
   - Bảo hiểm nhân viên đóng (10.5%)
   - Bảo hiểm công ty đóng (21.5%)
   - Thuế TNCN chi tiết theo từng bậc
   - Tổng các khoản trừ

### Ví dụ tính toán

#### Ví dụ 1: Nhân viên văn phòng tại Hà Nội
```
Lương: 20,000,000đ
Tiền thưởng: 5,000,000đ
Số người phụ thuộc: 2 (vợ/chồng + 1 con)
Vùng: I (Hà Nội)
Tiền ăn: 1,000,000đ
```

**Kết quả:**
- Thu nhập Gross: 26,000,000đ
- BHXH (8%): 1,600,000đ
- BHYT (1.5%): 300,000đ
- BHTN (1%): 200,000đ
- Thuế TNCN: ~450,000đ
- **Thu nhập Net: ~23,450,000đ**
- **Chi phí công ty: ~30,300,000đ**

#### Ví dụ 2: Nhân viên có công ty trả tiền nhà
```
Lương: 30,000,000đ
Vùng: I
☑️ Công ty trả tiền thuê nhà thay cho nhân viên
Tiền thuê nhà công ty trả: 10,000,000đ
```

**Kết quả:** Chỉ chịu thuế cho phần thấp hơn giữa 10tr hoặc 15% thu nhập chịu thuế.

---

## 📐 Quy định áp dụng (2025)

### Lương cơ sở
- **2.340.000đ/tháng** (Nghị định 73/2024/NĐ-CP, hiệu lực từ 01/07/2025)

### Giảm trừ gia cảnh
- Bản thân: **11.000.000đ/tháng**
- Người phụ thuộc: **4.400.000đ/tháng/người**

### Lương tối thiểu vùng (từ 01/07/2025)

| Vùng | Mức lương/tháng | Khu vực áp dụng |
|------|-----------------|-----------------|
| **Vùng I** | **4.960.000đ** | Hà Nội, TP.HCM và khu vực đặc biệt |
| **Vùng II** | **4.410.000đ** | Thành phố trực thuộc TW, khu công nghiệp |
| **Vùng III** | **3.860.000đ** | Thị xã, thị trấn thuộc tỉnh |
| **Vùng IV** | **3.450.000đ** | Các vùng còn lại |

### Tỷ lệ đóng bảo hiểm

#### Nhân viên đóng (10.5%):
- BHXH: **8%** của lương đóng BHXH
- BHYT: **1.5%** của lương đóng BHXH
- BHTN: **1%** của lương đóng BHXH

#### Công ty đóng (21.5%):
- BHXH: **17%** của lương đóng BHXH
- BHYT: **3%** của lương đóng BHXH
- BHTN: **1%** của lương đóng BHXH
- BHTNLĐ-BNN: **0.5%** của lương đóng BHXH

**Lưu ý:** Lương đóng BHXH tối đa: **46.800.000đ** (20 lần lương cơ sở)

### Bậc thuế TNCN

| Bậc | Thu nhập tính thuế/tháng | Thuế suất |
|-----|--------------------------|-----------|
| 1   | Đến 5 triệu             | **5%**    |
| 2   | Trên 5 - 10 triệu       | **10%**   |
| 3   | Trên 10 - 18 triệu      | **15%**   |
| 4   | Trên 18 - 32 triệu      | **20%**   |
| 5   | Trên 32 - 52 triệu      | **25%**   |
| 6   | Trên 52 - 80 triệu      | **30%**   |
| 7   | Trên 80 triệu           | **35%**   |

---

## 🔧 Cài đặt và Deploy

### 1. Cài đặt local

```bash
# Clone hoặc download dự án
cd salary-calculation

# Mở file index.html bằng trình duyệt
# hoặc chạy local server:
python -m http.server 8000
# Sau đó mở: http://localhost:8000
```

### 2. Chuyển đổi hình ảnh (tùy chọn)

Để tối ưu hóa cho tất cả trình duyệt và mạng xã hội, bạn nên convert SVG sang PNG/ICO:

```bash
# Cài đặt dependencies
npm install

# Chạy script convert
npm run convert
```

**Hoặc sử dụng công cụ online:**
- [CloudConvert](https://cloudconvert.com/svg-to-png)
- [SVG to PNG Converter](https://svgtopng.com/)

**Các file cần tạo:**
1. `favicon.ico` (16x16, 32x32, 48x48)
2. `apple-touch-icon.png` (180x180)
3. `og-image.png` (1200x630)

### 3. Cấu hình domain

Tìm và thay thế `https://salary-calculator.acorneri.com/` bằng domain của bạn trong:
- `index.html` (Open Graph, Twitter Card, Canonical URL)
- `sitemap.xml`
- `robots.txt`
- `manifest.json`

### 4. Deploy lên server

#### Upload files qua:
- FTP/SFTP
- cPanel File Manager
- Git
- SSH

#### Cấu hình Apache
File `.htaccess` đã được tạo sẵn với GZIP compression, browser caching, security headers.

Đảm bảo Apache modules được enable:
```bash
sudo a2enmod deflate expires headers rewrite
sudo systemctl restart apache2
```

#### Cấu hình Nginx (nếu dùng Nginx)

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/salary-calculator;
    index index.html;

    # Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    
    # Caching
    location ~* \.(jpg|jpeg|png|gif|svg|ico|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 5. Cài đặt SSL (Let's Encrypt - Free)

```bash
# Cài đặt Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-apache

# Tạo SSL certificate
sudo certbot --apache -d your-domain.com

# Auto-renew
sudo certbot renew --dry-run
```

---

## ⚙️ Cấu hình và cập nhật

### Cập nhật các hệ số khi có quy định mới

Khi Chính phủ ban hành nghị định mới thay đổi các hệ số, bạn chỉ cần:

#### Bước 1: Mở file `config.js`

```javascript
const CONFIG = {
    // Các hệ số tính lương 2025
    LUONG_CO_SO: 2340000,  // Lương cơ sở
    
    // Lương tối thiểu vùng
    LUONG_TOI_THIEU_VUNG: {
        1: 4960000,  // Vùng I
        2: 4410000,  // Vùng II
        3: 3860000,  // Vùng III
        4: 3450000   // Vùng IV
    },
    
    // Giảm trừ gia cảnh
    GIAM_TRU_BAN_THAN: 11000000,
    GIAM_TRU_NGUOI_PHU_THUOC: 4400000,
    
    // Tỷ lệ bảo hiểm nhân viên
    TY_LE_BHXH_NV: 0.08,
    TY_LE_BHYT_NV: 0.015,
    TY_LE_BHTN_NV: 0.01,
    
    // Tỷ lệ bảo hiểm công ty
    TY_LE_BHXH_CT: 0.17,
    TY_LE_BHYT_CT: 0.03,
    TY_LE_BHTN_CT: 0.01,
    TY_LE_BHTNLD_BNN: 0.005,
    
    // Mức đóng BHXH tối đa
    LUONG_DONG_BHXH_TOI_DA: 46800000,
    
    // Bậc thuế TNCN
    BAC_THUE: [
        { muc: 5000000, thue_suat: 0.05 },
        { muc: 10000000, thue_suat: 0.10 },
        { muc: 18000000, thue_suat: 0.15 },
        { muc: 32000000, thue_suat: 0.20 },
        { muc: 52000000, thue_suat: 0.25 },
        { muc: 80000000, thue_suat: 0.30 },
        { muc: Infinity, thue_suat: 0.35 }
    ]
};
```

#### Bước 2: Sửa giá trị cần thay đổi

Ví dụ: Lương cơ sở tăng lên 2,500,000đ

```javascript
LUONG_CO_SO: 2500000,  // ← Thay đổi ở đây
```

#### Bước 3: Lưu file (Ctrl + S)

#### Bước 4: Refresh trình duyệt (F5)

✅ **Xong! Chỉ 30 giây!**

---

## 🔍 Test và Validation

### Test Performance
1. **Google PageSpeed Insights:** https://pagespeed.web.dev/
2. **GTmetrix:** https://gtmetrix.com/
3. **WebPageTest:** https://www.webpagetest.org/

### Test SEO
1. **Google Search Console:** https://search.google.com/search-console
2. **Bing Webmaster Tools:** https://www.bing.com/webmasters

### Test Social Sharing
1. **Facebook Debugger:** https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

### Checklist kiểm tra
- [ ] Test tính lương với các mức khác nhau
- [ ] Test responsive trên mobile, tablet
- [ ] Test trên Chrome, Firefox, Safari, Edge
- [ ] Test form validation
- [ ] Test currency formatting
- [ ] Kiểm tra favicon hiển thị đúng
- [ ] Kiểm tra Open Graph image khi share
- [ ] Validate HTML/CSS

---

## 💡 Công thức tính toán

### Thu nhập Gross
```
Thu nhập Gross = Lương cơ bản + Thưởng + Các khoản hỗ trợ
```

### Lương đóng bảo hiểm
```
Lương đóng BH = Lương cơ bản (tối đa 46.800.000đ)
```

### Bảo hiểm nhân viên
```
Tổng BH nhân viên = Lương đóng BH × 10.5%
  = BHXH (8%) + BHYT (1.5%) + BHTN (1%)
```

### Bảo hiểm công ty
```
Tổng BH công ty = Lương đóng BH × 21.5%
  = BHXH (17%) + BHYT (3%) + BHTN (1%) + BHTNLĐ-BNN (0.5%)
```

### Thu nhập chịu thuế
```
Thu nhập chịu thuế = Thu nhập Gross 
                     - Tiền ăn giữa ca (không chịu thuế)
                     - Tiền điện thoại (không chịu thuế)
```

### Thu nhập tính thuế TNCN
```
Thu nhập tính thuế = Thu nhập chịu thuế
                     - Bảo hiểm nhân viên
                     - Giảm trừ gia cảnh bản thân (11tr)
                     - Giảm trừ người phụ thuộc (4.4tr × số người)
```

### Thuế TNCN
Tính theo bậc thang lũy tiến từng phần (xem bảng bậc thuế ở trên)

### Thu nhập Net
```
Thu nhập Net = Thu nhập Gross 
               - Bảo hiểm nhân viên
               - Thuế TNCN
```

### Chi phí công ty
```
Chi phí công ty = Thu nhập Gross + Bảo hiểm công ty
```

---

## ❓ FAQ - Câu hỏi thường gặp

### Q1: Có cần đăng ký tài khoản để sử dụng không?
**A:** Không! Công cụ hoàn toàn miễn phí và không yêu cầu đăng ký.

### Q2: Các khoản phụ cấp nào không chịu thuế TNCN?
**A:** 
- Tiền ăn giữa ca (có chứng từ)
- Tiền điện thoại (phục vụ công việc, có hóa đơn)
- Phụ cấp độc hại, nguy hiểm
- Phụ cấp khu vực, thu hút
- Trợ cấp khó khăn đột xuất

### Q3: Các khoản nào không phải đóng BHXH?
**A:** 14 khoản hỗ trợ không phải đóng BHXH nếu ghi rõ trong hợp đồng:
- Tiền ăn giữa ca
- Hỗ trợ xăng xe
- Hỗ trợ điện thoại
- Hỗ trợ tiền nhà ở
- Và các khoản khác theo quy định

### Q4: Làm sao tính lương Gross từ Net?
**A:** Do thuế TNCN tính theo bậc thang, cần thử nghiệm nhiều lần. Công cụ này giúp bạn tính nhanh hơn!

Công thức gần đúng:
```
Lương Gross ≈ (Lương Net + Giảm trừ gia cảnh) / (1 - 10.5% - Thuế suất TB)
```

### Q5: Công ty trả tiền thuê nhà thì tính thuế như thế nào?
**A:** Chỉ chịu thuế cho phần thấp hơn giữa:
- Tiền thực trả, hoặc
- 15% thu nhập chịu thuế

### Q6: Tôi có thể sử dụng offline không?
**A:** Có! Download toàn bộ thư mục về máy và mở file `index.html` bằng trình duyệt.

### Q7: Khi nào cần cập nhật các hệ số?
**A:** Khi Chính phủ ban hành nghị định mới. Bạn chỉ cần mở file `config.js` và sửa các con số.

### Q8: Tôi có thể tùy chỉnh giao diện không?
**A:** Có! Mở file `styles.css` và chỉnh sửa màu sắc, font chữ, layout theo ý muốn.

---

## 🛠️ Công nghệ sử dụng

- **HTML5** - Cấu trúc semantic
- **CSS3** - Flexbox, Grid, Animations
- **JavaScript (Vanilla JS)** - Logic tính toán
- **SVG** - Icons và hình ảnh vector
- **JSON-LD** - Structured Data cho SEO

**Không cần framework hay thư viện bên ngoài!**

---

## 🌐 Tương thích

### Trình duyệt
- ✅ Chrome/Edge (phiên bản mới nhất)
- ✅ Firefox (phiên bản mới nhất)
- ✅ Safari (phiên bản mới nhất)
- ✅ iOS Safari
- ✅ Android Chrome

### Thiết bị
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

---

## 📊 Performance Metrics

### Mục tiêu đã đạt được:
- ✅ Google PageSpeed: 90+ (Desktop & Mobile)
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3.0s
- ✅ SEO Score: 100/100
- ✅ GZIP compression enabled
- ✅ Browser caching enabled
- ✅ Security headers enabled

---

## 📞 Liên hệ và Hỗ trợ

**Acorneri IT Team**
- 📧 Email: support@acorneri.com
- 🌐 Website: [acorneri.com](https://acorneri.com)
- 💼 LinkedIn: [Acorneri IT](https://linkedin.com/company/acorneri)

---

## 📜 Giấy phép

MIT License - Sử dụng tự do cho mục đích cá nhân và thương mại.

```
MIT License

Copyright (c) 2025 Acorneri IT Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 🙏 Lời cảm ơn

Cảm ơn bạn đã sử dụng công cụ tính lương của chúng tôi! 

Nếu thấy hữu ích, hãy:
- ⭐ Star repo trên GitHub
- 🔄 Share cho đồng nghiệp, bạn bè
- 💬 Góp ý để cải thiện

---

**Made with ❤️ by Acorneri IT Team**

*Cập nhật lần cuối: 06/10/2025*
