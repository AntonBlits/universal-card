import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';

import { IconsService } from "../icons/icons.service";
import { Card } from "./card.interfase";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardComponent {
  @Input('technique') item: Card;

  editBackground = false;
  detail = false;
  description = false;

  constructor(@Inject(IconsService) private readonly _icons: IconsService) {
    this._icons.registryIcons();
  }

  onEditBackground(): void {
    this.editBackground = !this.editBackground;
  }

  getDetail(event: Event): void {
    event.stopPropagation();

    this.detail = !this.detail;

    setTimeout(() => this.detail = false,400);
  }

  getDescription(event: Event): void {
    event.stopPropagation();

    this.description = !this.description;

    setTimeout(() => this.description = false,400);
  }
}
