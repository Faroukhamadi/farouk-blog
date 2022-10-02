---
title: 'MPA vs SPA'
date: '2022-10-02'
description: 'With the increasing pace in which the web is evolving, it is important to understand the current state of web technologies. MPAs and SPAs are two different approaches to building web applications. This article will explain the differences between the two and hopefully guide you in choosing the right approach for your next project.'
---

You might be wondering at this point.

> What even is an MPA ?

### MPA or Multi-Page Application

A multi-page app is really just a website. When you go to that site after all the dns stuff happens you connect to a server, a cdn or an edge and it sends you html. Somewhere in that html perhaps in a link, you click it and the same thing happens again, The client makes a request to the server, gets a response back and finally renders the new page instead of the existing one when it's ready. This has been the way the web has worked for decades since it started back at 1993 when Tim Berners-Lee invented the World Wide Web and made [this simple html page.](http://info.cern.ch/hypertext/WWW/TheProject.html)
This is a simple model that has worked well for a long time, but as you probably know, things have changed a bit.

- Browsers have gotten more powerful and can now do a lot more than just render html.
- Users expect interactivity and responsiveness from the websites they visit.
- Companies want to be able to deliver content to their users faster and more efficiently.

The need for interactivity results in needing to use javascript: _The more javascript the merrier_, well not really as we'll discuss later.

The need for interactivity results in having two different codebases which are actually tightly coupled to each other. The rendering part which could be plain html, php or rails and interactivity and this is where javascript comes in.

So a few years ago people started to build **single page applications** hoping they would solve these issues.

![mpa-diagram](/images/mpa-diagram.svg)

### SPA or Single Page Application

This solution provided a new way to solve the coupling issue. Instead of the content coming down the wire as html, you'd get a blank page with a script tag that loads the javascript that would render the page. If we click a link in an SPA, we wouldn't have to wait for any html from the server or even make a request to the server. Mind boggling right ? 🤯 The page just gets updated in place rather than dropping everything which means navigation is instantanious and gives the app-like feel to our website. However, there's one single problem with single page apps, they're horrible.

**Here's why that could be the case:**

- Huge javascript bundle size when you load the page for the first time.
- Low light house scores 😔.
- The need for a framework.
- No SEO (almost).

![spa-diagram](/images/spa-diagram.svg)
