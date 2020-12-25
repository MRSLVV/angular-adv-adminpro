import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit  {
  
  ngOnInit()  {
      this.btnClass = `btn ${this.btnClass}`;
    
  }
 //Renombrar argumento
 @Input('valor') progreso: number = 40;
  //@Input() progreso: number = 10;
  //Ususalemente los outputs son de tipo eventEmiters, es una funcion que el componente padre va apoder ejecutar

 @Input() btnClass: string = 'btn-primary';
  
 @Output ('valor') valorSalida: EventEmitter <number>= new EventEmitter(); 


  cambiarValor(valor: number){
    //si el progreso es mayor o igual a 100 y el valor es positivo es igual al 100%
    if( this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso= 100;
      
    }
    //Si progreso es menor o igual a cero  y el valor es negativo el progreso es igual a  0
    if(this.progreso <=0 && valor <0){
      this.valorSalida.emit(0);
      return this.progreso = 0;

    }
    
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);

  }

  onChange( nuevoValor: number ){
    
    if(nuevoValor >= 100 ){
      this.progreso = 100;

    }
    else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else{
      this.progreso = nuevoValor
    }
    this.valorSalida.emit(this.progreso); 

    
  }

}
