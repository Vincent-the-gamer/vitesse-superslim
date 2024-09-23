import antfu from '@antfu/eslint-config'

// 配置ts, vue支持
export default antfu({
  typescript: true,
  vue: true,
  ignores: ['**/fixtures'],
})
