import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UnitPipe } from '../../unit.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';



@Component({
  selector: 'app-career-display',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, RouterLink, UnitPipe, MatTooltipModule],
  templateUrl: './career-display.component.html',
  styleUrl: './career-display.component.scss'
})
export class CareerDisplayComponent {

 @Input() careerAndActivities;
 @Input() career;

  showReferences = false; // état du volet

  toggleReferences() {
    this.showReferences = !this.showReferences;
  }

 openImage(image){ //handling click for picture (open in new tab) 
    window.open(image);}

}
