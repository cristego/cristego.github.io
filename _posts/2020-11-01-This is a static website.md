---
published: true
layout: post
title: This is a static website
date: 2020-11-01T00:00:28.000Z
categories: 
permalink: '/articles/:categories/:year/:title.html'
---
This digital playground is powered by [Github](https://github.com/){:target="_blank"}, [Netlify](https://netlify.com/){:target="_blank"} and [JEKYLL](https://jekyllrb.com){:target="_blank"}. In order to find out what that means in more detail you just need to read further.
<!--End of Excerpt--> 

For this digital place I wanted to have a pretty lightweight approach but still maintaining a nerdy touch to it. I am an IT guy in the end. I also wanted to go without the heavy weight of a full stack cms/blog setup like wordpress. Eventually, I wanted also to go with a very cost effective solution, since this is just a hobby and not anticipated to add any contribution to my income. Thus, I started to explore viable options and soon found out about static site generators and [markdown](https://daringfireball.net/projects/markdown/){:target="_blank"}. With regards to the static generator, I quickly decided to go with jekyll (eventually because it was part of the github pages ecosystem; more about this below), which seemed to be also very blog-aware. So, I gave it a shot.

I started with github pages, which comes with jekyll out of the box. Github also allows you to connect your github page with your custom domain. Which is perfect, since I have one. However, to make this happen it has to follow certain specs which I am sure you can find out by yourself on github. I don’t like limitations. I needed to find a better way. 

Today I use a combination of github and netlify. This removes some of the limitations I faced with the github only approach. The code is still managed on github. Once code is checked-in this automatically triggers the underlying [CI/CD](https://en.wikipedia.org/wiki/CI/CD){:target="_blank"} pipeline with netlify, which updates my content. 
I think everyone can do this. It’s not harder than setting up a wordpress blog. If you have fun building stuff (digital!) then I suggest you give it a shot. 




