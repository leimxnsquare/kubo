const navigation = [
  { label: "Explore Assets", href: "/explore" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="/" aria-label="Kubo home">
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2h8v6h4v4h6v8h-6v4h-4v6h-8v-6H8v-4H2v-8h6V8h4V2Zm0 10v8h8v-8h-8Z" />
          <path d="M2 2h8v8H2zM22 22h8v8h-8zM22 2h8v8h-8zM2 22h8v8H2z" />
        </svg>
      </a>

      <nav className="primary-navigation" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a className="sign-in-link" href="/sign-in">
          Sign In
        </a>
      </nav>
    </header>
  );
}
