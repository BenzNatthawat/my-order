import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent {
  @Input() show: boolean = false
  @Input() message: string = ''

}
