import { Component } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: false,

  templateUrl: './filho.component.html',
  styleUrl: './filho.component.scss'
})
export class FilhoComponent {
  message: string = 'Sou o componente filho';

  dizerOi() {
    alert('Oi!!!!')
  }

}
