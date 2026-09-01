(function () {
  'use strict';

  /* ── 主题切换 ─────────────────────────────────────────────────────────── */
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var root = document.documentElement;
      var current = root.getAttribute('data-theme');
      if (!current) {
        // 跟随系统时，切到系统的反面
        current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('acp-theme', next); } catch (e) {}
    });
  }

  /* ── 目录 ─────────────────────────────────────────────────────────────── */
  var list = document.getElementById('toc-list');
  var headings = [].slice.call(
    document.querySelectorAll('.main-content h2[id]')
  );

  if (list && headings.length) {
    headings.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent.trim();
      li.appendChild(a);
      list.appendChild(li);
    });

    var links = [].slice.call(list.querySelectorAll('a'));
    var setActive = function (id) {
      links.forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
      });
    };

    if ('IntersectionObserver' in window) {
      var visible = new Set();
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        for (var i = 0; i < headings.length; i++) {
          if (visible.has(headings[i].id)) { setActive(headings[i].id); return; }
        }
      }, { rootMargin: '-10% 0px -70% 0px' });
      headings.forEach(function (h) { observer.observe(h); });
    }
  } else {
    var toc = document.getElementById('toc');
    if (toc) toc.style.display = 'none';
  }

  /* ── 标题锚点 ─────────────────────────────────────────────────────────── */
  document.querySelectorAll('.main-content h2[id], .main-content h3[id]').forEach(function (h) {
    h.style.cursor = 'pointer';
    h.title = '点击复制本节链接';
    h.addEventListener('click', function () {
      var url = location.origin + location.pathname + '#' + h.id;
      history.replaceState(null, '', '#' + h.id);
      if (navigator.clipboard) navigator.clipboard.writeText(url).catch(function () {});
    });
  });

  /* ── 回到顶部 ─────────────────────────────────────────────────────────── */
  var top = document.getElementById('to-top');
  if (top) {
    top.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    var onScroll = function () {
      top.classList.toggle('is-visible', window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── 修复表格单元格里的 <ul><li> ───────────────────────────────────────────
     GitHub 的 Markdown 解析器允许表格单元格内嵌块级 HTML，Jekyll 用的 kramdown
     不允许，会把 <ul><li>…</li></ul> 原样转义成文本。这里在浏览器端还原成真正的
     列表，从而无需改动 README.md 本身。
     只接受「整格内容恰好是 ul/li 结构」的单元格，且列表项文本一律用 textContent
     写入，不存在注入风险。                                                      */
  var ONLY_UL = /^\s*<ul>\s*(?:<li>[^<>]*<\/li>\s*)+<\/ul>\s*$/;
  var LI = /<li>([^<>]*)<\/li>/g;

  document.querySelectorAll('.main-content table td').forEach(function (td) {
    var raw = td.textContent;
    if (raw.indexOf('<ul>') === -1 || !ONLY_UL.test(raw)) return;

    var items = [], m;
    LI.lastIndex = 0;
    while ((m = LI.exec(raw)) !== null) items.push(m[1]);
    if (!items.length) return;

    var ul = document.createElement('ul');
    items.forEach(function (text) {
      var li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    });
    td.textContent = '';
    td.appendChild(ul);
  });

  /* ── 宽表格：可用左右方向键 / 拖拽滚动，并提示可横向滚动 ───────────────── */
  document.querySelectorAll('.main-content table').forEach(function (t) {
    if (t.scrollWidth > t.clientWidth) {
      t.setAttribute('tabindex', '0');
      t.setAttribute('role', 'region');
      t.setAttribute('aria-label', '可横向滚动的数据表格');
    }
  });
})();
