import { Component, Input, OnChanges, ChangeDetectorRef, SimpleChanges, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent implements OnChanges {

  @Input() trans ;

  selectedLang: string = (localStorage['selectedLang'] === undefined) ? "en" : localStorage['selectedLang'];
  text:string ="";
  transcription:string
  isTrans:boolean = false;

  constructor(private changeDetector:ChangeDetectorRef) { }

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

          console.log(this.isTrans);
          
    }

}
