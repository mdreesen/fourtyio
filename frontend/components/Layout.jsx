import Navigation from '/components/Navigation/Navigation';

export function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
