# Презентация RevitViewPlace

Статический сайт для руководства NORDFOX (без блока стоимости).

## Сайт

**https://alexpror.github.io/revit_view_place_demo/**

Репозиторий: [AlexPror/revit_view_place_demo](https://github.com/AlexPror/revit_view_place_demo)

Если сайт не открывается: в репозитории **Settings → Pages → Source: GitHub Actions**, затем перезапустите workflow Deploy Pages.

## Локальный просмотр

```powershell
cd presentation
python -m http.server 8080
```

Откройте http://localhost:8080

## Содержание

- Эффект по времени: **108 комплектов** (листы, размеры, ориентация видов)
- Масштаб R22: ~108 типов КМД
- Плоскости профилей и одно семейство vs два
- Статус пилота (принят)
- Стили — палитра [nordfox.ru](https://nordfox.ru/)

## Скриншоты

Положите файлы в `presentation/images/` и замените блоки `.screenshot-placeholder` в `index.html` на `<img src="images/...">`.

## Видео

В `video-config.js` укажите `openUrl` или `iframeSrc` (Яндекс.Диск).

## Связанные документы

- `docs/PLAN_POST_RAIL_AND_LANDING.md`
- `docs/PLAN_SHEETS_FOR_MANAGEMENT.txt`
