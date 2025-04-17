
import { FC } from "react";
import "../styles/styles.css";

const Index: FC = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">スクール残チケット</h1>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="card">
          <p className="card-text">無制限</p>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
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
          <a href="/terms" className="footer-link">利用規約</a>
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
  );
};

export default Index;
