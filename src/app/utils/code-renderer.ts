import { marked } from 'marked';

const LANG_DISPLAY: Record<string, string> = {
  cpp: 'C++', c: 'C', bash: 'Terminal', sh: 'Terminal', shell: 'Terminal',
  javascript: 'JavaScript', js: 'JavaScript', typescript: 'TypeScript', ts: 'TypeScript',
  python: 'Python', html: 'HTML', css: 'CSS', scss: 'SCSS',
  json: 'JSON', powershell: 'PowerShell', sql: 'SQL', yaml: 'YAML',
  xml: 'XML', java: 'Java', kotlin: 'Kotlin', swift: 'Swift',
  dart: 'Dart', rust: 'Rust', go: 'Go', ruby: 'Ruby', php: 'PHP',
};

const COPY_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
const CHECK_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escLine(s: string): string {
  const escaped = esc(s);
  if (/^\s*#/.test(s)) return `<span class="code-comment">${escaped}</span>`;
  return escaped;
}

function escWithComments(s: string): string {
  return s.split('\n').map(escLine).join('\n');
}

function renderTerminal(text: string): string {
  const parts = text.split(/---(\w+)---\n?/);
  const sections: { os: string; label: string; code: string }[] = [];
  const labels: Record<string, string> = { mac: 'Mac', linux: 'Linux', windows: 'Windows' };

  for (let i = 1; i < parts.length; i += 2) {
    const os = parts[i].toLowerCase();
    const code = (parts[i + 1] || '').trim();
    if (labels[os]) sections.push({ os, label: labels[os], code });
  }

  if (!sections.length) return '';

  const tabs = sections.map((s, i) =>
    `<button class="code-block__tab${i === 0 ? ' code-block__tab--active' : ''}" data-os="${s.os}">${s.label}</button>`
  ).join('');

  const panels = sections.map((s, i) =>
    `<div class="code-block__panel${i === 0 ? ' code-block__panel--active' : ''}" data-os="${s.os}"><pre><code>${escWithComments(s.code)}</code></pre></div>`
  ).join('');

  return `<div class="code-block code-block--tabbed"><div class="code-block__header"><div class="code-block__tabs">${tabs}</div><button class="code-block__copy">${COPY_SVG}</button></div>${panels}</div>`;
}

let _configured = false;

export function configureMarkedRenderer(): void {
  if (_configured) return;
  _configured = true;

  marked.use({
    renderer: {
      code({ text, lang }: { text: string; lang?: string }): string {
        if (lang === 'terminal') return renderTerminal(text);
        const display = lang ? (LANG_DISPLAY[lang] || lang) : '';
        return `<div class="code-block"><div class="code-block__header"><span class="code-block__lang">${display}</span><button class="code-block__copy">${COPY_SVG}</button></div><pre><code>${esc(text)}</code></pre></div>`;
      }
    }
  });
}

export function handleCodeBlockClick(event: Event): void {
  const target = event.target as HTMLElement;

  const copyBtn = target.closest('.code-block__copy') as HTMLElement | null;
  if (copyBtn) {
    const block = copyBtn.closest('.code-block');
    if (!block) return;
    const pre = block.querySelector('.code-block__panel--active pre') || block.querySelector('pre');
    navigator.clipboard.writeText(pre?.textContent || '');
    copyBtn.innerHTML = CHECK_SVG;
    setTimeout(() => { copyBtn.innerHTML = COPY_SVG; }, 2000);
    return;
  }

  const tabBtn = target.closest('.code-block__tab') as HTMLElement | null;
  if (tabBtn) {
    const os = tabBtn.getAttribute('data-os');
    const block = tabBtn.closest('.code-block');
    if (!block || !os) return;
    block.querySelectorAll('.code-block__tab').forEach(t => t.classList.remove('code-block__tab--active'));
    tabBtn.classList.add('code-block__tab--active');
    block.querySelectorAll('.code-block__panel').forEach(p => p.classList.remove('code-block__panel--active'));
    block.querySelector(`.code-block__panel[data-os="${os}"]`)?.classList.add('code-block__panel--active');
  }
}
