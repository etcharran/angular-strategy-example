import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestOneComponent implements OnInit {

  componentObject: Observable<any>;
  count = 0;
  
  constructor(private interactionService: InteractionService) {
    this.componentObject = interactionService.get();
  }

  ngOnInit() {
  }

  change() {
    let tempComponent;
    this.componentObject.subscribe( c => tempComponent = c);
    tempComponent.title = 'component One vieja';
    this.interactionService.announceSubject(tempComponent);
    this.count++;
  }

}
