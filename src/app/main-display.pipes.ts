import { Pipe, PipeTransform } from '@angular/core';

// Pipe pour obtenir les clés d'un objet
@Pipe({ name: 'objectKeys', standalone: true })
export class ObjectKeysPipe implements PipeTransform {
  transform(value: any): string[] {
    return value ? Object.keys(value) : [];
  }
}

// Pipe pour filtrer P499
@Pipe({ name: 'filterNotP499', standalone: true })
export class FilterNotP499Pipe implements PipeTransform {
  transform(keys: string[]): string[] {
    return keys.filter(k => k !== 'P499');
  }
}

// Pipe pour trier par P499
@Pipe({ name: 'orderByP499', standalone: true })
export class OrderByP499Pipe implements PipeTransform {
  transform(statements: any[]): any[] {
    if (!statements) return [];
    const withOrder = statements.filter(s => s.qualifiers && s.qualifiers['P499']);
    const withoutOrder = statements.filter(s => !s.qualifiers || !s.qualifiers['P499']);
    withOrder.sort((a, b) =>
      parseInt(a.qualifiers['P499'][0].datavalue.value, 10) -
      parseInt(b.qualifiers['P499'][0].datavalue.value, 10)
    );
    return [...withOrder, ...withoutOrder];
  }
}
