document.addEventListener('DOMContentLoaded', function () {
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            cancelIcon: {
                enabled: true
            },
            classes: 'custom-tour', 
            scrollTo: { behavior: 'smooth', block: 'center' }
        }
    });

    tour.addStep({
        id: 'step-1',
        title: 'Bem vindo a CIC!',
        text: 'Todo o controle financeiro da sua empresa a um clique de você.',
        attachTo: null,
        buttons: [
            {
                text: 'Próximo',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step-2',
        title: 'Essa é a área de widgets',
        text: 'Escolha a forma que você melhor deseja visualizar os dados!',
        attachTo: {
            element: '#section1',
            on: 'top'
        },
        buttons: [
            {
                text: 'Anterior',
                action: tour.back
            },
            {
                text: 'Próximo',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step-3',
        title: 'Filtros',
        text: 'Filtre os dados que você quer exibir.',
        attachTo: {
            element: '#section2',
            on: 'top'
        },
        buttons: [
            {
                text: 'Anterior',
                action: tour.back
            },
            {
                text: 'Próximo',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step-4',
        title: 'Dados de crédito e débito',
        text: 'Visualize as informações sobre os débitos e créditos da empresa!',
        attachTo: {
            element: '#section3',
            on: 'top'
        },
        buttons: [
            {
                text: 'Anterior',
                action: tour.back
            },
            {
                text: 'Próximo',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step-5',
        title: 'Comparativo',
        text: 'Tenha comparações de forma clara.',
        attachTo: {
            element: '#section4',
            on: 'top'
        },
        buttons: [
            {
                text: 'Anterior',
                action: tour.back
            },
            {
                text: 'Próximo',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step-6',
        title: 'Notificações',
        text: 'Você será notificado caso divergências apareçam.',
        attachTo: {
            element: '#notificacao',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Anterior',
                action: tour.back
            },
            {
                text: 'Próximo',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step-7',
        title: 'Temas',
        text: 'Dashboard claro ou escuro? Escolha o tema que mais te agrada!',
        attachTo: {
            element: '#icon-theme',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Anterior',
                action: tour.back
            },
            {
                text: 'Próximo',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step-8',
        title: 'O Dashboard é só o início...',
        text: 'Clique aqui para explorar o resto da plataforma.',
        attachTo: {
            element: '#section5',
            on: 'right'
        },
        buttons: [
            {
                text: 'Anterior',
                action: tour.back
            },
            {
                text: 'Próximo',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step-9',
        title: 'Sobrou alguma dúvida?',
        text: 'O FAQ está aqui para te auxiliar.',
        attachTo: {
            element: '#section6',
            on: 'top'
        },
        buttons: [
            {
                text: 'Anterior',
                action: tour.back
            },
            {
                text: 'Finalizar',
                action: tour.complete
            }
        ]
    });

    tour.start();
});