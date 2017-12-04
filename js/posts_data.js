const posts = [
    
    {
        title: "Thunder-Struct",
        url: "/2017/11/27/thunder-struct/",
        cover: "/img/thunder-struct.jpg",
        tags: "ruby, tricks, design-intent, struct",
        date: "November 27, 2017",
        description: "Ruby Structs are the objects you didn&#39;t know you needed."
    } ,
    
    {
        title: "Cake and Duplicates",
        url: "/2017/11/14/cake-and-duplicates/",
        cover: "/img/cake.jpg",
        tags: "algorithms, ruby, big-o, linked-lists",
        date: "November 14, 2017",
        description: "The crazy solution to an interview problem"
    } ,
    
    {
        title: "Add Search to Your Static Site with Vue",
        url: "/2017/11/11/static-site-search-with-vue/",
        cover: "/img/search-cover.png",
        tags: "vue, jekyll, static-site, tutorial",
        date: "November 11, 2017",
        description: "In 30 minutes or less!  With no build tools!"
    } ,
    
    {
        title: "Git Wrecked — Keeping Your Branches Synced Without Breaking Things",
        url: "/2017/11/04/git-wrecked/",
        cover: "/img/git-wrecked.jpg",
        tags: "git, workflow, best-practice, oss",
        date: "November 04, 2017",
        description: ""
    } ,
    
    {
        title: "E for Everywhere",
        url: "/2017/10/28/e-for-everywhere/",
        cover: "/img/treble-e.png",
        tags: "math, fun, python",
        date: "October 28, 2017",
        description: "Math is neat and e pops up in weird places."
    } ,
    
    {
        title: "Accelerated Vim-Provement",
        url: "/2017/10/25/accelerated-vimprovement/",
        cover: "/img/hjkl.jpg",
        tags: "vim, editor, encouragement",
        date: "October 25, 2017",
        description: "A quick tip to help pick up Vim faster by freeing yourself of crutches"
    } ,
    
    {
        title: "Secret Message",
        url: "/2017/10/16/secret-message/",
        cover: "/img/secret-blob.png",
        tags: "ruby, puzzle, interview, performance",
        date: "October 16, 2017",
        description: "My solution to a coding challenge and the plot twists that ensued.  &quot;Optimize for efficiency,&quot; they said.  &quot;It&#39;ll be fun,&quot; they said."
    } ,
    
    {
        title: "Learn to Code, Part 3 - Rainbow Collections",
        url: "/2017/10/09/p5-part-3-rainbow-collections/",
        cover: "/img/rainbow.jpg",
        tags: "p5, javascript, beginner, tutorial",
        date: "October 09, 2017",
        description: "Part 3 in the learn-to-code using JavaScript and P5.js series.  Learn how collections like arrays and objects can amplify our coding power."
    } ,
    
    {
        title: "Smooth Ruby One-Liners",
        url: "/2017/10/05/smooth-one-liners/",
        cover: "/img/one-liner.png",
        tags: "ruby, bash, sysadmin",
        date: "October 05, 2017",
        description: "Don&#39;t have time to look up that awk/sed syntax?  Too rushed to write a full script?  Let these Ruby one-liners do the heavy lifting for you."
    } ,
    
    {
        title: "First Screencast",
        url: "/2017/09/30/first-screencast/",
        cover: "/img/screencast.png",
        tags: "screencast, encouragement, showdev",
        date: "September 30, 2017",
        description: "I created my first (and second) screencast and it&#39;s scary and great and I&#39;m making more."
    } ,
    
    {
        title: "Comparison Time",
        url: "/2017/09/23/comparison-time/",
        cover: "/img/comparison.gif",
        tags: "soft-skills, encouragement, not-magic",
        date: "September 23, 2017",
        description: "Definitely compare yourself to others -- but do it right."
    } ,
    
    {
        title: "Learn to Code, Part 2 - Looping Targets",
        url: "/2017/09/16/p5-part-2-looping-targets/",
        cover: "/img/targets.png",
        tags: "p5, javascript, beginner, tutorial",
        date: "September 16, 2017",
        description: "Second part in our series.  We review functions and learn about loops!"
    } ,
    
    {
        title: "Learn to Code, Part 1 - Random Walker",
        url: "/2017/09/09/p5-part-1-random-walker/",
        cover: "/img/walker.png",
        tags: "p5, javascript, beginner, tutorial",
        date: "September 09, 2017",
        description: "Going from no code experience to creating a JavaScript animation in one lesson."
    } ,
    
    {
        title: "CSS Animations are Probably Magic",
        url: "/2017/08/31/css-animations/",
        cover: "/img/animation.jpg",
        tags: "html, css, front-end, animations",
        date: "August 31, 2017",
        description: "A beginner&#39;s starting point for adding animations to your website."
    } ,
    
    {
        title: "Metaprogramming Python - Method Missing",
        url: "/2017/08/26/metaprogramming-python-method-missing/",
        cover: "/img/metaprogramming.jpg",
        tags: "python, ruby, metaprogramming",
        date: "August 26, 2017",
        description: "Implementing Ruby&#39;s &#39;method_missing&#39; method in Python"
    } ,
    
    {
        title: "Step Your Meta Game Up",
        url: "/2017/08/14/step-your-meta-game-up/",
        cover: "/img/meta-tag.jpg",
        tags: "html, seo, social",
        date: "August 14, 2017",
        description: "Learn how to make sharing your site look awesome!"
    } ,
    
    {
        title: "Your Own REPL in Twenty Lines or Less",
        url: "/2017/08/07/twenty-lines-or-less/",
        cover: "/img/code-repl.gif",
        tags: "python, fun",
        date: "August 07, 2017",
        description: "Python&#39;s standard library makes it easy for you to use custom REPL&#39;s"
    } ,
    
    {
        title: "Git Hooked on Git Hooks",
        url: "/2017/08/01/git-hooked-on-git-hooks/",
        cover: "/img/hook.jpg",
        tags: "git",
        date: "August 01, 2017",
        description: "A beginner&#39;s overview of git hooks to automate your process"
    } ,
    
    {
        title: "Script as a Service",
        url: "/2017/07/23/script-as-a-service/",
        cover: "/img/python-service.jpg",
        tags: "python, sysadmin, linux",
        date: "July 23, 2017",
        description: "Setting up a python script to run for a long time on a server"
    } ,
    
    {
        title: "Tricking Yourself into Exercising",
        url: "/2017/07/17/tricking-yourself-into-exercising/",
        cover: "/img/exercise.jpg",
        tags: "exercise, tricks, fitness",
        date: "July 17, 2017",
        description: "A quick tip that might help if you find it hard to exercise"
    } ,
    
    {
        title: "Vue on Django, Part 4",
        url: "/2017/07/16/vue-on-django-part-4/",
        cover: "/img/django-vue.png",
        tags: "vue, django, es6, tutorial",
        date: "July 16, 2017",
        description: "Vue tutorial, part 4, where we wrap it all up"
    } ,
    
    {
        title: "Vue on Django, Part 3",
        url: "/2017/07/06/vue-on-django-part-3/",
        cover: "/img/django-vue.png",
        tags: "vue, django, es6, tutorial",
        date: "July 06, 2017",
        description: "Vue tutorial, part 3, where we set up the Django REST API"
    } ,
    
    {
        title: "Vue on Django, Part 2",
        url: "/2017/06/24/vue-on-django-part-2/",
        cover: "/img/django-vue.png",
        tags: "vue, django, es6, tutorial",
        date: "June 24, 2017",
        description: "Vue tutorial, part 2, where we set up Vuex, the client data store"
    } ,
    
    {
        title: "Vue on Django, Part 1",
        url: "/2017/06/20/vue-on-django-part-1/",
        cover: "/img/django-vue.png",
        tags: "vue, django, es6, tutorial",
        date: "June 20, 2017",
        description: "Vue tutorial, part 1, where we set up the Vue front end"
    } ,
    
    {
        title: "Jupyter Notebooks are The Business",
        url: "/2017/06/13/jupyter-notebooks-are-the-business/",
        cover: "/img/jupiter.jpg",
        tags: "python, teaching, tools",
        date: "June 13, 2017",
        description: "Me, gushing about one of my favorite tools"
    } ,
    
    {
        title: "Unwrapping Decorators, Part 2",
        url: "/2017/06/05/unwrapping-decorators-2/",
        cover: "/img/decorators.jpg",
        tags: "python, pythonic, functional",
        date: "June 05, 2017",
        description: "A more in-depth look at the more advanced capabilities of decorators"
    } ,
    
    {
        title: "Unwrapping Decorators, Part 1",
        url: "/2017/05/30/unwrapping-decorators-1/",
        cover: "/img/decorators.jpg",
        tags: "python, pythonic, functional",
        date: "May 30, 2017",
        description: "An introduction to decorators, a functional Python topic"
    } ,
    
    {
        title: "Microdecisions",
        url: "/2017/05/29/microdecisions/",
        cover: "/img/wooden.png",
        tags: "soft-skills",
        date: "May 29, 2017",
        description: "Sometimes it&#39;s the small decisions that make all the difference"
    } ,
    
    {
        title: "Cache Me Outside",
        url: "/2017/05/18/cache-me-outside/",
        cover: "/img/cache.png",
        tags: "python, tricks",
        date: "May 18, 2017",
        description: "An easy trick to speed up your slower functions"
    } ,
    
    {
        title: "Douglas Adams's Whale",
        url: "/2017/05/14/douglas-adams-whale/",
        cover: "/img/whale.jpg",
        tags: "python, physics, fun, scientific",
        date: "May 14, 2017",
        description: "A discussion and physical model of a whale in space"
    } ,
    
    {
        title: "Plan Your Commits",
        url: "/2017/05/05/plan-your-commits/",
        cover: "/img/plan-commits.jpg",
        tags: "tricks, git",
        date: "May 05, 2017",
        description: "One trick that might help you commit more consistently"
    } ,
    
    {
        title: "Fanbot, and Doing New Things Right",
        url: "/2017/05/01/fanbot-and-doing-new-things-right/",
        cover: "/img/fanbot.jpg",
        tags: "python, soft-skills",
        date: "May 01, 2017",
        description: "An overview of my new project and why I chose the layout I did"
    } ,
    
    {
        title: "Jekyll Tags, the Easy Way",
        url: "/2017/04/25/jekyll-tags-the-easy-way/",
        cover: "/img/tags.png",
        tags: "ruby, jekyll",
        date: "April 25, 2017",
        description: "How I implemented tags without copy-pasting gobbledygook"
    } ,
    
    {
        title: "Built-In Methods",
        url: "/2017/04/25/built-in-methods/",
        cover: "/img/method.png",
        tags: "ruby, tricks",
        date: "April 25, 2017",
        description: "A quick tip to aid in off-line coding"
    } ,
    
    {
        title: "Indexing - Teaching Things Better",
        url: "/2017/04/12/indexing-teaching-better/",
        cover: "/img/indexing.png",
        tags: "teaching, python",
        date: "April 12, 2017",
        description: "Finding an intuitive way to describe why indexing starts at 0 in Python"
    } ,
    
    {
        title: "Pi Via PRNG",
        url: "/2017/04/10/pi-via-prng/",
        cover: "/img/pi-prng.jpg",
        tags: "math, python, tricks",
        date: "April 10, 2017",
        description: "Generating Pi with random numbers via math trickery"
    } ,
    
    {
        title: "Fizz Buzz",
        url: "/2017/03/27/fizz-buzz/",
        cover: "/img/fizzbuzz.png",
        tags: "python, puzzle",
        date: "March 27, 2017",
        description: "Checking out a basic coding problem a few different ways"
    } ,
    
    {
        title: "Piping the Snek",
        url: "/2017/03/22/piping-the-snek/",
        cover: "/img/pipe-snek.webp",
        tags: "python, tricks, bash",
        date: "March 22, 2017",
        description: "Using Python with shell pipes for extra awesomeness"
    } ,
    
    {
        title: "Let's Get Pythonic -- Generators",
        url: "/2017/03/14/lets-get-pythonic-generators/",
        cover: "/img/generator.png",
        tags: "python, tricks",
        date: "March 14, 2017",
        description: "Learning about generators in our journey to Python enlightenment"
    } ,
    
    {
        title: "Meta Feedback",
        url: "/2017/03/01/meta-feedback/",
        cover: "/img/feedback.jpg",
        tags: "soft-skills",
        date: "March 01, 2017",
        description: "Wherin I cry like a little baby because the bad man was mean to me"
    } ,
    
    {
        title: "Optimal Primes",
        url: "/2017/02/24/optimal-primes/",
        cover: "/img/optimus.jpg",
        tags: "algorithms, python, puzzle",
        date: "February 24, 2017",
        description: "Coming up with a more efficient prime factors algorithm"
    } ,
    
    {
        title: "Coding with Code",
        url: "/2017/02/11/coding-with-code/",
        cover: "/img/vscode.gif",
        tags: "editors, vscode, vim, emacs, sublime",
        date: "February 11, 2017",
        description: "VS Code is the beeeessssttt!"
    } ,
    
    {
        title: "Default Argument Tricks",
        url: "/2017/02/02/default-argument-tricks/",
        cover: "/img/fib.png",
        tags: "python, algorithms, tricks",
        date: "February 02, 2017",
        description: "Solving tricky problems using tricky argument tricks"
    } ,
    
    {
        title: "Assert Not Magic",
        url: "/2017/01/18/assert-not-magic/",
        cover: "/img/logo.png",
        tags: "not_magic, soft-skills",
        date: "January 18, 2017",
        description: "Programming isn&#39;t magic.  It&#39;s logical, learnable, and you can do it too."
    } ,
    
    {
        title: "I Can JavaScripting?",
        url: "/2017/01/14/i-can-javascripting/",
        cover: "/img/js.png",
        tags: "javascript",
        date: "January 14, 2017",
        description: "Description of my JavaScript30 experience"
    } ,
    
    {
        title: "Discovering Click",
        url: "/2016/11/27/discovering-click/",
        cover: "/img/click.png",
        tags: "python, tools",
        date: "November 27, 2016",
        description: "An overview of the awesome Click CLI framework"
    } ,
    
    {
        title: "Nay, It Be Gold",
        url: "/2016/11/11/nay-it-be-gold/",
        cover: "/img/it-be-gold.jpg",
        tags: "r",
        date: "November 11, 2016",
        description: "My first impressions of the R language"
    } ,
    
    {
        title: "AI with Pacman",
        url: "/2016/10/16/ai-with-pacman/",
        cover: "/img/pacman-algo.gif",
        tags: "algorithms, python, ai",
        date: "October 16, 2016",
        description: "Trying to get AI algorithms straight in my head."
    } ,
    
    {
        title: "Emacs and Dwarves",
        url: "/2016/09/21/emacs-and-dwarves/",
        cover: "/img/emacs-and-df.jpg",
        tags: "editors, emacs",
        date: "September 21, 2016",
        description: "My first impressions of Emacs and Dwarf Fortress"
    } ,
    
    {
        title: "Starting Algorithms",
        url: "/2016/09/06/starting-algorithms/",
        cover: "/img/starting-algorithms.jpg",
        tags: "algorithms, python",
        date: "September 06, 2016",
        description: "Some algorithms from the algorithms class I&#39;m taking."
    } ,
    
    {
        title: "First Post",
        url: "/2016/08/24/first-post/",
        cover: "/img/first-post.jpg",
        tags: "python, django, rails",
        date: "August 24, 2016",
        description: "My first blog post ever!"
    } 
    
];