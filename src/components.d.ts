/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MsAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface MsAmbulanceWlEditor {
        "entryId": string;
    }
    interface MsAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface MsAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMsAmbulanceWlEditorElement;
}
export interface MsAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMsAmbulanceWlListElement;
}
declare global {
    interface HTMLMsAmbulanceWlAppElement extends Components.MsAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLMsAmbulanceWlAppElement: {
        prototype: HTMLMsAmbulanceWlAppElement;
        new (): HTMLMsAmbulanceWlAppElement;
    };
    interface HTMLMsAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLMsAmbulanceWlEditorElement extends Components.MsAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMsAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLMsAmbulanceWlEditorElement, ev: MsAmbulanceWlEditorCustomEvent<HTMLMsAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMsAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLMsAmbulanceWlEditorElement, ev: MsAmbulanceWlEditorCustomEvent<HTMLMsAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMsAmbulanceWlEditorElement: {
        prototype: HTMLMsAmbulanceWlEditorElement;
        new (): HTMLMsAmbulanceWlEditorElement;
    };
    interface HTMLMsAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLMsAmbulanceWlListElement extends Components.MsAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMsAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLMsAmbulanceWlListElement, ev: MsAmbulanceWlListCustomEvent<HTMLMsAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMsAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLMsAmbulanceWlListElement, ev: MsAmbulanceWlListCustomEvent<HTMLMsAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMsAmbulanceWlListElement: {
        prototype: HTMLMsAmbulanceWlListElement;
        new (): HTMLMsAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "ms-ambulance-wl-app": HTMLMsAmbulanceWlAppElement;
        "ms-ambulance-wl-editor": HTMLMsAmbulanceWlEditorElement;
        "ms-ambulance-wl-list": HTMLMsAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface MsAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface MsAmbulanceWlEditor {
        "entryId"?: string;
        "onEditor-closed"?: (event: MsAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface MsAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: MsAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "ms-ambulance-wl-app": MsAmbulanceWlApp;
        "ms-ambulance-wl-editor": MsAmbulanceWlEditor;
        "ms-ambulance-wl-list": MsAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ms-ambulance-wl-app": LocalJSX.MsAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLMsAmbulanceWlAppElement>;
            "ms-ambulance-wl-editor": LocalJSX.MsAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLMsAmbulanceWlEditorElement>;
            "ms-ambulance-wl-list": LocalJSX.MsAmbulanceWlList & JSXBase.HTMLAttributes<HTMLMsAmbulanceWlListElement>;
        }
    }
}
