import * as ts from 'typescript'
import * as Lint from 'tslint'
import { isUpperCase } from 'tslint/lib/utils'
import { SyntaxKind } from 'typescript'

const FAILURE_STRING = 'declarations must start with letter I.'

class TypeAliasWalker extends Lint.RuleWalker {
  public visitTypeAliasDeclaration(node: ts.TypeAliasDeclaration) {
    if (
      !this.hasPrefixI(node.name.text) &&
      node.type.kind !== SyntaxKind.UnionType &&
      node.type.kind !== SyntaxKind.StringLiteral &&
      node.type.kind !== SyntaxKind.FunctionType &&
      node.type.kind !== SyntaxKind.LastTypeNode
    ) {
      const fix = new Lint.Replacement(node.name.getStart(), node.name.getWidth(), `I${node.name.text}`)
      this.addFailure(
        this.createFailure(node.getStart(), node.getWidth(), ` ${SyntaxKind[node.type.kind]} ${FAILURE_STRING}`, fix)
      )
    }
    super.visitTypeAliasDeclaration(node)
  }
  hasPrefixI(name: string): boolean {
    return name.length >= 2 && name[0] === 'I' && isUpperCase(name[1])
  }
}

export class Rule extends Lint.Rules.AbstractRule {
  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new TypeAliasWalker(sourceFile, this.getOptions()))
  }
}
