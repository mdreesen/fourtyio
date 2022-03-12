import Navigation from './Navigation/Navigation';

export function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
