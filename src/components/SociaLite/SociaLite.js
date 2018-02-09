import React, { Component } from 'react';
import './socialite.scss';
import SociaLiteItem from './SociaLiteItem';

const data = [
    {
        title: 'Email',
        iconName: 'envelope',
        url: 'mailto:?Subject={SUBJECT}',
        color: 'red'
    },
    {
        title: 'Twitter',
        iconName: 'twitter',
        url: 'https://twitter.com/intent/tweet?text={LINK}',
        color: 'green'
    },
    {
        title: 'Facebook',
        iconName: 'facebook',
        url: 'https://www.facebook.com/sharer/sharer.php?u={LINK}',
        color: 'blue'
    },
    {
        title: 'Instagram',
        iconName: 'instagram',
        url: 'https://www.instagram.com/apterasoftware/',
        color: 'yellow'
    },
    {
        title: 'LinkedIn',
        iconName: 'linkedin',
        url: 'http://www.linkedin.com/shareArticle?mini=true&amp;url={LINK}&amp;title={SUBJECT}&amp;summary={SUMMARY}',
        color: 'cyan'
    },
    {
        title: 'GooglePlus',
        iconName: 'google-plus',
        url: 'https://plus.google.com/share?url={LINK}',
        color: 'hotpink'
    },
    {
        title: 'Pinterest',
        iconName: 'pinterest',
        url: 'http://pinterest.com/pin/create/button/?url={LINK}&amp;media={IMAGE}&amp;description={SUMMARY}',
        color: 'hotpink'
    },
    {
        title: 'Github',
        iconName: 'github',
        url: 'https://github.com/aptera',
        color: 'hotpink'
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
                        subject='check out this cool thing'
                        summary='this cool thing has a summary and its right here and yep okay cool'
                        link='https://github.com/dfederspiel/ReactBoilerplate'

                    />
                )}
            </ul>
        );
    }
}

export default SociaLite;

