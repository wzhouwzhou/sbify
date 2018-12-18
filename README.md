<div align="center">
    <br />
    <p>
        <a href="https://www.codacy.com/app/wzhouwzhou/sbify?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=wzhouwzhou/sbify&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/a7f61902bd094b0f99a902212238ccf3" alt="Codacy Badge" /></a>
        <a href="https://www.npmjs.com/package/sbify"><img src="https://img.shields.io/npm/v/sbify.svg" alt="NPM version" /></a>
        <a href="https://www.npmjs.com/package/sbify"><img src="https://img.shields.io/npm/dt/sbify.svg" alt="NPM downloads" /></a>
        <a href="https://david-dm.org/wzhouwzhou/sbify"><img src="https://img.shields.io/david/wzhouwzhou/sbify.svg" alt="Dependencies" /></a>
        <a href="https://snyk.io/test/npm/sbify"><img src="https://snyk.io/test/npm/sbify/badge.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/npm/sbify" style="max-width:100%;"></a>
        <a href="https://paypal.me/wzhouwzhou"><img src="https://img.shields.io/badge/donate-paypal-009cde.svg" alt="Paypal" /></a>
    </p>
    <p>
        <a href="https://nodei.co/npm/sbify/"><img src="https://nodei.co/npm/sbify.png?stars=true&downloads=true"></a>
    </p>
</div>

# String 🅱'ify (Sbify)

## It's about time you im🅱roved your strings

### Why?
**🅱ecause why not?** It's almost 2019. We needed a **lightweight** and **deadsimple** solution that worked for **browsers and NodeJS** a long time ago.

(This package replaces b's and starts of words with "b" emojis)

### Usage

Node:

    const b = require('sbify');

    b('Hello, world!') === '🅱ello, 🅱orld!'
    b('Sbify is the best package!') === '🅱🅱ify 🅱s 🅱he 🅱est 🅱ackage!'

Other replacement characters or emojis are supported

    b('Hello, world!', 'bbb') === 'bbbello, bbborld!'
    b('This package is #TheBest!', '🦆') === '🦆his 🦆ackage 🦆s #🦆he🦆est!'

Browser:

Simple npm install and add the index.js script onto your site.
Index.js was built by browserify --standalone, so you'll be able to access `window.sbify` as a function.

    <script>
        console.log(sbify('Hello, world!'));
    </script>

Enjoy this package? Consider starring on [github](https://github.com/wzhouwzhou/sbify) and checking out some of my other work:

[Youtube Search API](https://npmjs.com/ytsearcher) and its [CLI](https://npmjs.com/ytsearcher-cli)

[Fluent Filepaths](https://npmjs.com/easypathutil)

[Urban Dictionary](https://npmjs.com/easyurban)

Need support? Send me an email at wzhouwzhou@gmail.com, or connect with me on Discord at <https://discord.gg/jj5FzF7> (William Zhou#0001)

Like what you're seeing? Consider helping to fund my education through <https://paypal.me/wzhouwzhou>
