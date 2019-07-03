import React from 'react';
//  Font Awesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Components
import { Button } from './button.view';

const ButtonBox = ({save, icon, action}) => {
    return (
        <Button 
            save={save}
            onClick = {action}
        >
            <FontAwesomeIcon 
                icon={icon} 
                size='lg' 
            />
        </Button>
    );
}

export default ButtonBox;