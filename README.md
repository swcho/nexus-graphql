nexus-graphql
===

`nexus-graph` is fork of `nexus-prisma` to provide nexus wrapping from normal graphql schema.

This can be applied legacy graphql or generated graphql.

For example, if you have legacy REST API server. You can generate graphql schema with `openapi-to-graphql` tool.

Here is the use case.
* I have `swagger.json` and it defines legacy internal APIs.
* Generate **normal graphql schema file** with [openapi-to-graphql](https://github.com/IBM/openapi-to-graphql)
* Generate TypeScripts definitions from **normal graphql schema file** with [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator)
* Generate nexus wrapper codes from **normal graphql schema file** like `nexus-prisma` does.
* Use `nexus` for code first graphql server with resolver to legacy API endpoint

You cat test and try out as below

```sh
$ yarn install & yarn bootstrap
```

# ex-relation as demo
Using `loopback-example-relations` for legacy REST API, demonstrates how you can utilize `nexus-graphql`.

```sh
$ yarn ex-relation
```

# TODOs
* [ ] OAS3 resolve helper generation
* [ ] `nexus-client` libaray
