## Запуск проекта

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Sagyndyk840/test-trust.git
   cd test-simourg

2. Установите зависимости
   ```bash
    npm i
3. Создайте файл .env в корне проекта и скопируйте содержимое из .env-local:
   ```bash
   cp .env-local .env
4. Запустите проект:
    ```bash
    Для запуска frontend:   
    npm run dev
   
    mock API:   
    npm run mock-api

5. Если у вас не установлен json-server глобально, выполните:
    ```bash
    npm install -g json-server  
    npm run mock-api


