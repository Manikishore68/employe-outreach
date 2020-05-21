import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {EmployeeOutreachComponent} from "./employee-outreach/employee-outreach.component";
import {AttendenceTrackerComponent} from "./attendence-tracker/attendence-tracker.component";
import {ActivityTimerComponent} from "./activity-timer/activity-timer.component";


const routes: Routes = [
  {path : 'home' , component :HomePageComponent},
  {path : '', component: EmployeeOutreachComponent},
  {path : 'attendence-tracker', component: AttendenceTrackerComponent},
  {path : 'activity-timer' , component : ActivityTimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
