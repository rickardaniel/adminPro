import { Component, OnDestroy } from '@angular/core';
import {  Observable, interval, retry, Subscription } from 'rxjs';
import {  filter, map, take } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {
  intervalSubs:Subscription;
  constructor() { 
    // this.retornoObservable().pipe(
    //         retry(1)
    //          ).subscribe(
    //           valor => console.log('Subs: ', valor),
    //           (err) => console.warn('Error', err),
    //           () => console.info('Obs terminado')   
    // );

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log)
  }

  ngOnDestroy(): void {
   this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{
      return  interval(500)
                            .pipe(
                              // take(10),
                              map(valor => valor+1),
                              filter(valor => (valor % 2 === 0)?true:false),
                             
                                 );
    
  }
  retornoObservable(): Observable<number>{
    let i = -1;
    return new Observable( observer =>{
    const intervalo = setInterval(() =>{
       i++
       observer.next(i)
       if(i==4){
        clearInterval(intervalo);
        observer.complete();  
       }
       if(i==2){
        observer.error("i llegó a 2")
       }
    },1000)

  } );
  }


}
