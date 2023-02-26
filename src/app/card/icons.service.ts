import { Inject, Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import { ICONS } from "./icons";

@Injectable({
  providedIn: "root"
})
export class IconsService {
  constructor(
    @Inject(MatIconRegistry) private readonly _registry: MatIconRegistry,
    @Inject(DomSanitizer) private readonly _sanitizer: DomSanitizer
  ) {}

  registryIcons(): void {
    this.load(ICONS, '../../assets/icons');
  }

  private load(icons: readonly string[], path: string): void {
    icons.forEach(icon => {
      this._registry.addSvgIcon(
        icon,
        this._sanitizer.bypassSecurityTrustResourceUrl(
          `${path}/${icon}.svg`
        )
      );
    });
  }
}
