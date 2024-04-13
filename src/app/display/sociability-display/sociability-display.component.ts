import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UnitPipe } from '../../unit.pipe';

@Component({
  selector: 'app-sociability-display',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, RouterLink, UnitPipe],
  templateUrl: './sociability-display.component.html',
  styleUrl: './sociability-display.component.scss'
})
export class SociabilityDisplayComponent {

@Input() sociabilityAndCulture;
@Input() sociability;

 openImage(image){ //handling click for picture (open in new tab) 
    window.open(image);}

}
