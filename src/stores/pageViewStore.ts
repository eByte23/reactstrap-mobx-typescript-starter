import { observable, action } from "mobx";
import { SidebarProps, sidebarDefaultProps } from "../components/Nav/sidbar";

export interface IPageViewStore {
    toggleHideSidebar: () => void;
    sideBar: SidebarProps;
    setSidebarIsHidden: (viewState: boolean) => void;
}



export class PageViewStore implements IPageViewStore {

    @observable sideBar: SidebarProps = sidebarDefaultProps;


    @action
    setSidebarIsHidden(viewState: boolean): void {
        this.sideBar.isHidden = viewState;
    }

    @action
    toggleHideSidebar(): void {
        this.sideBar.isHidden = !this.sideBar.isHidden;
    }



}


