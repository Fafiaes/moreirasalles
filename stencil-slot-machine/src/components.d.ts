/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface SlotMachine {
    'active': number;
    'height': string;
    'images': string;
    'imagesDir': string;
    'next': () => Promise<void>;
    'prev': () => Promise<void>;
    'shuffle': () => Promise<void>;
    'width': string;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLSlotMachineElement extends Components.SlotMachine, HTMLStencilElement {}
  var HTMLSlotMachineElement: {
    prototype: HTMLSlotMachineElement;
    new (): HTMLSlotMachineElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'slot-machine': HTMLSlotMachineElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface SlotMachine extends JSXBase.HTMLAttributes<HTMLSlotMachineElement> {
    'active'?: number;
    'height'?: string;
    'images'?: string;
    'imagesDir'?: string;
    'width'?: string;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'slot-machine': SlotMachine;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


