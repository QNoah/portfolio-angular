import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  onBtnClick(): void {}

  angularProgressbar_value: any = null;
  scssProgressbar_value: any = null;
  htmlProgressbar_value: any = null;
  tsProgressbar_value: any = null;
  shown = false;

  progressShown() {
    if (this.shown === false) {
      this.angularProgressbar_value = 7;
      this.scssProgressbar_value = 40;
      this.htmlProgressbar_value = 80;
      this.tsProgressbar_value = 11;
      this.shown = true;
    }
  }
  reset() {
    this.angularProgressbar_value = null;
    this.scssProgressbar_value = null;
    this.htmlProgressbar_value = null;
    this.tsProgressbar_value = null;
    this.shown = false;
  }
}
