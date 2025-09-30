import { Component, EventEmitter, Input, OnInit, Output, signal} from '@angular/core';

@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.html',
  styleUrl: './panel.scss'
})
export class Panel implements OnInit {
  @Input() initialPageQuantity = 1;
  @Input() initialLanguageQuantity = 1;

  @Input() servicePageLabel = '';
  @Input() serviceLanguageLabel = '';


  @Output() finalPageQuantity = new EventEmitter<number>();
  @Output() finalLanguageQuantity = new EventEmitter<number>();


  pageQuantity = signal(1);
  languageQuantity = signal(1);


  ngOnInit() {
    this.pageQuantity.set(this.initialPageQuantity);
    this.languageQuantity.set(this.initialLanguageQuantity);
  }

  decreasePageQuantity() {
    if (this.pageQuantity() > 1) {
      this.pageQuantity.update(value => value - 1);
      this.finalPageQuantity.emit(this.pageQuantity());
    }
  }

  increasePageQuantity() {
    if (this.pageQuantity() < 99) {
      this.pageQuantity.update(value => value + 1);
      this.finalPageQuantity.emit(this.pageQuantity());
    } 
  }

    decreaseLanguageQuantity() {
    if (this.languageQuantity() > 1) {
      this.languageQuantity.update(value => value - 1);
      this.finalLanguageQuantity.emit(this.languageQuantity());
    }
  }

  increaseLanguageQuantity() {
    if (this.languageQuantity() < 99) {
      this.languageQuantity.update(value => value + 1);
      this.finalLanguageQuantity.emit(this.languageQuantity());
    }
  }

}
