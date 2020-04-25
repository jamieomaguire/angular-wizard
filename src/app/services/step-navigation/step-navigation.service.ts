import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { Step } from '../step';

@Injectable({
  providedIn: 'root'
})
export class StepNavigationService {

  public routeChange: Observable<string>;
  public currentStep: Step;

  constructor(private readonly router: Router) {
    console.log('being constructed');
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

  public getNextStep() {
    console.log('getting next step');
  }

  public getPreviousStep() {
    console.log('getting next step');
  }

  public getJourneySteps() {
    
  }
}
