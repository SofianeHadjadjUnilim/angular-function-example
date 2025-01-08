import { Routes } from '@angular/router';
import { FakeUsersComponent } from '../app/components/fake-users/fake-users.component'
import { HomeComponent } from '../app/components/home/home.component'

export const routes: Routes = [
    { path: '', component : HomeComponent },
    { path: 'fakeusers', component : FakeUsersComponent }
];
