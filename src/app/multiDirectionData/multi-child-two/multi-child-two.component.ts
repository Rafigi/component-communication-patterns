import { Component, OnInit, Input, Output } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-multi-child-two',
  templateUrl: './multi-child-two.component.html',
  styleUrls: ['./multi-child-two.component.css']
})
export class MultiChildTwoComponent implements OnInit {

  @Input('loadtime') loadtime;
  @Input('eventStream') eventStream$;
  @Output('done') state: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  ngOnInit() {
    this.eventStream$ = this.eventStream$.pipe(
      tap(val => {
        if (val === 'Running') this.start();
      })
    )
  }

  start() {
    this.state.next('Loading...');
    setTimeout(val => {
      this.state.next('Complete!');
    }, this.loadtime);
  }


}