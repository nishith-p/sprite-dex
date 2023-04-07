interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <section className="pt-20">{children}</section>;
};

export default Layout;
