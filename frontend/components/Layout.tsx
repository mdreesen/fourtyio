import Navigation from '/components/Navigation/Navigation';
import type { ReactChildren } from '/types/CommonTypes';

interface LayoutProps {
  children: ReactChildren;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
