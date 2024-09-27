function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function compareTexts() {
  const leftText = document.getElementById('leftText').value;
  const rightText = document.getElementById('rightText').value;
  const leftLines = leftText.split('\n');
  const rightLines = rightText.split('\n');
  const maxLines = Math.max(leftLines.length, rightLines.length);

  let leftResultHtml = '';
  let rightResultHtml = '';

  for (let i = 0; i < maxLines; i++) {
    const leftLine = leftLines[i] || '';
    const rightLine = rightLines[i] || '';
    const isDifferent = leftLine !== rightLine;
    const lineNumber = i + 1;

    leftResultHtml += `
          <div class="result-line ${isDifferent ? 'different' : ''}">
              <span class="line-number">${lineNumber}</span>
              <span class="line-content">${escapeHtml(leftLine) || '&nbsp;'}</span>
          </div>`;
    rightResultHtml += `
          <div class="result-line ${isDifferent ? 'different' : ''}">
              <span class="line-number">${lineNumber}</span>
              <span class="line-content">${escapeHtml(rightLine) || '&nbsp;'}</span>
          </div>`;
  }

  document.getElementById('leftResult').innerHTML = `<h3>Left</h3>${leftResultHtml}`;
  document.getElementById('rightResult').innerHTML = `<h3>Right</h3>${rightResultHtml}`;
}

document.getElementById('leftText').addEventListener('input', compareTexts);
document.getElementById('rightText').addEventListener('input', compareTexts);