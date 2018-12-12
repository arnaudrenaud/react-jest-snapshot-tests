import React from 'react';
import { shallow } from 'enzyme';
import ShowOtherAdviceButton from "./ShowOtherAdviceButton";

describe('ShowOtherAdviceButton', () => {
  const handleClickMock = jest.fn();

  it('renders correctly', () => {
    const wrapper = shallow(<ShowOtherAdviceButton onClick={handleClickMock} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('when button clicked', () => {
    it('calls prop onClick', () => {
      const wrapper = shallow(<ShowOtherAdviceButton onClick={handleClickMock} />);
      wrapper.find('button').simulate('click');
      expect(handleClickMock).toHaveBeenCalledTimes(1);
    });
  });
});