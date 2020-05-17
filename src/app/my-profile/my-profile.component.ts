import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<String>();
  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

