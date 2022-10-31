import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { Marker, Popup , TileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }



  ngOnInit() {
  this.map()
  }  
   


  map(){
    var map = L.map('map').setView([8.514375, 76.909676], 5000);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  }
  
}

