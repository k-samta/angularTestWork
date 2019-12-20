import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h2> Department Number is {{departmentId}}</h2 >
    <p>
      <button (click)="getDetail()">Detail</button>
    </p>
    <router-outlet></router-outlet>
    <p>
      <button (click)="goPrev1()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>
    <div>
      <button (click)="goToDepartList()">Back</button>
    </div>
 
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId = 3; 
  constructor(private route : ActivatedRoute,private router : Router) {

   }

  ngOnInit() {
   // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
  //  console.log(this.departmentId);

  this.route.paramMap.subscribe((params : ParamMap) =>{
    this.departmentId =parseInt(params.get('id'));
  })

/*
this.route.paramMap.subscribe((params: ParamMap) => {
  let id = parseInt(params.get('id'));
  this.departmentId = id; */

} 

goPrev1(){
 /* let perId = this.departmentId-1 ;
  console.log("on prev");
  this.router.navigate(["/department",perId]);  */  
  let previousId = this.departmentId - 1;
  this.router.navigate(['../', previousId],{relativeTo :this.route});
}
goNext(){
  let nextId = this.departmentId+1 ;
  console.log("on next");
  this.router.navigate(['../',nextId],{relativeTo : this.route});
}

goToDepartList(){
  let selectedID = this.departmentId ? this.departmentId: null ;
 // this.router.navigate(['/department',{id:selectedID}]) ;
  this.router.navigate(['../',{id:selectedID}],{relativeTo : this.route} ) ;
}

getDetail()
{
  this.router.navigate(['detail'],{relativeTo : this.route})
}

}
