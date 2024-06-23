import Header from '../components/Header';

function HeaderLayout({ children }) {
  return (
    <div>
      {/* Header của trang */}
      <Header />
      <div className="container">
        {/* Nội dung chính của trang */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderLayout;
