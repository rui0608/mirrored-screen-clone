
import { FC } from "react";
import "../styles/styles.css";

const Company: FC = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">運営会社</h1>
      </header>

      {/* Main Content */}
      <main className="main-content company-content">
        <div className="company-info-content">
          <p>・運営会社 一般社団法人地域創生振興団</p>
          <p>・住所 東京都港区南青山2丁目2番15号WIN青山531</p>
          <p>・代表理事　尾上 治一 （日本PTA元会長・第7,8期中央審議会委員）</p>
          <p>・設立　令和3年3月3日</p>
          <p>・設立趣旨</p>
          <p className="company-paragraph">公益社団法人日本PTA全国協議会様（会員数：約750万世帯）と業務委託・包括的協定を締結することにより、協議会・連合PTAとの連携を強化するために各収益事業などを行う。</p>
          <p className="company-paragraph">また、全国のPTA活動や学校を支援し、社会教育および生涯教育の一助を担い、児童・生徒の健全育成のためのPTA活動の充実および学校支援を行う。</p>
          <p>・事業内容</p>
          <p>１・公益社団法人日本PTA全国協議会、府省庁、社会教育団体などとの連携、協議による収益事業</p>
          <p>２・取諾によるPTAなどの活動支援</p>
          <p className="company-indent">（全国協議会、各ブロック協議会、都道府県・政令市PTA連合会・協議会・区市町村PTA・単位PTA）</p>
          <p>・システム開発・運用サポート</p>
          <p>株式会社ワンリーリステッド</p>
          <p>・お問い合わせ <a href="mailto:info@onelilisted.com" className="email-link">info@onelilisted.com</a></p>
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
          <a href="#" className="footer-link">利用規約</a>
          <a href="/company" className="footer-link">運営会社</a>
          <a href="#" className="footer-link">お問い合わせフォーム</a>
          <a href="#" className="footer-link">よくある質問</a>
          <a href="#" className="footer-link">特定商取引法に基づく表示</a>
        </nav>
        <div className="copyright">
          <p>© 2024 一般社団法人地域創生振興団 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Company;
