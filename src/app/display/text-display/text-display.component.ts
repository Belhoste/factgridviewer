import { Component, Input, OnChanges, ChangeDetectorRef, SimpleChanges, SimpleChange, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgClass } from '@angular/common';


@Component({
    selector: 'app-text-display',
    templateUrl: './text-display.component.html',
    styleUrls: ['./text-display.component.scss'],
    standalone: true,
    imports: [NgClass, MatCardModule]
})
export class TextDisplayComponent implements OnChanges {
  private changeDetector = inject(ChangeDetectorRef);


  @Input() trans ;

  selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];
  text:string ="";
  transcription:string
  isTrans:boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
          this.transcription = "Transcription";
          if (this.selectedLang === "de") { this.transcription = "Transkription" };
          if (this.selectedLang === "fr") { this.transcription = "Transcription" };
           if (this.selectedLang === "es") { this.transcription = "Transcripción" };
           if(this.trans === undefined){ this.isTrans = false };
          const currentTrans:SimpleChange = changes.trans;
    
          this.text = currentTrans.currentValue;
          if(this.text !== undefined){ this.isTrans = true };
          if(this.text ==""){ this.isTrans = false };
          console.log(this.text);
          console.log(this.isTrans);
          
    }

}
