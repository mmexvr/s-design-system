/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SDsCookie {
        "cookieName": string;
    }
    interface SDsFooter {
    }
    interface SDsHeader {
    }
}
declare global {
    interface HTMLSDsCookieElement extends Components.SDsCookie, HTMLStencilElement {
    }
    var HTMLSDsCookieElement: {
        prototype: HTMLSDsCookieElement;
        new (): HTMLSDsCookieElement;
    };
    interface HTMLSDsFooterElement extends Components.SDsFooter, HTMLStencilElement {
    }
    var HTMLSDsFooterElement: {
        prototype: HTMLSDsFooterElement;
        new (): HTMLSDsFooterElement;
    };
    interface HTMLSDsHeaderElement extends Components.SDsHeader, HTMLStencilElement {
    }
    var HTMLSDsHeaderElement: {
        prototype: HTMLSDsHeaderElement;
        new (): HTMLSDsHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "s-ds-cookie": HTMLSDsCookieElement;
        "s-ds-footer": HTMLSDsFooterElement;
        "s-ds-header": HTMLSDsHeaderElement;
    }
}
declare namespace LocalJSX {
    interface SDsCookie {
        "cookieName"?: string;
    }
    interface SDsFooter {
    }
    interface SDsHeader {
    }
    interface IntrinsicElements {
        "s-ds-cookie": SDsCookie;
        "s-ds-footer": SDsFooter;
        "s-ds-header": SDsHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "s-ds-cookie": LocalJSX.SDsCookie & JSXBase.HTMLAttributes<HTMLSDsCookieElement>;
            "s-ds-footer": LocalJSX.SDsFooter & JSXBase.HTMLAttributes<HTMLSDsFooterElement>;
            "s-ds-header": LocalJSX.SDsHeader & JSXBase.HTMLAttributes<HTMLSDsHeaderElement>;
        }
    }
}
