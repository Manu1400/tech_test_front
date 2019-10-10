import React from 'react';
import EditableField from './EditableField';
import renderer from 'react-test-renderer';

test('Display EditableField component', () => {
  const component = renderer.create(
    <EditableField name="Name" value="Charlie Chaplin" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

/* logical tests */
