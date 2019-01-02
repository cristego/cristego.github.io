---
layout: default_page
title: Blog
permalink: /articles/
---

<div id="content">
{% for post in paginator.posts %}
<div class="empty_space_20"></div>
<div id="post">
<p class="date">{{ post.date | date: "%Y | %b %-d" }}</p>
<h1><a href="{{ post.url | prepend: site.articles_url }}">{{ post.title }}</a></h1>
<p>{{ post.excerpt | remove: '<p>' | remove: '</p>' }}</p>
<p><a href="{{ post.url | prepend: site.articles_url }}">read more</a></p>
</div>
{% endfor %}

<!-- Pagination links -->
<div id="post">
  {% if paginator.previous_page %}
  <h1><a class="continue" href="{{ paginator.previous_page_path | prepend: site.articles_url}}">&larr;newer</a></h1>
  {% endif %}
  {% if paginator.next_page %}
  <h1><a class="continue" href="{{ paginator.next_page_path | prepend: site.articles_url }}">older&rarr;</a></h1>
  {% endif %}
</div>

</div>  <!-- end content -->