# EXPLANATION:

https://youtu.be/wPDWY9fgXsI

# Шаблон для выполнения домашнего задания по типизации

ШРИ лето 2022

## Что делать?

Текущий репозиторий написан на чистом js. Надо все файлы внутри директории `src` перевести на ts.

-   После компиляции js файлы должны быть такими же, как и исходные.
    Выравнивание и прочее запускается `npm run compare`), для сравнения исходные файлы скопированы как есть в директорию `raw`.
    Это нужно, так как задача не модифицировать или улучшить код, а добавить типы.
-   `any` и `unknown` запрещены
-   `as` запрещён

Код представляет собой разные манипуляции с выводом текста в консоль (разные цвета и маркдаун). Примеры запускаются `npm run test`

## Процесс

-   поставьте указанную версию node/npm c помощью `nvm use` (установите себе nvm, если его нет)
-   `npm i`
-   ...перевод на ts...
-   `npm run build` сборка, `tsconfig.json` менять нельзя
-   `npm run compare` сверка выхлопа транспиляции (выравнивание prettier), файлы в dist и raw должны совпадать
-   `npm run test-ts` проверить, работают ли примеры

## Суть проверки

Код в репозитории был скомпилирован из исходников на TS. Типы в решении должны быть подтипами исходных типов, то есть не менее строгими.

## Отправка решения

Cожмите вашу папку src в архив src.zip. Этот архив отправьте в качестве решения.
