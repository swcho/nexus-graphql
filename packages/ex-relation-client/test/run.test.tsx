import * as React from 'react';
import { useGetAllQuery } from '../src';
import * as renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo-hooks';
import ApolloClient from "apollo-boost";
require('isomorphic-fetch');
import {shallow, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
// setup file

configure({ adapter: new Adapter() });

function Apollo(props: React.PropsWithChildren<{}>) {
  const {
    children,
  } = props;
  const client = new ApolloClient({ uri: 'http:localhost:4000' });
  return (
    <ApolloProvider
      client={client}
    >
      {children}
    </ApolloProvider>
  )
}

function TestGetAllQeury() {
  const all = useGetAllQuery();
  return (
      <pre>
        {JSON.stringify(all, null, 2)}
      </pre>
  );
}

describe('Test', () => {
  it('useGetAllQuery', () => {
    const component = renderer.create(<Apollo><TestGetAllQeury/></Apollo>);
  })
  it('useGetAllQuery', () => {
    const wrapper = shallow(<Apollo><TestGetAllQeury/></Apollo>)
    console.log(wrapper.render().text());
  })
})