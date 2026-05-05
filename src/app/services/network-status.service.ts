import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NetworkStatusService {
  readonly isOnline = signal(this.getInitialStatus());

  constructor() {
    if (typeof window === 'undefined') return;

    const updateStatus = () => {
      this.isOnline.set(window.navigator.onLine);
    };

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
  }

  private getInitialStatus(): boolean {
    if (typeof navigator === 'undefined') return true;
    return navigator.onLine;
  }
}
