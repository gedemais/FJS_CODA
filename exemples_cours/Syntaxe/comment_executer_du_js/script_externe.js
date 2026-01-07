(function () {
    const btn = document.getElementById('btn');
    const msg = document.getElementById('msg');
    let count = 0;

    btn.addEventListener('click', function () {
    count += 1;
    btn.textContent = count;
    msg.textContent = `Tu as cliqué ${count} fois.`;
    console.log('clic n°', count);
    });
})();
