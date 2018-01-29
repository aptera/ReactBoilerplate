import React, { Component } from 'react';
import values from 'object.values';
import './navigation.scss';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            model: props.Model
        };
    }
    
    renderRootLevelNode(node) {
        return (
            <li key={'root_' + node.Title}>
                <a href={node.Url}>{node.Title}</a>
                {this.renderSubLevelsRecursive(node, 0)}
            </li>
        );
    }

    renderSubLevelsRecursive(node, level)
    {
        if (!node.ChildNodes || node.ChildNodes.length == 0)
            return;

        return (
            <ul>
                {values(node.ChildNodes).map((node) =>
                    <li key={'sub_' + node.Title}>
                        <a href={node.Url}>{node.Title}</a>
                        {this.renderSubLevelsRecursive(node, level + 1)}
                    </li>
                )}
            </ul>
        );
    }

    render() {
        return (
            <div className={this.props.Model.CssClass}>
                <ul className="nav nav-react">
                    {values(this.props.Model.Nodes).map((node) =>
                        this.renderRootLevelNode(node)
                    )}
                </ul>
            </div>
        );
    }
}

export default Navigation;