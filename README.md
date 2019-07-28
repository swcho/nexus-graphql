nexus-graphql
===

`nexus-graph` is fork of `nexus-prisma` to provide nexus wrapping from normal graphql schema.

This can be applied legacy graphql or generated graphql.

For example, if you have legacy REST API server. You can generate graphql schema with `openapi-to-graphql` tool.

Here is the use case.
* I have `swagger.json` and it defines legacy internal APIs.
* Generate **normal graphql schema file** with [openapi-to-graphql](https://github.com/IBM/openapi-to-graphql)
* Generate TypeScripts definitions from **normal graphql schema file** with [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator)
* Generate nexus wrapper codes from **normal graphql schema file** with `nexus-graphql`.
* Use `nexus` for code first graphql server with resolver to legacy API endpoint

# Installation

```sh
$ yarn install
```

# ex-relation as demo
Using `loopback-example-relations` for legacy REST API, demonstrates how you can utilize `nexus-graphql`.

Let's start with running `loopback-example-relations` and it's nexus graphql server.

```sh
$ yarn ex-relation-install
$ yarn ex-relation
```

Query example

```ts
export const Order = graphqlObjectType({
  name: 'Order',
  definition(t) {
    t.useOriginalFields(['*']);
    t.field('customer', {
      type: 'Customer',
      async resolve(root: types.Order, args, ctx) {
        const ret = await ctx.apis.customer.customerFindById(`${root.customerId}`).then(r => r.data);
        console.log(ret);
        return ret;
      }
    })
  }
})

export const Query = graphqlObjectType({
  name: 'Query',
  definition(t) {
    /**
     * - use `t.useOriginalFields(['*'])` to expose all the underlying object type fields
     * - use `t.useOriginalFields(['fieldName', ...])` to pick and/or customize specific fields
     * - use `t.useOriginalFields({ filter: ['fieldName', ...] })` to filter and/or customize specific fields
     */

    t.useOriginalFields(['*']);

    t.field('books', {
      ...t.originalType.books,
      resolve(root, args, ctx) {
        console.log({ root, args, })
        return ctx.apis.book.bookFind(args.filter).then(r => r.data)
      }
    })

    t.field('customers', {
      ...t.originalType.customers,
      resolve(root, args, ctx) {
        console.log({ root, args, })
        return ctx.apis.customer.customerFind(args.filter).then(r => r.data);
      }
    })

    t.field('orders', {
      ...t.originalType.orders,
      resolve(root, args, ctx) {
        console.log({ root, args, })
        return ctx.apis.order.orderFind(args.filter).then(r => r.data)
      }
    })

    t.field('shipments', {
      ...t.originalType.shipments,
      resolve(root, args, ctx) {
        console.log({ root, args, })
        return ctx.apis.shipment.shipmentFind(args.filter).then(r => r.data)
      }
    })

    t.field('users', {
      ...t.originalType.users,
      resolve(root, args, ctx) {
        console.log({ root, args, })
        return ctx.apis.user.userFind(args.filter).then(r => r.data)
      }
    })
  },
})
```

# TODOs
* [ ] OAS3 resolve helper generation
* [ ] `nexus-client` libaray
