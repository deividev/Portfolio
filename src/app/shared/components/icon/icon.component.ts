import { Component, Input } from '@angular/core';
import { ICONS } from '@core/constants';
import { ThemeService } from '@shared/services/theme.service';

interface IconConfig {
  icon: string;
  size?: number;
  vBox?: string;
  color?: string;
  onClick?: () => void;
  customClass?: any;
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() config: IconConfig = {
    icon: '',
    size: 24,
    vBox: '',
    color: '',
    onClick: undefined,
    customClass: undefined,
  };

  iconColor = '';
  vBox = '';
  vBoxPath = '';


  icons = ICONS;

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe((theme) => {
      // Detecta cambios en el tema y actualiza el color del icono
      if(!this.config.color){
        if (theme === 'dark') {
          this.config.customClass = { fill: '#fff' };
        } else {
          this.config.customClass = { fill: '#333' };
        }
      }

    });
  }

  ngOnInit() {
    this.iconColor = this.config.color || 'black';
    this.vBox = this.config.vBox
      ? '0 0 ' + this.config.vBox + ' ' + this.config.vBox
      : '0 0 24 24';
    this.vBoxPath = this.config.vBox
      ? 'M0 0h' + this.config.vBox +'v' + this.config.vBox + 'H0z'
      : 'M0 0h24v24H0z';
  }
}
