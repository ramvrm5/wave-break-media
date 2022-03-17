import React from 'react';

import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';



import ShallowRenderer from 'react-test-renderer/shallow';
import ImageList from '../components/ImageList';


const renderer = new ShallowRenderer();
renderer.render(<ImageList />);
const result = renderer.getRenderOutput();


describe("Normal Tests", () => {
    it("should initialize page to 1", () => {
        // check for initial state
        expect(result.props.children[1].props.children.props.page).toEqual(1);
    });
})




