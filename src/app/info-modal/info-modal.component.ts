import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  @Input() modalData: {
    primaryButton: { showButton: boolean, buttonText: string },
    secondaryButton: { showButton: boolean, buttonText: string}, modalContent: string
  };
  @Output() emitUserOp = new EventEmitter<{ opStatus: string }>();
  constructor(
    // tslint:disable-next-line: variable-name
    private _activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  public emitUserApprovalStatus() {
    this.emitUserOp.emit({ opStatus: 'confirmed' });
    // this._activeModal.dismiss();
  }

  public dismissModal() {
    // this._activeModal.dismiss();
  }
}
