"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var typescript_1 = require("typescript");
var Lint = require("tslint");
var utils_1 = require("tslint/lib/utils");
var FAILURE_STRING = 'declarations must start with letter I.';
var TypeAliasWalker = /** @class */ (function (_super) {
    __extends(TypeAliasWalker, _super);
    function TypeAliasWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeAliasWalker.prototype.visitTypeAliasDeclaration = function (node) {
        if (!this.hasPrefixI(node.name.text) &&
            node.type.kind !== typescript_1.SyntaxKind.UnionType &&
            node.type.kind !== typescript_1.SyntaxKind.StringLiteral &&
            node.type.kind !== typescript_1.SyntaxKind.FunctionType &&
            node.type.kind !== typescript_1.SyntaxKind.LastTypeNode) {
            var fix = new Lint.Replacement(node.name.getStart(), node.name.getWidth(), "I" + node.name.text);
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), " " + typescript_1.SyntaxKind[node.type.kind] + " " + FAILURE_STRING, fix));
        }
        _super.prototype.visitTypeAliasDeclaration.call(this, node);
    };
    TypeAliasWalker.prototype.hasPrefixI = function (name) {
        return name.length >= 2 && name[0] === 'I' && utils_1.isUpperCase(name[1]);
    };
    return TypeAliasWalker;
}(Lint.RuleWalker));
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new TypeAliasWalker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
