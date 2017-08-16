import React, {Component} from 'react';
import Tab from 'zs-react/Tab';
import FaIcon from 'zs-react/FaIcon';

/** Tab example */
export default class ExampleTab extends Component {
    componentDidMount() {
    }
    render() {
        return (
        <div>
            <Tab.Tabs>
                <Tab.TabList>
                    <Tab><FaIcon iconName="fa-plane"/></Tab>
                    <Tab><FaIcon iconName="fa-bed" /></Tab>
                    <Tab><FaIcon iconName="fa-home"/></Tab>
                </Tab.TabList>
                <Tab.TabPanels>
                    <Tab.TabPanel>Tab 1</Tab.TabPanel>
                    <Tab.TabPanel>Tab 2</Tab.TabPanel>
                    <Tab.TabPanel>Tab 3</Tab.TabPanel>
                </Tab.TabPanels>
            </Tab.Tabs>            
        </div>
        );
    }
}