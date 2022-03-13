import Navigation from '/components/Navigation/Navigation';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
