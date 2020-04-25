import { Component, OnInit } from '@angular/core';
import { StepNavigationService } from 'src/app/services/step-navigation/step-navigation.service';
import { Subscription } from 'rxjs';


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
      .subscribe((event) => {
        console.log(event);
      });
  }

}
