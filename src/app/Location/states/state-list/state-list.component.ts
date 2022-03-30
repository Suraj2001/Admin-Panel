import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/Models/Country.model';
import { States } from 'src/app/Models/States.model';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.scss'],
})
export class StateListComponent implements OnInit {
  states?: States[];
  stateId?: number;
  stateRoute?: Subscription;

  stateForm = new FormGroup({
    state: new FormControl(''),
  });

  constructor(
    private locationService: LocationService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.locationService.findAllStates().subscribe((data) => {
      // console.log(data);
      this.states = data;
    });
  }
  openDialog(content: any, state: States) {
    this.modalService
      .open(content, { ariaLabelledBy: 'exampleModalLabel' })
      .result.then((result) => {
        if (result === 'yes') {
          this.deleteState(state);
        }
      });
  }
  openCountryDialog(content: any, state: States) {
    this.modalService
      .open(content, { centered: true, size: 'lg' })
      .result.then((result) => {});
    this.stateId = state.id;
    this.stateForm = new FormGroup({
      state: new FormControl(state.state),
    });
  }
  updateState() {
    this.modalService.dismissAll();
    this.locationService
      .updateState(this.stateForm.value, this.stateId)
      .subscribe(() => {});
    location.reload();
  }
  deleteState(state: States) {
    this.locationService.deleteState(state.id).subscribe(
      (data) => this.states?.splice(this.states?.indexOf(state), 1),
      (error) => console.error('Error in deleting country')
    );
  }
}
