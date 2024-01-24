// 初始化代码行号
const codeBlocks = document.querySelectorAll('.line-numbers');
codeBlocks.forEach(block => {
  const lines = block.textContent.trim().split('\n').length;
  block.style.setProperty('--lines', lines);
});

// Prism.js 初始化
Prism.highlightAll();
