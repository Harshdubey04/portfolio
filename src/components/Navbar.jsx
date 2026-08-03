import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-black/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="text-blue-500">{'<'}</span>
          <span className="mx-1">Portfolio</span>
          <span className="text-blue-500">{'/>'}</span>
        </a>

        <div className="flex items-center gap-3">
          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative text-slate-600 transition-colors duration-200 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-blue-500 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-xs text-slate-800 shadow-sm shadow-slate-300/80 transition-all duration-200 hover:border-blue-400/70 hover:bg-blue-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/15 dark:bg-white/5 dark:text-gray-100 dark:shadow-black/40 dark:hover:bg-blue-500/10 dark:hover:text-white"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? (
              <span className="text-lg">☾</span>
            ) : (
              <span className="text-lg">☀︎</span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <span className="relative block h-5 w-6">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 origin-center bg-slate-700 dark:bg-gray-200 transition-transform duration-200 ${
                  isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute inset-x-0 top-2.5 h-0.5 bg-slate-700 transition-opacity duration-150 dark:bg-gray-200 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 origin-center bg-slate-700 dark:bg-gray-200 transition-transform duration-200 ${
                  isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-slate-200/80 bg-white/95 transition-colors duration-300 md:hidden dark:border-white/10 dark:bg-black/95">
          <ul className="space-y-1 px-4 py-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-slate-800 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
