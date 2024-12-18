import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'fundamentos-angular';
  meuInput3: string = 'Fillipe';

  @ViewChild('meuInput5') meuInputEl!: ElementRef<HTMLInputElement>;
  @ViewChild('meuInput6') meuInput6El!: ElementRef<HTMLInputElement>;
  @ViewChild('minhaDiv') minhaDivEl!: ElementRef<HTMLDivElement>;
  @ViewChild('filhoComponent') filhoComponentRef!: FilhoComponent;

  constructor(private _cdRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.meuInput6El.nativeElement.focus()
  }

  ngOnInit(): void {

  }

  changeDetection() {
    this._cdRef.detectChanges();
  }

  clicou(meuInput4: HTMLInputElement) {
    console.log(meuInput4.value);

    meuInput4.value = 'Valor atualizado';
  }

  updateInputText() {
    this.meuInputEl.nativeElement.value = 'Valor atualizado';
    console.log(this.meuInputEl);
  }

  focusInput() {
    this.meuInputEl.nativeElement.focus();
  }

  atualizarConteudoDiv() {
    this.minhaDivEl.nativeElement.textContent = 'Conteudo atualizado';
  }

  hello() {
    this.filhoComponentRef.dizerOi();
    this.filhoComponentRef.message = 'Eu disse oi';
  }
}

