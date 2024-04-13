import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UnitPipe } from '../../unit.pipe';

@Component({
  selector: 'app-sources-display',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, RouterLink, UnitPipe],
  templateUrl: './sources-display.component.html',
  styleUrl: './sources-display.component.scss'
})

export class SourcesDisplayComponent {

@Input() sourcesList ;
@Input() sources ;

 openImage(image){ //handling click for picture (open in new tab) 
    window.open(image);}

}
