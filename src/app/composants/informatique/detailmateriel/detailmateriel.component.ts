import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  
 
   constructor(private detailmaterielService:MaterielService,private activatedRoute:ActivatedRoute,private router:Router) { }

   ngOnInit(): void {
     this.id= this.activatedRoute.snapshot.params['id'];
    this.materiel = this.detailmaterielService.getMaterielById(this.id);
     }
     onretour()
     {this.router.navigate(['/informatique']);}
   
   }
