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

  public get onFirstStep(): boolean {
    return this.navigationService.onFirstStep;
  }

  public get onLastStep(): boolean {
    return this.navigationService.onLastStep;
  }

  ngOnInit() {
  }

}
