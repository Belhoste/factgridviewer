import { Injectable } from '@angular/core';
import { WikibaseEntity } from '../models/wikibase-entity.model';

/**
 * Service to manage search caches (term cache and broad cache)
 * Aligned with the SearchComponent after refactoring.
 */
@Injectable({ providedIn: 'root' })
export class SearchCacheService {
  // --- Broad cache for large result sets (completion, etc.) ---
  private broadCacheInput: string = '';
  private broadCacheItems: WikibaseEntity[] = [];
  private broadCacheComplete: boolean = false;

  /**
   * Invalidate all caches (called when search is reset)
   */
  invalidateCache(): void {
    this.broadCacheInput = '';
    this.broadCacheItems = [];
    this.broadCacheComplete = false;
  }

  /**
   * Set the completeness status of the broad cache (API truncated or not)
   */
  setCacheComplete(isComplete: boolean): void {
    this.broadCacheComplete = isComplete;
  }

  /**
   * Get the current items in the broad cache
   */
  getItems(): WikibaseEntity[] {
    return this.broadCacheItems;
  }

  /**
   * Is the broad cache complete (not truncated by API limits)?
   */
  isComplete(): boolean {
    return this.broadCacheComplete;
  }

  /**
   * Cache the items for the current search input (when API is not truncated)
   */
  cacheItems(input: string, items: WikibaseEntity[]): void {
    this.broadCacheInput = input;
    this.broadCacheItems = items;
  }
}
