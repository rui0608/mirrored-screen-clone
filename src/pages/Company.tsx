
import { FC } from "react";
import "../styles/styles.css";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";

const Company: FC = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">運営会社</h1>
      </header>

      {/* Main Content */}
      <main className="main-content company-content flex items-center justify-center min-h-[calc(100vh-240px)] py-8">
        <div className="w-full max-w-3xl mx-auto">
          <Table className="border-collapse">
            <TableBody>
              <TableRow className="border-t">
                <TableCell className="py-4 font-medium text-gray-700 w-1/4">会社名</TableCell>
                <TableCell className="py-4">株式会社ワンリーリステッド</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 font-medium text-gray-700 align-top">住所</TableCell>
                <TableCell className="py-4">
                  〒160-0023<br />
                  東京都新宿区西新宿4-31-3<br />
                  永谷リヴュール新宿 5階
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 font-medium text-gray-700">代表者</TableCell>
                <TableCell className="py-4">代表取締役 橋本 一誓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 font-medium text-gray-700">設立</TableCell>
                <TableCell className="py-4">2022年1月18日</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 font-medium text-gray-700">資本金</TableCell>
                <TableCell className="py-4">8,000万円</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 font-medium text-gray-700">メールアドレス</TableCell>
                <TableCell className="py-4">
                  <a href="mailto:info@onelilisted.com" className="text-blue-600 hover:underline">
                    info@onelilisted.com
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 font-medium text-gray-700 align-top">事業内容</TableCell>
                <TableCell className="py-4">
                  プラットフォーム事業、広告事業、ポイント事業、EC事業<br />
                  動画関連事業、その他、上記に付帯する業務
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
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
          <p>© 2025 株式会社ワンリーリステッド All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Company;
