import type {
  SidebarMenuClass,
  SidebarMenuProperties,
  SidebarMenuTheme,
} from './sidebar-menu.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `SidebarMenuTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_SIDEBAR_MENU_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_SIDEBAR_MENU_THEME_TOKEN = new InjectionToken<SidebarMenuTheme>(
  'FLOWBITE_SIDEBAR_MENU_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class SidebarMenuThemeService implements FlowbiteThemeService<SidebarMenuProperties> {
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_MENU_THEME_TOKEN);

  public getClasses(properties: SidebarMenuProperties): SidebarMenuClass {
    const theme: SidebarMenuTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: SidebarMenuClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.isOpen[properties.isOpen],
        properties.isOpen === 'enabled' && theme.root.displayMode[properties.displayMode],
        theme.root.color[properties.color]
      ),
    };

    return output;
  }
}
