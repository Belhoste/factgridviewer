import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UnitPipe } from '../../unit.pipe';

@Component({
  selector: 'app-iframes-display',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, RouterLink, UnitPipe],
  templateUrl: './iframes-display.component.html',
  styleUrl: './iframes-display.component.scss'
})
export class IframesDisplayComponent {

@Input() claims
@Input() urlSafe1
@Input() urlSafe2
@Input() urlSafe3
@Input() urlSafe4
@Input() urlSafe5
@Input() urlSafe6
@Input() urlSafe7
@Input() urlSafe8
@Input() urlSafe9
@Input() urlSafe10
@Input() urlSafe11
@Input() urlSafe12
@Input() urlSafe13
@Input() urlSafe14
@Input() urlSafe15




}
