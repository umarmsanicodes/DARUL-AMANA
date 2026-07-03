// ============================================================
// MOBILE MENU TOGGLE
// ============================================================
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('open');
    }
}

document.querySelectorAll('.mobile-menu a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        const menu = document.getElementById('mobileMenu');
        if (menu) {
            menu.classList.remove('open');
        }
    });
});

document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburgerBtn');
    if (menu && menu.classList.contains('open')) {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.remove('open');
        }
    }
});

// ============================================================
// ENROLL FORM — SEND TO WHATSAPP
// ============================================================
document.getElementById('enrollForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const studentName = document.getElementById('studentName').value.trim();
    const parentName = document.getElementById('parentName').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();
    const age = document.getElementById('studentAge').value.trim();
    const country = document.getElementById('country').value.trim();
    const stateProvince = document.getElementById('stateProvince').value.trim();
    const section = document.getElementById('section').value;
    const message = document.getElementById('message').value.trim();

    const eduCheckboxes = document.querySelectorAll('input[name="education"]:checked');
    const educationLevels = Array.from(eduCheckboxes).map(cb => cb.value).join(', ') || 'Not specified';

    if (!studentName || !parentName || !phone || !age || !country || !stateProvince || !section) {
        alert('Please fill in all required fields (marked with *).');
        return;
    }

    const waMessage = '📌 *New Enrollment Request* 📌\n\n' +
        '👤 *Student Name:* ' + studentName + '\n' +
        '👨‍👩‍👦 *Parent/Guardian:* ' + parentName + '\n' +
        '📞 *Phone:* ' + phone + '\n' +
        '📅 *Age:* ' + age + '\n' +
        '🌍 *Country:* ' + country + '\n' +
        '📍 *State/Province:* ' + stateProvince + '\n' +
        '🏫 *Section:* ' + section + '\n' +
        '📚 *Education Level(s):* ' + educationLevels + '\n' +
        '📝 *Message:* ' + (message || 'N/A') + '\n\n' +
        'Sent from DARUL-AMANA WAL IHSAN website.';

    const encoded = encodeURIComponent(waMessage);
    const whatsappURL = 'https://wa.me/2348101562471?text=' + encoded;

    const btn = document.getElementById('submitBtn');
    btn.textContent = '⏳ Sending...';
    btn.classList.add('loading');

    window.open(whatsappURL, '_blank');

    setTimeout(function() {
        btn.textContent = '✅ Sent! Redirecting...';
        setTimeout(function() {
            btn.textContent = 'Apply Now →';
            btn.classList.remove('loading');
        }, 2000);
    }, 1000);

    setTimeout(function() {
        document.getElementById('enrollForm').reset();
    }, 3000);
});

// ============================================================
// SCROLL REVEAL
// ============================================================
var revealElements = document.querySelectorAll(
    '.glass-card, .section-title, .section-desc, .rule-card, .resp-card');

var revealObserver = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    }
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

for (var k = 0; k < revealElements.length; k++) {
    var el = revealElements[k];
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
}

var heroContent = document.querySelector('.hero-content');
if (heroContent) {
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
}

console.log('✅ DARUL-AMANA WAL IHSAN loaded successfully!');
console.log('📞 WhatsApp: +201229403525');