# Minicurso 2.0

Esse repositório é destinado à segunda edição do minicurso oferecido para a turma intermediária.

## Pré-requisitos

Para rodar o projeto, é necessário possuir o Node.js e o npm (gerenciador de pacotes). Você pode instalá-lo através do [site oficial do Node.js](https://nodejs.org/en/download).

## Rodando o Projeto

Com o Node.js instalado e o repositório clonado, execute o script:

```bash
npm start
```

Sua página com React e TypeScript estará rodando em [http://localhost:3000](http://localhost:3000)!

## 📁 Estrutura do Projeto

```bash
├── public/                # Arquivos públicos, como index.html
├── src/                   # Código-fonte da aplicação
│   ├── assets/            # Imagens das blusinhas
│   ├── components/        # Componentes reutilizáveis (SearchBar, Blusinha)
│   ├── App.tsx            # Componente principal
│   ├── index.tsx          # Ponto de entrada da aplicação
│   ├── style.css          # Estilo geral
├── tsconfig.json          # Configurações do TypeScript
├── package.json           # Dependências do projeto
└── README.md              # Documentação do projeto
```

## ✨ Sobre TypeScript no React

### O que é TypeScript?

TypeScript é uma extensão do JavaScript que adiciona tipagem estática, permitindo definir os tipos de dados de variáveis e funções. Isso ajuda a evitar erros desde a fase de desenvolvimento.

### Exemplo com Props

```typescript
interface BlusinhaProps {
    title: string;
    price: string;
    image: string;
}

const Blusinha = ({ title, price, image }: BlusinhaProps) => (
    <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
);
```

- Autocompletar e IntelliSense
- Detecção precoce de erros
- Documentação implícita via interfaces

### O que são Props?

Props (propriedades) são os parâmetros que passamos para um componente, tornando-os reutilizáveis e configuráveis.

```jsx
<Blusinha title="Tube Top Rosa" price="40,00" image={tubeTopImg} />
```

## 💡 Introdução ao JSX

JSX é uma extensão de sintaxe que permite escrever HTML dentro do JavaScript.

```jsx
const MeuComponente = () => (
    <div>
        <h1>Olá, mundo!</h1>
    </div>
);
```

Diferente do HTML:

- Usa className no lugar de class
- Pode conter expressões dentro de { }

## 🎨 Estilização com CSS

No React você importa seus arquivos CSS normalmente:

```javascript
import "./style.css";
```

E aplica as classes utilizando a propriedade className:

```jsx
<div className="search-bar">...</div>
```

## 🧩 Introdução aos Hooks

### O que são Hooks?

Hooks são funções que permitem utilizar estado, efeitos colaterais e outros recursos do React sem o uso de classes.

Principais Hooks:

| Hook       | Função                                             |
|------------|----------------------------------------------------|
| useState   | Armazena e altera valores (estado)                 |
| useEffect  | Executa código quando algo muda (efeitos colaterais) |
| useContext | Compartilha dados globalmente entre componentes    |
| useRef     | Referência a elementos do DOM                      |
| useMemo    | Otimiza valores calculados                         |

#### Regras dos Hooks:

- Só podem ser usados em componentes ou Hooks personalizados.
- Devem ser chamados no topo do componente.
- A ordem importa!

### Exemplo de useState

O Hook useState permite armazenar valores que mudam, como o texto digitado em uma barra de pesquisa:

```jsx
const [searchTerm, setSearchTerm] = useState("");
```

- searchTerm: valor atual da busca.
- setSearchTerm: função para atualizar este valor.

Utilizamos isso na barra de busca:

```jsx
<SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
```

E filtramos os itens dinamicamente:

```javascript
const filteredBlusinhas = blusinhasList.filter((blusinha) =>
    blusinha.title.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### Barra de Pesquisa — Componente SearchBar

```typescript
interface SearchBarProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => (
    <div className="search-bar">
        <input
            type="text"
            placeholder="Procure uma blusinha..."
            className="input-box"
            onChange={onChange}
        />
    </div>
);
```

## 🧱 Montando a Interface

No App.tsx, a tela principal da loja é montada da seguinte forma:

```jsx
<div className="blusinhas-container">
    {filteredBlusinhas.map((blusinha, index) => (
        <Blusinha
            key={index}
            image={blusinha.image}
            price={blusinha.price}
            title={blusinha.title}
        />
    ))}
</div>
```