class HeadComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Get the title from the attribute or use a default
        const title = this.getAttribute('title') || 'ChatUni - AI Products';
        
        // Get the language from the parent document
        const lang = document.documentElement.lang;
        const isChinesePage = lang === 'zh';
        
        // Determine which header and footer scripts to include based on language
        const headerScript = isChinesePage ? 'components/header-cn.js' : 'components/header.js';
        const footerScript = isChinesePage ? 'components/footer-cn.js' : 'components/footer.js';
        
        // Create all the head elements
        const metaCharset = document.createElement('meta');
        metaCharset.setAttribute('charset', 'UTF-8');
        
        const metaViewport = document.createElement('meta');
        metaViewport.setAttribute('name', 'viewport');
        metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        
        const titleElement = document.createElement('title');
        titleElement.textContent = title;
        
        const materialIconsLink = document.createElement('link');
        materialIconsLink.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
        materialIconsLink.setAttribute('rel', 'stylesheet');
        
        const cssLink = document.createElement('link');
        cssLink.setAttribute('href', 'common.css');
        cssLink.setAttribute('rel', 'stylesheet');
        
        const headerScriptElement = document.createElement('script');
        headerScriptElement.setAttribute('src', headerScript);
        
        const footerScriptElement = document.createElement('script');
        footerScriptElement.setAttribute('src', footerScript);
        
        const commonScriptElement = document.createElement('script');
        commonScriptElement.setAttribute('src', 'components/common.js');
        
        // Append all elements to the document head
        // Meta charset must be first for proper encoding
        document.head.insertBefore(metaCharset, document.head.firstChild);
        
        // Append the rest of the elements
        document.head.appendChild(metaViewport);
        document.head.appendChild(titleElement);
        document.head.appendChild(materialIconsLink);
        document.head.appendChild(cssLink);
        document.head.appendChild(headerScriptElement);
        document.head.appendChild(footerScriptElement);
        document.head.appendChild(commonScriptElement);
    }
}

// Define the custom element
customElements.define('chat-head', HeadComponent);
