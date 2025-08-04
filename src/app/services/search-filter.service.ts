import { Injectable } from '@angular/core';
import { WikibaseEntity } from '../models/wikibase-entity.model';

/**
 * Service to handle search filtering logic for Wikibase entities.
 */
@Injectable({ providedIn: 'root' })
export class SearchFilterService {

  /**
   * Normalize a string: lowercase, remove diacritics, trim, and collapse spaces.
   */
  normalizeString(s: string | undefined | null): string {
    if (!s) return '';
    return s.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Build CirrusSearch filters based on search options.
   * @param searchTerm The search term (first word recommended for CirrusSearch)
   * @param selectedId The selected research field ID
   * @param filterPeople Whether to filter for people
   * @param filterPublication Whether to filter for publications
   */
  buildSearchFilters(
    searchTerm: string,
    selectedId: string,
    filterPeople: boolean,
    filterPublication: boolean
  ): string[] {
    const filters: string[] = [];
    if (filterPeople) filters.push('haswbstatement:P2=Q7');
    if (filterPublication) filters.push('haswbstatement:P2=Q20');
    if (selectedId && selectedId !== '-' && selectedId !== 'Q0' && selectedId !== 'all') {
      filters.push(`haswbstatement:P131=${selectedId}`);
    }
    filters.push(`${searchTerm}*`);
    return filters;
  }

  /**
   * Check if an entity matches the search criteria (label, aliases, description).
   * @param item The Wikibase entity
   * @param searchTerm The normalized search term (full input)
   * @param showInDescription Whether to match in description
   */
  matchesSearchCriteria(
    item: WikibaseEntity,
    searchTerm: string,
    showInDescription: boolean
  ): boolean {
    const normalizedLabel = this.normalizeString(item.label);
    const normalizedAliases = (item.aliases || []).map(this.normalizeString);
    const normalizedDesc = this.normalizeString(item.description);

    if (normalizedLabel.includes(searchTerm)) return true;
    if (normalizedAliases.some(alias => alias.includes(searchTerm))) return true;
    if (showInDescription && normalizedDesc.includes(searchTerm)) return true;
    return false;
  }

  /**
   * Filter a list of entities locally based on the search term and options.
   * @param entities The entities to filter
   * @param searchTerm The search term (full input, not just first word)
   * @param showInDescription Whether to match in description
   */
  filterResultsLocally(
    entities: WikibaseEntity[],
    searchTerm: string,
    showInDescription: boolean
  ): WikibaseEntity[] {
    const normalizedInput = this.normalizeString(searchTerm);
    return entities.filter(item =>
      this.matchesSearchCriteria(item, normalizedInput, showInDescription)
    );
  }
}

