import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PAGE_VISIBILITY } from '../../visibility-changed/visibility-changed.service';

@Component({
  selector: 'app-test-component',
  template: `
    <blockquote>
      Create a single Observable stream to watch for focus being present in the area
    </blockquote>
    <p>
      <label>
        Just an input
        <input placeholder="Focus can be here" />
      </label>
      <button>I'm a button</button>
    </p>
    <div class="focus" (focusWithin)="onFocusWithin($event)">
      <h2>
        Currently focused: {{name}}
      </h2>
      <p>
        <select>
          <option>Option 1</option>
          <option>Option 1</option>
        </select>
      </p>

      <p>
        <input type="date" />
        <button>I'm a button</button>
      </p>

      <p>
        <label>
          <input type="radio" />
          Option 1
        </label>
        <label>
          <input type="radio" />
          Option 2
        </label>
      </p>
    </div>
    <p>
      <label>
        Just an input
        <input placeholder="Focus can be here" />
      </label>
      <button>I'm a button</button>
    </p>
  `,
  styleUrl: './test-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponentComponent {
  title = 'rxjs-chanllenges';
  readonly visibility$: Observable<boolean> = inject(PAGE_VISIBILITY);
  focused: Element | null = null;
  constructor() {
    this.visibility$.subscribe((val) => console.log(val));
  }
  

  get name(): string {
    return this.focused ? this.focused.tagName : 'null';
  }

  onFocusWithin(focused: Element | null) {
    this.focused = focused;
  }
 }
