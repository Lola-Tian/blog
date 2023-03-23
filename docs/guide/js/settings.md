---
title: 'vsCode配置文件'
sidebar: auto
tags:
 - 
---
# 统一配置vsCode文件settings.json

## 背景
在团队开发中，不同开发人员的代码风格不同，代码编辑工具的默认格式也不相同，这样就造成代码的differ。所以统一的代码格式是必要的。

## 文件位置
编辑器左下脚，打开设置 -> 在settings.json文件中编辑

## 配置内容

```json
{
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  //  #让prettier使用eslint的代码格式进行校验
  "prettier.eslintIntegration": true,
  //  #去掉代码结尾的分号
  "prettier.semi": false,
  //  #使用带引号替代双引号
  "prettier.singleQuote": true,
  //  #让函数(名)和后面的括号之间加个空格
  // "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
      // #vue组件中html代码格式化样式
    }
  },
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "editor.renderControlCharacters": true,
  "editor.renderWhitespace": "all",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "terminal.integrated.rendererType": "dom",
  "diffEditor.ignoreTrimWhitespace": false,
  "git.autofetch": true,
  "editor.fontSize": 15,
  "workbench.colorTheme": "Default Dark+",
  "http.proxyAuthorization": null,
  "vetur.experimental.templateInterpolationService": false,
  "vetur.validation.template": false,
  "vetur.validation.style": false,
  "vetur.validation.script": false,
  "workbench.iconTheme": "vs-seti",
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #每次保存的时候自动格式化
  "editor.formatOnSave": true,
  // #每次保存的时候将代码按eslint格式进行修复
  "editor.tokenColorCustomizations": {},
  // 选中高亮的颜色
  "workbench.colorCustomizations": {
    "editor.selectionBackground": "#aa0000"
  },
  "workbench.welcomePage.hiddenCategories": [
    "Setup",
    "Beginner"
  ],
  "markdown.preview.breaks": true
}

```