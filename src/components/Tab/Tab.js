import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './tab.css';

class Tabs extends Component {
    render() {
        return (
            <div className="tabs">
                {this.props.children}
            </div>
        )
    }
}

class TabPanels extends Component {
    render() {
        return (
            <div className="panels">
                {this.props.children}
            </div>
        )
    }
}
class TabPanel extends Component {
    render() {
        return (
            <div className="panel">
                {this.props.children}
            </div>
        )
    }
}
class TabList extends Component {
    render() {
        return (
            <div className="tablist">
                {this.props.children}
            </div>
        )
    }
}

export default class Tab extends Component {
    static Tabs = Tabs;
    static TabList = TabList;
    static TabPanel = TabPanel;
    static TabPanels = TabPanels;

    render() {
        return (
            <div className="tab">
                {this.props.children}
            </div>
        )
    }
}

