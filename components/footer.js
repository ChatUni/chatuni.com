class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .footer {
                    background-color: #f5f5f7;
                    padding: 34px 0;
                    font-size: 12px;
                    color: #6e6e73;
                    border-top: 1px solid #d2d2d7;
                }

                .footer-content {
                    max-width: 980px;
                    margin: 0 auto;
                    padding: 0 20px;
                    text-align: center;
                }

                .copyright {
                    margin-bottom: 12px;
                }

                .footer-links {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 0;
                }

                .footer-links a {
                    color: #424245;
                    text-decoration: none;
                    padding: 0 10px;
                }

                .footer-links a:hover {
                    text-decoration: underline;
                }

                .separator {
                    color: #d2d2d7;
                    padding: 0;
                }

                @media (max-width: 734px) {
                    .footer {
                        margin-bottom: 64px;
                    }
                }
            </style>
            <footer class="footer">
                <div class="footer-content">
                    <div class="copyright">Copyright © 2025 Gaia AI Lab. All rights reserved.</div>
                    <div class="footer-links">
                        <a href="#">Privacy Policy</a>
                        <span class="separator">|</span>
                        <a href="#">Use of Cookies</a>
                        <span class="separator">|</span>
                        <a href="#">Terms of Use</a>
                        <span class="separator">|</span>
                        <a href="#">Sales and Refunds</a>
                        <span class="separator">|</span>
                        <a href="#">Legal</a>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('chat-footer', Footer);