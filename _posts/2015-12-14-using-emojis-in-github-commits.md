---
layout: post
title: Using Emojis in GitHub Commits | Kimura Digital
headline: Using Emojis in GitHub Commits
description: I'm a Toronto freelancer solving challenges with digital solutions. I build websites & help businesses grow.
no-follow:
prettify: yes
permalink: blog/:title/
author: Thomas Kimura
---

<p class="text-big">
  For someone who has been designing websites for some time now I really haven't put much thought into how I actually order CSS properties. I've always thought that this should be something that I standardize for my own work.
</p>

Now what I have done in the past is a combo of randomly ordering properties and ordering by type, but this isn't the best way to structure code. I found that overtime a project with properties randomly ordered can be vulnerable to repetitive code. It is harder to maintain and navigate when properties are written at random.

Let's look at some examples

<pre><code class="css">.selector {
  color:white;
  font-size:10px;
  opacity:0.4;
  top:45px;
  background:blue;
  padding:10px;
  font-family: sans-serif;
  position: relative;
  cursor: pointer;
  left:40px;
}
</code></pre>


Alright, so that clearly isn't the best way to order the properties. Let's give this another shot.

<pre><code class="css">.selector {
  position: relative;
  top: 45px;
  left: 40px;
  padding: 10px;
  opacity: 0.4;
  background: blue;
  color: white;
  font-size: 10px;
  font-family: sans-serif;
  cursor: pointer;
}
</code></pre>

So what changed? I grouped the properties from top to bottom starting with position properties. Then moved onto display, visibility, color, font and additional properties in that order. Just follow this template.

<pre><code class="css">.selector {
  /*position*/
    position, top, left, right, bottom

  /*box-model*/
    height, width, padding, margin

  /*display and visibility*/
    display, visibility, opacity, z-index

  /*color*/
    background-color, color, border-color

  /*font*/
    font-family, font-size, font-weight

  /*additonal*/
    any other properties
}
</code></pre>
