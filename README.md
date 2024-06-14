# Mesacast Podcast Manager

## Descrição
Mesacast é um gerenciador de podcasts que categoriza episódios de diversos podcasts em um ambiente centralizado. O objetivo é facilitar o acesso e a organização dos episódios de podcasts, permitindo que os usuários encontrem e filtrem episódios de acordo com suas categorias e preferências.

## Domínio
mesacast

## Funcionalidades

### Listar Episódios de Podcasts em Categorias
- **Descrição**: Apresenta uma lista de episódios de podcasts organizados em diferentes categorias.
- **Categorias Disponíveis**: Saúde, Fitness, Mentalidade, Humor, Games, Tech...

### Filtrar Episódios por Podcasts
- **Descrição**: Permite que os usuários filtrem episódios com base no podcast específico.

### Listar Episódios de Podcasts em Categorias

#### API REST
A API REST retornará os detalhes dos episódios de podcasts no formato JSON. Cada entrada incluirá as seguintes informações:

- **Nome do Podcast** (`podcastName`): O nome do podcast.
- **Nome do Episódio** (`episode`): O título do episódio.
- **Imagem da Capa** (`cover`): URL da imagem da capa do episódio.
- **Link** (`link`): URL para acessar o episódio.
- **Categoria** (`category`): Lista de categorias às quais o episódio pertence.

#### Exemplo de Resposta JSON
### disclaimer: exemplos ficticios com base em links retirados do youtube
```json
[
    {
        "podcastName": "simabailly",
        "episode": "Colosseum Rage & The Abyss | Hollow Knight [Part 9]",
        "videoID": "G5x5dz2Q6yA",
        "cover": "https://i.ytimg.com/vi/G5x5dz2Q6yA/maxresdefault.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA7QEKdS_vNKz9wfu8KfDTAf_VHUw",
        "link": "https://www.youtube.com/watch?v=G5x5dz2Q6yA&t=2835s",
        "category": ["game", "indie"]
    },
    {
        "podcastName": "Coisa de Nerd",
        "episode": "seu computador vai mudar - computex 2024",
        "videoID": "DUf-P87FAM8",
        "cover": "https://i.ytimg.com/vi/DUf-P87FAM8/maxresdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLChFsbI8uBOwGqyvGMLcNWsORPPSA",
        "link": "https://www.youtube.com/watch?v=DUf-P87FAM8&t=1s",
        "category": ["game", "indie"]
    }
]
```

### Estrutura do Projeto

- **Backend**
    - Implementação da API REST para fornecer os dados dos episódios.
- Backend
Node.js: Ambiente de execução para JavaScript no servidor.
TypeScript: Superset do JavaScript que adiciona tipagem estática.
- Ferramentas de Desenvolvimento
tsx: Utilizado para compilar e executar arquivos TypeScript com suporte a watch mode.
tsup: Bundler para projetos TypeScript, usado para criar a distribuição do projeto.
@types/node: Tipos TypeScript para Node.js.
    
    
### Tecnologias Sugeridas

- **Backend**: Node.js, typescript
- **API**: REST API sem uso de framework

### Passos para Configuração do Ambiente

1. **Clonar o Repositório**

    ```sh
    git clone https://github.com/seu-usuario/mesacast.git
    cd mesacast
    ```

2. **Instalar Dependências do Backend**

    ```sh
    cd backend
    npm install
    ```

3. **Iniciar o Servidor Backend**

    ```sh
    Start
    ```

4. **Instalar Dependências do Frontend**

    ```sh
    cd frontend
    npm install
    ```

5. **Iniciar o Servidor Frontend**

    ```sh
    npm start
    ```

### Contato
rodrigosoaresprazeres@gmail.com
