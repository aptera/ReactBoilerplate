import React, { Component } from 'react';
import './socialite.scss';
import SociaLiteItem from './SociaLiteItem';

const data = [
    {
        title: 'Email',
        iconName: 'envelope',
        url: 'mailto:?subject=Check%20out%20how%20ridiculously%20responsive%20these%20social%20buttons%20are&amp;body=http%3A%2F%2Frrssb.ml',
        color: 'red'
    },
    {
        title: 'Twitter',
        iconName: 'twitter',
        url: 'mailto:?subject=Check%20out%20how%20ridiculously%20responsive%20these%20social%20buttons%20are&amp;body=http%3A%2F%2Frrssb.ml',
        color: 'green'
    },
    {
        title: 'Facebook',
        iconName: 'facebook',
        url: 'mailto:?subject=Check%20out%20how%20ridiculously%20responsive%20these%20social%20buttons%20are&amp;body=http%3A%2F%2Frrssb.ml',
        color: 'blue'
    },
    {
        title: 'Instagram',
        iconName: 'instagram',
        url: 'mailto:?subject=Check%20out%20how%20ridiculously%20responsive%20these%20social%20buttons%20are&amp;body=http%3A%2F%2Frrssb.ml',
        color: 'yellow'
    }
];

class SociaLite extends Component {

    render() {
        return (
            <ul className="rrssb-buttons rrssb-1">
                {(data).map((item, index) =>
                    <SociaLiteItem
                        key={index}
                        title={item.title}
                        iconName={item.iconName}
                        url={item.url}
                        size='2x'
                        color={item.color}
                    />
                )}
            </ul>
        );
    }
}

export default SociaLite;

