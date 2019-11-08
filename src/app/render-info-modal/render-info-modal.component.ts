import { Component, OnInit } from '@angular/core';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import { NgbModalRef, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { INFO_MODAL_CONSTANT } from '../info-modal.constants';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-render-info-modal',
  templateUrl: './render-info-modal.component.html',
  styleUrls: ['./render-info-modal.component.scss']
})
export class RenderInfoModalComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  public documentBody = 'Functional programming has its origins in lambda calculus, a formal system developed in the 1930s to investigate computability, the Entscheidungsproblem, function definition, function application, and recursion. Many functional programming languages can be viewed as elaborations on the lambda calculus. Another well-known declarative programming paradigm, logic programming, is based on relations.In contrast, imperative programming changes state with statements in the source code, the simplest example being assignment. Imperative programming has subroutines, but these are not mathematical functions. They can have side effects that may change a programs state, allowing for functions without return values. Because of this, they lack referential transparency, that is, the same language expression can result in different values at different times depending on the state of the executing program.';
  public stopEditingModal: NgbModalRef;
  // tslint:disable-next-line: variable-name
  private _isComponentAlive = true;

  constructor(
    // tslint:disable-next-line: variable-name
    private _modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  public invokeInfoModal() {
    this._showInfoModal();
  }

  private _showInfoModal() {
    const modalConfig: NgbModalOptions = {
      windowClass: 'info-modal-sm',
      size: 'sm',
      ariaLabelledBy: 'info-modal',
      centered: true
    };
    const modalRef = this._modalService.open(InfoModalComponent, modalConfig);
    modalRef.componentInstance.modalData = INFO_MODAL_CONSTANT.STOP_EDITING_MODAL_DATA;
  //   this.stopEditingModal.componentInstance.emitUserOp
  //     .pipe(
  //       takeWhile(() => this._isComponentAlive)
  //     )
  //     .subscribe({ next: this._confirmToStop });
  // }
  }
  // tslint:disable-next-line: variable-name
  // private _confirmToStop = (response: { opStatus: string }) => {
  //   if (response.opStatus.toLowerCase() === 'confirmed') {
  //     // do operation
  //     console.log('Perform operation here!');
  //     alert('Hye');
  //   }
  // }
  ngOnDestroy() {
    this._isComponentAlive = false;
  }
}
