import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UnitPipe } from '../../unit.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header-display',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, RouterLink, UnitPipe, MatTooltipModule],
  templateUrl: './header-display.component.html',
  styleUrl: './header-display.component.scss'
})
export class HeaderDisplayComponent {

  @Input() headerDetail;

  // Optimized headerDetail for display in the template
  headerDetailOptimized: any[] = [];

  ngOnChanges() {
    if (this.headerDetail) {
      this.headerDetailOptimized = this.transformHeaderDetail(this.headerDetail);
    }
  }

  // Used for Angular's trackBy in @for loops
  trackById(index: number, item: any) {
    return item.id;
  }

  showReferences = false; // state for references panel

  toggleReferences() {
    this.showReferences = !this.showReferences;
  }

  /**
   * Transforms the raw headerDetail structure into an optimized array for display.
   * Each property object contains id, label, description, and a claims array.
   */
  transformHeaderDetail(rawHeaderDetail: any[]): any[] {
    return rawHeaderDetail.map((claimsArr: any[]) => {
      // Find the metadata object (the one with 'id', 'label', etc.)
      const meta = claimsArr.find(obj => obj.id && typeof obj.label === 'string');
      // Filter out claim objects (those with mainsnak)
      const claims = claimsArr.filter(obj => obj.mainsnak);

      // Get label/description from meta or first claim
      const firstClaim = claims[0];
      return {
        id: meta?.id || firstClaim?.mainsnak?.property || '',
        label: meta?.label || firstClaim?.mainsnak?.label || '',
        description: meta?.description || firstClaim?.mainsnak?.description || '',
        claims: Array.isArray(claims) ? claims : []
      };
    });
  }

}
