# 事件循环

## 进程
每个应用至少有一个进程，进程之间相互独立，即使要通信，也需要双方同意

## 线程
运行代码的任务成为线程，一个进程至少有一个线程，如果程序需要同时执行多块代码，主线程就会启动更多的线程来执行代码，所有一个进程中可以包含多个进程

## 浏览器
浏览器是一个多进程多线程的应用程序