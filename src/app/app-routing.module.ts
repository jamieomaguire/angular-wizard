import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ApplicationComponent } from './components/application/application.component';
import { StartApplicationComponent } from './components/steps/start-application/start-application.component';
import { PersonalDetailsComponent } from './components/steps/personal-details/personal-details.component';
import { EducationComponent } from './components/steps/education/education.component';
import { ExperienceComponent } from './components/steps/experience/experience.component';
import { ManagerialTrainingComponent } from './components/steps/managerial-training/managerial-training.component';
import { ExtraCurricularComponent } from './components/steps/extra-curricular/extra-curricular.component';
import { AccomplishmentsComponent } from './components/steps/accomplishments/accomplishments.component';
import { ReferencesComponent } from './components/steps/references/references.component';
import { PersonalStatementComponent } from './components/steps/personal-statement/personal-statement.component';
import { SubmitComponent } from './components/steps/submit/submit.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'application', component: ApplicationComponent, children: [
    { path: 'start', component: StartApplicationComponent },
    { path: 'details', component: PersonalDetailsComponent },
    { path: 'education', component: EducationComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'managerial', component: ManagerialTrainingComponent },
    { path: 'extra-curricular', component: ExtraCurricularComponent },
    { path: 'accomplishments', component: AccomplishmentsComponent },
    { path: 'references', component: ReferencesComponent },
    { path: 'personal-statement', component: PersonalStatementComponent },
    { path: 'submit', component: SubmitComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
