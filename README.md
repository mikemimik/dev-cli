dev-cli
=======

Development CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dev-cli.svg)](https://npmjs.org/package/dev-cli)
[![CircleCI](https://circleci.com/gh/mikemimik/dev-cli/tree/master.svg?style=shield)](https://circleci.com/gh/mikemimik/dev-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/dev-cli.svg)](https://npmjs.org/package/dev-cli)
[![License](https://img.shields.io/npm/l/dev-cli.svg)](https://github.com/mikemimik/dev-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dev-cli
$ dev COMMAND
running command...
$ dev (-v|--version|version)
dev-cli/0.0.1 darwin-x64 node-v14.15.4
$ dev --help [COMMAND]
USAGE
  $ dev COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dev hello`](#dev-hello)
* [`dev help [COMMAND]`](#dev-help-command)

## `dev hello`

Describe the command here

```
USAGE
  $ dev hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/mikemimik/dev-cli/blob/v0.0.1/src/commands/hello.js)_

## `dev help [COMMAND]`

display help for dev

```
USAGE
  $ dev help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
