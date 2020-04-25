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
  public currentStep: Step;
  public journey: any;
  public onLastStep: boolean;
  public onFirstStep: boolean;

  constructor(private readonly router: Router) {
    console.log('being constructed');
    this.getJourneySteps();
    this.initialiseCurrentStep();
    this.checkIfFirstOrLastStep();
    this.router.events.subscribe((event: any) => {
      const newRoute = this.getNewRoute(event);
      if (newRoute) {
        console.log('updating current step');
        this.setCurrentStep(newRoute);
        this.checkIfFirstOrLastStep();
      }
    });
  }

  private getNewRoute(event: any): string {
    if (event instanceof NavigationEnd) {
      return event.urlAfterRedirects;
    }

    return null;
  }

  public getNextStep(): any {
    return this.journey.steps.find(s => s.order === this.currentStep.order + 1);
  }

  public getPreviousStep(): any {
    return this.journey.steps.find(s => s.order === this.currentStep.order - 1);
  }

  public getJourneySteps() {
    this.journey = json;
  }

  private setCurrentStep(url: string) {
    const currentStep = this.journey.steps
      .find(s => s.url.toLowerCase() === url.toLowerCase());

    const typedCurrentStep = new Step(currentStep.url, currentStep.order);
    this.currentStep = typedCurrentStep;
  }

  private initialiseCurrentStep(): void {
    this.currentStep = this.journey.steps.find(s => s.url === this.router.url);
  }

  private checkIfFirstOrLastStep(): void {
    this.onFirstStep = this.currentStep.order === 0;
    this.onLastStep = this.currentStep.order === this.journey.steps.length - 1;
  }
}
