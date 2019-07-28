import { stringArg, scalarType } from 'nexus'
import { graphqlObjectType } from 'nexus-graphql'
import * as types from '../generated/types/types';
import { ResultValue } from 'nexus/dist/core';

// export const DATE = scalarType({
//   name: "DATE",
//   asNexusMethod: "date",
//   serialize() { /* Todo */ },
//   parseValue() { /* Todo */ },
//   parseLiteral() { /* Todo */ }
// });

export const Order = graphqlObjectType({
  name: 'Order',
  definition(t) {
    t.useOriginalFields(['*']);
    // t.date('date', {
    //   nullable: true,
    // })
    // t.field('date', {
    //   type: DATE,
    //   nullable: true,
    // })
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

type Test = ResultValue<'Query', 'order'>;

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
