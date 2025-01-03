import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  openMenu: WritableSignal<boolean> = signal(false);
  constructor() {}
}
