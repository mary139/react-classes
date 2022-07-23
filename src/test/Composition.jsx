import React from 'react';
import Contacts from './components/Contacts';
import FakeChat from './components/FakeChat';

function SplitPane(props) {
    return (
        <div className="SplitPane" >
            <div className="SplitPane-left" style={{ display: 'inline-block' }}>
                {props.left}
            </div>
            <div className="SplitPane-right" style={{ display: 'inline-block', float: 'right', fontSize: '40px', width: '300px', textAlign: 'center', marginTop: '50px', color: 'blue' }}>
                {props.right}
            </div>
        </div>
    );
}

function App() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <FakeChat />
            } />
    );
}