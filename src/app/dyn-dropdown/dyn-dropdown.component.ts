import { Component, OnInit } from '@angular/core';
import { DynDropdownService } from './dyn-dropdown.service';

@Component({
  selector: 'app-dyn-dropdown',
  templateUrl: './dyn-dropdown.component.html',
  styleUrls: ['./dyn-dropdown.component.css']
})
export class DynDropdownComponent implements OnInit {
 
  
  changeDistrict:any;
  states: any;
  Districts: any;
  selectedOption: string ="";
data = [
  {
    "id":1,
    "name": "Andhra Pradesh",
    "districts":
      {
        "id":1,
        "name":"Ambedkar Konaseema",
       "s_id":1
      }
    
  }
];
  Mandal: any;
  changeMandal: any;


 constructor(private dynDropdownService:DynDropdownService){}
  ngOnInit(): void {
    this.dynDropdownService.Sates().subscribe(data=>{
    this.states = data;
    });

    this.dynDropdownService.Districts().subscribe(data=>{
      this.Districts = data;
      console.log(data);
      });

      this.dynDropdownService.Mandal().subscribe(data=>{
        this.Mandal = data;
        
        });
  }
  changeUpdateDistricts(e:any){
    let sId = e.target.value;
    console.log(sId);
    this.changeDistrict = this.Districts.filter((d:any)=>{
     return sId == d.s_id;
      
    })
  }

  
  changeUpdateMandal(e:any){
    let sId = e.target.value;
    console.log(sId);
    this.changeMandal = this.Mandal.filter((d:any)=>{
      return sId == d.d_id;
    })
  }
}
