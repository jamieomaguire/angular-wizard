import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { Step } from '../step';
import json from '../fake-senior-journey.json';
// import { Journey } from '../journey';

@Injectable({
  providedIn: 'root'
})
export class StepNavigationService {

  public routeChange: Observable<string>;
  public currentStep: Step;
  public journey: any;

  constructor(private readonly router: Router) {
    console.log('being constructed');
    this.getJourneySteps();
    this.currentStep = this.journey.steps.find(s => s.url === this.router.url)
    this.routeChange = new Observable((observer) => {
      this.router.events.subscribe((event: any) => {
        const newRoute = this.getNewRoute(event);
        if (newRoute) {
          observer.next(newRoute);
        }
      });
    });
  }

  private getNewRoute(event: any): string {
    if (event instanceof NavigationEnd) {
      return event.urlAfterRedirects;
    }

    return null;
  }

  public getNextStep(): any {
    console.log('getting next step');
    return this.journey.steps.find(s => s.order === this.currentStep.order + 1);
  }

  public getPreviousStep(): any {
    console.log('getting previous step');
    return this.journey.steps.find(s => s.order === this.currentStep.order - 1);
  }

  public getJourneySteps() {
    // hard code entry level type
    console.log(json);
    this.journey = json;
  }
}
