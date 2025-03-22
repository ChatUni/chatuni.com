/**
 * Common JavaScript functions for all pages
 */

/**
 * Switches between English and Chinese versions of the current page
 */
function switchLanguage() {
    const path = window.location.pathname;
    if (path === '/') {
        window.location.href = '/index-cn.html';
        return;
    }
    const filename = path.split('/').pop();
    if (filename.includes('-cn')) {
        window.location.href = filename.replace('-cn', '');
    } else {
        window.location.href = filename.replace('.html', '-cn.html');
    }
}

/**
 * Adds active class to current page in mobile navigation
 * This function runs when the DOM content is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const isChinesePage = currentPath.includes('-cn');
    const headerSelector = isChinesePage ? 'chat-header-cn' : 'chat-header';
    
    const header = document.querySelector(headerSelector);
    if (header) {
        const mobileNavLinks = header.shadowRoot.querySelectorAll('.mobile-nav a');
        mobileNavLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath.split('/').pop()) {
                link.classList.add('active');
            }
        });
    }
});
