import { TestModalComponent } from './../test-modal/test-modal.component';
import { isPresent } from '@angular/core/src/facade/lang';
import 'zone.js';
import 'reflect-metadata';
import { Component } from '@angular/core';

// export function ExtendedComponent(annotation: any) {
//   return function (target: Function) {
//       const parentTarget = Object.getPrototypeOf(target.prototype).constructor;
//       const parentAnnotations = Reflect.getMetadata('annotations', parentTarget);

//       const parentAnnotation = parentAnnotations[0];

//       Object.keys(annotation).forEach(key => {
//         parentAnnotation[key] = annotation[key];
//       });
//   };
// }

// export function ExtendedComponent(annotation: any) {
//   return function (target: Function) {
//     const parentTarget = Object.getPrototypeOf(target.prototype).constructor;
//     const parentAnnotations = Reflect.getMetadata('annotations', parentTarget);

//     const parentAnnotation = parentAnnotations[0];
//     Object.keys(parentAnnotation).forEach(key => {
//       if (isPresent(parentAnnotation[key])) {
//         // verify is annotation typeof function
//         if(typeof annotation[key] === 'function'){
//           annotation[key] = annotation[key].call(this, parentAnnotation[key]);
//         }else if(
//           // force override in annotation base
//           !isPresent(annotation[key])
//         ){
//           annotation[key] = parentAnnotation[key];
//         }
//       }
//     });

//     const metadata = new Component(annotation);

//     Reflect.defineMetadata('annotations', [ metadata ], target);
//   }
// }

export function ExtendedComponent(annotation: any){
  return function (target: Function) {
    // var parentTarget = Object.getPrototypeOf(target.prototype).constructor;
    
    // var parentAnnotations = Reflect.getMetadata('annotations', parentTarget);
    
    // console.log(Reflect.getMetadataKeys(TestModalComponent));
    // var parentAnnotation = parentAnnotations[0];
    // Object.keys(parentAnnotation).forEach(key => {
    //   if (isPresent(parentAnnotation[key])) {
    //     if (!isPresent(annotation[key])) {
    //       annotation[key] = parentAnnotation[key];
    //     }
    //   }
    // });
    

    // annotation.template="<div>sssss</div>";
    // annotation.selector = 'asd';
    const metadata = new Component(annotation);
    
    console.log(metadata)

    Reflect.defineMetadata('annotations', [ metadata ], target);
  };
};

// export function ExtendedComponent(annotation: any) {
//   return function (target: Function) {
//     var parentTarget = Object.getPrototypeOf(target.prototype).constructor;
    
//     var parentAnnotations = Reflect.getMetadata('annotations', parentTarget);
//     console.log(parentAnnotations, Reflect.getMetadataKeys(parentTarget), Reflect.getOwnMetadataKeys(parentTarget))
    
//     var parentAnnotation = parentAnnotations[0];
//     Object.keys(parentAnnotation).forEach(key => {
//       if (isPresent(parentAnnotation[key])) {
//         if (!isPresent(annotation[key])) {
//           if (typeof annotation[key] === 'function') {
//             annotation[key] = annotation[key].call(this, parentAnnotation[key]);
//           } else {
//             annotation[key] = parentAnnotation[key];
//           }
//         }
//       }
//     });
    
//     var metadata = new Component(annotation);

//     Reflect.defineMetadata('annotations', [ metadata ], target);
//   };
// };
