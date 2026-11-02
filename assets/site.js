/* Shared helpers for cv.html and portfolio.html */
const $ = id => document.getElementById(id);

/* ---------- Language: ?lang=en switches to English, Vietnamese otherwise ---------- */
const LANG = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'vi';
document.documentElement.lang = LANG;
const withLang = href => LANG === 'en' ? href + (href.includes('?') ? '&' : '?') + 'lang=en' : href;

const I18N = {
    vi: {
        'nav.aria': 'Trang', 'nav.card': 'Danh thiếp', 'skip': 'Bỏ qua tới nội dung', 'switch': 'EN', 'switch.label': 'Xem bản tiếng Anh',
        'years': n => `${n}+ năm kinh nghiệm`, 'loadError': 'Không tải được dữ liệu.', 'taxId': 'MST',
        'title.cv': 'CV · Trần Tiến Đạt', 'title.portfolio': 'Portfolio · Trần Tiến Đạt',
        'cv.toolbar': 'Bản CV mới nhất, luôn cập nhật tại thuongtamduy.com/cv.html', 'cv.viewPortfolio': 'Xem portfolio', 'cv.print': 'Tải PDF',
        'cv.about': 'Giới thiệu', 'cv.experience': 'Kinh nghiệm', 'cv.capabilities': 'Năng lực chính', 'cv.skills': 'Kỹ năng',
        'cv.education': 'Học vấn', 'cv.spoken': 'Ngoại ngữ', 'cv.projects': 'Dự án tiêu biểu', 'cv.others': 'Các dự án khác', 'cv.products': 'Sản phẩm tự xây',
        'pf.tag': 'Backend cho thương mại điện tử và nền tảng SaaS', 'pf.viewProjects': 'Xem dự án', 'pf.pdf': 'Tải CV (PDF)',
        'pf.fig': 'Hình 01. Một lõi backend, nhiều kênh bán, mỗi khách hàng một database',
        'pf.figAria': 'Sơ đồ: các kênh bán đi vào một lõi backend, lõi tách dữ liệu ra database riêng của từng khách hàng',
        'pf.ch.web': 'Website', 'pf.ch.app': 'Ứng dụng', 'pf.ch.market': 'Sàn TMĐT', 'pf.ch.erp': 'ERP', 'pf.core.sub': 'một codebase', 'pf.tenants': 'mỗi khách một database',
        'pf.spec': 'Thông số',
        'pf.stat.years': 'năm làm backend', 'pf.stat.companies': 'doanh nghiệp đã gắn bó', 'pf.stat.projects': 'dự án doanh nghiệp', 'pf.stat.products': 'sản phẩm tự xây',
        'pf.caps.eyebrow': 'Tôi làm gì', 'pf.caps.h2': 'Năng lực chính', 'pf.caps.p': 'Từ phân tích nghiệp vụ đến khi hệ thống chạy ổn định trên production.',
        'pf.prod.eyebrow': 'Sản phẩm của tôi', 'pf.prod.h2': 'Tự xây, tự vận hành', 'pf.try': 'Dùng thử', 'pf.shotAlt': n => `Giao diện ${n}`,
        'pf.dia.ops': 'Quản trị nền tảng · cấp module', 'pf.dia.note': 'Mỗi tenant là một Denolith riêng, có cơ sở dữ liệu riêng',
        'pf.dia.app': 'Ứng dụng của bạn', 'pf.dia.appSmall': 'module nghiệp vụ', 'pf.dia.core': 'module hoá kiểu NestJS',
        'pf.proj.eyebrow': 'Dự án', 'pf.proj.h2': 'Dự án đã thực hiện', 'pf.proj.p': 'Những hệ thống tôi đã góp tay xây dựng cho doanh nghiệp.', 'pf.figNo': n => `Hình ${n}`,
        'pf.client': 'Khách hàng', 'pf.role': 'Vai trò', 'pf.homeAlt': n => `Trang chủ ${n}`, 'pf.open': d => `Mở ${d}`,
        'pf.others': 'Các dự án khác', 'pf.th.project': 'Dự án', 'pf.th.industry': 'Lĩnh vực', 'pf.th.site': 'Website',
        'pf.proc.eyebrow': 'Cách làm việc', 'pf.proc.h2': 'Dự án chạy như một pipeline', 'pf.proc.p': 'Mỗi dự án đi qua bốn job. Job nào chưa xanh thì job sau chưa chạy.', 'pf.outputs': 'Bàn giao', 'pf.passed': 'đạt',
        'pf.journey.eyebrow': 'Hành trình', 'pf.journey.h2': 'Nơi tôi đã làm việc',
        'pf.stack.eyebrow': 'Nền tảng kỹ thuật', 'pf.stack.h2': 'Làm việc ở mọi tầng của hệ thống', 'pf.stack.p': 'Từ hạ tầng ở dưới cùng tới AI ở trên cùng. Số bên phải là số công cụ tôi dùng ở mỗi tầng.', 'pf.count': n => `${n} công cụ`,
        'pf.edu.eyebrow': 'Nền tảng', 'pf.edu.h2': 'Học vấn và ngôn ngữ',
        'pf.contact.h2': 'Cần một backend vững cho hệ thống của bạn?', 'pf.contact.p': 'Kể tôi nghe bài toán của doanh nghiệp bạn. Tôi sẽ cùng phân tích và đề xuất hướng làm phù hợp.'
    },
    en: {
        'nav.aria': 'Pages', 'nav.card': 'Card', 'skip': 'Skip to content', 'switch': 'VI', 'switch.label': 'Xem bản tiếng Việt',
        'years': n => `${n}+ years of experience`, 'loadError': 'Could not load the data.', 'taxId': 'Tax ID',
        'title.cv': 'CV · Tran Tien Dat', 'title.portfolio': 'Portfolio · Tran Tien Dat',
        'cv.toolbar': 'Latest version, always up to date at thuongtamduy.com/cv.html?lang=en', 'cv.viewPortfolio': 'View portfolio', 'cv.print': 'Download PDF',
        'cv.about': 'Profile', 'cv.experience': 'Experience', 'cv.capabilities': 'Core strengths', 'cv.skills': 'Skills',
        'cv.education': 'Education', 'cv.spoken': 'Languages', 'cv.projects': 'Selected projects', 'cv.others': 'Other projects', 'cv.products': 'Own products',
        'pf.tag': 'Backend for e\u2011commerce and SaaS platforms', 'pf.viewProjects': 'See projects', 'pf.pdf': 'Download CV (PDF)',
        'pf.fig': 'Figure 01. One backend core, many sales channels, one database per customer',
        'pf.figAria': 'Diagram: sales channels flow into one backend core, which keeps each customer\'s data in its own database',
        'pf.ch.web': 'Website', 'pf.ch.app': 'App', 'pf.ch.market': 'Marketplaces', 'pf.ch.erp': 'ERP', 'pf.core.sub': 'one codebase', 'pf.tenants': 'one database per customer',
        'pf.spec': 'Spec sheet',
        'pf.stat.years': 'years in backend', 'pf.stat.companies': 'companies', 'pf.stat.projects': 'business projects', 'pf.stat.products': 'products I built',
        'pf.caps.eyebrow': 'What I do', 'pf.caps.h2': 'Core strengths', 'pf.caps.p': 'From business analysis to a system that runs steadily in production.',
        'pf.prod.eyebrow': 'My products', 'pf.prod.h2': 'Built and run by me', 'pf.try': 'Try', 'pf.shotAlt': n => `Screenshot of ${n}`,
        'pf.dia.ops': 'Platform admin · grants modules', 'pf.dia.note': 'Each tenant is its own Denolith with its own database',
        'pf.dia.app': 'Your application', 'pf.dia.appSmall': 'business modules', 'pf.dia.core': 'NestJS-style modules',
        'pf.proj.eyebrow': 'Projects', 'pf.proj.h2': 'Work delivered', 'pf.proj.p': 'Systems I helped build for businesses.', 'pf.figNo': n => `Fig. ${n}`,
        'pf.client': 'Client', 'pf.role': 'Role', 'pf.homeAlt': n => `${n} home page`, 'pf.open': d => `Open ${d}`,
        'pf.others': 'Other projects', 'pf.th.project': 'Project', 'pf.th.industry': 'Industry', 'pf.th.site': 'Website',
        'pf.proc.eyebrow': 'How I work', 'pf.proc.h2': 'Every project runs like a pipeline', 'pf.proc.p': 'Each project goes through four jobs. A job does not start until the one before it is green.', 'pf.outputs': 'Ships', 'pf.passed': 'passed',
        'pf.journey.eyebrow': 'Journey', 'pf.journey.h2': 'Where I have worked',
        'pf.stack.eyebrow': 'Technical foundation', 'pf.stack.h2': 'Working across every layer of the system', 'pf.stack.p': 'From infrastructure at the bottom to AI at the top. The number on the right is how many tools I use on each layer.', 'pf.count': n => `${n} tools`,
        'pf.edu.eyebrow': 'Background', 'pf.edu.h2': 'Education and languages',
        'pf.contact.h2': 'Need a solid backend for your system?', 'pf.contact.p': 'Tell me about the problem your business is facing. We will work through it together and I will propose a way forward.'
    }
};
const t = (key, ...args) => {
    const v = I18N[LANG][key] ?? I18N.vi[key] ?? key;
    return typeof v === 'function' ? v(...args) : v;
};

/* Fill the shared nav, skip link and title, and add the VI/EN switch */
function setupPage(page) {
    document.title = t('title.' + page);
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    document.querySelectorAll('a[data-keep-lang]').forEach(a => { a.href = withLang(a.getAttribute('href')); });
    const other = new URL(location.href);
    if (LANG === 'en') other.searchParams.delete('lang'); else other.searchParams.set('lang', 'en');
    const sw = Object.assign(document.createElement('a'), { className: 'lang-switch', href: other.pathname + other.search + other.hash, textContent: t('switch') });
    sw.setAttribute('aria-label', t('switch.label'));
    sw.setAttribute('hreflang', LANG === 'en' ? 'vi' : 'en');
    document.querySelector('.nav-inner')?.appendChild(sw);
}
const esc = s => String(s ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

/* Lucide-style stroke icons, plus the GitHub mark from Simple Icons (CC0) */
const ICONS = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    server: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/>',
    printer: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
    arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    right: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    db: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    sparkles: '<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',
    sliders: '<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M2 14h4"/><path d="M10 8h4"/><path d="M18 16h4"/>'
};
const GITHUB = 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12';

function icon(name, size = 18) {
    if (name === 'github') {
        return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${GITHUB}"/></svg>`;
    }
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.arrow}</svg>`;
}

const ext = url => /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : '';
const years = since => new Date().getFullYear() - since;

async function loadResume() {
    const file = LANG === 'en' ? 'resume.en.json' : 'resume.json';
    const res = await fetch(file, { cache: 'no-cache' });
    if (!res.ok) throw new Error(file + ' ' + res.status);
    return res.json();
}

function siteFooter(r) {
    return `<span>© ${new Date().getFullYear()} ${esc(r.name)}</span>
        <span><a href="./">${t('nav.card')}</a> · <a href="${withLang('cv.html')}">CV</a> · <a href="${withLang('portfolio.html')}">Portfolio</a></span>`;
}
