import * as React from 'react';
import { useGetAllQuery, GetAllDocument } from '../src';
import * as renderer from 'react-test-renderer';
import { ApolloProvider as ApolloHooksProvider, getMarkupFromTree } from 'react-apollo-hooks';
import { ApolloProvider as ApolloProvider, Query, getDataFromTree } from 'react-apollo';
import { } from 'react'
import ApolloBoostClient, { InMemoryCache, gql } from "apollo-boost";
require('isomorphic-fetch');
import {shallow, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

// for SSR
import { ApolloClient, ApolloClientOptions, NormalizedCacheObject } from "apollo-boost";
import { createHttpLink } from 'apollo-link-http';
import { renderToString } from 'react-dom/server';

configure({ adapter: new Adapter() });

function createBoostClient() {
  return new ApolloBoostClient({ uri: 'http:localhost:4000' });
}

function createApolloClient(options: Partial<ApolloClientOptions<NormalizedCacheObject>>) {
  return 
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
  // it('Apollo client from tutorial', async () => {
  //   const client = new ApolloClientForSSR({
  //     link: createHttpLink({
  //       uri: "https://48p1r2roz4.sse.codesandbox.io",
  //     }),
  //     cache: new InMemoryCache(),
  //   });
  //   const resp = await client.query({
  //     query: gql`
  //       {
  //         rates(currency: "USD") {
  //           currency
  //         }
  //       }
  //     `
  //   })
  //   expect(resp.data.rates.length).toEqual(185)
  // })
  it('Apollo client with local', async () => {
    const client = new ApolloClient({
      link: createHttpLink({
        uri: 'http://localhost:4000',
      }),
      cache: new InMemoryCache(),
      ssrMode: true,
      ssrForceFetchDelay: 300,
    });
    const resp = await client.query({
      query: GetAllDocument,
    })
    expect(resp.data.customers.length).toEqual(7)
    expect(resp.data.books.length).toEqual(1)
    expect(resp.data.orders.length).toEqual(5)
    expect(resp.data.shipments.length).toEqual(1)
  })
  it('SSR react-apollo way', async () => {
    const client = new ApolloClient({
      link: createHttpLink({
        uri: 'http://localhost:4000',
      }),
      cache: new InMemoryCache(),
      ssrMode: true,
      ssrForceFetchDelay: 0,
    });

    function TestApolloQuery() {
      return (
        <Query query={GetAllDocument}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (
              <pre>
                {JSON.stringify(data, null, 2)}
              </pre>
            )
          }}
        </Query>
      )
    }
    const el = (
      <ApolloProvider client={client}>
        <TestApolloQuery/>
      </ApolloProvider>
    )
    await getDataFromTree(el);
    const html = renderToString(el);
    console.log(html);
  })
  // it('SSR react-apollo-hooks way', async (done) {
  //   getMarkupFromTree({
  //     renderFunction: renderToString,
  //     // onBeforeRender: () => console.log('onBeforeRender'),
  //     tree: (
  //       <ApolloSSR><TestGetAllQeury ssr/></ApolloSSR>
  //     )
  //   }).then(html => console.log('html', { html })).then(done);
  // })
})