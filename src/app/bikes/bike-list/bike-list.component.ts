import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike';
import { BIKES } from '../mock-bikes-list';
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { BikeService } from "../bike.service";

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
   
    bikes$: Observable<Bike[]>;
    selectedId: number;
    //  products: Product[] = [];
 //   bikes: Bike[]=[];
   
  constructor( private service: BikeService, private route: ActivatedRoute)
  { 
 //     this.bikes=BIKES;
  }
 // selectedBike: Bike;
  ngOnInit(): void {
      this.bikes$ = this.route.paramMap.pipe(
              switchMap(params => {
                this.selectedId = +(params.get('id'));
                return this.service.getBikes();
              })
            );
  }
 // onSelect(bike: Bike): void {
 //     this.selectedBike = bike;
 //   }
}
