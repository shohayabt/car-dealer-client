# CAR DEALER

THIS IS THE LIVE LINK OF WEBSITE [LIVE WEBSITE LINK ](https://assignment-11-54f8e.web.app/).
THIS IS THE SERVER LINK OF WEBSITE [SERVER LINK ](https://sleepy-bayou-43362.herokuapp.com/).

STACKOVERFLOW LINK [ QUS LINK ](https://stackoverflow.com/questions/72187195/how-can-i-responsive-html5-table)

### `TOOLS USED `

- MUI FOR COMPONENT
- CSS FOR DESIGN THE WEBSITE
- REACT FOR FRONT END
- FIREBSE FOR HOSTING AND LOGIN SYSTEM
- HERO ICONS FOR ICON
- HOT TAOST FOR ALERT
- DEPLOY SERVER TO HEROKU

</code></pre>

#### PROJECT START WITH INDEX.JS

<pre><code> 
    const express = require('express')
    const app = express()
    const cros = require("cors")
    const port = process.env.PORT || 5000;

    app.use(cros());
    app.use(express.JSON());

    app.get('/', (req , res)=>{
    res.send("HELLO WORLD FROM NODE JS || EXPRESS")
    })

    app.listen(port,()=>{
    console.log("CRUD SERVER IS RUNNING ")
    })
</code></pre>

#### RUN PROJECT IN LOCAL HOST

<pre><code> 
   npm run start-dev
</code></pre>

### "WHY EVERYONE NEED'S A WEBSITE?"

Back in the day, a business card was an indicator of being in business. It told the world what you were about and where you were heading.
Today, the same can be said for your website. If you run a business, do freelance work, or even work as an employee, a website has become indispensable.
