// Đọc các giá trị từ file .env (trong môi trường thực tế, cần sử dụng backend để đọc .env)
// Ở đây tạm thời hard-code các giá trị từ .env để demo

const CONFIG = {
    // Các hệ số tính lương 2025
    LUONG_CO_SO: 2340000,
    GIAM_TRU_BAN_THAN: 11000000,
    GIAM_TRU_NGUOI_PHU_THUOC: 4400000,

    // Lương tối thiểu vùng
    LUONG_TOI_THIEU_VUNG: {
        1: 4960000,
        2: 4410000,
        3: 3860000,
        4: 3450000
    },

    // Tỷ lệ đóng bảo hiểm NHÂN VIÊN (%)
    TY_LE_BHXH: 8,
    TY_LE_BHYT: 1.5,
    TY_LE_BHTN: 1,

    // Tỷ lệ đóng bảo hiểm CÔNG TY (%)
    TY_LE_BHXH_CONG_TY: 17,
    TY_LE_BHYT_CONG_TY: 3,
    TY_LE_BHTN_CONG_TY: 1,
    TY_LE_BHTNLD_BNN_CONG_TY: 0.5, // Bảo hiểm Tai nạn lao động - Bệnh nghề nghiệp

    // Mức lương đóng BHXH tối đa (20 lần lương cơ sở)
    LUONG_DONG_BHXH_TOI_DA: 46800000,

    // Bậc thuế TNCN
    BAC_THUE: [
        { min: 0, max: 5000000, tyLe: 5 },
        { min: 5000000, max: 10000000, tyLe: 10 },
        { min: 10000000, max: 18000000, tyLe: 15 },
        { min: 18000000, max: 32000000, tyLe: 20 },
        { min: 32000000, max: 52000000, tyLe: 25 },
        { min: 52000000, max: 80000000, tyLe: 30 },
        { min: 80000000, max: Infinity, tyLe: 35 }
    ],

    // Tỷ lệ tính thuế cho tiền thuê nhà
    TY_LE_THUE_NHA: 15
};

// Hiển thị các giá trị config lên UI
document.addEventListener('DOMContentLoaded', function() {
    // Update config values
    document.getElementById('luongCoSo').textContent = formatCurrency(CONFIG.LUONG_CO_SO);
    document.getElementById('giamTruBanThan').textContent = formatCurrency(CONFIG.GIAM_TRU_BAN_THAN);
    document.getElementById('giamTruNguoiPhuThuoc').textContent = formatCurrency(CONFIG.GIAM_TRU_NGUOI_PHU_THUOC);
    
    // Update year dynamically
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#currentYear, #footerYear');
    yearElements.forEach(element => {
        if (element) {
            element.textContent = currentYear;
        }
    });
});

function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

