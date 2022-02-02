# README

## Git Flow

### Lesson

- начался урок 
- переключаемся на ветку master/main 
    ```
    git checkout main
    ```
- подтягиваем актуальное состояние репозитория
    ```
    git pull
    ```
- создаем ветку урока 
    ```
    git chekcout -b lessons_n
    ```    
- выполняем все задания урока 
- в конце урока проверяем изменения 
    ```
    git status 
    ```
- индексируем изменения
    ```
    git add .
    ```
    ```
    git add ./lessons/lessons/lesson.html
    ```
- коммитим измения 
    ```
    git commit -m "lesson_n"
    ```
- пушим изменения в удаленный репозиторий
    ```
    git push --set-upstream origin "lesson_n"
    ```
- переходим в GitHub
- переходим на вкладку pull request
- жмем кнопку new pull request
- проверяем базовую ветку base:main
- устанавоиваем ветку которую желаем смерджить compare: lesson_n
- жмем кнопку Create pull request
- указываем комментарий к мру
- мерджим нажам кнопку Merge pull request

### Homework

- приступаем к выполнению дз 
- переключаемся на ветку master/main 
    ```
    git checkout main
    ```
- подтягиваем актуальное состояние репозитория
    ```
    git pull
    ```
- создаем ветку дз 
    ```
    git chekcout -b homework_n
    ```    
- выполняем все задания дз
- проверяем изменения 
    ```
    git status 
    ```
- индексируем изменения
    ```
    git add .
    ```
    ```
    git add ./lessons/lessons/homework.html
    ```
- коммитим измения 
    ```
    git commit -m "homework_n"
    ```
- пушим изменения в удаленный репозиторий
    ```
    git push --set-upstream origin "homework"
    ```
- переходим в GitHub
- переходим на вкладку pull request
- жмем кнопку new pull request
- проверяем базовую ветку base:main
- устанавоиваем ветку которую желаем смерджить compare: homework_n
- жмем кнопку Create pull request
- указываем комментарий к мру
- сообщаем о выполнении дз
- пи получеии замечаний в комментриях к мру вносим исправления в код ( обратите внимание что правки нужно вность в той ветке в которой выполненно дз, при необхожимости на эту ветку нужно переключиться 
    ```
    git checkout homework_n
    ```)
- индексируем изменения 
    ```
    git add .
    ```
    ```
    git add ./lessons/lessons/homework.html
    ```
    - коммитим измения 
    ```
    git commit -m "homework_n"
    ```
- пушим изменения в ветку
    ```
    git push 
- после решения всех замечаний и получения апрува ,мерджим нажам кнопку Merge pull requestпше 
