# RevitViewPlace — инструкция

**Сайт:** [https://alexpror.github.io/revit_view_place_demo/](https://alexpror.github.io/revit_view_place_demo/)

- [Настройка](https://alexpror.github.io/revit_view_place_demo/) — установка и шаблоны проекта
- [КМД](https://alexpror.github.io/revit_view_place_demo/kmd.html) — команды листов и видов
- [КМ](https://alexpror.github.io/revit_view_place_demo/km.html) — кронштейны, каретки и кассеты
- [Уровни полок](https://alexpror.github.io/revit_view_place_demo/km.html#levels) — поле **Уровни** у размеров КМ (2–5, по умолчанию 4)

После push в `main` GitHub Actions публикует Pages (ветка `gh-pages`, 1–2 мин).

## Страницы

| Файл | Тема |
|------|------|
| `index.html` | Настройка |
| `kmd.html` | Команды КМД |
| `km.html` | Команды КМ, в том числе [уровни полок](km.html#levels) |

У размеров КМ в диалоге поле **Уровни**: 1 — цепь и склейка, 2 — первая полка, дальше по номеру. Это потолок рядов, ряд сам не добавляется. Уже стоящую цепь можно перестроить: выделить → снова «Размеры КМ» → другое число → клик стороны.
