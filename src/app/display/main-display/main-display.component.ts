import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UnitPipe } from '../../unit.pipe';

@Component({
  selector: 'app-main-display',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, RouterLink, RouterOutlet, UnitPipe],
  templateUrl: './main-display.component.html',
  styleUrl: './main-display.component.scss'
})
export class MainDisplayComponent {

  @Input() mainList;
  @Input() mainTitle;
  @Input() list;

 openImage(image){ //handling click for picture (open in new tab) 
    window.open(image);
  }

}
