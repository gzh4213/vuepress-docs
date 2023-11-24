import nativeJS from './modules/js'
import vue from './modules/vue'
import react from './modules/react'
import ts from './modules/ts'
import specification from './modules/specification'
import data from './modules/data'
import build from './modules/build'
import eslint from './modules/eslint'

export default [
  ...nativeJS,
  ...vue,
  ...react,
  ...ts,
  ...specification,
  ...data,
  ...build,
  ...eslint
]