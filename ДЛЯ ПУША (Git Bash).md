`git clone`  `https://github.com/ItProgrammist/ItProgrammist.github.io.git`




`git status` // Это, чтобы проверить наличие файлов

`git add -A` // Добавляем все файлы

`git pull` // ! Всегда выполнять перед `git push` ИЛИ Выполнять, если не сработал `git push`

`git reset --hard master` // Если не сработал `git pull`

`git status` // Проверить наличие файлов после добавления

`git commit -m`  `"My First Commit!"`

`git push origin master` // Финальный ПУШ, все должно работать! Может спросить пароль после этого (Не всегда)!

`git push --force origin master` // Принудительный push, если не сработал обычный (командой выше)

`git remote set-url origin https://your_username:your_ssh_token@github.com/your_username/your_username.github.io.git` // Авторизация через SSH Token, так как обычная авторизация через логин и пароль теперь недействительна на github
