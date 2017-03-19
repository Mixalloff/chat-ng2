import { Injectable, ViewContainerRef, ReflectiveInjector, ComponentRef, Component, ComponentFactoryResolver, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { IModalInitialObject } from './modal-dialog';

@Injectable()
export class ModalDialogService {
  private containerRef: ViewContainerRef;
  private customDialogComponent: Type<Component>;
  private _afterClosed$: Subject<any> = new Subject();
  private bindings: any;

  public constructor(private componentFactoryResolver: ComponentFactoryResolver ) {}

  public init(modalInitialObject: IModalInitialObject): ModalDialogService {
    if (modalInitialObject.container) { this.containerRef = modalInitialObject.container; }
    if (modalInitialObject.component) { this.customDialogComponent = modalInitialObject.component; }
    if (modalInitialObject.bindings) { this.bindings = modalInitialObject.bindings; }
    return this;
  }

  public initContainer(containerRef: ViewContainerRef): ModalDialogService {
    this.containerRef = containerRef;
    return this;
  }

  public initModalComponent(customDialogComponent: Type<Component>): ModalDialogService {
    this.customDialogComponent = customDialogComponent;
    return this;
  }

  public open(modalInitialObject?: IModalInitialObject): Observable<any> {
    if (modalInitialObject) { this.init(modalInitialObject); }
    const dialog = this.createModalWithData(this.customDialogComponent);
    return this.afterClosed();
  }

  public close(dialogResult: any): void {
    console.log('ok');
    console.log(dialogResult);
    this._afterClosed$.next(dialogResult);
    this._afterClosed$.complete();
    this.containerRef.remove();
  }

  public dismiss(): void {
    console.log('cancel');
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

  private createModalWithData<Component>(componentType: Type<Component>): ComponentRef<Component> {
    const component = this.createComponent(componentType);
    Object.assign(component.instance, { bindings: this.bindings }); // adding data into modal component
    this.containerRef.insert(component.hostView);

    return component;
  }
}
