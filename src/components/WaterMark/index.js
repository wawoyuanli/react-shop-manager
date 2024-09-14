/* 
  功能：水印
  author:胡元丽
  date:2024/09/14
 */
// import React from 'react'
import './index.less'
const WaterMark = config => {
  const defaultConfig = {
    content: `胡元丽` + new Date().getFullYear() + (new Date().getMonth() + 1) + new Date().getDate(),
    fontSize: '20px',
    opacity: 0.3,
    rotate: '-25',
    color: '#ADADAD',
    modalId: 'J_waterMarkModalByXHMAndDHL',
  }
  /* 浅拷贝 defaultConfig:默认需要拷贝的数据 config:合并的数据*/
  config = Object.assign({}, defaultConfig, config)
  const existMarkModalDom = document.getElementById(config.modalId)
  if (existMarkModalDom) {
    document.body.removeChild(existMarkModalDom)
  }
  const markModalDom = document.createElement('div')
  markModalDom.setAttribute('id', config.modalId)
  markModalDom.style['position'] = 'fixed'
  markModalDom.style['top'] = 0
  markModalDom.style['left'] = 0
  markModalDom.style['bottom'] = 0
  markModalDom.style['right'] = 0
  markModalDom.style['background-color'] = 'transparent'
  markModalDom.style['pointer-events'] = 'none'
  markModalDom.style['z-index'] = 9999
  markModalDom.style['overflow'] = 'hidden'
  /*  */
  const markContentDom = document.createElement('span')
  markContentDom.style['position'] = 'relative'
  markContentDom.style['display'] = 'inline-block'
  markContentDom.style['max-width'] = '33%'
  markContentDom.style['min-width'] = '300px'
  markContentDom.style['padding'] = '80px 0px'
  markContentDom.style['height'] = '100px'
  markContentDom.style['text-align'] = 'center'
  markContentDom.style['opacity'] = config.opacity
  markContentDom.style['pointer-events'] = 'none'

  const markContentTxtDom = document.createElement('span')
  markContentTxtDom.innerHTML = config.content
  markContentTxtDom.style['position'] = 'absolute'
  /* 空间不足换行显示 */
  markContentTxtDom.style['display'] = 'inline-block'
  markContentTxtDom.style['pointer-events'] = 'none'
  markContentTxtDom.style['top'] = '50%'
  markContentTxtDom.style['left'] = '50%'
  markContentTxtDom.style['transform'] = 'translate(-50%, -50%) rotate(' + config.rotate + 'deg)'
  markContentTxtDom.style['font-size'] = config.fontSize
  markContentTxtDom.style['color'] = config.color
  markContentDom.appendChild(markContentTxtDom)
  const contentHtml = markContentDom.outerHTML
  let allContentHtml = ''
  /* 第一行是1 第二行是2 第三行是3 */
  for (let i = 0; i < 12; i++) {
    allContentHtml += contentHtml
  }
  markModalDom.innerHTML = allContentHtml
  console.log(markModalDom, 'markModalDom')
  document.body.appendChild(markModalDom)
}

export default WaterMark
