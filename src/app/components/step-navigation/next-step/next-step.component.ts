import { Component, OnInit } from '@angular/core';
import { StepNavigationService } from 'src/app/services/step-navigation/step-navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-step',
  templateUrl: './next-step.component.html',
  styleUrls: ['./next-step.component.scss']
})
export class NextStepComponent implements OnInit {

  constructor(private readonly navigationService: StepNavigationService, private readonly router: Router) { }

  ngOnInit() {
  }

  public goToNextStep() {
    const nextStep = this.navigationService.getNextStep();
    this.router.navigateByUrl(nextStep.url);
  }
}
