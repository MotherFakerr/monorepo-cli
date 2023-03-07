import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider as MobxProvider } from 'mobx-react';
import { App } from './view/app';
import { store } from './store';
import './store/import';
import { IAppSystemStore } from './store/app_system_store';

function start(): void {
    (store.appSystemStore as IAppSystemStore).init();
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
        <MobxProvider {...store}>
            <App />
        </MobxProvider>,
    );
}
start();
