import { ModuleDeclaration } from 'didi'
import RewriteContextPad from './ContextPad'

// 使用 paletteProvider 同名参数 覆盖 默认 paletteProvider 构造函数
const contextPad: ModuleDeclaration = {
  contextPad: ['type', RewriteContextPad]
}

export default contextPad
