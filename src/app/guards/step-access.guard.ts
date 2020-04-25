import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StepNavigationService } from '../services/step-navigation/step-navigation.service';

@Injectable({
  providedIn: 'root'
})
export class StepAccessGuard implements CanActivateChild {
  constructor(private readonly navigationService: StepNavigationService) {
    console.log('constructed');
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(next);
      console.log('allowed access to step!');
      return true;
  }
}
