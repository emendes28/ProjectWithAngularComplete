import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';
@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
  recepies: Recepie[] = [
    new Recepie('A teste recepie', 'This is simply a test','http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    new Recepie('A teste recepie', 'This is simply a test','http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
