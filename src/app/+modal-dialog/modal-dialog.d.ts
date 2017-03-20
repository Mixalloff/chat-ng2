import { Component, Type, ViewContainerRef } from '@angular/core';

export interface IModalInitialObject {
  component?: Type<Component>,
  resolve?: any,
  container?: ViewContainerRef
}