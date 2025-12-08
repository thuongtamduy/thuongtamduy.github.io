/**
 * Script tự động chuyển đổi SVG sang PNG/ICO
 * Yêu cầu: npm install sharp sharp-ico
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Màu sắc
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function convertImages() {
  log('\n🎨 Bắt đầu chuyển đổi hình ảnh...', 'cyan');
  
  try {
    // 1. Convert favicon to PNG (multiple sizes)
    log('\n📦 Đang chuyển đổi favicon...', 'yellow');
    
    const faviconSizes = [16, 32, 48];
    for (const size of faviconSizes) {
      await sharp('favicon.svg')
        .resize(size, size)
        .png()
        .toFile(`favicon-${size}.png`);
      log(`  ✓ Tạo favicon-${size}.png`, 'green');
    }
    
    // 2. Convert apple-touch-icon
    log('\n🍎 Đang chuyển đổi apple-touch-icon...', 'yellow');
    await sharp('apple-touch-icon.svg')
      .resize(180, 180)
      .png()
      .toFile('apple-touch-icon.png');
    log('  ✓ Tạo apple-touch-icon.png (180x180)', 'green');
    
    // 3. Convert og-image
    log('\n📱 Đang chuyển đổi og-image...', 'yellow');
    await sharp('og-image.svg')
      .resize(1200, 630)
      .png()
      .toFile('og-image.png');
    log('  ✓ Tạo og-image.png (1200x630)', 'green');
    
    // 4. Tạo favicon.ico từ PNG
    log('\n💾 Đang tạo favicon.ico...', 'yellow');
    // Note: Sharp không hỗ trợ ICO, cần dùng sharp-ico hoặc convert thủ công
    log('  ⚠ Để tạo favicon.ico, vui lòng:', 'yellow');
    log('    1. Sử dụng công cụ online: https://convertio.co/png-ico/', 'yellow');
    log('    2. Upload favicon-32.png', 'yellow');
    log('    3. Hoặc cài đặt ImageMagick và chạy:', 'yellow');
    log('       convert favicon-16.png favicon-32.png favicon-48.png favicon.ico', 'yellow');
    
    // Thống kê kích thước file
    log('\n📊 Thống kê kích thước file:', 'cyan');
    const files = [
      'favicon-16.png',
      'favicon-32.png', 
      'favicon-48.png',
      'apple-touch-icon.png',
      'og-image.png'
    ];
    
    for (const file of files) {
      if (fs.existsSync(file)) {
        const stats = fs.statSync(file);
        const sizeKB = (stats.size / 1024).toFixed(2);
        log(`  ${file}: ${sizeKB} KB`, 'green');
      }
    }
    
    log('\n✅ Chuyển đổi hoàn tất!', 'green');
    log('\n📝 Các bước tiếp theo:', 'cyan');
    log('  1. Kiểm tra chất lượng các file PNG vừa tạo', 'yellow');
    log('  2. Tối ưu hóa dung lượng tại https://tinypng.com/', 'yellow');
    log('  3. Tạo favicon.ico theo hướng dẫn ở trên', 'yellow');
    log('  4. Test sharing trên:', 'yellow');
    log('     - Facebook: https://developers.facebook.com/tools/debug/', 'yellow');
    log('     - Twitter: https://cards-dev.twitter.com/validator', 'yellow');
    log('     - LinkedIn: https://www.linkedin.com/post-inspector/', 'yellow');
    
  } catch (error) {
    log(`\n❌ Lỗi: ${error.message}`, 'red');
    log('\n💡 Hướng dẫn khắc phục:', 'yellow');
    log('  1. Cài đặt dependencies: npm install sharp', 'yellow');
    log('  2. Đảm bảo các file SVG tồn tại', 'yellow');
    log('  3. Kiểm tra quyền ghi file trong thư mục', 'yellow');
  }
}

// Kiểm tra dependencies
try {
  require('sharp');
  convertImages();
} catch (error) {
  log('\n❌ Thiếu dependencies!', 'red');
  log('\n📦 Vui lòng cài đặt:', 'yellow');
  log('  npm install sharp', 'cyan');
  log('\n💡 Sau đó chạy lại:', 'yellow');
  log('  node convert-images.js', 'cyan');
}

