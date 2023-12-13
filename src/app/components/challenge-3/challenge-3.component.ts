import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Subject, catchError, ignoreElements, map, of, repeat, retry, share, startWith, switchMap, timer } from "rxjs";
import { COLLAPSE } from "../../animations";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-challenge-3',
  standalone: true,
  animations: [COLLAPSE],
  imports: [
    CommonModule,
  ],
  template: `
    <blockquote>
      Show error message for 5 seconds if login has failed.

      <p><strong>Bonus task:</strong></p>
      Show user name instead of button upon successful login and disable button
      during server request.
    </blockquote>
    @if(error$ | async; as error) {
      <p class="error" [@collapse]>
        {{error}}
      </p>
    }
    @if(user$ | async; as user) {
      <p class='success'>
        {{user}}
      </p>
    } @else {
      <p>
        <button [disabled]="disabled$ | async" (click)="submit$.next()">Submit</button>
      </p>
    }
  `,
  styleUrl: './challenge-3.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Challenge3Component { 
  readonly service: LoginService = inject(LoginService);
  readonly submit$ = new Subject<void>();
  readonly response$ = this.submit$.pipe(
    switchMap(()=>this.service.pipe(startWith(""))),
    share()
  );
  readonly user$ = this.response$.pipe(retry());
  readonly error$ = this.response$.pipe(
    ignoreElements(),
    catchError(err=>of(err)),
    repeat(),
    switchMap(e => timer(5000).pipe(startWith(e)))
  ); 
  readonly disabled$ = this.response$.pipe(
    map(() => true),
    catchError(() => of(false)),
    repeat()
  );
}

