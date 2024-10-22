import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advanced-search-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advanced-search-list.component.html',
  styleUrl: './advanced-search-list.component.scss'
})
export class AdvancedSearchListComponent implements OnChanges {

  @Input() selectedProjectList;
  @Input() selectedStatementList;
  @Input() selectedItemValue;
  @Input() message = "";

  projectList: string[];
  statementList: string;
  itemValue: string;
  projectStatement: string;


  ngOnChanges(changes: SimpleChanges): void {

    if (changes.selectedProjectList) {
       this.projectList = changes.selectedProjectList.currentValue;
    };

    if (changes.selectedStatementList) {
      this.statementList = changes.selectedStatementList.currentValue;
    };

    if (changes.selectedItemValue) {
       this.itemValue = changes.selectedItemValue.currentValue;
    };
 
    this.projectStatement = this.statementValues(this.projectList);

  }

  statementValues(value: string[]) {
    let u = "VALUES ?proj { ";
    let v = "";
    for (let i = 0; i < value.length; i++) {
      v = v + "wd:" + value[i] + " "
    }
    return u + v + "}";
  }


}
