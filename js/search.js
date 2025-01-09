document.getElementById('search-input').addEventListener('input', function () {
    search();
});

const search = () => {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase(); // 获取输入框的值并去除前后空格
    console.log('Search input:', searchInput); // 调试输出

    const links = document.querySelectorAll('.link'); // 获取所有链接元素
    const itemNames = document.querySelectorAll('.link h4'); // 获取所有链接中的 h4 元素
    let matchCount = 0; // 初始化匹配计数器

    links.forEach((link, index) => {
        const itemName = itemNames[index];
        const textValue = (itemName.textContent || itemName.innerHTML).toLowerCase();
        console.log('Item name:', textValue); // 调试输出

        if (searchInput === '') {
            link.style.display = ''; // 如果输入为空，显示所有链接
            matchCount++; // 增加匹配计数器
        } else if (textValue.includes(searchInput)) {
            link.style.display = ''; // 显示匹配的链接
            console.log('[❇ LOG] 显示匹配的链接');
            matchCount++; // 增加匹配计数器
        } else {
            link.style.display = 'none'; // 隐藏不匹配的链接
            console.log('[❇ LOG] 隐藏不匹配的链接');
        }
    });

    // 检查是否有匹配的链接
    const noResultsMessage = document.getElementById('no-results-message');
    if (matchCount === 0) {
        noResultsMessage.style.display = 'block'; // 显示“没有找到对应的内容”
        noResultsMessage.style.color = '#ffffff80';
    } else {
        noResultsMessage.style.display = 'none'; // 隐藏“没有找到对应的内容”
    }
}