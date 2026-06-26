import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.html'
})
export class Mapa implements OnInit {

  map!: L.Map;
  searchAddress: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.map = L.map('map').setView([-23.5505, -46.6333], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'OpenStreetMap'
    }).addTo(this.map);

  }

  searchLocation() {

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${this.searchAddress}`;

    this.http.get<any[]>(url).subscribe(result => {

      if (result.length > 0) {

        const lat = result[0].lat;
        const lon = result[0].lon;

        this.map.setView([lat, lon], 16);

        L.marker([lat, lon]).addTo(this.map)
          .bindPopup(this.searchAddress)
          .openPopup();

      }

    });

  }

}