import { Cards } from "@/features/components/Cards";
import { CustomTable } from "@/features/components/CustomTable";
import { HomeStyles } from "@/features/styles/homeStyles";
import { useTheme } from "next-themes";

export function HomePage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const style = HomeStyles(isDark);

  return (
    <div className={style.container}>
      <div className={style.header.wrapper}>
        <h1 className={style.header.title}>Панель управления</h1>
        <select className={style.header.select}>
          <option>Сортировка: по ID</option>
          <option>Сортировка: по имени</option>
        </select>
      </div>

      <div className={style.card.base}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <p className={style.card.statusTitle}>Ваш статус</p>
            <h2 className={style.card.statusValue}>60% до Золота</h2>
          </div>
          <div className="flex gap-6 text-sm">
            {["Бронза", "Серебро", "Золото"].map((tier, i) => (
              <div key={tier} className="text-center">
                <p className="text-slate-400 text-[10px] uppercase font-bold">
                  {tier}
                </p>
                <p className="font-bold tracking-tight">
                  {[100, 500, 1000][i]} ₽
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={style.card.progressWrapper}>
          <div className={style.card.progressBar} style={{ width: "60%" }} />
        </div>

        <p className={style.card.footerText}>
          ● Последняя покупка: 5 мин назад{" "}
          <span className="mx-2 text-slate-300">|</span> ● Доступно бонусов: 120
        </p>
      </div>

      <div className={style.grid}>
        <Cards item={1} />
        <Cards item={2} />
        <Cards item={3} />
      </div>

      <div className={`${style.card.base} ${style.tableSection.wrapper}`}>
        <div className={style.tableSection.header}>
          <h3 className={style.tableSection.title}>Последние операции</h3>
          <span className={style.tableSection.badge}>LIVE</span>
        </div>
        <div className={style.tableSection.scrollArea}>
          <CustomTable />
        </div>
      </div>
    </div>
  );
}
