import { Component, Type, ViewContainerRef } from '@angular/core';

export interface IModalInitialObject {
  component: Type<Component>,
  bindings?: any,
  container?: ViewContainerRef
}