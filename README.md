# Презентация RevitViewPlace

**Сайт:** [https://alexpror.github.io/revit_view_place_demo/](https://alexpror.github.io/revit_view_place_demo/)

- [Настройка](https://alexpror.github.io/revit_view_place_demo/) — установка и шаблоны проекта
- [КМД](https://alexpror.github.io/revit_view_place_demo/kmd.html) — команды листов и видов
- [КМ](https://alexpror.github.io/revit_view_place_demo/km.html) — кронштейны, каретки и кассеты

Исходники этой папки после push в [AlexPror/revit_view_place_demo](https://github.com/AlexPror/revit_view_place_demo) публикуются на GitHub Pages.

## Страницы

Три вкладки в шапке. Команды и «как поставить надстройку» больше не на одном экране.

| Файл | Тема |
|------|------|
| `index.html` | **Настройка:** установка, шаблоны проекта, эффект, статус пилота |
| `kmd.html` | **КМД:** справочник команд (листы, правка видов, оформление, модуль, анализ) |
| `km.html` | **КМ:** размеры, Полки КМ, пресеты, марки кассет (фасад/3D), метки |

Корень сайта (`/`) — настройка. Старые якоря вроде `/#sheets` переехали на `kmd.html#sheets`.

## Видео (`video-config.js` + `video/*.mp4`)

Как [solid-dxf-demo](https://github.com/AlexPror/solid-dxf-demo): сжатые mp4 в репозитории сайта, HTML5-плеер. Ролики стоят в справочнике КМД рядом с командой.

| id | Тема | Файл | Статус |
|----|------|------|--------|
| `templates` | Шаблоны NF КМД … | — | закомментировано (страница Настройка) |
| `planes` | Опорные плоскости | — | закомментировано (`kmd.html`) |
| `views` | Выпуск листов | `video/views.mp4` | `kmd.html` |
| `dimensions` | Цепочки размеров | `video/dimensions.mp4` | `kmd.html` |
| `orientation` | Ориентация | `video/orientation.mp4` | `kmd.html` |
| `km` | Размеры КМ | — | страница `km.html`, без ролика |

Сжатие (ориентир &lt; 50 МБ/файл): `ffmpeg -i in.mp4 -vf scale=1280:-2 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 96k -movflags +faststart out.mp4`

Исходники можно оставить на Google Drive (`openUrl` — запасная ссылка).
