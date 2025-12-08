// Currency input formatting
const currencyInputs = document.querySelectorAll('.currency-input');

currencyInputs.forEach(input => {
    input.addEventListener('input', function(e) {
        formatCurrencyInput(e.target);
    });

    input.addEventListener('focus', function(e) {
        // Remove formatting to edit
        const value = parseCurrencyValue(e.target.value);
        if (value > 0) {
            e.target.value = value;
        }
    });

    input.addEventListener('blur', function(e) {
        // Format when leaving field
        formatCurrencyInput(e.target);
    });
});

function formatCurrencyInput(input) {
    let value = input.value.replace(/[^\d]/g, '');
    if (value === '' || value === '0') {
        input.value = '';
        return;
    }
    
    const number = parseInt(value);
    input.value = number.toLocaleString('vi-VN');
}

function parseCurrencyValue(value) {
    if (!value) return 0;
    return parseInt(value.replace(/[^\d]/g, '')) || 0;
}

// Xử lý hiển thị/ẩn trường tiền thuê nhà
document.getElementById('congTyTraTienNha').addEventListener('change', function(e) {
    const tienThueNhaGroup = document.getElementById('tienThueNhaGroup');
    if (e.target.checked) {
        tienThueNhaGroup.style.display = 'block';
    } else {
        tienThueNhaGroup.style.display = 'none';
        document.getElementById('tienThueNha').value = '';
    }
});

// Hàm tính lương chính
function tinhLuong() {
    // Add loading state
    const btn = document.querySelector('.btn-calculate');
    const progressBar = document.getElementById('loadingProgress');
    
    btn.classList.add('loading');
    btn.textContent = 'Đang tính toán...';
    
    // Show progress bar
    progressBar.style.transform = 'scaleX(1)';

    setTimeout(() => {
        // Lấy dữ liệu từ form
        const luong = parseCurrencyValue(document.getElementById('luong').value);
        const tienThuong = parseCurrencyValue(document.getElementById('tienThuong').value);
        const soNguoiPhuThuoc = parseInt(document.getElementById('soNguoiPhuThuoc').value) || 0;
        const vung = document.querySelector('input[name="vung"]:checked').value;
        const tienAn = parseCurrencyValue(document.getElementById('tienAn').value);
        const tienNhaO = parseCurrencyValue(document.getElementById('tienNhaO').value);
        const tienDienThoai = parseCurrencyValue(document.getElementById('tienDienThoai').value);
        const tienXangXe = parseCurrencyValue(document.getElementById('tienXangXe').value);
        const hoTroKhac = parseCurrencyValue(document.getElementById('hoTroKhac').value);
        const congTyTraTienNha = document.getElementById('congTyTraTienNha').checked;
        const tienThueNha = congTyTraTienNha ? parseCurrencyValue(document.getElementById('tienThueNha').value) : 0;

        // Kiểm tra validation
        if (luong <= 0) {
            alert('Vui lòng nhập lương!');
            btn.classList.remove('loading');
            btn.textContent = 'Tính chi tiết';
            return;
        }

        // 1. Tính tổng thu nhập Gross
        const tongGross = luong + tienThuong + tienAn + tienNhaO + tienDienThoai + tienXangXe + hoTroKhac;

        // 2. Tính thu nhập chịu đóng BHXH
        // Theo quy định, chỉ tính trên lương cơ bản (KHÔNG tính thưởng và các khoản hỗ trợ)
        const luongDongBaoHiem = Math.min(luong, CONFIG.LUONG_DONG_BHXH_TOI_DA);

        // 3. Tính các khoản bảo hiểm NHÂN VIÊN đóng
        const bhxh = luongDongBaoHiem * CONFIG.TY_LE_BHXH / 100;
        const bhyt = luongDongBaoHiem * CONFIG.TY_LE_BHYT / 100;
        const bhtn = luongDongBaoHiem * CONFIG.TY_LE_BHTN / 100;
        const tongBaoHiem = bhxh + bhyt + bhtn;

        // 3.1 Tính các khoản bảo hiểm CÔNG TY đóng
        const bhxhCongTy = luongDongBaoHiem * CONFIG.TY_LE_BHXH_CONG_TY / 100;  // 17%
        const bhytCongTy = luongDongBaoHiem * CONFIG.TY_LE_BHYT_CONG_TY / 100;   // 3%
        const bhtnCongTy = luongDongBaoHiem * CONFIG.TY_LE_BHTN_CONG_TY / 100; // 1%
        const bhtnldBnnCongTy = luongDongBaoHiem * CONFIG.TY_LE_BHTNLD_BNN_CONG_TY / 100; // 0.5%
        const tongBaoHiemCongTy = bhxhCongTy + bhytCongTy + bhtnCongTy + bhtnldBnnCongTy;

        // 3.2 Chi phí công ty phải trả
        const chiPhiCongTy = tongGross + tongBaoHiemCongTy;

        // 4. Tính thu nhập chịu thuế TNCN
        // Thu nhập chịu thuế = Tổng thu nhập - các khoản không chịu thuế
        // Các khoản không chịu thuế: tiền ăn, tiền điện thoại
        let thuNhapChiuThue = luong + tienThuong + tienNhaO + tienXangXe + hoTroKhac;

        // Xử lý tiền thuê nhà nếu công ty trả thay
        let tienNhaChiuThue = 0;
        if (congTyTraTienNha && tienThueNha > 0) {
            // Tính thuế cho tiền thuê nhà theo quy định:
            // Chỉ chịu thuế cho phần thấp hơn giữa: tiền thực trả hoặc 15% thu nhập chịu thuế
            const thuNhapTruocTienNha = thuNhapChiuThue;
            const tyLeThueNha = thuNhapTruocTienNha * CONFIG.TY_LE_THUE_NHA / 100;
            tienNhaChiuThue = Math.min(tienThueNha, tyLeThueNha);
            thuNhapChiuThue += tienNhaChiuThue;
        }

        // 5. Tính thu nhập tính thuế (sau khi trừ bảo hiểm và giảm trừ)
        const giamTruGiaCanh = CONFIG.GIAM_TRU_BAN_THAN + (soNguoiPhuThuoc * CONFIG.GIAM_TRU_NGUOI_PHU_THUOC);
        const thuNhapTinhThue = Math.max(0, thuNhapChiuThue - tongBaoHiem - giamTruGiaCanh);

        // 6. Tính thuế TNCN theo bậc thang lũy tiến
        const { thueTNCN, chiTietThue } = tinhThueTNCN(thuNhapTinhThue);

        // 7. Tính thu nhập Net (thực nhận)
        const thuNhapNet = tongGross - tongBaoHiem - thueTNCN;

        // 8. Hiển thị kết quả
        hienThiKetQua({
            luong,
            tienThuong,
            tienAn,
            tienNhaO,
            tienDienThoai,
            tienXangXe,
            hoTroKhac,
            soNguoiPhuThuoc,
            tongGross,
            luongDongBaoHiem,
            thuNhapChiuThue,
            bhxh,
            bhyt,
            bhtn,
            tongBaoHiem,
            bhxhCongTy,
            bhytCongTy,
            bhtnCongTy,
            bhtnldBnnCongTy,
            tongBaoHiemCongTy,
            chiPhiCongTy,
            giamTruGiaCanh,
            thuNhapTinhThue,
            thueTNCN,
            thuNhapNet,
            chiTietThue
        });

        // Remove loading state
        btn.classList.remove('loading');
        btn.textContent = 'Tính chi tiết';
        
        // Hide progress bar
        setTimeout(() => {
            progressBar.style.transform = 'scaleX(0)';
        }, 300);
    }, 500); // Small delay for smooth animation
}

// Hàm tính thuế TNCN theo bậc thang lũy tiến
function tinhThueTNCN(thuNhapTinhThue) {
    let thueTNCN = 0;
    let thuNhapConLai = thuNhapTinhThue;
    const chiTietThue = [];

    for (const bac of CONFIG.BAC_THUE) {
        if (thuNhapConLai <= 0) break;

        const khoangThue = bac.max - bac.min;
        const thuNhapTrongBac = Math.min(thuNhapConLai, khoangThue);
        const thueOfBac = thuNhapTrongBac * bac.tyLe / 100;

        if (thuNhapTrongBac > 0) {
            thueTNCN += thueOfBac;
            chiTietThue.push({
                bac: CONFIG.BAC_THUE.indexOf(bac) + 1,
                thuNhap: thuNhapTrongBac,
                tyLe: bac.tyLe,
                thue: thueOfBac,
                khoang: `${formatCurrency(bac.min)} - ${bac.max === Infinity ? 'trở lên' : formatCurrency(bac.max)}`
            });
        }

        thuNhapConLai -= thuNhapTrongBac;
    }

    return { thueTNCN, chiTietThue };
}

// Hàm hiển thị kết quả
function hienThiKetQua(ketQua) {
    // Hiển thị section kết quả với animation
    const resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'block';

    // Hiển thị các giá trị chính
    document.getElementById('tongGross').textContent = formatCurrency(ketQua.tongGross);
    document.getElementById('thuNhapNet').textContent = formatCurrency(ketQua.thuNhapNet);
    document.getElementById('chiPhiCongTy').textContent = formatCurrency(ketQua.chiPhiCongTy);

    // Hiển thị thành phần thu nhập Gross
    document.getElementById('luongCoBan').textContent = formatCurrency(ketQua.luong);
    
    // Hiển thị/ẩn các row dựa trên giá trị
    toggleRow('rowTienThuong', ketQua.tienThuong);
    toggleRow('rowTienAn', ketQua.tienAn);
    toggleRow('rowTienNhaO', ketQua.tienNhaO);
    toggleRow('rowTienDienThoai', ketQua.tienDienThoai);
    toggleRow('rowTienXangXe', ketQua.tienXangXe);
    toggleRow('rowHoTroKhac', ketQua.hoTroKhac);
    
    document.getElementById('displayTienThuong').textContent = formatCurrency(ketQua.tienThuong);
    document.getElementById('displayTienAn').textContent = formatCurrency(ketQua.tienAn);
    document.getElementById('displayTienNhaO').textContent = formatCurrency(ketQua.tienNhaO);
    document.getElementById('displayTienDienThoai').textContent = formatCurrency(ketQua.tienDienThoai);
    document.getElementById('displayTienXangXe').textContent = formatCurrency(ketQua.tienXangXe);
    document.getElementById('displayHoTroKhac').textContent = formatCurrency(ketQua.hoTroKhac);

    // Các khoản không chịu thuế
    document.getElementById('khongChiuThueTienAn').textContent = formatCurrency(ketQua.tienAn);
    document.getElementById('khongChiuThueDienThoai').textContent = formatCurrency(ketQua.tienDienThoai);

    // Bảo hiểm nhân viên
    document.getElementById('luongDongBH').textContent = formatCurrency(ketQua.luongDongBaoHiem);
    document.getElementById('bhxh').textContent = formatCurrency(ketQua.bhxh);
    document.getElementById('bhyt').textContent = formatCurrency(ketQua.bhyt);
    document.getElementById('bhtn').textContent = formatCurrency(ketQua.bhtn);
    document.getElementById('tongBH').textContent = formatCurrency(ketQua.tongBaoHiem);

    // Bảo hiểm công ty
    document.getElementById('bhxhCongTy').textContent = formatCurrency(ketQua.bhxhCongTy);
    document.getElementById('bhytCongTy').textContent = formatCurrency(ketQua.bhytCongTy);
    document.getElementById('bhtnCongTy').textContent = formatCurrency(ketQua.bhtnCongTy);
    document.getElementById('bhtnldBnnCongTy').textContent = formatCurrency(ketQua.bhtnldBnnCongTy);
    document.getElementById('tongBHCongTy').textContent = formatCurrency(ketQua.tongBaoHiemCongTy);

    // Thuế TNCN
    document.getElementById('thuNhapChiuThue').textContent = formatCurrency(ketQua.thuNhapChiuThue);
    document.getElementById('giamTruBT').textContent = formatCurrency(-CONFIG.GIAM_TRU_BAN_THAN);
    
    // Giảm trừ người phụ thuộc
    const rowGiamTruPT = document.getElementById('rowGiamTruPT');
    if (ketQua.soNguoiPhuThuoc > 0) {
        rowGiamTruPT.style.display = 'flex';
        document.getElementById('soPT').textContent = ketQua.soNguoiPhuThuoc;
        document.getElementById('giamTruPT').textContent = formatCurrency(-(ketQua.soNguoiPhuThuoc * CONFIG.GIAM_TRU_NGUOI_PHU_THUOC));
    } else {
        rowGiamTruPT.style.display = 'none';
    }
    
    document.getElementById('thuNhapTinhThue').textContent = formatCurrency(ketQua.thuNhapTinhThue);
    document.getElementById('thueTNCN').textContent = formatCurrency(ketQua.thueTNCN);
    document.getElementById('tongTru').textContent = formatCurrency(ketQua.tongBaoHiem + ketQua.thueTNCN);

    // Hiển thị chi tiết bậc thuế
    const taxDetailsDiv = document.getElementById('taxDetails');
    if (ketQua.chiTietThue.length > 0) {
        document.getElementById('taxBreakdown').style.display = 'block';
        taxDetailsDiv.innerHTML = ketQua.chiTietThue.map(item => `
            <div class="tax-item animate-fade-in" style="animation-delay: ${0.1 * item.bac}s">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="font-weight: 600; color: #2d3748;">Bậc ${item.bac}: ${item.khoang}</span>
                    <span style="color: #5a67d8; font-weight: 600;">${item.tyLe}%</span>
                </div>
                <div style="display: flex; justify-content: space-between; color: #64748b; font-size: 14px;">
                    <span>Thu nhập: ${formatCurrency(item.thuNhap)}</span>
                    <span style="color: #dc2626; font-weight: 600;">Thuế: ${formatCurrency(item.thue)}</span>
                </div>
            </div>
        `).join('');
    } else {
        document.getElementById('taxBreakdown').style.display = 'block';
        taxDetailsDiv.innerHTML = '<div class="tax-item" style="text-align: center; color: #059669; font-weight: 600;">✓ Không phải đóng thuế TNCN</div>';
    }

    // Scroll xuống phần kết quả với smooth animation
    setTimeout(() => {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function toggleRow(rowId, value) {
    const row = document.getElementById(rowId);
    if (value > 0) {
        row.style.display = 'flex';
    } else {
        row.style.display = 'none';
    }
}

function formatCurrency(amount) {
    if (amount < 0) {
        return '-' + new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(Math.abs(Math.round(amount)));
    }
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(Math.round(amount));
}
