import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Grid2X2,
  Search,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  { label: "Каталог", to: "/catalog" },
  { label: "Игры", to: "/catalog/games" },
  { label: "Софт", to: "/catalog/software" },
  { label: "Подписки", to: "/catalog/subscriptions" },
  { label: "Карты пополнения", to: "/catalog/gift-cards" },
  { label: "Другое", to: "/catalog/other" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    [
      "whitespace-nowrap text-sm font-medium transition-colors",
      isActive
        ? "text-white"
        : "text-text-secondary hover:text-white",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-5 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          aria-label="На главную"
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-white">
            <Grid2X2 size={21} strokeWidth={2.5} />
          </span>

          <span className="flex flex-col">
            <span className="font-display text-lg font-extrabold leading-none tracking-tight text-white">
              MARKETPLACE
            </span>
            <span className="mt-1 text-[9px] font-semibold tracking-[0.2em] text-text-secondary">
              DIGITAL GOODS
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 xl:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={navClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/catalog"
            aria-label="Поиск"
            className="grid size-10 place-items-center rounded-lg text-text-secondary transition-colors hover:bg-surface-elevated hover:text-white"
          >
            <Search size={19} />
          </Link>

          <Link
            to="/cart"
            aria-label="Корзина"
            className="grid size-10 place-items-center rounded-lg text-text-secondary transition-colors hover:bg-surface-elevated hover:text-white"
          >
            <ShoppingCart size={19} />
          </Link>

          <Link
            to="/login"
            className="hidden rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-surface-elevated sm:block"
          >
            Войти
          </Link>

          <Link
            to="/register"
            className="hidden rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover sm:block"
          >
            Регистрация
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-lg border border-border text-white xl:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-surface px-5 py-4 xl:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={navClass}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="flex gap-3 border-t border-border pt-4 sm:hidden">
              <Link
                to="/login"
                className="flex-1 rounded-lg border border-border py-3 text-center text-sm font-semibold"
              >
                Войти
              </Link>

              <Link
                to="/register"
                className="flex-1 rounded-lg bg-primary py-3 text-center text-sm font-semibold text-white"
              >
                Регистрация
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}