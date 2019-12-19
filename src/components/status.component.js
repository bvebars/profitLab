let status = document.getElementById('status');
let statusText = document.getElementById('status-text');

status.onclick = () => {
    statusText.removeAttribute('disabled');
    statusText.removeAttribute('readonly');
    statusText.focus();
    statusText.selectionStart = statusText.value.length;
};

statusText.onblur = function() {
    statusText.setAttribute('disabled', '');
    statusText.setAttribute('readonly', '');
    statusText.removeAttribute('readonly');
};