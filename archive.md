---
layout: page_archive
title: Archive
permalink: /ar/
---

{% for post in site.posts %}
  <div id="post">
  <h1><a href="{{ post.url | prepend: site.url }}">{{ post.title }}</a><time class="date">{{ post.date | date: "%Y | %b %-d" }}</time></h1>
  <p>{{ post.excerpt | remove: '<p>' | remove: '</p>' }}..<a class="continue" href="{{ post.url | prepend: site.url }}">read&rarr;</a></p>
  <div class="empty_space_20"></div>
  </div>
{% endfor %}
