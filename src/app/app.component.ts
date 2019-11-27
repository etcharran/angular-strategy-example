import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'strategy-test';
  component = {
    title: 'component.title'
  }

  constructor(private interactionService: InteractionService) {
    interactionService.initSubject(this.component);
  }

}
