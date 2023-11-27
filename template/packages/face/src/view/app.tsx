import React from 'react';
import { inject, observer } from 'mobx-react';
import './app.less';

@inject()
@observer
export class App extends React.Component<ANY, ANY> {
    constructor(props: ANY) {
        super(props);
        this.state = {};
    }

    public render(): React.ReactElement {
        return (
            <div className='App'>
                <div className='welcome'>motherfaker-monorepo-cli</div>
            </div>
        );
    }
}
