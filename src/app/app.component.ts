import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fundamentos-angular';
  meuInput3: string = 'Fillipe';

  constructor(private _cdRef: ChangeDetectorRef) {
  }

  changeDetection() {
    this._cdRef.detectChanges();
  }

  clicou(meuInput4: HTMLInputElement) {
    console.log(meuInput4.value);

    meuInput4.value = 'Valor atualizado';
  }
}

