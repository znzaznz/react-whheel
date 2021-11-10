import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from "../icon";
import {mount} from "enzyme";

describe('icon', () => {
    it('Icon 是个svg', () => {
        const json = renderer.create(<Icon name={'weibo'}/>).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('onClick', function () {
        const fn = jest.fn()
        const component = mount(<Icon name="wechat" onClick={fn}/>)
        component.find('svg').simulate('click')
        expect(fn).toBeCalled()
    });
})