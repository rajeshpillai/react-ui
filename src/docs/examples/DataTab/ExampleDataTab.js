import React, {Component} from 'react';
import DataTab from 'zs-react/DataTab';
import FaIcon from 'zs-react/FaIcon';

/** DataTab example */
export default class ExampleDataTab extends Component {
    
    render() {
        const data =[
            {   label: <FaIcon iconName="fa-car" />,
                content: "Some cars"
            },
            {   label: <FaIcon iconName="fa-plane" />,
                content: "Some flights"
            },
            {   label: <FaIcon iconName="fa-coffee" />,
                content: "Something else"
            },
        
        ];
        return (
            <div>
                <DataTab data={data} />
            </div>
        );
    }
}