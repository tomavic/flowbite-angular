import type { NabvarItemProperties, NavbarItemClass, NavbarItemTheme } from './navbar-item.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `NavbarItemTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_NAVBAR_ITEM_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_NAVBAR_ITEM_THEME_TOKEN = new InjectionToken<NavbarItemTheme>(
  'FLOWBITE_NAVBAR_ITEM_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class NavbarItemThemeService implements FlowbiteThemeService<NabvarItemProperties> {
  private readonly baseTheme = inject(FLOWBITE_NAVBAR_ITEM_THEME_TOKEN);

  public getClasses(properties: NabvarItemProperties): NavbarItemClass {
    const theme: NavbarItemTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: NavbarItemClass = {
      rootClass: twMerge(theme.root.base, theme.root.color[properties.color]),
    };

    return output;
  }
}
