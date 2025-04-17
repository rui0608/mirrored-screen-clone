
import { FC } from "react";
import "../styles/styles.css";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Mail, Calendar, DollarSign, MapPin, User } from "lucide-react";

const Company: FC = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">運営会社</h1>
      </header>

      {/* Main Content */}
      <main className="main-content company-content flex items-center justify-center min-h-[calc(100vh-240px)] py-8">
        <Card className="company-card w-full max-w-3xl mx-auto shadow-md">
          <CardContent className="p-6">
            <div className="company-info-content space-y-6">
              <div className="info-row flex items-start">
                <div className="info-icon mr-3 mt-1">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div className="info-content">
                  <h3 className="info-label text-sm font-medium text-muted-foreground mb-1">会社名</h3>
                  <p className="text-base">株式会社ワンリーリステッド</p>
                </div>
              </div>

              <div className="info-row flex items-start">
                <div className="info-icon mr-3 mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="info-content">
                  <h3 className="info-label text-sm font-medium text-muted-foreground mb-1">住所</h3>
                  <p className="text-base">〒160-0023</p>
                  <p className="text-base ml-0">東京都新宿区西新宿4-31-3</p>
                  <p className="text-base ml-0">永谷リヴュール新宿 5階</p>
                </div>
              </div>

              <div className="info-row flex items-start">
                <div className="info-icon mr-3 mt-1">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div className="info-content">
                  <h3 className="info-label text-sm font-medium text-muted-foreground mb-1">代表者</h3>
                  <p className="text-base">代表取締役 橋本 一誓</p>
                </div>
              </div>

              <div className="info-row flex items-start">
                <div className="info-icon mr-3 mt-1">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="info-content">
                  <h3 className="info-label text-sm font-medium text-muted-foreground mb-1">設立</h3>
                  <p className="text-base">2022年1月18日</p>
                </div>
              </div>

              <div className="info-row flex items-start">
                <div className="info-icon mr-3 mt-1">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div className="info-content">
                  <h3 className="info-label text-sm font-medium text-muted-foreground mb-1">資本金</h3>
                  <p className="text-base">8,000万円</p>
                </div>
              </div>

              <div className="info-row flex items-start">
                <div className="info-icon mr-3 mt-1">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="info-content">
                  <h3 className="info-label text-sm font-medium text-muted-foreground mb-1">メールアドレス</h3>
                  <p className="text-base">
                    <a href="mailto:info@onelilisted.com" className="email-link text-blue-600 hover:underline">
                      info@onelilisted.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="info-row flex items-start">
                <div className="info-icon mr-3 mt-1">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div className="info-content">
                  <h3 className="info-label text-sm font-medium text-muted-foreground mb-1">事業内容</h3>
                  <p className="text-base">プラットフォーム事業、広告事業、ポイント事業、EC事業</p>
                  <p className="text-base ml-0">動画関連事業、その他、上記に付帯する業務</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
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
          <p>© 2024 株式会社ワンリーリステッド All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Company;
