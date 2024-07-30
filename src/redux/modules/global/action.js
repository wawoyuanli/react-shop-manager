import * as types from '../../../redux/mutation-types'

/* setToken */
export const setToken = token => {
  return {
    type: types.SET_TOKEN,
    token,
  }
}

/* setAssemblySize */
export const setAssemblySize = assemblySize => {
  return {
    type: types.SET_ASSEMBLY_SIZE,
    assemblySize,
  }
}

/* setLanguage */
export const setLanguage = language => {
  return {
    type: types.SET_LANGUAGE,
    language,
  }
}

/* setThemeConfig */
export const setThemeConfig = themeConfig => {
  return {
    type: types.SET_THEME_CONFIG,
    themeConfig,
  }
}
