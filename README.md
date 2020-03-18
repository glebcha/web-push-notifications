## Web Push Notifications
This library is boilerplate for your own solution. 
It adds module in global namespace `window.PushInstaller`. 
Firebase Cloud Messaging scripts will be loaded atomatically.

To register service worker and client on your push server you should execute `window.PushInstaller.registerSW()` anywhere. You should set service worker location if it is not in root directory. You can doi it via `window.web_push_lib_path` or local storage `{ 'web_push_lib_sw_path': path }`.

[Documentation](docs/README.md).

Библиотека добавляет глобальный модуль для работы с пуш-уведомлениями `window.PushInstaller`.
Также будут подключены необходимые библиотеки для работы с Firebase Cloud Messaging.

Для регистрации сервис-воркера и клиента на вашем пуш-сервере необходимо выполнить `window.PushInstaller.registerSW()` в любой части кодовой базы.
Если сервис-воркер находится не в рутовой директории, то необходимо записать путь расположения в `window.web_push_lib_path` или local storage `{ 'web_push_lib_sw_path': path }`.

[Документация](docs/README.md).