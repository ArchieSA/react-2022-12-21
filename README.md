# react-2022-12-21
# ДЗ.

## Как делать:

0. Сделать форк этого репозитория в свой аккаунт (только 1 раз в самом начале).

1. Перед выполнением ДЗ сделайте пул мастера этого репозитория себе в форк (чтобы иметь актуальный код);
2. Обновить зависимости `yarn` или `npm i`;
3. Создайте новую ветку от актуального мастера для выполнения ДЗ;
4. Выполните ДЗ в этой ветке;
5. Сделайте Pull Request этой ветки в мастер моего репозитория;
6. Напишите мне в личные сообщения дискорда ссылку на PR.

**Важно! В результате всех этих манипуляций в вашем мастере должны быть только мои комиты, все ваши комиты должны быть в отдельных ветках под каждую домашку.**

Дедлайн – 23:00 по GMT+3 за день до занятия.


## HW1
1. создать отдельные компоненты:
   2. Menu - отрисовывает список блюд, само блюдо не отрисовывает;
   3. Dish - отрисовывает только информацию о блюде. Важно! Необходимо реализовать так, чтобы была возможность применить компонент как в списке, так и вне его.
   4. Reviews - отрисовывает список отзывов, сами отзывы не отрисовыввает;
   5. Review - отрисовывает отзыв. Важно! Необходимо реализовать так, чтобы была возможность применить компонент как в списке, так и вне его.
2. Используя эти компоненты и jsx отрисовать информацию о всех ресторанах, их меню, отзывах.

## HW2
1. необходимо в блюде добавить отображение компонента Ingredient(сделать его).
2. В компоненте Ingredient отображать ингредиент блюда и две кнопочки(-+) с кол-вом ингредиента.
3. Если блюдо не выбрано, то ингредиенты не отображаем. Если счетчик больше 1, то отображаем ингредиенты.
4. При появлении ингредиентов кол-во каждого должно быть 1. При клике на - уменьшаем, при клике на + увеличиваем.
5. Добавить условия для блюд и ингредиентов. (мин кол-во 0, макс 5).

## HW3
1. создать компонент Tabs, который отрисовывает список табов;
2. создать компонент Tab, который отрисовывает один таб;
3. отрисовать список табов(на каждом табе название ресторана) для всех ресторанов, по клику на таб отображать ресторан.

## HW4
1. Добавить стили элементам;*
2. Доработать компонент рейтинга так, чтобы:
   3. Он мог принимать значение рейтинга number и отображать необходимое количество звезд желтого цвета;
   4. Мог использоваться как инпут для рейтинга; При клике на звезду она окрашивается золотым и все до нее тоже. Все после нее черные. При клике на звезду вызывается функция onChange, которую Rating принимает в пропсы.
   5. Компонент принимает проп размера(s, m, l). 
   6. Рейтинг ресторана просто отбражем с размером l;
   7. В форме инпут рейтинга заменяем на компонент рейтинга размера m и подключаем к состоянию.
   8. в отзывах просто отображает рейтинг отзыва размера s.
9. иконки в рейтинге должны быть оптимизированы.