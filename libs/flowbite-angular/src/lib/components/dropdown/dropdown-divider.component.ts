import { BaseComponent } from '../base-component.directive';
import type { DropdownDividerClass, DropdownDividerTheme } from './dropdown-divider.theme';
import { DropdownDividerThemeService } from './dropdown-divider.theme.service';
import { DropdownComponent } from './dropdown.component';

import { NgClass } from '@angular/common';
import { Component, inject, model } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-divider',
  template: ``,
})
export class DropdownDividerComponent extends BaseComponent<DropdownDividerClass> {
  public readonly themeService = inject(DropdownDividerThemeService);
  public readonly dropdownComponent = inject(DropdownComponent);

  //#region properties
  public customStyle = model<Partial<DropdownDividerTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): DropdownDividerClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
