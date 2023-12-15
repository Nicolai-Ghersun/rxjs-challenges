import { ChangeDetectionStrategy, Component, Inject, inject } from "@angular/core";
import { LoadingService } from "../../loading.service";
import { Subject, animationFrameScheduler, concatMap, filter, from, interval, map, merge, mergeMap, of, pairwise, range, repeat, scan, share, startWith, switchMap, take, tap } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-challenge-4',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <blockquote>
  <p>
    Here you have <code>loadingService</code> with <code>load</code> method.
  </p>

  <p>
    Method emits <code>number</code> of % loaded or <code>string</code> with final result.
  </p>

  <p>
    Show progress bar with loaded % value until result
  </p>
</blockquote>

<button class="button" (click)="onButtonClick()">
  Start loading
</button>

<!-- <p *ngIf="true; else loading">
  {{'final result'}}
</p> -->

@if (progress$ | async; as progress) {
  <progress class="progress" [style.width.%]="progress"></progress>
  <div class="loading">Loading...</div>
}

  `,
  styleUrl: './challenge-4.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Challenge4Component { 
  private readonly loadingService: LoadingService = inject(LoadingService);

  readonly submit$: Subject<void> = new Subject();
  readonly request$ = this.submit$.pipe(switchMap(() => this.loadingService.load()), startWith(0),share());

  readonly finished$ = this.request$.pipe(filter(v=>v != 'number'),map(v=>0));
  readonly progress$ = merge(
    //this.finished$, 
    this.request$.pipe(
      startWith(0),
      filter((v): v is number => typeof v === 'number'), 
      pairwise<number>(),
      mergeMap(([prev, current]: [number, number]) => {
        return from(Array.from({length: (current - prev) / 2 + 1 },(v, i) => prev + i * 2))
          .pipe(concatMap(value => interval(100, animationFrameScheduler).pipe(take(1), map(() => value))))
      })
    ));
      
  onButtonClick() {
    this.submit$.next();
  }
}
