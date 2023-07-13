import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {


  hero={
    name:'',
    power:0,
    image:''
  }



  ajout(){
    this._shared.createNewHero(this.hero).subscribe(
      res=>{

        this.hero={
          name:'',
          power:0,
          image:''
        }
      },
      err=>{
        console.log(err);

      }
    );

  }

  constructor(public _shared:SharedService) { }

}
