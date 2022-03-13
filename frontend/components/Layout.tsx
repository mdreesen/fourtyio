import Navigation from '/components/Navigation/Navigation';
import type { Children } from '/types/CommonTypes';

interface LayoutProps {
  children: Children;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
