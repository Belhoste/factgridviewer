import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface IframeGroup {
  property: string;
  label: string;
  claims: any[];
}

@Component({
  selector: 'app-iframes-display',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './iframes-display.component.html',
  styleUrl: './iframes-display.component.scss'
})
export class IframesDisplayComponent {

  @Input() iframeGroups: IframeGroup[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  sanitize(url: string): SafeResourceUrl {
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : '';
  }
}
