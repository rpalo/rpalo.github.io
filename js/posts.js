"use strict";var params=new URLSearchParams(location.search),template='\n  <div class="post" v-for="post in filteredPosts">\n      <a class="post-title" v-bind:href="post.url">{{ post.title }}</a><br>\n      <small>{{ post.date }}</small>\n      <img class="img-small" alt="Cover image" v-bind:src="post.cover" v-if="post.cover">\n      <small>Tags: {{ post.tags }}</small>\n    </div>\n',postResults=document.querySelector(".results-wrapper");postResults.innerHTML=template;var app=new Vue({el:"#app",data:{search:params.has("q")?params.get("q"):"",post_list:posts},computed:{filteredPosts:function(){var t=this;return this.post_list.filter(function(s){return(s.tags+" "+s.title).toLowerCase().includes(t.search.toLowerCase())})}}});document.querySelector(".search").addEventListener("focus",function(){window.scroll({top:this.offsetTop-100,left:0,behavior:"smooth"})});