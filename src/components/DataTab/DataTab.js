import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './datatab.css';

import Tab from '../Tab';

export default class DataTab extends Component {
    render() {
        const {data} = this.props;
        return (
            <Tab.Tabs>
                <Tab.TabList>
                    {data.map(tab => (
                        <Tab>{tab.label}</Tab>
                    ))}
                </Tab.TabList>
                <Tab.TabPanels>
                    {data.map(tab => (
                        <Tab.TabPanel>{tab.content}</Tab.TabPanel>
                    ))}
                </Tab.TabPanels>
            </Tab.Tabs>
        );
    }
}
