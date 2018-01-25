import React from 'react';

import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

// import the component to put under test.
import Navigation from '../Navigation';

describe('the navigation component', () => {

    it('renders correctly', () => {
        let model = {
            CssClass: 'testcss',
            Nodes: [
                {
                    Title: 'Root Level Node 0',
                    Url: 'http://google.com',
                    ChildNodes: []
                },
                {
                    Title: 'Root Level Node 1',
                    Url: 'http://google.com',
                    ChildNodes: [
                        {
                            Title: 'Sub Level 1-0',
                            Url: 'http://google.com',
                            ChildNodes: []
                        },
                        {
                            Title: 'Sub Level 1-1',
                            Url: 'http://google.com',
                            ChildNodes: [
                                {
                                    Title: 'Sub Level 1-1-0',
                                    Url: 'http://google.com',
                                    ChildNodes: []
                                },
                            ]
                        }
                    ]
                },
                {
                    Title: 'Root Level Node 2',
                    Url: 'http://google.com',
                    ChildNodes: [
                        {
                            Title: 'Sub Level 2-0',
                            Url: 'http://google.com'
                        }
                    ]
                }
            ]
        }
        const tree = renderer.create(
            <Navigation Model={model} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});