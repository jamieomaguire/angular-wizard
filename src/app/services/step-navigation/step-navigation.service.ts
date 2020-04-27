import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Step } from '../step';
import json from '../fake-entry-journey.json';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StepNavigationService {
  public currentStep: Step;
  public journey: any;
  public onLastStep: boolean;
  public onFirstStep: boolean;

  constructor(private readonly router: Router, private readonly location: Location) {
    this.getJourneySteps();

    this.initialiseCurrentStep(this.router.url === '/' ? this.location.path() : this.router.url);

    if (this.currentStep) {
      this.checkIfFirstOrLastStep();
    }

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
    console.log(this.journey)
  }

  private setCurrentStep(url: string) {
    const currentStep = this.journey.steps
      .find(s => s.url.toLowerCase() === url.toLowerCase()) || {
        order: -1,
        url: 'application'
      };

    const typedCurrentStep = new Step(currentStep.url, currentStep.order);

    this.currentStep = typedCurrentStep;
  }

  public initialiseCurrentStep(url: string): void {
    this.currentStep = this.journey.steps.find(s => s.url === url);
  }

  private checkIfFirstOrLastStep(): void {
    this.onFirstStep = this.currentStep.order === 0;
    this.onLastStep = this.currentStep.order === this.journey.steps.length - 1;
  }

  public isStepAccessible(url: string) {
    const step = this.journey.steps
      .find(s => s.url === url);

    return step ? step.accessible : false;
  }
}
