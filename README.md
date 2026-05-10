# ReUse

## 📱 Sobre o projeto

O **ReUse** é uma plataforma digital criada para conectar pessoas interessadas em trocar objetos que ainda estão em bom estado, mas que já não são mais utilizados.

A proposta do aplicativo é estimular a troca de itens, reduzir o desperdício e fortalecer a colaboração entre pessoas da comunidade.

---

## 🌎 O Problema

Muitos objetos em bom estado acabam esquecidos em casa ou são descartados, mesmo ainda podendo ser úteis para outras pessoas.
Grande parte desse desperdício acontece porque não existe uma conexão simples entre quem possui esses itens e quem poderia utilizá-los.

---

## 💡 A Solução

O **ReUse** conecta pessoas interessadas em trocar objetos de forma simples e prática, baseando-se em geolocalização para sugerir itens próximos a você.

A plataforma facilita o encontro entre quem tem algo para oferecer e quem precisa, incentivando a reutilização, reduzindo o desperdício e fortalecendo a comunidade.

---

## 🛠 Tecnologias utilizadas

O projeto evoluiu e agora conta com diversas ferramentas nativas e em nuvem:

* **React Native & TypeScript**: Base do aplicativo.
* **React Navigation**: Navegação em Pilha (Stack) e Abas (Bottom Tabs).
* **Firebase Auth**: Autenticação de usuários (Login/Registro).
* **Vision Camera**: Acesso à câmera nativa para fotos de perfil.
* **Geolocation**: Captura de coordenadas GPS nativas para aproximar usuários.
* **ViaCep & Axios**: Integração para preenchimento e validação automática de endereços por CEP.
* **Geolib**: Planejado para cálculos de proximidade de itens.
* **AsyncStorage**: Gerenciamento de cache local (tokens, foto, geolocalização e CEP do usuário).
* **Lucide React Native**: Biblioteca de ícones vetoriais.

---

## 📂 Estrutura do projeto

```
src
 ├── assets
 │   └── images
 ├── components
 │   ├── Button
 │   ├── Footer
 │   ├── GradientBackground
 │   ├── Header
 │   ├── InfoSection
 │   ├── Logo
 │   └── SideMenu
 │
 ├── navigation
 │   ├── stack
 │   └── tabs
 │
 ├── screens
 │   ├── Auth         (Tela de Login e Cadastro com validação de CEP)
 │   ├── Camera       (Captura de foto de perfil)
 │   ├── Discover     (Feed principal com base na geolocalização)
 │   └── Home         (Apresentação e permissões iniciais)
 │
 ├── services
 │   └── storage.ts   (Regras de persistência em Cache)
 │
 └── styles
     ├── colors.ts
     ├── gradients.ts
     └── spacing.ts
```

---

## ▶ Como executar o projeto

1. Clone o repositório

```bash
git clone https://github.com/eritonLongui/ReUse---react-native
```

2. Instale as dependências. Como utilizamos algumas bibliotecas com dependências nativas legadas no ecossistema do React 19, utilize a flag `--legacy-peer-deps`:

```bash
npm install --legacy-peer-deps
```

3. Configure o Firebase:
Certifique-se de que o arquivo `google-services.json` (fornecido pelo painel do Firebase) esteja na pasta `android/app/`.

4. Inicie o Metro Bundler

```bash
npx react-native start
```

5. Execute no Android

```bash
npm run android
```

---

## 📱 Telas do aplicativo

O aplicativo evoluiu e hoje conta com fluxos avançados:

* **Home:** Apresentação do projeto e solicitação das permissões nativas (Câmera e GPS) para prover a melhor experiência logo na entrada.
* **Auth:** Fluxo de Login ou Cadastro. O cadastro inclui integração com API ViaCep (preenchimento automático do endereço), e captura da foto de perfil.
* **Feed (Discover):** Espaço com Header personalizado e SideMenu, destinado à exploração de itens disponíveis para troca nas proximidades do usuário.
* **Navegação (Tabs):** Skeltons de abas já construídos para Pesquisa, Inserir Item, Chats e Pedidos.

---

## 👨‍💻 Autor

Projeto desenvolvido por **Ériton Longui** como parte das atividades da Sprint do curso de Web Design - FIAP.
