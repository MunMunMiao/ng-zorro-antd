import { Component } from '@angular/core';

import { NzTabPosition } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-tabs-position',
  template: `
    <div style="margin-bottom: 16px;">
      Tab position：
      <nz-select [(ngModel)]="position" style="width: 80px;">
        @for (option of options; track option) {
          <nz-option [nzLabel]="option.label" [nzValue]="option.value"></nz-option>
        }
      </nz-select>
    </div>
    <nz-tabset [nzTabPosition]="position">
      @for (tab of tabs; track tab) {
        <nz-tab [nzTitle]="'Tab ' + tab">Content of tab {{ tab }}</nz-tab>
      }
    </nz-tabset>
  `
})
export class NzDemoTabsPositionComponent {
  position: NzTabPosition = 'top';
  tabs = [1, 2, 3];
  options = [
    { value: 'top', label: 'top' },
    { value: 'left', label: 'left' },
    { value: 'right', label: 'right' },
    { value: 'bottom', label: 'bottom' }
  ];
}
