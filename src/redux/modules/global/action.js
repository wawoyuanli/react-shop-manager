import { SET_TOKEN, SET_ASSEMBLY_SIZE, SET_LANGUAGE, SET_THEME_CONFIG } from '../../../redux/mutation-types.js'

/* setToken */
export const setToken = token => {
  return {
    type: SET_TOKEN,
    token,
  }
}

/* setAssemblySize */
export const setAssemblySize = assemblySize => {
  return {
    type: SET_ASSEMBLY_SIZE,
    assemblySize,
  }
}

/* setLanguage */
export const setLanguage = language => {
  return {
    type: SET_LANGUAGE,
    language,
  }
}

/* setThemeConfig */
export const setThemeConfig = themeConfig => {
  return {
    type: SET_THEME_CONFIG,
    themeConfig,
  }
}
