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
    root.innerHTML = '';

    if (src.iframeSrc) {
      var frameWrap = document.createElement('div');
      frameWrap.className = 'video-embed';
      var iframe = document.createElement('iframe');
      iframe.src = src.iframeSrc;
      iframe.title = title;
      iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');
      frameWrap.appendChild(iframe);
      root.appendChild(frameWrap);
    } else if (src.mp4Url) {
      var video = document.createElement('video');
      video.className = 'video-native';
      video.controls = true;
      video.preload = 'metadata';
      video.src = src.mp4Url;
      video.setAttribute('playsinline', '');
      root.appendChild(video);
    } else {
      var placeholder = document.createElement('div');
      placeholder.className = 'video-placeholder';
      placeholder.innerHTML = '<span class="video-placeholder-icon" aria-hidden="true">▶</span><span>Видео будет добавлено</span>';
      if (src.openUrl) {
        var link = document.createElement('a');
        link.href = src.openUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Открыть видео';
        placeholder.appendChild(link);
      }
      root.appendChild(placeholder);
    }

    if (src.openUrl && src.iframeSrc) {
      var ext = document.createElement('p');
      ext.className = 'video-fallback';
      ext.innerHTML = 'Если плеер не открылся: <a href="' + escapeAttr(src.openUrl) + '" target="_blank" rel="noopener noreferrer">открыть видео отдельно</a>.';
      root.appendChild(ext);
    }
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
