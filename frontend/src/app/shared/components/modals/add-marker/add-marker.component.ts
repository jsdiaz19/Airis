import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-marker',
  templateUrl: './add-marker.component.html',
  styleUrls: ['./add-marker.component.scss']
})
export class AddMarkerComponent {

  formAddMarker = this.fb.group({
    tag: ['', [ Validators.required]],
    lng: ['', [ Validators.required, Validators.pattern(/[0-9-]+$/)]],
    lat: ['', [ Validators.required, Validators.pattern(/[0-9-]+$/)]]
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddMarkerComponent>
  ) { }

  addMarker() {
      
    if ( this.formAddMarker.valid ) {
      this.dialogRef.close( this.formAddMarker.value );
    }

  }

}