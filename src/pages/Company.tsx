
import { FC } from "react";
import "../styles/styles.css";

const Company: FC = () => {
  return (
    <div className="app-container min-h-screen relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
        {/* Header Section */}
        <header className="header w-full text-center">
          <h1 className="header-title text-center">運営会社</h1>
        </header>

        {/* Main Content */}
        <main className="main-content company-content text-center w-full">
          <div className="company-info-content">
            <p>・会社名 株式会社ワンリーリステッド</p>
            <p>・住所 〒160-0023</p>
            <p>東京都新宿区西新宿4-31-3</p>
            <p>永谷リヴュール新宿 5階</p>
            <p>・代表者 代表取締役 橋本 一誓</p>
            <p>・設立 2022年1月18日</p>
            <p>・資本金 8,000万円</p>
            <p>・メールアドレス <a href="mailto:info@onelilisted.com" className="email-link">info@onelilisted.com</a></p>
            <p>・事業内容</p>
            <p className="company-paragraph">プラットフォーム事業、広告事業、ポイント事業、EC事業</p>
            <p className="company-paragraph">動画関連事業、その他、上記に付帯する業務</p>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="footer w-full">
          <div className="footer-logo">
            <img 
              src="/lovable-uploads/c69884b7-505f-4bc9-8df1-43e6b3b25751.png" 
              alt="ONELI LISTED" 
              className="logo-image" 
            />
          </div>
          <nav className="footer-nav">
            <a 
              href="https://onelinavi.com/privacy.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              プライバシーポリシー
            </a>
            <a href="#" className="footer-link">利用規約</a>
            <a href="/company" className="footer-link">運営会社</a>
            <a href="#" className="footer-link">お問い合わせフォーム</a>
            <a href="#" className="footer-link">よくある質問</a>
            <a href="#" className="footer-link">特定商取引法に基づく表示</a>
          </nav>
          <div className="copyright">
            <p>© 2024 株式会社ワンリーリステッド All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Company;
