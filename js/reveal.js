
window.onload = function() {
    


    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
    
        transition: 'slide', // none/fade/slide/convex/concave/zoom
    
        dependencies: [
            { src: '../../../../git-repos/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
            { src: '../../../../git-repos/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: '../../../../git-repos/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: '../../../../git-repos/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
            { src: '../../../../git-repos/reveal.js/plugin/search/search.js', async: true },
            { src: '../../../../git-repos/reveal.js/plugin/zoom-js/zoom.js', async: true },
            { src: '../../../../git-repos/reveal.js/plugin/notes/notes.js', async: true }
        ]
    });
    
};