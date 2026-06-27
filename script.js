// ============================================================
// MOBILE MENU TOGGLE - FIXED (HANBUGER YANA AIKI)
// ============================================================
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('open');
    }
}

// Close menu when a link is clicked
document.querySelectorAll('.mobile-menu a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        const menu = document.getElementById('mobileMenu');
        if (menu) {
            menu.classList.remove('open');
        }
    });
});

// Close menu when clicking outside (optional)
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
    const section = document.getElementById('section').value;
    const azhar = document.getElementById('azharOption').value;
    const message = document.getElementById('message').value.trim();

    if (!studentName || !parentName || !phone || !age || !section) {
        alert('Please fill in all required fields (marked with *).');
        return;
    }

    const waMessage = '📌 *New Enrollment Request* 📌\n\n' +
        '👤 *Student Name:* ' + studentName + '\n' +
        '👨‍👩‍👦 *Parent/Guardian:* ' + parentName + '\n' +
        '📞 *Phone:* ' + phone + '\n' +
        '📅 *Age:* ' + age + '\n' +
        '🏫 *Section:* ' + section + '\n' +
        '🎓 *Program:* ' + azhar + '\n' +
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
// GALLERY MARQUEE — FIXED (galary-1.jpg to galary-12.jpg)
// ============================================================
(function initGallery() {
    var track = document.getElementById('marqueeTrack');
    if (!track) return;

    var colors = [
        '#0a1a2a', '#0f2a3f', '#0a1928', '#132a4a',
        '#0b1b3a', '#1a2a3a', '#0a1525', '#152a3f',
        '#081a2a', '#1a2a4a', '#0a1a3a', '#102a3a'
    ];

    var images = [];
    for (var i = 1; i <= 12; i++) {
        var color = colors[(i - 1) % colors.length];
        images.push({
            src: 'galary-' + i + '.jpg',
            color: color,
            label: 'galary-' + i + '.jpg'
        });
    }

    var allImages = images.concat(images);

    for (var j = 0; j < allImages.length; j++) {
        var imgData = allImages[j];
        var div = document.createElement('div');
        div.className = 'gallery-img';

        var img = document.createElement('img');
        img.src = 'images/' + imgData.src;
        img.alt = 'Campus photo ' + imgData.label;

        (function(data, container) {
            img.onerror = function() {
                this.style.display = 'none';
                var placeholder = document.createElement('div');
                placeholder.className = 'placeholder';
                placeholder.style.background = data.color;
                placeholder.innerHTML = '<div class="icon">🕌</div><span>' + data.label + '</span>';
                container.appendChild(placeholder);
            };
        })(imgData, div);

        div.appendChild(img);
        track.appendChild(div);
    }
})();

// ============================================================
// SCROLL REVEAL
// ============================================================
var revealElements = document.querySelectorAll('.glass-card, .section-title, .section-desc');

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
console.log('📞 WhatsApp: +2348101562471');