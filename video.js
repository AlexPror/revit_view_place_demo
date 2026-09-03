(function () {
  'use strict';

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, '&#39;');
  }

  function resolveSources(item) {
    var iframeSrc = (item.iframeSrc || '').trim();
    var openUrl = (item.openUrl || '').trim();
    var mp4Url = (item.localUrl || item.mp4Url || '').trim();
    return { iframeSrc: iframeSrc, openUrl: openUrl, mp4Url: mp4Url };
  }

  function mountItem(root, item) {
    var src = resolveSources(item);
    var title = item.title || 'Демонстрация';
    var lead = item.lead || '';
    root.innerHTML = '';

    // Как solid-dxf-demo: локальный mp4 в приоритете (HTML5-плеер на сайте).
    if (src.mp4Url) {
      var video = document.createElement('video');
      video.className = 'video-native';
      video.controls = true;
      video.preload = 'metadata';
      video.src = src.mp4Url;
      video.setAttribute('playsinline', '');
      video.setAttribute('controlsList', 'nodownload');
      root.appendChild(video);
      if (src.openUrl) {
        var ext = document.createElement('p');
        ext.className = 'video-fallback';
        ext.innerHTML =
          'Полный исходник: <a href="' +
          escapeAttr(src.openUrl) +
          '" target="_blank" rel="noopener noreferrer">открыть на Google Диске</a>.';
        root.appendChild(ext);
      }
      return;
    }

    if (src.iframeSrc) {
      var frameWrap = document.createElement('div');
      frameWrap.className = 'video-embed';
      var iframe = document.createElement('iframe');
      iframe.src = src.iframeSrc;
      iframe.title = title;
      iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture; fullscreen');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');
      frameWrap.appendChild(iframe);
      root.appendChild(frameWrap);
      if (src.openUrl) {
        var fb = document.createElement('p');
        fb.className = 'video-fallback';
        fb.innerHTML =
          'Если плеер не открылся: <a href="' +
          escapeAttr(src.openUrl) +
          '" target="_blank" rel="noopener noreferrer">открыть видео отдельно</a>.';
        root.appendChild(fb);
      }
      return;
    }

    if (src.openUrl) {
      var card = document.createElement('a');
      card.className = 'video-card';
      card.href = src.openUrl;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.innerHTML =
        '<span class="video-card-play" aria-hidden="true">▶</span>' +
        '<span class="video-card-body">' +
        '<strong class="video-card-title">' +
        escapeHtml(title) +
        '</strong>' +
        (lead ? '<span class="video-card-lead">' + escapeHtml(lead) + '</span>' : '') +
        '<span class="video-card-cta">Смотреть видео</span>' +
        '</span>';
      root.appendChild(card);
      return;
    }

    var placeholder = document.createElement('div');
    placeholder.className = 'video-placeholder';
    placeholder.innerHTML =
      '<span class="video-placeholder-icon" aria-hidden="true">▶</span>' +
      '<span>Видео будет добавлено</span>';
    root.appendChild(placeholder);
  }

  function mountAll() {
    var list = window.REVITVIEWPLACE_DEMO_VIDEOS;
    if (!Array.isArray(list)) return;

    var byId = {};
    list.forEach(function (item) {
      if (item && item.id) byId[item.id] = item;
    });

    document.querySelectorAll('[data-video-id]').forEach(function (root) {
      var id = root.getAttribute('data-video-id');
      var item = byId[id];
      if (item) mountItem(root, item);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountAll);
  } else {
    mountAll();
  }
})();
