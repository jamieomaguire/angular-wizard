import { Component, OnInit } from '@angular/core';
import { StepNavigationService } from 'src/app/services/step-navigation/step-navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-step',
  templateUrl: './previous-step.component.html',
  styleUrls: ['./previous-step.component.scss']
})
export class PreviousStepComponent implements OnInit {

  constructor(private readonly navigationService: StepNavigationService, private readonly router: Router) { }

  ngOnInit() {
  }

  public goToPreviousStep() {
    console.log('going to previous step!');
    this.navigationService.getPreviousStep();
    this.router.navigateByUrl('/application/details');
  }
}
