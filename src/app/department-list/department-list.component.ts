import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { SelectorContext } from '@angular/compiler';
@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List !
    <h3>
        <ul class="items">
          <li *ngFor="let department of departments" (click)="onSelect(department)"  [class.selected] ="isSelected(department)">
            <span class="badge">
              {{department.id }} 
            </span>
            {{department.name}}
          </li>
        </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
 public departments = [{ id: 1, "name" :"Developer"},
                       {id :2 , "name" :"Personal"},
                       {id : 3, "name" :"HR"}];

  public selectedId ;    
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.paramMap.subscribe((params : ParamMap) => 
     this.selectedId = parseInt(params.get('id'))  
     )
  };

  onSelect(department){
    this.router.navigate([{relativeTo : this.route}, department.id ]);
  // this.router.navigate([department.id], { relativeTo: this.route });

  }

  isSelected(department){
    return department.id === this.selectedId ;
  }

}
