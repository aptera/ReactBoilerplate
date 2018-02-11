import React, {Component} from 'react';
import SociaLite from '../../components/SociaLite/SociaLite';

const data = [
    {
        type: 'email',
        subject: 'Studies Show',
        body: 'That one can prevent wrecking themselves if one first checks themselves',
        to: 'dfederspiel@federnet.com',
        cc: '',
        bcc: ''
    },
    {
        type: 'email',
        to: 'dfederspiel@federnet.com',
    },
    // {
    //     title: 'Twitter',
    //     iconName: 'twitter',
    //     url: 'https://twitter.com/intent/tweet?text={LINK}',
    //     color: 'green'
    // },
    {
        type: 'facebook',
        url: 'https://blog.apterainc.com' // optional, uses current page if not specified.
    },
    {
        type: 'google-plus'
    },
    {
        type: 'facebook',
        url: 'https://blog.apterainc.com' // optional, uses current page if not specified.
    },
    {
        type: 'google-plus'
    },
    {
        type: 'facebook',
        url: 'https://blog.apterainc.com' // optional, uses current page if not specified.
    },
    {
        type: 'google-plus'
    },
    {
        type: 'facebook',
        //url: 'https://blog.apterainc.com' // optional, uses current page if not specified.
    },
    {
        type: 'google-plus'
    },
    // {
    //     type: 'other',
    //     title: 'Instagram',
    //     iconName: 'instagram',
    //     url: 'https://www.instagram.com/apterasoftware/',
    //     color: 'yellow'
    // },
    // {
    //     type: 'other',
    //     title: 'LinkedIn',
    //     iconName: 'linkedin',
    //     url: 'http://www.linkedin.com/shareArticle?mini=true&amp;url={LINK}&amp;title={SUBJECT}&amp;summary={SUMMARY}',
    //     color: 'cyan'
    // },
    // {
    //     type: 'other',
    //     title: 'Pinterest',
    //     iconName: 'pinterest',
    //     url: 'http://pinterest.com/pin/create/button/?url={LINK}&amp;media={IMAGE}&amp;description={SUMMARY}',
    //     color: 'hotpink'
    // },
    // {
    //     type: 'other',
    //     title: 'Github',
    //     iconName: 'github',
    //     url: 'https://github.com/aptera',
    //     color: 'hotpink'
    // }
];

class SociaLite_Page extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SociaLite data={data} size="lg" />
            </div>
        );
    }
}

export default SociaLite_Page;