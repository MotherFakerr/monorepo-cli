import { action, observable } from 'mobx';
import { App, createApp, View } from '@snake/core';
import { registerStore } from '.';
import { AbstractStore } from './abstract_store';

export enum EN_VIEW_ID {
    MAIN_VIEW = 'main.view',
}

export interface IAppSystemStore {
    mainViewId: EN_VIEW_ID;
    init(): void;
}

@registerStore('appSystemStore')
export class AppSystemStore extends AbstractStore implements IAppSystemStore {
    @observable
    public mainViewId = EN_VIEW_ID.MAIN_VIEW;

    private _app: App;

    @action.bound
    public init(): void {
        const app = createApp();
        this._app = app;
    }

    @action.bound
    public createMainView(container: HTMLDivElement): View {
        return this.createView(this.mainViewId, container);
    }

    @action.bound
    public createView(id: EN_VIEW_ID, container: HTMLDivElement): View {
        return this._app.createView(id, container);
    }

    @action.bound
    public getViewById(id: EN_VIEW_ID): View | undefined {
        return this._app.getViewById(id);
    }
}
