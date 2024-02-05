import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UnitPipe } from '../../unit.pipe';

@Component({
  selector: 'app-education-display',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, RouterLink, UnitPipe],
  templateUrl: './education-display.component.html',
  styleUrl: './education-display.component.scss'
})
export class EducationDisplayComponent {

 @Input() education;
 @Input() training;

}
