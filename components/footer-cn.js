class FooterCN extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .footer {
                    background-color: #f5f5f7;
                    padding: 22px 0 34px 0;
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
                    <div class="copyright">版权所有 © 2025 Gaia AI Lab. 保留所有权利。</div>
                    <div class="footer-links">
                        <a href="https://docs.google.com/document/d/1b4zyFaPIWoeURpoPQa-Mg4EFmTTxI-1Y/edit?usp=sharing&ouid=100757965655395420222&rtpof=true&sd=true">隐私政策</a>
                        <span class="separator">|</span>
                        <a href="#">Cookie 使用</a>
                        <span class="separator">|</span>
                        <a href="#">使用条款</a>
                        <span class="separator">|</span>
                        <a href="#">销售与退款</a>
                        <span class="separator">|</span>
                        <a href="#">法律信息</a>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('chat-footer-cn', FooterCN);