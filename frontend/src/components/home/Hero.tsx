import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  Zap,
  Headset,
  Gamepad2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  { label: "Игры", icon: Gamepad2, query: "games" },
  { label: "Подписки", icon: Sparkles, query: "subscriptions" },
  { label: "Софт", icon: ShieldCheck, query: "software" },
  { label: "Пополнения", icon: Zap, query: "top-ups" },
];

const benefits = [
  {
    icon: Zap,
    title: "Быстрая выдача",
    description: "Автоматически после оплаты",
  },
  {
    icon: ShieldCheck,
    title: "Безопасные покупки",
    description: "Проверенные продавцы",
  },
  {
    icon: Headset,
    title: "Поддержка",
    description: "Помощь при возникновении проблем",
  },
];

export function Hero() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = search.trim();

    navigate(
      query
        ? `/catalog?search=${encodeURIComponent(query)}`
        : "/catalog",
    );
  };

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-48 -top-48 size-[650px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
            <span className="size-2 rounded-full bg-success" />
            <span className="text-xs font-medium text-text-secondary">
              Платформа цифровых товаров
            </span>
          </div>

          <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.08] tracking-tight md:text-6xl xl:text-7xl">
            Всё цифровое.
            <span className="mt-2 block text-primary">
              В одном месте.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-text-secondary md:text-lg">
            Игры, подписки, программное обеспечение и цифровые
            продукты от независимых продавцов.
            Удобно покупать. Выгодно продавать.
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-9 flex max-w-2xl items-center gap-2 rounded-xl border border-border bg-surface p-2 shadow-xl shadow-black/10 transition-colors focus-within:border-primary/70"
          >
            <Search className="ml-3 shrink-0 text-text-secondary" size={21} />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Найти игру, подписку или цифровой товар..."
              className="h-11 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-text-secondary"
              aria-label="Поиск цифровых товаров"
            />

            <button
              type="submit"
              className="shrink-0 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Найти
            </button>
          </form>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map(({ label, icon: Icon, query }) => (
              <button
                key={query}
                type="button"
                onClick={() => navigate(`/catalog/${query}`)}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/70 px-3 py-2 text-xs font-medium text-text-secondary transition-colors hover:border-primary/50 hover:text-white"
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 rounded-[32px] bg-primary/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-7">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white">
                Цифровая торговля
              </span>
              <span className="rounded-full bg-success/10 px-3 py-1 text-xs text-success">
                Online
              </span>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-background p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-text-secondary">
                    Единая площадка
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-white">
                    Digital
                    <span className="text-primary"> Market</span>
                  </h2>
                </div>

                <div className="grid size-14 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <Gamepad2 size={30} />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border p-4">
                  <Gamepad2 className="mb-3 text-primary" size={22} />
                  <p className="text-sm font-semibold text-white">Игры</p>
                  <p className="mt-1 text-xs text-text-secondary">
                    Ключи и дополнения
                  </p>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <Sparkles className="mb-3 text-primary" size={22} />
                  <p className="text-sm font-semibold text-white">
                    Подписки
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    Цифровые сервисы
                  </p>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <ShieldCheck className="mb-3 text-primary" size={22} />
                  <p className="text-sm font-semibold text-white">
                    Программы
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    Лицензии и софт
                  </p>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <Zap className="mb-3 text-primary" size={22} />
                  <p className="text-sm font-semibold text-white">
                    Пополнения
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    Коды и ваучеры
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-text-secondary">
                Покупай и продавай на своих условиях
              </span>
              <ArrowUpRight className="text-primary" size={20} />
            </div>
          </div>
        </div>

        <div className="col-span-full grid gap-5 border-t border-border pt-8 sm:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  {title}
                </p>
                <p className="mt-1 text-xs text-text-secondary">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}