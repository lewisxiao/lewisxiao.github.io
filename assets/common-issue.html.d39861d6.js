import{_ as n,o as s,c as a,e}from"./app.ad464663.js";const i={},c=e(`<h1 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h1><h2 id="\u5982\u4F55\u8BA9-docker-\u5728\u8FD0\u884C\u5BB9\u5668\u65F6-\u81EA\u52A8\u6267\u884C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8BA9-docker-\u5728\u8FD0\u884C\u5BB9\u5668\u65F6-\u81EA\u52A8\u6267\u884C\u547D\u4EE4" aria-hidden="true">#</a> \u5982\u4F55\u8BA9 Docker \u5728\u8FD0\u884C\u5BB9\u5668\u65F6\uFF0C\u81EA\u52A8\u6267\u884C\u547D\u4EE4</h2><ol><li>\u7F16\u5199 Dockerfile\uFF0C\u6784\u5EFA\u597D\u955C\u50CF\uFF0C\u5982\u4E0B\u662F\u793A\u4F8B</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F7F\u7528 openjdk:8u212-jdk-alpine3.9 \u4F5C\u4E3A\u57FA\u7840\u955C\u50CF</span>
FROM openjdk:8u212-jdk-alpine3.9

<span class="token comment"># \u5B89\u88C5 fontconfig\u3001ttf-dejavu\uFF0C\u8C03\u6574\u65F6\u533A\u4E3A\u5370\u5EA6\u6807\u51C6\u65F6\u95F4\uFF08UTC+5:30\uFF09</span>
RUN apk <span class="token function">add</span> --no-cache fontconfig <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> apk <span class="token function">add</span> --no-cache ttf-dejavu <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> apk <span class="token function">add</span> --no-cache tzdata <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">cp</span> /usr/share/zoneinfo/Asia/Kolkata /etc/localtime <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Asia/Kolkata&quot;</span> <span class="token operator">&gt;</span> /etc/timezone

<span class="token comment"># \u8BBE\u7F6E\u5DE5\u4F5C\u76EE\u5F55</span>
WORKDIR /app

<span class="token comment"># \u590D\u5236\u5E94\u7528\u7A0B\u5E8F\u5230\u5BB9\u5668\u4E2D</span>
COPY ./target/ccms-admin.jar /app/ccms-admin.jar

<span class="token comment"># \u66B4\u9732\u5E94\u7528\u7A0B\u5E8F\u6240\u9700\u7684\u7AEF\u53E3\uFF08\u6839\u636E\u9700\u8981\u4FEE\u6539\uFF09</span>
EXPOSE <span class="token number">8081</span>

<span class="token comment"># \u8FD0\u884C\u5BB9\u5668\u65F6\uFF0C\u4F1A\u81EA\u52A8\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u4ECE\u800C\u907F\u514D\u6BCF\u6B21\u624B\u52A8\u8FDB\u5165\u5BB9\u5668\u53BB\u542F\u52A8\u547D\u4EE4</span>
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;/app/ccms-admin.jar&quot;</span>,<span class="token string">&quot;--spring.profiles.active=leco&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>docker run \u547D\u4EE4\u8FD0\u884C\u5BB9\u5668\u65F6\uFF0C\u5C31\u4F1A\u81EA\u52A8\u6267\u884C ENTRYPOINT \u4E2D\u7684\u547D\u4EE4\u4E86</li></ol>`,5),t=[c];function o(l,p){return s(),a("div",null,t)}const r=n(i,[["render",o],["__file","common-issue.html.vue"]]);export{r as default};
