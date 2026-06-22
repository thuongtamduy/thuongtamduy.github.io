# 💰 Bộ Công Cụ Tính Lương & Quản Lý Nhân Sự (Salary & Payroll Tools)

Kho lưu trữ này cung cấp các công cụ mạnh mẽ để tính toán lương và quản lý nhân sự cho thị trường Việt Nam, cập nhật theo các quy định mới nhất năm 2025.

Dự án bao gồm hai công cụ chính:
1.  **Salary Calculator (tinhluongnhanh):** Công cụ tính lương Gross/Net nhanh chóng và chính xác.
2.  **Payroll Manager (tinhluong):** Hệ thống chấm công và quản lý bảng lương nhân viên toàn diện.

---

## 🚀 1. Salary Calculator (Công cụ tính lương nhanh)

Thư mục: [`./tinhluongnhanh/`](./tinhluongnhanh/)

Đây là một ứng dụng web hiện đại giúp bạn chuyển đổi lương Gross sang Net (và ngược lại), tính toán chi tiết các khoản bảo hiểm và thuế TNCN.

### ✨ Tính năng nổi bật
*   **Chuyển đổi Gross ↔ Net:** Tính toán hai chiều chính xác.
*   **Cập nhật quy định 2025:** Áp dụng mức lương cơ sở (2.340.000đ) và các quy định mới nhất.
*   **Chi tiết Bảo hiểm & Thuế:**
    *   Hiển thị rõ ràng mức đóng BHXH, BHYT, BHTN cho cả **Nhân viên (10.5%)** và **Công ty (21.5%)**.
    *   Tính thuế TNCN theo biểu lũy tiến từng phần.
*   **Hỗ trợ đa dạng:**
    *   Tùy chọn vùng lương tối thiểu (Vùng I, II, III, IV).
    *   Tính toán giảm trừ gia cảnh (Bản thân 11tr, Người phụ thuộc 4.4tr).
*   **Giao diện hiện đại:** Responsive, hỗ trợ PWA (cài đặt như app trên điện thoại), tối ưu SEO.

### 🛠️ Cách sử dụng
Bạn có thể chạy trực tiếp file `index.html` hoặc sử dụng một local server.

```bash
cd tinhluongnhanh
# Mở file index.html bằng trình duyệt
# Hoặc chạy server:
python -m http.server 8000
```

---

## 📊 2. Payroll Manager (Quản lý chấm công & bảng lương)

Thư mục: [`./tinhluong/`](./tinhluong/)

Một công cụ quản lý nhân sự "all-in-one" dành cho các doanh nghiệp nhỏ hoặc đội nhóm, hoạt động hoàn toàn trên trình duyệt mà không cần cài đặt backend phức tạp.

### ✨ Tính năng nổi bật
*   **Quản lý nhân viên:** Thêm, sửa, xóa, tìm kiếm nhân viên dễ dàng.
*   **Chấm công & Tính lương:**
    *   Tính lương dựa trên ngày công thực tế, ngày công chuẩn.
    *   Hỗ trợ tính lương làm thêm giờ (ngày thường, đêm, cuối tuần, lễ).
    *   Quản lý các khoản phụ cấp (ăn trưa, xăng xe, điện thoại...) và thưởng.
*   **Tính lương hàng loạt:** Tự động tính toán cho toàn bộ danh sách nhân viên chỉ với một cú click.
*   **Quản lý nghỉ phép:** Theo dõi ngày phép năm, nghỉ ốm, thai sản...
*   **Báo cáo & Thống kê:**
    *   Biểu đồ lương theo phòng ban, lịch sử lương theo tháng.
    *   Xuất báo cáo ra file **Excel** hoặc **CSV**.
    *   In phiếu lương chi tiết cho từng nhân viên.
*   **An toàn dữ liệu:**
    *   Dữ liệu được lưu trữ cục bộ trên trình duyệt (LocalStorage).
    *   Hỗ trợ **Sao lưu & Khôi phục** dữ liệu qua file JSON.
    *   Nhập dữ liệu nhân viên nhanh chóng từ file CSV.

### 🛠️ Cách sử dụng
Đơn giản chỉ cần mở file `tinhluong.html` trong trình duyệt web của bạn.

1.  Vào thư mục `tinhluong`.
2.  Mở file `tinhluong.html` (Double-click).
3.  Bắt đầu nhập liệu và quản lý!

---

## 📝 Giấy phép (License)
Dự án được phát hành dưới giấy phép **MIT License**. Bạn có thể tự do sử dụng và tùy chỉnh cho mục đích cá nhân hoặc thương mại.

---
**Phát triển bởi Acorneri IT Team**
