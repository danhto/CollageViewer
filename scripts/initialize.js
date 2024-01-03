function getColumns() {
    let columns = '<th></th>'
    for (let i = 1; i < 19; i++) {
        columns += `<th>C${i}</th>`
    }
    return columns
}

const headers = getColumns()
document.getElementById('tableHeaders').innerHTML = headers

const pics = getPics()
document.getElementById('tableBody').innerHTML += pics