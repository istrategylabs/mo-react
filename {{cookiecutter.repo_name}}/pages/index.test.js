import { shallow } from 'enzyme';
import Index from './index';

it('Renders an index page.', () => {
  const app = shallow(<Index />);
  expect(app.find('[data-testid="home-text"]').length).toEqual(1);
});
