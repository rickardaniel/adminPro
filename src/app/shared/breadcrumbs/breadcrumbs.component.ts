import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy  {

  titulo:string = '';
  tituloSubs$: Subscription;
  constructor( private router:Router) { 
    this.tituloSubs$ = this.getTitulosRuta().subscribe(data =>{
                                              this.titulo = data.titulo
                                              document.title = `AdminPro - ${this.titulo}`
                                            })
  }
  ngOnDestroy(): void {
   this.tituloSubs$.unsubscribe()
  }

 getTitulosRuta(){
     return  this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd),
        filter( (data:any) => data.snapshot.firstChild === null),
        map((data:any)=>data.snapshot.data)   
      )
      
  }

}
