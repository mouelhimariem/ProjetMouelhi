import { Component, OnInit } from '@angular/core';
import { MaterielService } from 'src/app/services/materiel.service';
import { Materiel } from '../../../models/materiel';

@Component({
  selector: 'mar-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  afficher:boolean =false;
  materiel:Materiel;
   id:string="";
  
 /*
onClick(){
  this.afficher = !this.afficher;
}*/

constructor(private detailmaterielService:MaterielService) { }
ngOnInit(): void {
 this.materiel = this.detailmaterielService.getMaterielById("2");
  }
 
 

}
