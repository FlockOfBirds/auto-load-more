import { Component, DOM } from "react";

// tslint:disable-next-line:class-name
export class preview extends Component<{}, {}> {
    render() {
        return DOM.div({ className: "widget-auto-load-more-hide-preview" });
    }
}
