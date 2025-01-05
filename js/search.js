const searchInput = document.getElementById('search-input');

// 监听输入框的 keydown 事件
searchInput.addEventListener('keydown', function(event) {
    // 检测是否按下 Enter 键（keyCode 为 13）
    if (event.keyCode === 13) {
        // 阻止默认的 Enter 键行为（如提交表单）
        event.preventDefault();

        // 获取输入框中的文本
        const searchText = searchInput.value;

        // 弹出弹窗，显示输入的文本
        if (searchText==='') {
            alert('不是哥们，你这啥也没有我怎么给你找');
        }
        else {
            alert('喜报 搜索功能还没做完！');
        }
    }
});
