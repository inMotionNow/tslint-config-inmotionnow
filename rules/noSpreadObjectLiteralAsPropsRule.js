"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Lint = require("tslint");
var ts = require("typescript");
var tsutils_1 = require("tsutils");
var Rule = /** @class */ (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (sourceFile.languageVariant === ts.LanguageVariant.JSX) {
            return this.applyWithFunction(sourceFile, walk);
        }
        else {
            return [];
        }
    };
    Rule.FAILURE_STRING = 'spreading an object literal as props is not encouraged';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var cb = function (node) {
        if (tsutils_1.isJsxSpreadAttribute(node)) {
            ts.forEachChild(node, function (spread) {
                if (tsutils_1.isObjectLiteralExpression(spread)) {
                    return ctx.addFailureAtNode(node, Rule.FAILURE_STRING);
                }
            });
        }
        return ts.forEachChild(node, cb);
    };
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noSpreadObjectLiteralAsPropsRule.js.map