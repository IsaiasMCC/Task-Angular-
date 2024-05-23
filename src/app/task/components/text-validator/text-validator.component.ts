import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-validator',
  templateUrl: './text-validator.component.html',
  styleUrls: ['./text-validator.component.css']
})
export class TextValidatorComponent {
  @Input('title') public title: string = ''
}
