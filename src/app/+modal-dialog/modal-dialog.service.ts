import { Injectable, ViewContainerRef, ReflectiveInjector, ComponentRef, Component, ComponentFactoryResolver, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { IModalInitialObject } from './modal-dialog';

@Injectable()
export class ModalDialogService {
  private containerRef: ViewContainerRef;
  private customDialogComponent: Type<Component>;
  private _afterClosed$: Subject<any> = new Subject();
  private resolve: any;

  public constructor(private componentFactoryResolver: ComponentFactoryResolver ) {}

  public init(modalInitialObject: IModalInitialObject): ModalDialogService {
    if (modalInitialObject.container) { this.containerRef = modalInitialObject.container; }
    if (modalInitialObject.component) { this.customDialogComponent = modalInitialObject.component; }
    if (modalInitialObject.resolve) { this.resolve = modalInitialObject.resolve; }
    return this;
  }

  public open(modalInitialObject?: IModalInitialObject): Observable<any> {
    if (modalInitialObject) { this.init(modalInitialObject); }
    this.createModal(this.customDialogComponent);
    return this.afterClosed();
  }

  public close(dialogResult: any): void {
    this._afterClosed$.next(dialogResult);
    this._afterClosed$.complete();
    this.containerRef.remove();
  }

  public dismiss(): void {
    this._afterClosed$.complete();
    this.containerRef.remove();
  }

  public afterClosed(): Observable<any> {
    return this._afterClosed$.asObservable();
  }

  private createComponent<Component>(componentType: Type<Component>): ComponentRef<Component> {
    const injector = ReflectiveInjector.fromResolvedProviders([], this.containerRef.parentInjector);
    const factory  = this.componentFactoryResolver.resolveComponentFactory(componentType);
    return factory.create(injector);
  }

  private createModal<Component>(componentType: Type<Component>): ComponentRef<Component> {
    const component = this.createComponent(componentType);
    Object.assign(component.instance, { resolve: this.resolve }); // adding data into modal component
    this.containerRef.insert(component.hostView);

    return component;
  }
}
