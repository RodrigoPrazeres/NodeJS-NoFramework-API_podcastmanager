### PODCAST MANAGER
 
### descrição
Gerenciador de podcast, categorizando episódios de diversos podcasts em um ambiente central

### Domain
mesacast

### Features
- Listar os episódios de podcasts em categorias
    - saude, fitness, mentalidade, humor
- filtrar episódios por podcasts

## How

#### feature
- Listar os episódios de podcasts em categorias
### como implementar
    retornar em uma api rest (json) o:
        -nome do podcast
        -nome do episódio
        -imagem da capa
        -link
        -category

```js
{
    podcastName: "simabailly",
    episode: "Colosseum Rage & The Abyss | Hollow Knight [Part 9]",
    videoID: "G5x5dz2Q6yA"
    cover: "https://i.ytimg.com/vi/G5x5dz2Q6yA/maxresdefault.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA7QEKdS_vNKz9wfu8KfDTAf_VHUw",
    link: "https://www.youtube.com/watch?v=G5x5dz2Q6yA&t=2835s"
    category: ["game", "indie"]
}
{
    podcastName: "Coisa de Nerd",
    episode: "seu computador vai mudar - computex 2024",
    videoID: "DUf-P87FAM8"
    cover: "https://i.ytimg.com/vi/DUf-P87FAM8/maxresdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLChFsbI8uBOwGqyvGMLcNWsORPPSA",
    link: "https://www.youtube.com/watch?v=DUf-P87FAM8&t=1s"
    category: ["game", "indie"]  
}
```