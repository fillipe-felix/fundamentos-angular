import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
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
  @ViewChildren('meuButton') buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;


  buttonsList = [
    'Botao 1',
    'Botao 2',
    'Botao 3',
  ]

  constructor(private _cdRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.meuInput6El.nativeElement.focus()
    // this.buttonsEl.forEach(button => {
    //   button.nativeElement.style.backgroundColor = 'red';
    // })

    this.buttonsEl.changes.subscribe((result) => {
      console.log('result: ', result);
    })
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

  changeColor(event: Event) {
    const btnElement = event.target as HTMLButtonElement;

    if (btnElement.style.backgroundColor === 'red') {
      btnElement.style.backgroundColor = 'white';
      btnElement.style.color = 'black';
      return;
    }
    btnElement.style.backgroundColor = 'red';
    btnElement.style.color = 'white';
  }

  resetButton() {
    this.buttonsEl.forEach(button => {
      button.nativeElement.style.backgroundColor = 'white';
      button.nativeElement.style.color = 'black';
    })
  }

  firstButton() {
    //const primeiro = this.buttonsEl.first;
    // const primeiro = this.buttonsEl.get(0);
    // const primeiro = this.buttonsEl.find(button => button.nativeElement.className === 'btn-0');
    const primeiro = this.buttonsEl.toArray()[0];

    console.log(primeiro);
  }

  removerItem() {
    this.buttonsList.shift();
  }
}

