import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { fromEvent, filter, tap, takeUntil, Subject } from 'rxjs';

@Directive({
  selector: '[appClickOutSide]',
  standalone: true,
})
export class ClickOutSideDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside = new EventEmitter<void>();
  @Input() exclude: string;
  private unSubscribeAll: Subject<void>;

  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.unSubscribeAll = new Subject();
  }

  ngAfterViewInit(): void {
    fromEvent(this.document, 'click')
      .pipe(
        filter((event) => !this.isInside(event.target as HTMLElement)),
        tap(() => this.clickOutside.emit()),
        takeUntil(this.unSubscribeAll)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unSubscribeAll.next();
    this.unSubscribeAll?.unsubscribe();
  }

  isInside(elementToCheck: HTMLElement): boolean {
    const elem =
      this.exclude && this.document.getElementsByClassName(this.exclude)[0];
    return (
      elementToCheck === this.element.nativeElement ||
      this.element.nativeElement.contains(elementToCheck) ||
      (elementToCheck.parentElement === elem &&
        elementToCheck.parentElement?.contains(elem))
    );
  }
}
