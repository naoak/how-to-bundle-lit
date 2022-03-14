## Description

This package demonstrates how to transpile ts files including lit-element and decorators in each ts transpilers (babel, esbuild, sucrase, swc, tsc), mainly investigating issues around class fileds and decorators.

## Build

To build all demos,

```
npm run build
```

To build a demo,

```
npm run build -w <demo-name>
```

## Launch a Demo

To serve a demo,

```
npm run serve -w <demo-name>
```

## Demo List

- babel-lit-demo
- esbuild-lit-demo
- sucrase-lit-demo (decorators are not working)
- swc-lit-demo (property decorators are not working)
- tsc-lit-demo
- tsc-polymer-demo
