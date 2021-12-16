function deleteByEmail() {
    const rows = Array.from(document.querySelectorAll('tbody tr td'));

    const email = document.querySelector('input[name="email"]').value;

    const rowsContainingEmail = rows.filter(x => x.textContent == email);

    let emailFound = false;

    for (const row of rowsContainingEmail) {
        row.parentNode.remove();
        emailFound = true;
    }

    document
        .getElementById('result')
        .textContent = emailFound ? "Deleted." : "Not found.";
}
