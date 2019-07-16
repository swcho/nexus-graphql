import { stringArg } from 'nexus'
import { graphqlObjectType } from 'nexus-graphql'
import * as types from '../generated/types/types';

export const Order = graphqlObjectType({
  name: 'Order',
  definition(t) {
    t.prismaFields(['*']);
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
     * - use `t.prismaFields(['*'])` to expose all the underlying object type fields
     * - use `t.primaFields(['fieldName', ...])` to pick and/or customize specific fields
     * - use `t.prismaFields({ filter: ['fieldName', ...] })` to filter and/or customize specific fields
     */

    t.prismaFields(['*']);

    t.field('books', {
      ...t.prismaType.books,
      resolve(root, args, ctx) {
        console.log({ root, args, })
        return ctx.apis.book.bookFind(args.filter).then(r => r.data)
      }
    })

    t.field('customers', {
      ...t.prismaType.customers,
      resolve(root, args, ctx) {
        console.log({ root, args, })
        return ctx.apis.customer.customerFind(args.filter).then(r => r.data);
      }
    })

    t.field('orders', {
      ...t.prismaType.orders,
      resolve(root, args, ctx) {
        console.log({ root, args, })
        return ctx.apis.order.orderFind(args.filter).then(r => r.data)
      }
    })

    t.field('shipments', {
      ...t.prismaType.shipments,
      resolve(root, args, ctx) {
        console.log({ root, args, })
        return ctx.apis.shipment.shipmentFind(args.filter).then(r => r.data)
      }
    })

    t.field('users', {
      ...t.prismaType.users,
      resolve(root, args, ctx) {
        console.log({ root, args, })
        return ctx.apis.user.userFind(args.filter).then(r => r.data)
      }
    })
  },
})
