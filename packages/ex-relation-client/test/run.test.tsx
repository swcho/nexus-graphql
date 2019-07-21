import * as React from 'react';
import { useGetAllQuery } from '../src';
import * as renderer from 'react-test-renderer';
import { ApolloProvider, getMarkupFromTree } from 'react-apollo-hooks';
import ApolloClient, { InMemoryCache, gql } from "apollo-boost";
require('isomorphic-fetch');
import {shallow, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

// for SSR
import { ApolloClient as ApolloClientForSSR, ApolloClientOptions, NormalizedCacheObject } from "apollo-boost";
import { createHttpLink } from 'apollo-link-http';
import { renderToString } from 'react-dom/server';

configure({ adapter: new Adapter() });

function createBoostClient() {
  return new ApolloClient({ uri: 'http:localhost:4000' });
}

function createApolloClient(options: Partial<ApolloClientOptions<NormalizedCacheObject>>) {
  return new ApolloClientForSSR({
    link: createHttpLink({
      uri: 'http://localhost:4000',
    }),
    cache: new InMemoryCache(),
    ...options,
  });
}

function Apollo(props: React.PropsWithChildren<{}>) {
  const {
    children,
  } = props;
  const client = createBoostClient();
  return (
    <ApolloProvider
      client={client}
    >
      {children}
    </ApolloProvider>
  )
}

function ApolloSSR(props: React.PropsWithChildren<{}>) {
  const {
    children,
  } = props;
  const client = createApolloClient({ ssrMode: true });
  return (
    <ApolloProvider
      client={client}
    >
      {children}
    </ApolloProvider>
  )
}

function TestGetAllQeury(props: Parameters<typeof useGetAllQuery>[0]) {
  console.log(`TestGetAllQeury`, props)
  const all = useGetAllQuery(props);
  return (
      <pre>
        {JSON.stringify(all, null, 2)}
      </pre>
  );
}

describe('Test', () => {
  // it('useGetAllQuery with react-test-renderer', () => {
  //   const component = renderer.create(<Apollo><TestGetAllQeury/></Apollo>);
  // })
  // it('useGetAllQuery with enzime', () => {
  //   const wrapper = shallow(<Apollo><TestGetAllQeury/></Apollo>)
  //   console.log(wrapper.render().text());
  // })
  it('Apollo client from tutorial', async () => {
    const client = new ApolloClientForSSR({
      link: createHttpLink({
        uri: "https://48p1r2roz4.sse.codesandbox.io",
      }),
      cache: new InMemoryCache(),
    });
    const resp = await client.query({
      query: gql`
        {
          rates(currency: "USD") {
            currency
          }
        }
      `
    })
    expect(resp.data.rates.length).toEqual(185)
  })
  it('Apollo client with local', async () => {
    const client = new ApolloClientForSSR({
      link: createHttpLink({
        uri: 'http://localhost:4000',
      }),
      cache: new InMemoryCache(),
    });
    const resp = await client.query({
      query: gql`
        {
          customers {
            id
            age
            name
          }
        }
      `
    })
    expect(resp.data.customers.length).toEqual(7)
  })
  it('useGetAllQuery with SSR', function (done) {
    console.log('start')
    getMarkupFromTree({
      renderFunction: renderToString,
      // onBeforeRender: () => console.log('onBeforeRender'),
      tree: (
        <ApolloSSR><TestGetAllQeury ssr/></ApolloSSR>
      )
    }).then(html => console.log('html', { html })).then(done);
  })
})