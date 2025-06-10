import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UnitPipe } from '../../unit.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-education-display',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, RouterLink, UnitPipe, MatTooltipModule],
  templateUrl: './education-display.component.html',
  styleUrl: './education-display.component.scss'
})
export class EducationDisplayComponent {

 @Input() education;
 @Input() training;

  ngOnInit() {
    console.log('education:', this.education);
    // Pour chaque entrée, log les qualifiers2
    this.education?.forEach(P => {
      P?.forEach(M => {
        if (M["qualifiers-order"]) {
          console.log('qualifiers-order', M["qualifiers-order"]);
        };
        if (M.qualifiers2) {
          console.log('qualifiers2:', M.qualifiers2);
          M.qualifiers2.forEach(Q => {
            console.log('Q.display:', Q.display);
          });
        }
      });
    });
  }


  showReferences = false; // état du volet

  toggleReferences() {
    this.showReferences = !this.showReferences;
  }

  openImage(image){ //handling click for picture (open in new tab) 
    window.open(image);}
}
