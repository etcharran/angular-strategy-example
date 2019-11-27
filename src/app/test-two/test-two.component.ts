import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestTwoComponent implements OnInit {

  componentObject: Observable<any>;
  count = 0;

  constructor(private interactionService: InteractionService) {
    this.componentObject = interactionService.get();
  }

  ngOnInit() {
  }

  change(newValue) {
    let tempComponent;
    this.componentObject.subscribe( c => tempComponent = c);
    tempComponent.title = newValue;
    this.interactionService.announceSubject(tempComponent);
    this.count++;
  }
}
