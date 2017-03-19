import { Injectable, ViewContainerRef, ReflectiveInjector, ComponentRef, Component, ComponentFactoryResolver, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ModalDialogService {
  public containerRef: ViewContainerRef;
  public customDialogComponent: Type<Component>;

  private _afterClosed$: Subject<any> = new Subject();

  public constructor(private componentFactoryResolver: ComponentFactoryResolver ) {}

  public init(containerRef: ViewContainerRef,
              customDialogComponent: Type<Component>): ModalDialogService {
    this.containerRef = containerRef;
    this.customDialogComponent = customDialogComponent;
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

  public open(): Observable<any> {
    const dialog = this.createModalWithData(this.customDialogComponent, {});
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

  private createModalWithData<Component>(componentType: Type<Component>, data: any): ComponentRef<Component> {
    const component = this.createComponent(componentType);
    Object.assign(component.instance, data);
    this.containerRef.insert(component.hostView);

    return component;
  }
}
