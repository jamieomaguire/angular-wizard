import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartApplicationComponent } from './components/steps/start-application/start-application.component';
import { PersonalDetailsComponent } from './components/steps/personal-details/personal-details.component';
import { EducationComponent } from './components/steps/education/education.component';
import { ExperienceComponent } from './components/steps/experience/experience.component';
import { ManagerialTrainingComponent } from './components/steps/managerial-training/managerial-training.component';
import { ExtraCurricularComponent } from './components/steps/extra-curricular/extra-curricular.component';
import { AccomplishmentsComponent } from './components/steps/accomplishments/accomplishments.component';
import { ReferencesComponent } from './components/steps/references/references.component';
import { PersonalStatementComponent } from './components/steps/personal-statement/personal-statement.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ApplicationComponent } from './components/application/application.component';
import { SubmitComponent } from './components/steps/submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    StartApplicationComponent,
    PersonalDetailsComponent,
    EducationComponent,
    ExperienceComponent,
    ManagerialTrainingComponent,
    ExtraCurricularComponent,
    AccomplishmentsComponent,
    ReferencesComponent,
    PersonalStatementComponent,
    WelcomeComponent,
    ApplicationComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
