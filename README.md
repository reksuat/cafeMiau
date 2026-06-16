# CafeMiau

O **CafeMiau** é uma aplicação desenvolvida com React, de uma cafeteria temática de gatos. Permite os utilizadores conhecerem os gatos residentes (ou adotados), explorar o cardápio e ter domínio administrativo (Crud) para gerenciar o café.  


---


## Instruções de uso
Para  rodar o projeto localmente siga os passos:  
1. git clone no repositório  
2. cd cafeMiau  
3. npm install  
4. npm run dev  

## Estrutura do projeto

src/  
├── components/     # Componentes visuais globais (Botao, Card, JanelaSobreposta, Input, etc.)  
├── context/        # Contextos do React (DadosContext.jsx para partilha de estados)  
├── data/           # Ficheiros JSON estáticos (Gatos, Cardapio) e o hook LocalStorage  
├── paginas/        # Páginas públicas da aplicação (Home, Gatil, Cardapio, Sobre)  
│   └── admin/      # Páginas do painel administrativo (AdminGatil, AdminCardapio)  
├── styles/         # Estilos globais e esquemas de cores dos temas (claro/escuro)  
└── util/           # Funções utilitárias (como o cálculo dinâmico da idade dos gatos)  


## Funcionalidades
**Alternância de temas**: Permite que o tema seja alternado entre claro e escuro (paleta de cores no themes.js)   

### Pública
**Apresentação**: Na aba Home, conta com apresentação e uso da API externa de fotos de gatos, com botão ele alterna a foto.  
**Catálogo do gatil**: Lista dos gatos com alternância entre moradores e já adotados.  
**Reservar**: Na aba gatil, permite reservar visita ao gatil, as informações vão para o painel administrativo.  
**Cardápio**: Lista para visualizar os produtos do cardápio com alternância entre bebidas geladas, bebidas quentes, doces, salgados e veganos.  
**Modals e detalhes**: Uso do componente <JanelaSobreposta/> para informações detalhadas e formulários.  

### Administrativo
Para entrar utiliza o login  
**Usuario**: oliver  
**Senha**: 123456  


**Painel de resumo**: Na aba Admin contém painel que conta com o número de gatos, itens do cardápio e de reservas, logo abaixo mostra cada reserva feita.  
**Crud**: Criação, edição e exclusão de itens do cardápio e do gatil, permite extender e ver detalhes.  
**Sair**: Permite sair e voltar para a área pública.  

## Autor
**Priscila Gomes Reksua**
