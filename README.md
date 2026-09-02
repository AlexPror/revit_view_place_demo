# RevitViewPlace — презентация для руководства

Статический сайт для NORDFOX: эффект надстройки RevitViewPlace, масштаб проекта R22, пилот, плоскости профилей.

## Сайт

**https://alexpror.github.io/revit_view_place_demo/**

## Если сайт не открывается (404)

Один раз в репозитории:

1. **Settings → Pages**
2. **Build and deployment → Source:** **Deploy from a branch**
3. **Branch:** `gh-pages` · **Folder:** `/ (root)` · **Save**
4. Подождите 1–2 минуты

После каждого push в `main` workflow **Deploy site** обновляет ветку `gh-pages` автоматически.

## Локальный просмотр

```powershell
python -m http.server 8080
```

Откройте http://localhost:8080

## Видео (3 ролика)

Ссылки — в `video-config.js`:

| id | Раздел |
|----|--------|
| `views` | Выпуск видов и листов |
| `dimensions` | Цепочки размеров |
| `orientation` | Смена ориентации вида |

Для каждого: `openUrl` (Яндекс.Диск) или `iframeSrc` / `localUrl`.

## Исходный код плагина

Приватный репозиторий: [revit_view_place](https://github.com/AlexPror/revit_view_place)
