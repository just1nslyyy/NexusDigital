import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CreditCard,
  Gamepad2,
  Gift,
  KeyRound,
  Palette,
  Crown,
} from "lucide-react";

const categories = [
  {
    title: "Игры и DLC",
    description: "Игры, дополнения и контент",
    slug: "games",
    icon: Gamepad2,
  },
  {
    title: "Ключи активации",
    description: "Коды для игр и программ",
    slug: "keys",
    icon: KeyRound,
  },
  {
    title: "Подписки",
    description: "Сервисы и премиум-доступ",
    slug: "subscriptions",
    icon: Crown,
  },
  {
    title: "Пополнение баланса",
    description: "Баланс игровых платформ",
    slug: "top-ups",
    icon: CreditCard,
  },
  {
    title: "Подарочные карты",
    description: "Карты и цифровые сертификаты",
    slug: "gift-cards",
    icon: Gift,
  },
  {
    title: "Цифровые товары",
    description: "Шаблоны, ассеты и другое",
    slug: "digital-goods",
    icon: Palette,
  },
];

export function PopularCategories() {
  return (
    <section id="categories" className="mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium text-[#7865F7]">
            КАТАЛОГ
          </p>
          <h2 className="text-2xl font-bold text-[#F4F6FC] md:text-3xl">
            Популярные категории
          </h2>
          <p className="mt-2 text-sm text-[#929BAB]">
            Выбирай нужный цифровой товар в пару кликов
          </p>
        </div>

        <Link
          to="/catalog"
          className="hidden items-center gap-2 text-sm text-[#929BAB] transition hover:text-white sm:flex"
        >
          Весь каталог
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.slug}
              to={`/catalog?category=${category.slug}`}
              className="group rounded-xl border border-[#252E3D] bg-[#111722] p-4 transition duration-200 hover:-translate-y-1 hover:border-[#7865F7]/60 hover:bg-[#171F2D]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-lg bg-[#7865F7]/10 text-[#9A8DFF] transition group-hover:bg-[#7865F7]/20">
                  <Icon size={22} />
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-[#586174] transition group-hover:text-[#9A8DFF]"
                />
              </div>

              <h3 className="text-sm font-semibold text-[#F4F6FC]">
                {category.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-[#929BAB]">
                {category.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}