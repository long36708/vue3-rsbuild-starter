/**
 * @Author: longmo
 * @Date: 2025-12-27 21:08:29
 * @LastEditTime: 2025-12-27 21:49:42
 * @FilePath: eslint.config.js
 * @Description:
 */
import antfu from '@antfu/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default [
  ...(await antfu({
    vue: {
      overrides: {
        'vue/html-self-closing': 'off',
      },
    },
  })),
  ...oxlint.configs['flat/recommended'],
]
