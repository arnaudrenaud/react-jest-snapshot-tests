import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    fetchMock.get(
      'https://api.adviceslip.com/advice',
      { slip : { advice: 'Always trust random advice.'} },
      { repeat: 1 }
    );
  });

  afterEach(() => {
    fetchMock.reset();
  });

  describe('before advice fetched', () => {
    it('renders correctly', () => {
      const wrapper = mount(<App />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('after advice fetched', () => {
    it('renders correctly', done => {
      const wrapper = mount(<App />);
      setImmediate(() => {
        wrapper.update();
        expect(wrapper).toMatchSnapshot();
        done();
      });
    });

    describe('when button clicked', () => {
      beforeEach(() => {
        fetchMock.get(
          'https://api.adviceslip.com/advice',
          { slip : { advice: 'Other advice.'} },
          { overwriteRoutes: false }
        );
      });

      it('renders other random advice', done => {
        const wrapper = mount(<App />);
        wrapper.find('.Advice-other-advice-button').simulate('click');
        setImmediate(() => {
          wrapper.update();
          expect(wrapper).toMatchSnapshot();
          done();
        });
      });
    });
  });
});
