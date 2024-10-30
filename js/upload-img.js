document.addEventListener("DOMContentLoaded", () => {
    const dropzone = document.getElementById("file-dropzone-1");
    const fileInput = document.getElementById("file-input");
    const output = document.getElementById("output-1");
    const popup = document.getElementById("popup9");
    const closeButton = document.querySelector('.close-btn');
    const closeButtonPopup9 = document.querySelector('#popup9 .bx-x-circle');
    const popup9 = document.getElementById("popup9");
    const filesFromStorage = JSON.parse(localStorage.getItem("uploadedFiles")) || [];

    // Carregar arquivos do localStorage ao carregar a página
    filesFromStorage.forEach(file => {
        // Adiciona os arquivos à tabela usando a lógica existente
        addFileToTable(file);
    });

    // Adiciona evento de clique ao dropzone
    dropzone.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", (event) => {
        handleFiles(event.target.files);
    });

    dropzone.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => {
        dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (event) => {
        event.preventDefault();
        dropzone.classList.remove("dragover");
        handleFiles(event.dataTransfer.files);
    });

    function handleFiles(files) {
        for (const file of files) {
            const name = file.name;
            const fileType = file.type || "Tipo desconhecido";
            const uploadDate = new Date().toLocaleDateString();
            const maxSize3MB = 3 * 1024 * 1024; 
            const maxSize50MB = 50 * 1024 * 1024;

            let status;

            if (
                (fileType === "application/pdf" && file.size <= maxSize3MB) ||
                (fileType === "text/csv" && file.size <= maxSize3MB) ||
                (fileType === "text/plain" && file.size <= maxSize50MB)
            ) {
                status = "Enviado";
            } else {
                status = "Erro: Arquivo inválido";
            }

            const fileData = { name, fileType, uploadDate, status };
            filesFromStorage.push(fileData);
            localStorage.setItem("uploadedFiles", JSON.stringify(filesFromStorage));
            addFileToTable(fileData);
        }
    }

    function addFileToTable(file) {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = file.name;

        const tdType = document.createElement("td");
        tdType.textContent = file.fileType;

        const tdDate = document.createElement("td");
        tdDate.textContent = file.uploadDate;

        const tdStatus = document.createElement("td");
        tdStatus.textContent = file.status;

        // Verifica se é um erro e adiciona a classe de erro
        if (file.status.includes("Erro")) {
            tr.classList.add("error-row");

            // Adiciona o ícone de erro
            const errorIcon = document.createElement("i");
            errorIcon.className = 'bx bxs-comment-error error-icon';
            tdStatus.innerHTML = `${file.status} `; // Limpa o texto existente e adiciona o status
            tdStatus.appendChild(errorIcon); // Adiciona o ícone ao status

            // Adiciona evento de clique no ícone de erro para abrir o popup
            errorIcon.onclick = () => {
                popup.classList.add('active');
            };
        }

        const tdDelete = document.createElement("td");
        const deleteIcon = document.createElement("i");
        deleteIcon.className = 'bx bx-trash';
        deleteIcon.onclick = () => {
            deleteFile(file.name);
        };
        tdDelete.appendChild(deleteIcon);

        tr.appendChild(tdName);
        tr.appendChild(tdType);
        tr.appendChild(tdDate);
        tr.appendChild(tdStatus);
        tr.appendChild(tdDelete);

        output.appendChild(tr);
    }

    function deleteFile(fileName) {
        const updatedFiles = filesFromStorage.filter(file => file.name !== fileName);
        localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
        location.reload(); // Recarrega a página para atualizar a tabela
    }

    // Fecha o popup ao clicar no botão de fechar
    closeButton.onclick = () => {
        popup.classList.remove('active');
    };

    // Fecha o popup ao clicar na área de overlay
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('active');
        }
    });

  closeButtonPopup9.onclick = () => {
        popup.classList.remove('active')}
        

    // Fecha o popup ao clicar na área de overlay
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('active');
        }
    });
});
