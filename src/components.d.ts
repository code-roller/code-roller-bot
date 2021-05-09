/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppIntro {
    }
    interface AppRoot {
    }
    interface TypewriterText {
        "text": string;
    }
}
declare global {
    interface HTMLAppIntroElement extends Components.AppIntro, HTMLStencilElement {
    }
    var HTMLAppIntroElement: {
        prototype: HTMLAppIntroElement;
        new (): HTMLAppIntroElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLTypewriterTextElement extends Components.TypewriterText, HTMLStencilElement {
    }
    var HTMLTypewriterTextElement: {
        prototype: HTMLTypewriterTextElement;
        new (): HTMLTypewriterTextElement;
    };
    interface HTMLElementTagNameMap {
        "app-intro": HTMLAppIntroElement;
        "app-root": HTMLAppRootElement;
        "typewriter-text": HTMLTypewriterTextElement;
    }
}
declare namespace LocalJSX {
    interface AppIntro {
    }
    interface AppRoot {
    }
    interface TypewriterText {
        "text"?: string;
    }
    interface IntrinsicElements {
        "app-intro": AppIntro;
        "app-root": AppRoot;
        "typewriter-text": TypewriterText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-intro": LocalJSX.AppIntro & JSXBase.HTMLAttributes<HTMLAppIntroElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "typewriter-text": LocalJSX.TypewriterText & JSXBase.HTMLAttributes<HTMLTypewriterTextElement>;
        }
    }
}
