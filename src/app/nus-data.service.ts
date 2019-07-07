import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * @brief Connect Nordic UART Service to components in app.
 */
export class NusDataService {

  /** RX from application point of view, connected to TX of tag */
  private rxSource: BehaviorSubject<DataView> = new BehaviorSubject(new DataView(new ArrayBuffer(11)));
  currentRx = this.rxSource.asObservable();

  /** TX from application point of view, connected to RX of tag */
  private txSource: BehaviorSubject<DataView> = new BehaviorSubject(new DataView(new ArrayBuffer(11)));
  currentTx = this.txSource.asObservable();

  constructor() { }

  sendTx(message: DataView) {
    this.txSource.next(message);
  }

  receiveRx(message: DataView) {
    this.rxSource.next(message);
  }
}