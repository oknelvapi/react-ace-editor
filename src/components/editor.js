import React, { Component } from 'react';
// React AceEditor
import AceEditor from 'react-ace';
import 'brace/mode/sql';
import 'brace/theme/xcode'

export default class Editor extends Component {

    state = {
        value: this.props.value
    };

    static getDerivedStateFromProps(nextProps, prevState){
        return {
            value: nextProps.value 
        }
    }

    render() {
        const { onChange, height, width, 
                readOnly, showGutter, 
                highlightActiveLine, showLineNumbers } = this.props;

        return (
            <AceEditor
                mode="sql"
                theme="xcode"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{$blockScrolling: true}}
                height={height}
                width={width}
                value={this.state.value}
                readOnly={readOnly}
                showGutter={showGutter}
                highlightActiveLine={highlightActiveLine}
                showLineNumbers={showLineNumbers}
                showPrintMargin={false}
                enableLiveAutocompletion
                enableSnippets
            />
        );
    };
}