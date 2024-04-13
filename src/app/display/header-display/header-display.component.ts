import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UnitPipe } from '../../unit.pipe';


@Component({
  selector: 'app-header-display',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, RouterLink, UnitPipe],
  templateUrl: './header-display.component.html',
  styleUrl: './header-display.component.scss'
})
export class HeaderDisplayComponent {

@Input() headerDetail ;



}
