/**
 * Interface representing a Wikibase entity with its key properties
 */
export interface WikibaseEntity {
  id: string;
  label?: string;
  aliases?: string[];
  description?: string;
}


