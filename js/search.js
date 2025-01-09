document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});

const search = () => {
    const searchInput = document.getElementById('search-input').value.toUpperCase();
    const links = document.querySelectorAll('.link'); // 获取所有链接元素
    const itemNames = document.querySelectorAll('.link h4'); // 获取所有链接中的 h4 元素

    links.forEach((link, index) => {
        const itemName = itemNames[index];
        const textValue = itemName.textContent || itemName.innerHTML;

        if (searchInput === '') {
            link.style.display = ''; // 如果输入为空，显示所有链接
        } else if (textValue.toUpperCase().includes(searchInput)) {
            link.style.display = ''; // 显示匹配的链接
        } else {
            link.style.display = 'none'; // 隐藏不匹配的链接
        }
    });
} 