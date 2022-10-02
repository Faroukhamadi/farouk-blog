---
title: 'MPA vs SPA'
date: '2022-10-02'
description: 'With the increasing pace in which the web is evolving, it is important to understand the current state of web technologies. MPAs and SPAs are two different approaches to building web applications. This article will explain the differences between the two and hopefully guide you in choosing the right approach for your next project.'
---

You might be wondering at this point.

> What even is an MPA ?

## MPA or Multi-Page Application

A multi-page app is really just a website. When you go to that site after all the dns stuff happens you connect to a server, a cdn or an edge and it sends you html. Somewhere in that html perhaps in a link, you click it and the same thing happens again, The client makes a request to the server, gets a response back and finally renders the new page instead of the existing one when it's ready. This has been the way the web has worked for decades since it started back at 1993 when Tim Berners-Lee invented the World Wide Web and made [this simple html page.](http://info.cern.ch/hypertext/WWW/TheProject.html)
This is a simple model that has worked well for a long time, but as you probably know, things have changed a bit.

- Browsers have gotten more powerful and can now do a lot more than just render html.
- Users expect interactivity and responsiveness from the websites they visit.
- Companies want to be able to deliver content to their users faster and more efficiently.

The need for interactivity results in needing to use javascript: _The more javascript the merrier_, well not really as we'll discuss later.

The need for interactivity results in having two different codebases which are actually tightly coupled to each other. The rendering part which could be plain html, php or rails and interactivity and this is where javascript comes in.

So a few years ago people started to build **single page applications** hoping they would solve these issues.

![mpa-diagram](/images/mpa-diagram.svg)

## SPA or Single Page Application

This solution provided a new way to solve the coupling issue. Instead of the content coming down the wire as html, you'd get a blank page with a script tag that loads the javascript that would render the page. If we click a link in an SPA, we wouldn't have to wait for any html from the server or even make a request to the server. Mind boggling right ? 🤯 The page just gets updated in place rather than dropping everything which means navigation is instantanious and gives the app-like feel to our website. However, there's one single problem with single page apps, they're horrible.

**Here's why that could be the case:**

- Huge javascript bundle size when you load the page for the first time.
- Low light house scores 😔.
- The need for a framework.
- No SEO (almost).

![spa-diagram](/images/spa-diagram.svg)

> why does FAANG use them heavily if they're that bad ?

#### FAANG websites have their flaws

If you think that websites like Instagram or facebook are flawless you're wrong. For example on the Instagram homepage, if JavaScript fails or is disabled, all you get is a desperate "you" waiting for a page that will never load. Let's suppose that JavaScript doesn't fail and you get to download 1MB of _gzipped_ JS, which is the case 99.9% of the time because programming languages are _nice_ and now you're happy ! You're just going through Instagram and looking clicking through images, but now you're wondering why the back button isn't taking you back where you expect it to. SPAs ladies and gentlemen, the expected behavior you usually get on a webpage isn't there so you'll have to get used to it. **Or so you think...**

> If MPAs have their flaws, and SPAs suck... Why are we even making a comparison of two outdated solutions ?

What if I tell you that the solution lies in combining both methods and finding _common ground_.

## Meta-Frameworks

What if there's a way to get the better of both solutions ? This is where meta-frameworks come in. NextJs, SvelteKit and Nuxt are one of the few popular choices out there to start your new project and be accustomed to success. These frameworks provide multiple choices to go about architecting each route the way you want. **Flexibility** PEOPLE!! You could make a route static (like this page you're on), This works best for blog pages for example where the content that's going to be rendered can be prefetched, in other words we always get the same thing from the server regardless of what the user does. Another option is server side rendering where we need both interactivity (JavaScript Wohoo) and html (More please). In server side rendered pages (let's suppose that it's Facebook's homepage) we don't know exactly what we're getting because we fetch the data from the server, let's say facebook's homepage posts. So basically different HTML is generated on each request...

These are a few of the features **Meta-Frameworks** provide but there's a lot more to discover on your own... **This is a blog post about SPAs and MPAs remember ?**
