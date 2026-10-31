import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Gamepad2,
  Gift,
  Monitor,
  Sparkles,
  Zap,
} from "lucide-react";

const products = [
  {
    slug: "indie-game-collection",
    title: "Коллекция инди-игр",
    category: "Игры и DLC",
    price: "1 290 ₽",
    oldPrice: "1 690 ₽",
    badge: "Хит продаж",
    delivery: "Моментальная доставка",
    icon: Gamepad2,
    iconColor: "text-violet-300",
    iconBackground: "bg-violet-500/15",
  },
  {
    slug: "gaming-subscription",
    title: "Игровая подписка на 30 дней",
    category: "Подписки",
    price: "790 ₽",
    oldPrice: null,
    badge: "Выгодно",
    delivery: "Моментальная доставка",
    icon: Zap,
    iconColor: "text-amber-300",
    iconBackground: "bg-amber-500/15",
  },
  {
    slug: "gift-card-20",
    title: "Подарочная карта 20 USD",
    category: "Подарочные карты",
    price: "1 990 ₽",
    oldPrice: null,
    badge: null,
    delivery: "Моментальная доставка",
    icon: Gift,
    iconColor: "text-pink-300",
    iconBackground: "bg-pink-500/15",
  },
  {
    slug: "game-ui-assets",
    title: "Набор игровых UI-ассетов",
    category: "Цифровые товары",
    price: "590 ₽",
    oldPrice: "890 ₽",
    badge: "Скидка",
    delivery: "Файл для скачивания",
    icon: Monitor,
    iconColor: "text-cyan-300",
    iconBackground: "bg-cyan-500/15",
  },
];

export function PopularProducts() {
  return (
    <section id="popular" className="mt-20">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium text-[#7865F7]">
            ВЫБОР ПОКУПАТЕЛЕЙ
          </p>

          <h2 className="text-2xl font-bold text-[#F4F6FC] md:text-3xl">
            Популярные товары
          </h2>

          <p className="mt-2 text-sm text-[#929BAB]">
            Интересные цифровые предложения от продавцов
          </p>
        </div>

        <Link
          to="/catalog"
          className="hidden items-center gap-2 text-sm text-[#929BAB] transition hover:text-white sm:flex"
        >
          Все товары
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product) => {
          const Icon = product.icon;

          return (
            <Link
              key={product.slug}
              to={`/product/${product.slug}`}
              className="group overflow-hidden rounded-xl border border-[#252E3D] bg-[#111722] transition duration-200 hover:-translate-y-1 hover:border-[#7865F7]/60"
            >
              <div className="relative flex aspect-[5/3] items-center justify-center overflow-hidden bg-[#171F2D]">
                <div className="absolute -right-8 -top-8 size-36 rounded-full bg-[#7865F7]/10 blur-3xl" />

                <div
                  className={`relative flex size-20 items-center justify-center rounded-2xl ${product.iconBackground}`}
                >
                  <Icon size={38} className={product.iconColor} />
                </div>

                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-md border border-white/10 bg-[#0B0E14]/80 px-2 py-1 text-[10px] font-semibold text-[#D9D4FF]">
                    {product.badge}
                  </span>
                )}

                <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-[#0B0E14]/80 px-2 py-1 text-[10px] text-[#C4CAD5]">
                  <Sparkles size={11} />
                  Digital
                </span>
              </div>

              <div className="p-4">
                <p className="text-xs text-[#929BAB]">
                  {product.category}
                </p>

                <h3 className="mt-2 min-h-10 text-sm font-semibold leading-5 text-[#F4F6FC] transition group-hover:text-[#A99EFF]">
                  {product.title}
                </h3>

                <p className="mt-3 flex items-center gap-2 text-xs text-[#929BAB]">
                  <Zap size={13} className="text-[#30C995]" />
                  {product.delivery}
                </p>

                <div className="mt-4 flex items-end gap-2">
                  <span className="font-mono text-lg font-bold text-[#F4F6FC]">
                    {product.price}
                  </span>

                  {product.oldPrice && (
                    <span className="pb-0.5 text-xs text-[#929BAB] line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}