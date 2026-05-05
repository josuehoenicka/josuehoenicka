import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface ResolvedVideoSource {
  kind: 'youtube' | 'file';
  rawUrl: string;
  safeUrl: SafeResourceUrl;
}

function extractYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      return parsed.pathname.split('/').filter(Boolean)[0] ?? null;
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (parsed.pathname === '/watch') {
        return parsed.searchParams.get('v');
      }

      const segments = parsed.pathname.split('/').filter(Boolean);
      if (segments[0] === 'embed' || segments[0] === 'shorts') {
        return segments[1] ?? null;
      }
    }

    return null;
  } catch {
    return null;
  }
}

export function resolveVideoSource(
  url: string | undefined,
  sanitizer: DomSanitizer,
): ResolvedVideoSource | null {
  if (!url) return null;

  const youtubeId = extractYouTubeId(url);
  if (youtubeId) {
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
    return {
      kind: 'youtube',
      rawUrl: url,
      safeUrl: sanitizer.bypassSecurityTrustResourceUrl(embedUrl),
    };
  }

  return {
    kind: 'file',
    rawUrl: url,
    safeUrl: sanitizer.bypassSecurityTrustResourceUrl(url),
  };
}
