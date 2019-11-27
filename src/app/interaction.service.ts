import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private subject: BehaviorSubject<any>;
  // Observable string streams
  private subject$: Observable<any>;

  constructor() { }

  initSubject(subject: any) {
    this.subject = new BehaviorSubject<any>(subject);
    this.subject$ = this.subject.asObservable();
  }

  get(): Observable<any> {
    return this.subject$;
  }

  // Service message commands
  announceSubject(subject: string) {
    this.subject.next(subject);
  }

}
