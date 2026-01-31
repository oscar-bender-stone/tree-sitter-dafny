/**
 * @file Unofficial tree-sitter grammar for the Dafny language.
 * @author Oscar Bender-Stone <oscar-bender-stone@protonmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "dafny",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
