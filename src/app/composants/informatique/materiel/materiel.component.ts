import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'mar-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {

  @Input("m") mat:Materiel;
  
  id:"";
  constructor(private activatedRoute:ActivatedRoute) { }
  ngOnInit() {
   this.id=this.activatedRoute.snapshot.params['id'];
    }
  
}
