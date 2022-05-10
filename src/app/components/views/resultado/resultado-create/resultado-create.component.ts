import { ResultadoService } from './../resultado.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Resultado} from './resultado';
@Component({
  selector: 'app-resultado-create',
  templateUrl: './resultado-create.component.html',
  styleUrls: ['./resultado-create.component.css']
})
export class ResultadoCreateComponent implements OnInit {
  
  
  
  resultadoForm: FormGroup = this.formBuilder.group({

      number1: [null],
      number2: [null],
      resultado:[null],
      status:[null]
    
});

  submittingForm: boolean = false;
  resultado: Resultado = new Resultado();

  constructor(private service: ResultadoService, private formBuilder:FormBuilder
    
    ) { }

  ngOnInit(): void {

  }
   
 
 createResultado(){

 this.service.create(this.resultadoForm.value).subscribe(retorno =>{
  this.resultado_resultado?.setValue(retorno.resultado)
  this.resultado_status?.setValue(retorno.status)
 


 })
}
  


get resultado_resultado() { return this.resultadoForm.get("resultado")};
get resultado_status() { return this.resultadoForm.get("status")};

}