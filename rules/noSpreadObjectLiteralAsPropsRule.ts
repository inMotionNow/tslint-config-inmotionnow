import * as Lint from 'tslint'
import * as ts from 'typescript'
import { isJsxSpreadAttribute, isObjectLiteralExpression } from 'tsutils'

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING =
    'spreading an object literal as props is not encouraged'

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    if (sourceFile.languageVariant === ts.LanguageVariant.JSX) {
      return this.applyWithFunction(sourceFile, walk)
    } else {
      return []
    }
  }
}

function walk(ctx: Lint.WalkContext<void>) {
  const cb = (node: ts.Node) => {
    if (isJsxSpreadAttribute(node)) {
      ts.forEachChild(node, (spread: ts.Node) => {
        if (isObjectLiteralExpression(spread)) {
          return ctx.addFailureAtNode(node, Rule.FAILURE_STRING)
        }
      })
    }
    return ts.forEachChild(node, cb)
  }

  return ts.forEachChild(ctx.sourceFile, cb)
}
