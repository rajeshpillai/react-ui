import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './tab.css';

class Tabs extends Component {
    state = {
        activeIndex: 1
    }

    selectTabIndex(activeIndex) {
        this.setState({activeIndex});
    }

    render() {
        return (
            <div className="tabs">
                {this.props.children}
            </div>
        );
    }
}

class TabPanels extends Component {
    render() {
        const activeIndex = this.props.activeIndex;
        return (
            <div className="panels">
                {this.props.children[activeIndex]}
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
        const isActive = false; //todo:
        const isDisabled = false;
        return (
            <div className={isDisabled 
                ? 'tab disabled'
                : isActive
                    ? 'tab active'
                    : 'tab'}
                onClick={isDisabled ? null : () => '???'}
                >
                {this.props.children}
            </div>
        )
    }
}

