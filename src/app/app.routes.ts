import { Routes } from '@angular/router';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { Challenge3Component } from './components/challenge-3/challenge-3.component';

export const routes: Routes = [
    {path: 'challenge-1-2', component: TestComponentComponent},
    {path: 'challenge-3', component: Challenge3Component}
];
