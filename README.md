# HRConsultoria - Documentação do Projeto

Este projeto é uma aplicação **Full Stack** desenvolvida para gerenciamento e análise de dados de consultoria de RH.

A solução utiliza uma arquitetura moderna e escalável, separando as responsabilidades entre um **backend robusto em .NET 8** e um **frontend reativo em React**.

---

# Arquitetura e Estrutura

O projeto foi construído seguindo princípios de **Separação de Preocupações (SoC)**, facilitando manutenção, testes e escalabilidade.

---

# Backend (.NET 8)

A API foi estruturada em camadas dentro da pasta `webApi`, utilizando o padrão de arquitetura em camadas (**Layered Architecture**):

## Estrutura do Backend

### Controllers
Responsáveis por receber requisições HTTP e retornar respostas ao cliente.

### Services
Camada onde fica toda a **lógica de negócio** da aplicação.

### Repositories
Responsáveis pela abstração do acesso a dados.

- Atualmente utilizam **MockData**
- Facilitam a troca futura para banco de dados real

### MockData
Simula um banco de dados real, permitindo desenvolvimento e testes sem infraestrutura externa.

### Models & DTOs
- **Models:** representam as entidades do sistema
- **DTOs:** definem os dados trafegados entre camadas e APIs

---

## Estrutura Visual do Backend

> Consulte o arquivo para visualizar a organização das pastas.
<img width="397" height="388" alt="image" src="https://github.com/user-attachments/assets/0b9e30d2-fd29-4637-8860-758750a6361a" />


---

# Frontend (React + Vite + TypeScript)

O frontend foi desenvolvido com foco em performance e experiência do usuário.

## Estrutura do Frontend

### Pages & Routes
Organização baseada em rotas para navegação entre telas da aplicação.

### Components
Componentes reutilizáveis de interface, como cards, tabelas e containers.

### Services
Centraliza chamadas HTTP utilizando **Axios**.

### Recharts
Utilizado para criação de gráficos e visualização de dados.

---

## Estrutura Visual do Frontend

> Consulte o arquivo para visualizar a organização das pastas.
<img width="397" height="498" alt="image" src="https://github.com/user-attachments/assets/8882e3d7-7a8d-4295-a77f-6da022a776df" />

---

# Como Rodar o Projeto

## Pré-requisitos

- .NET 8 SDK
- Node.js (versão 18 ou superior)
- npm ou yarn

---

# Backend

## Acessar pasta da API
cd webApi

## Restaurar dependências
dotnet restore

## Restaurar dependências
dotnet restore

## Build do projeto
dotnet build

## Executar o projeto
dotnet run

## Acessar API
API: http://localhost:5083
Swagger: http://localhost:5083/swagger

---

# Frontend (React + Vite)
## Acessar pasta do frontend
cd frontend

## Instalar dependências
npm install

## Rodar aplicação
npm run dev

## Acessar aplicação
http://localhost:5173

---

# Comunicação Frontend ↔ Backend

A comunicação é feita via Axios, consumindo a API .NET.

Exemplo:

axios.get("http://localhost:5083/api/report");

## Tecnologias Utilizadas
### Backend
.NET 8
ASP.NET Core Web API
Arquitetura em camadas
MockData

### Frontend
React
Vite
TypeScript
React Router DOM
UI / Visual
Material UI (MUI)
Recharts

### Comunicação
Axios

---

# Decisões de Arquitetura

O projeto foi estruturado para:

Separar responsabilidades claramente
Facilitar manutenção e evolução
Permitir substituição de MockData por banco real
Garantir escalabilidade futura
Manter frontend desacoplado do backend.
