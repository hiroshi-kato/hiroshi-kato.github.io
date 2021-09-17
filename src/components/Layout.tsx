const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header></header>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
