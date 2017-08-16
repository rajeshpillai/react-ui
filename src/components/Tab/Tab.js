import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './tab.css';

class Tabs extends Component {
    state = {
        activeIndex: 1
    }

    selectTabIndex = (activeIndex) => {
        console.log("state: ", activeIndex);
        this.setState({activeIndex});
    }

    render() {
        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                activeIndex: this.state.activeIndex,
                onSelectTab: this.selectTabIndex
            });
        });
        return (
            <div className="tabs">
                {children}
            </div>
        );
    }
}

class TabList extends Component {
    render() {
        const {activeIndex, onSelectTab} = this.props;
        const children = React.Children.map(this.props.children, (child,index) => {
            return React.cloneElement(child, {
                isActive: index === activeIndex,
                onSelect: () => onSelectTab(index)
            });
        })
        return (
            <div className="tabs">
                {children}
            </div>
        )
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


export default class Tab extends Component {
    static Tabs = Tabs;
    static TabList = TabList;
    static TabPanel = TabPanel;
    static TabPanels = TabPanels;

    render() {
        const {isActive,isDisabled,onSelect,children} = this.props;
        return (
            <div className={isDisabled 
                ? 'tab disabled'
                : isActive
                    ? 'tab active'
                    : 'tab'}
                onClick={isDisabled ? null : onSelect}
                >
                {children}
            </div>
        )
    }
}

