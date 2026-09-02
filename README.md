# RevitViewPlace — презентация для руководства

Статический сайт для NORDFOX: эффект плагина RevitViewPlace, масштаб проекта R22, пилот, плоскости профилей.

## Сайт

**https://alexpror.github.io/revit_view_place_demo/**

После push в `main` GitHub Actions публикует Pages автоматически (1–2 мин).

## Локальный просмотр

```powershell
python -m http.server 8080
```

Откройте http://localhost:8080

## Содержание

- Эффект по времени: **108 комплектов** (листы + размеры + ориентация видов)
- Масштаб R22: 656 экз. монтажа, ~108 типов КМД
- Replace: привязка к экземпляру модуля (ModuleId), не к типу
- Плоскости профилей и одно семейство vs два
- Статус пилота (принят)
- Стили — палитра [nordfox.ru](https://nordfox.ru/)

## Скриншоты и видео

- Скрины: папка `images/`, затем `<img src="images/...">` в `index.html`
- Видео: `openUrl` или `iframeSrc` в `video-config.js`

## Исходный код плагина

Приватный репозиторий: [revit_view_place](https://github.com/AlexPror/revit_view_place)
