import * as React from "react";
import { Component } from "react";
import classNames from "classnames";

export interface SidebarProps {
    isSmall: boolean,
    isHidden: boolean,

}

const sidebarDefaultProps: SidebarProps = { isSmall: false, isHidden: false };
const defaultSidebarClasses = ["sidebar", "bg-pesec-light-green", "d-none","d-sm-none","d-md-block"];

class Sidebar extends Component<SidebarProps>{

    

    render() {
        const { isHidden } = this.props;

        const sidebarClasses = classNames(defaultSidebarClasses, !isHidden ? "sidebar-fixed" : "");

        return (
            <>
                <div className={sidebarClasses}>

                </div>
            </>
        )
    }
}


export { sidebarDefaultProps, Sidebar }