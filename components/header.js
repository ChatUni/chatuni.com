class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const currentPath = window.location.pathname.split('/').pop();
        this.shadowRoot.innerHTML = `
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <style>
                .nav {
                    background-color: rgba(29, 29, 31, 0.95);
                    position: fixed;
                    top: 0;
                    width: 98%;
                    height: 44px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    backdrop-filter: blur(20px);
                    z-index: 999;
                    padding: 0 16px;
                }

                .nav-logo {
                    height: 20px;
                    width: auto;
                }

                .nav ul {
                    display: flex;
                    list-style: none;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    justify-content: space-between;
                }

                .nav ul li {
                    margin: 0;
                }

                .nav ul li:not(:first-child):not(:last-child) {
                    margin: 0 20px;
                }

                .nav ul li a {
                    color: #ffffff;
                    text-decoration: none;
                    font-size: 14px;
                    opacity: 0.7;
                    transition: opacity 0.3s;
                    display: flex;
                    align-items: center;
                }

                .nav ul li a:hover,
                .nav ul li a.active {
                    opacity: 1;
                }

                .lang-switch {
                    cursor: pointer;
                    opacity: 0.7;
                    transition: opacity 0.3s;
                    font-size: 14px;
                    color: #ffffff;
                    padding: 10px 0;
                }

                .lang-switch:hover {
                    opacity: 1;
                }

                .mobile-nav {
                    display: none;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    height: 64px;
                    background-color: rgba(29, 29, 31, 0.95);
                    backdrop-filter: blur(20px);
                    z-index: 999;
                    padding: 8px 0 4px;
                }

                .mobile-nav ul {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    height: 100%;
                    list-style: none;
                    margin: 0;
                    padding: 0 16px;
                }

                .mobile-nav a {
                    color: #ffffff;
                    text-decoration: none;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    opacity: 0.7;
                    transition: opacity 0.3s;
                    font-size: 11px;
                    padding: 4px 12px;
                }

                .mobile-nav a:hover,
                .mobile-nav a.active {
                    opacity: 1;
                }

                .mobile-nav .material-icons {
                    font-size: 24px;
                    margin-bottom: 2px;
                }

                @media (max-width: 734px) {
                    .nav {
                        width: 94%;
                    }

                    .nav ul li:not(:first-child):not(:last-child) {
                        display: none;
                    }
                    
                    .mobile-nav {
                        display: block;
                    }
                }
            </style>
            <nav class="nav">
                <ul>
                    <li><a href="index.html"><img src="assets/chatuni.svg" alt="ChatUni Logo" class="nav-logo"></a></li>
                    <li><a href="index.html" class="${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">Home</a></li>
                    <li><a href="glasses.html" class="${currentPath === 'glasses.html' ? 'active' : ''}">AI Glasses</a></li>
                    <li><a href="watch.html" class="${currentPath === 'watch.html' ? 'active' : ''}">AI Watch</a></li>
                    <li><a href="earphones.html" class="${currentPath === 'earphones.html' ? 'active' : ''}">AI Earphones</a></li>
                    <li><a href="toy.html" class="${currentPath === 'toy.html' ? 'active' : ''}">AI Plush Toy</a></li>
                    <li><a href="agent.html" class="${currentPath === 'agent.html' ? 'active' : ''}">AI Agent Store</a></li>
                    <li><a href="https://en.ChatUni.com.cn">AI Tutors</a></li>
                    <li><span class="lang-switch" onclick="switchLanguage()">中文</span></li>
                </ul>
            </nav>
            <nav class="mobile-nav">
                <ul>
                    <li>
                        <a href="index.html" class="${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">
                            <span class="material-icons">home</span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="glasses.html" class="${currentPath === 'glasses.html' ? 'active' : ''}">
                            <span class="material-icons">visibility</span>
                            Glasses
                        </a>
                    </li>
                    <li>
                        <a href="watch.html" class="${currentPath === 'watch.html' ? 'active' : ''}">
                            <span class="material-icons">watch</span>
                            Watch
                        </a>
                    </li>
                    <li>
                        <a href="earphones.html" class="${currentPath === 'earphones.html' ? 'active' : ''}">
                            <span class="material-icons">headphones</span>
                            Earphones
                        </a>
                    </li>
                    <li>
                        <a href="toy.html" class="${currentPath === 'toy.html' ? 'active' : ''}">
                            <span class="material-icons">smart_toy</span>
                            Toy
                        </a>
                    </li>
                    <li>
                        <a href="agent.html" class="${currentPath === 'agent.html' ? 'active' : ''}">
                            <span class="material-icons">support_agent</span>
                            Agent
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('chat-header', Header);