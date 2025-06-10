import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UnitPipe } from '../../unit.pipe';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframes-display',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, RouterLink, UnitPipe],
  templateUrl: './iframes-display.component.html',
  styleUrl: './iframes-display.component.scss'
})
export class IframesDisplayComponent {

  @Input() claims;

  private _urlSafe1: SafeResourceUrl;
  @Input() set urlSafe1(url: string) {
    this._urlSafe1 = this.sanitize(url);
  }
  get urlSafe1(): SafeResourceUrl { return this._urlSafe1; }

  private _urlSafe2: SafeResourceUrl;
  @Input() set urlSafe2(url: string) { this._urlSafe2 = this.sanitize(url); }
  get urlSafe2(): SafeResourceUrl { return this._urlSafe2; }

  private _urlSafe3: SafeResourceUrl;
  @Input() set urlSafe3(url: string) { this._urlSafe3 = this.sanitize(url); }
  get urlSafe3(): SafeResourceUrl { return this._urlSafe3; }

  private _urlSafe4: SafeResourceUrl;
  @Input() set urlSafe4(url: string) { this._urlSafe4 = this.sanitize(url); }
  get urlSafe4(): SafeResourceUrl { return this._urlSafe4; }

  private _urlSafe5: SafeResourceUrl;
  @Input() set urlSafe5(url: string) { this._urlSafe5 = this.sanitize(url); }
  get urlSafe5(): SafeResourceUrl { return this._urlSafe5; }

  private _urlSafe6: SafeResourceUrl;
  @Input() set urlSafe6(url: string) { this._urlSafe6 = this.sanitize(url); }
  get urlSafe6(): SafeResourceUrl { return this._urlSafe6; }

  private _urlSafe7: SafeResourceUrl;
  @Input() set urlSafe7(url: string) { this._urlSafe7 = this.sanitize(url); }
  get urlSafe7(): SafeResourceUrl { return this._urlSafe7; }

  private _urlSafe8: SafeResourceUrl;
  @Input() set urlSafe8(url: string) { this._urlSafe8 = this.sanitize(url); }
  get urlSafe8(): SafeResourceUrl { return this._urlSafe8; }

  private _urlSafe9: SafeResourceUrl;
  @Input() set urlSafe9(url: string) { this._urlSafe9 = this.sanitize(url); }
  get urlSafe9(): SafeResourceUrl { return this._urlSafe9; }

  private _urlSafe10: SafeResourceUrl;
  @Input() set urlSafe10(url: string) { this._urlSafe10 = this.sanitize(url); }
  get urlSafe10(): SafeResourceUrl { return this._urlSafe10; }

  private _urlSafe11: SafeResourceUrl;
  @Input() set urlSafe11(url: string) { this._urlSafe11 = this.sanitize(url); }
  get urlSafe11(): SafeResourceUrl { return this._urlSafe11; }

  private _urlSafe12: SafeResourceUrl;
  @Input() set urlSafe12(url: string) { this._urlSafe12 = this.sanitize(url); }
  get urlSafe12(): SafeResourceUrl { return this._urlSafe12; }

  private _urlSafe13: SafeResourceUrl;
  @Input() set urlSafe13(url: string) { this._urlSafe13 = this.sanitize(url); }
  get urlSafe13(): SafeResourceUrl { return this._urlSafe13; }

  private _urlSafe14: SafeResourceUrl;
  @Input() set urlSafe14(url: string) { this._urlSafe14 = this.sanitize(url); }
  get urlSafe14(): SafeResourceUrl { return this._urlSafe14; }

  private _urlSafe15: SafeResourceUrl;
  @Input() set urlSafe15(url: string) { this._urlSafe15 = this.sanitize(url); }
  get urlSafe15(): SafeResourceUrl { return this._urlSafe15; }

  constructor(private sanitizer: DomSanitizer) { }

  private sanitize(url: string): SafeResourceUrl {
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  }
}
