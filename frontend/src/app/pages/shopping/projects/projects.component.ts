import { AfterViewInit, Component } from '@angular/core';
import { environment } from '@environments/environment';

import { MatDialog } from '@angular/material/dialog';

import { Marker } from '@core/interfaces/markers';
import { AddMarkerComponent } from '@shared/components/modals/add-marker/add-marker.component';
import { filter, map } from 'rxjs';

declare var mapboxgl: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {

  private publicTokenMapbox = environment.publicTokenMapbox;

  map: any;
  startingLocation: Pick<Marker, 'lng' | 'lat'> = {
    lng: -75.57958346929655,
    lat: 6.252709570332007
  }
  markers: Marker[] = [
    {
      lng: -75.5685113102044,
      lat: 6.252517599861058,
      tag: 'Plaza Botero'
    },
    {
      lng:-75.58996898260216,
      lat: 6.258148698025163,
      tag: 'Estadio de Fútbol Atanasio Girardot'  
    },
    {
      lng: -75.58035594531547,
      lat: 6.237927654428072,
      tag: 'Pueblito Paisa'
    }
  ];

  constructor(
    public dialog: MatDialog
  ){}

  ngAfterViewInit(): void {
    this.setMap( this.startingLocation.lng, this.startingLocation.lat );
  }

  setMap( lng: number, lat: number ) {

    // config mapboxgl
    mapboxgl.accessToken = this.publicTokenMapbox;
    this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: 12.5, // starting zoom
    }); 

    this.map.addControl(new mapboxgl.NavigationControl( { showCompass: false } ));

    // add marker
    for ( let i = 0; i < this.markers.length; i++ ) {
        this.setMarker( this.markers[i] );
    }

  }

  setMarker( marker: Marker ) {  
    new mapboxgl.Marker({
      color: "#1E81CE",
      draggable: true
    })
    .setPopup(new mapboxgl.Popup().setHTML(`<h1>${ marker.tag }</h1>)`))
    .setLngLat([ marker.lng, marker.lat ]).addTo(this.map);
  }

  addMarker() {
    const dialogRef = this.dialog.open( AddMarkerComponent, {
      panelClass: 'add-marker-modal'
    });

    dialogRef.afterClosed()
    .pipe(
        filter( (newMarker: Marker) => newMarker !== undefined ),
        map((newMarker) => {
          this.setMarker( newMarker);
          this.map.setCenter([ newMarker.lng, newMarker.lat ]);
        })
    ).subscribe();
  }

}
