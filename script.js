let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}


const addTransactionBtn = document.getElementById('addTransactionBtn');
const addTransactionPopup = document.getElementById('addTransactionPopup');
const closeAddTransactionPopup = document.querySelector('.cd-popup-close');

// Tambahkan event listener untuk menampilkan popup saat tombol "Add Transaction" diklik
addTransactionBtn.addEventListener('click', function() {
    addTransactionPopup.style.display = 'flex';
});

// Tambahkan event listener untuk menutup popup saat tombol close di klik
closeAddTransactionPopup.addEventListener('click', function() {
    addTransactionPopup.style.display = 'none';
});

const addTransactionForm = document.getElementById('addTransactionForm');
const dataTransaksi = document.getElementById('dataTransaksi');

// Tambahkan event listener untuk mengirimkan formulir saat tombol "Add Transaction" diklik
addTransactionForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir yang default

    // Ambil nilai-nilai dari input formulir
    const transactionName = document.getElementById('transactionName').value;
    const transactionDate = document.getElementById('transactionDate').value;
    const transactionPrice = document.getElementById('transactionPrice').value;
    const transactionCategory = document.getElementById('transactionCategory').value;
    const transactionType = document.getElementById('transactionType').value;

    // Buat baris baru untuk tabel dengan data transaksi
    const newRow = document.createElement('tr');

    // Isi baris dengan data transaksi
    newRow.innerHTML = `
        <td>${transactionName}</td>
        <td>${transactionDate}</td>
        <td>Rp. ${transactionPrice}</td>
        <td>${transactionCategory}</td>
        <td class="${transactionType.toLowerCase()}">${transactionType}</td>
        <td class="actions">
            <a href="#" class="edit">Edit</a>
            <a href="#" class="delete">Delete</a>
        </td>
    `;

    // Tambahkan baris ke dalam tabel
    dataTransaksi.appendChild(newRow);

    // Setel nilai-nilai input formulir kembali ke nilai awal
    document.getElementById('transactionName').value = '';
    document.getElementById('transactionDate').value = '';
    document.getElementById('transactionPrice').value = '';
    document.getElementById('transactionCategory').value = 'Food';
    document.getElementById('transactionType').value = 'Expense';
});



