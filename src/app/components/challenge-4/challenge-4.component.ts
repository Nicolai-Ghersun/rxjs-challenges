import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { LoadingService } from "../../loading.service";

@Component({
  selector: 'app-challenge-4',
  standalone: true,
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

<p *ngIf="true; else loading">
  {{'final result'}}
</p>

<ng-template #loading>
  <progress class="progress" [max]="100" [value]="50"></progress>
  <div class="loading">Loading...</div>
</ng-template>
  `,
  styleUrl: './challenge-4.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Challenge4Component { 
  constructor(
    @Inject(LoadingService) private readonly loadingService: LoadingService
  ) {}

  onButtonClick() {}
}
