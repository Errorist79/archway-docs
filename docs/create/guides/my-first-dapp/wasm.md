---
sidebar_position: 3
---

# Producing Wasm executables

Since we've tested and built our contract, we're still operating under the assumption that everything works.
However, to test our dapp on Archway, we'll need to build it as a `wasm` executable, then upload and instantiate it on chain.

For that, you'll need the `wasm32-unknown-unknown` target installed in your toolchain as well. You can add it using:

```bash
rustup target add wasm32-unknown-unknown
```

There are 2 types of `wasm` binaries that can be produced by the Developer CLI. Let's call them _"default"_ `wasm` and _"CosmWasm"_ `wasm`.

## Default Wasm executables

Regular `wasm` binaries can be produced by running the Rust native command `cargo wasm`.

```bash
cargo wasm
```

Example output:

```bash
Building wasm executable...

  Compiling proc-macro2 v1.0.28
  Compiling unicode-xid v0.2.2
  # And so on until ...
  Compiling my-project v0.1.0 (/home/my-system-path/my-project)
    Finished release [optimized] target(s) in 27.78s
```

While it's good to know your project will compile valid `wasm`, these executables cannot be uploaded to the blockchain; for that, you'll need to produce a _CosmWasm_ `wasm` binary.

## CosmWasm Wasm executables

_CosmWasm_ `wasm` executables are optimized using the `cosmwasm/rust-optimizer` which produces a smaller executable size than `cargo wasm`. 

If you're coming from a `C++` background, it's like building executables with [UPX](https://upx.github.io/), as `cosmwasm/rust-optimizer` also compresses the binary to produce smaller build outputs.

To build a _CosmWasm_ `wasm` executable, pass the `--optimize` flag to `archway build`.

```bash
archway build --optimize
```

Example output:

```bash
Building wasm binary...
✔ Optimizing wasm file...
Optimized wasm binary saved to artifacts/my_first_dapp.wasm
```

:::info
Building CosmWasm `wasm` executables requires the [Binaryen](https://github.com/WebAssembly/binaryen) toolkit. See the [installation](../../getting-started/install.mdx#binaryen) instructions for details on installing this package on your system.
:::