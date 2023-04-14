import React, { Component } from 'react';  
class ParentComponent extends Component {  
    render() {
        return (
        <h1>
            Saya parent component.
            <ChildComponent text={"Saya anak ke-1"} />
            <ChildComponent text={"Saya anak ke-2"} />
            <ChildComponent text={"Saya anak ke-3"} />
        </h1>
        );
    }
}

const ChildComponent = (props) => {  
    return <p>{props.text}</p>; 
};

export {ParentComponent, ChildComponent};