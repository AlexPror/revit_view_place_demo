## Видео (`video-config.js` + `video/*.mp4`)

Как [solid-dxf-demo](https://github.com/AlexPror/solid-dxf-demo): сжатые mp4 в репозитории сайта, HTML5-плеер.

| id | Тема | Файл | Статус |
|----|------|------|--------|
| `templates` | Шаблоны NF КМД … | — | закомментировано |
| `planes` | Опорные плоскости | — | закомментировано |
| `views` | Выпуск листов | `video/views.mp4` | на сайте |
| `dimensions` | Цепочки размеров | `video/dimensions.mp4` | на сайте |
| `orientation` | Ориентация | `video/orientation.mp4` | на сайте |

Сжатие (ориентир &lt; 50 МБ/файл): `ffmpeg -i in.mp4 -vf scale=1280:-2 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 96k -movflags +faststart out.mp4`

Исходники можно оставить на Google Drive (`openUrl` — запасная ссылка).
