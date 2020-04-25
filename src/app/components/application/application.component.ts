import { Component, OnInit } from '@angular/core';
import { StepNavigationService } from 'src/app/services/step-navigation/step-navigation.service';
import { Subscription } from 'rxjs';
import { Step } from 'src/app/services/step';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor(private readonly navigationService: StepNavigationService) { }

  public routeSubscription: Subscription;

  ngOnInit() {
    this.routeSubscription = this.navigationService.routeChange
      .subscribe((newUrl) => {
        const currentStep =  this.navigationService.journey.steps
          .find(s => s.url.toLowerCase() === newUrl.toLowerCase());

        const typedCurrentStep = new Step(currentStep.url, currentStep.order);
        this.navigationService.currentStep = typedCurrentStep;
      });

  }

}
