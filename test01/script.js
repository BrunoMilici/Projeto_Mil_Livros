// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const bookNameInput = document.getElementById('bookName');
    const bookList = document.getElementById('bookList');

    // Array para armazenar os livros
    let books = [];

    // Função para atualizar a lista de livros no DOM
    function updateBookList() {
        bookList.innerHTML = '';
        books.forEach((book, index) => {
            const li = document.createElement('li');
            li.textContent = book;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => {
                removeBook(index);
            });
            li.appendChild(removeButton);
            bookList.appendChild(li);
        });
    }

    // Função para adicionar um livro
    function addBook(book) {
        books.push(book);
        updateBookList();
    }

    // Função para remover um livro
    function removeBook(index) {
        books.splice(index, 1);
        updateBookList();
    }

    // Evento de submissão do formulário
    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const bookName = bookNameInput.value.trim();
        if (bookName) {
            addBook(bookName);
            bookNameInput.value = '';
        }
    });

    // Inicializar a lista de livros
    updateBookList();
});
