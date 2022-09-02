# angular-customers-orders

## Description
This is an Angular project practice.

## Key Points to Practice
- Components
- Modules
- Pipes
- Built-in directives
- Services
- Data binding
- Routing
- Sharing data between child and parent components

## Features
- [Introduction Video](https://scrimba.com/learn/yourfirstangularapp/application-overview-cMKvKCJ)

## Setup
```
ng new angular-customers-orders --routing
ng generate module customers --routing
ng generate component customers/customers
ng generate component customers/customers-list
ng generate component customers/filter-textbox
ng generate module orders --routing
ng generate component orders/orders
ng generate module core
ng generate service core/data
ng generate service core/sorter
ng generate module shared
ng generate pipe shared/capitalize
```

## Run the App
`ng serve --open`