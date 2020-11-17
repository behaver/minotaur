# Minotaur

[![GitHub license](https://img.shields.io/badge/license-ISC-brightgreen.svg)](#)  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Minotaur is a simple react project which provides a layout for multilevel routes in SPA(single page application). You can access your subject destination via the trace "Tab > Menu > Section > Folder > Subject". Here, All requests between the browser and server are asynchronous. 

<img src="./docs/imgs/view_structure_graph.png" width="70%">

## How To Use It?

First, in this project, the View Modules need you to provide a series of API resources from your server. They should return an array named “data” which contains your entity objects like `{ id: 1, name: “Icarus” ... }`. Noteworthily, almost all of these entity objects are required to have the properties `id` and `name`. If you don't have a suitable server app yet now, you could go to my other project repository [Crete](https://github.com/behaver/crete) for getting it. 

### Required APIs

Here are the APIs which you need to prepare in advance:

1. `api/categories`

> The View Module will use it to get all category entities in your application. It should return the JSON response like `{ "data": [ { "id": "1", "name": "gallery" }, ... ] }`. If you want to change this URI in your application, you can rewrite it in `App` / `requestData()`.

2. `api/subcategories?category_id=1`

> The param `category_id` will determine in which categories you want to find total subcategories, also the format of the JSON response as above. You can rewrite the URI in `TabContainer` / `requestData()`.

3. `api/sections?subcategory_id=1`

> The param `subcategory_id` will determine in which subcategories you want to find the sections, also the format of the JSON response as above. You can rewrite the URI in `MenuContainer` / `requestData()`.

4. `api/subjects?scope_id=0&section_id=1&page=1`

> The params `scope_id` and `section_id` will determine in which scope and section you want to find the subjects. Additionally, the param `page` will send the page index to your server. You can rewrite the URI in `Section` / `requestData()`.

> What calls for special attention is that the subject entity is required to have the property `type`, and when the value of it was `scope`,  this subject will be rendered as a folder.

Otherwise, if you want to change your baseURL, you can rewrite it in `AjaxHandler.js`

### Install

You could run the `git clone` command as follow in your directory.

`git clone git@github.com:behaver/minotaur.git`

and then, run `npm install` to install all dependencies.

### Directory Structure

After you have deployed your server host and jointed the API resources, then you can get on the following development in the working directory as below. 

```
├─docs
├─node_modules
├─public
├─src
|  ├─AjaxHandler.js
|  ├─index.js
|  ├─views
|  |   ├─App.js
|  |   ├─Folder.js
|  |   ├─Media.js
|  |   ├─Menu.js
|  |   ├─MenuContainer.js
|  |   ├─MenuSider.js
|  |   ├─SUnit.js
|  |   ├─Section.js
|  |   ├─Tab.js
|  |   ├─TabBar.js
|  |   └─TabContainer.js
|  ├─css
|  |  ├─App.css
|  |  ├─Folder.css
|  |  ├─Media.css
|  |  ├─MenuContainer.css
|  |  ├─MenuSider.css
|  |  ├─SUnit.css
|  |  ├─Section.css
|  |  ├─Tab.css
|  |  ├─TabBar.css
|  |  ├─TabContainer.css
|  |  └─index.css
```

Minotaur placed all view components in the directory `src/views`, and you can find the corresponding stylesheet file in `src\css`.

### View Modules

Now, let's take a look at the structure of the view modules in Minotaur. This graph will help you get more clear on them.

![alt The Structure of Components](./docs/imgs/view_component_graph.png)



