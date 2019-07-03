import React, { Component } from 'react';
//  Font Awesome Icon
import { faSave, faCode, faWindowClose } from '@fortawesome/free-solid-svg-icons';
// Components
import Editor from './editor';
import ButtonBox from './button';
import ContentView from './content-box.view';

const { Main, Field } = ContentView;
const example = `select * from cara audit trail
where root_id = '\${root_id}' [and (event in ($(event_names)) order by time_stamp
desc `;
              
export default class ContentBox extends Component {

    state = {
        opened: false,
        value: '',
        tempValue: ''
    };

    componentDidMount(){
        this.setState({
            value: example
        });
    };
    
    onOpened = () => {
        this.setState({
             opened: true,
             tempValue: this.state.value,
        });
    };
    onClosed = () => {
        this.setState({
            opened: false
       });
    };
    onSaved = () => {
        this.setState({
            value: this.state.tempValue
        });
        this.onClosed();
    };
    onChange =(newValue) => {
        this.setState({
            tempValue: newValue
        })
    };

    render() {
        const {value, opened, tempValue } = this.state;

        return (
            <Main>
                <Field opened={true}>
                    <ButtonBox 
                        action = {this.onOpened}
                        icon={faCode}
                    />
                    <Editor
                        height="300px"
                        width="500px"
                        value={value}
                        readOnly={true}
                        showGutter={false}
                        highlightActiveLine={false}
                        showLineNumbers={false} 
                    />
                </Field>
                <Field opened={opened}>
                    <ButtonBox 
                        action={this.onClosed}
                        icon={faWindowClose}
                    />
                    <ButtonBox 
                        action={this.onSaved}
                        save={true}
                        icon={faSave}
                    />
                    <Editor 
                        height="786px"
                        width="586px"
                        value={tempValue}
                        readOnly={false}
                        showGutter={true}
                        highlightActiveLine={false}
                        showLineNumbers={true}
                        onChange={this.onChange}
                    />
                </Field>
            </Main>   
        );
    };
}