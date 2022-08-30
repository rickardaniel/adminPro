import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {
 usuarios:any=[];
  constructor() { }

  ngOnInit(): void {
    this.getUsuarios();
    this.getUsuarios().then(usuarios =>{
      this.usuarios = usuarios;
      console.log(usuarios);
      
    })
    // const promesa  = new Promise((resolve, reject)=>{
    //   if(false){
    //     resolve('hola mundo')
    //   }else{
    //     reject('Algo sali[o mal')
    //   }
      
      
    // });
    // promesa.then((mensaje)=>{
    //   console.log(mensaje);
      
    // }).catch(error =>{
    //   console.log('Error en mi promesa', error);
      
    // })
    // console.log('fin del init');
    
  }

  getUsuarios(){
   return new Promise(resolve =>{
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
        .then(body =>{resolve(body.data);
        })
    })
    
  
  }

}
