window.onload = function() {

    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
    
        transition: 'slide', // none/fade/slide/convex/concave/zoom
    
        dependencies: [
            { src: 'https://cdn.bootcss.com/reveal.js/3.5.0-beta/lib/js/classList.js', condition: function() { return !document.body.classList; } },
            { src: 'https://cdn.bootcss.com/reveal.js/3.6.0/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: 'https://cdn.bootcss.com/reveal.js/3.5.0/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: 'https://cdn.bootcss.com/reveal.js/3.4.1/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
            { src: 'https://cdn.bootcss.com/reveal.js/3.6.0/plugin/search/search.js', async: true },
            { src: 'https://cdn.bootcss.com/reveal.js/3.4.1/plugin/zoom-js/zoom.js', async: true },
            { src: 'https://cdn.bootcss.com/reveal.js/3.4.0/plugin/notes/notes.js', async: true },
            { src: 'https://d3js.org/d3.v4.min.js' },
            { src: 'js/d3js.js' }       
        ]
    });
    
};