import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UnitPipe } from '../../unit.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';

// Importez vos pipes personnalisés
import { ObjectKeysPipe, FilterNotP499Pipe, OrderByP499Pipe } from '../../main-display.pipes';

@Component({
  selector: 'app-main-display',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    RouterLink,
    RouterOutlet,
    UnitPipe,
    MatTooltipModule,
    ObjectKeysPipe,
    FilterNotP499Pipe,
    OrderByP499Pipe
  ],
  templateUrl: './main-display.component.html',
  styleUrl: './main-display.component.scss'
})
export class MainDisplayComponent {
  @Input() mainList;
  @Input() mainTitle;
  @Input() list;

  showReferences = false;


  ngOnChanges() {
    if (this.mainList) {
      console.log(this.mainList)
    }
  }

  toggleReferences() {
    this.showReferences = !this.showReferences;
  }

  openImage(image) {
    window.open(image);
  }
}
