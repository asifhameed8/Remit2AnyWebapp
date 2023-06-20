import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAnimation]',
  standalone: true,
})
export class AnimationDirective implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | undefined;
  @Input('appAnimation') animation: string;
  constructor(
    private readonly _renderer: Renderer2,
    private readonly _elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    this._renderer.setStyle(this._elementRef.nativeElement, 'opacity', 0);
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'transition',
      'transform 1s, opacity 1s'
    );
    this.createObserver();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private animateStart(type: string) {
    switch (type) {
      case 'zoomOut':
        this._renderer.setStyle(
          this._elementRef.nativeElement,
          'transform',
          'scale(0.8)'
        );
        break;
      case 'slideUp':
        this._renderer.setStyle(
          this._elementRef.nativeElement,
          'transform',
          'translateY(80px)'
        );
        break;
      case 'slideLeft':
        this._renderer.setStyle(
          this._elementRef.nativeElement.parentElement,
          'overflow-x',
          'hidden'
        );
        this._renderer.setStyle(
          this._elementRef.nativeElement,
          'transform',
          'translateX(-80px)'
        );
        break;
      case 'slideRight':
        this._renderer.setStyle(
          this._elementRef.nativeElement.parentElement,
          'overflow-x',
          'hidden'
        );
        this._renderer.setStyle(
          this._elementRef.nativeElement,
          'transform',
          'translateX(80px)'
        );
        break;
    }
  }

  private animateEnd(type: string, el: Element) {
    switch (type) {
      case 'zoomOut':
        this._renderer.setStyle(el, 'transform', 'scale(1)');
        break;

      case 'slideUp':
        this._renderer.setStyle(el, 'transform', 'translateY(0px)');
        break;

      default:
        this._renderer.setStyle(el, 'transform', 'translateX(0px)');
        break;
    }
  }

  private createObserver() {
    this.animateStart(this.animation);
    const options = {
      root: null,
      threshold: 0.1,
    };

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!this.observer) return;
        else if (isIntersecting(entry)) {
          this._renderer.setStyle(entry.target, 'opacity', 1);
          this.animateEnd(this.animation, entry.target);
          this.observer?.unobserve(entry.target);
          this.observer?.disconnect();
        }
      });
    }, options);
    this.observer.observe(this._elementRef.nativeElement);
  }
}
