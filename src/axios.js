import axios from 'axios';

const instance = axios.create({
    /*
        This is the base url for any request that we make
        However, we have to change the value once it's been deployed to Herouku
    */
    baseURL: "https://whatsapp--mern--backend.herokuapp.com"
});

export default instance;

/*
    Deploying Backend Application to Heroku - https://dashboard.heroku.com/apps

    At most 5 builds - Does not require credit card details
    New
        -- Create new app
            -- App name
            -- Choose a region
            -- Create app

    Deployment method
        -- Opening up terminal in backend project

    npm install -g heroku
    heroku --version

    heroku login

    heroku git:remote -a whatsapp--mern--backend

    git add --all or git add .
    git status
    git commit -m "WhatsApp MERN"
    git push heroku master

    heroku logs --tail

    Heroku Settings
        -- Scroll down to Domains
            --  Type in browser https://whatsapp--mern--backend.herokuapp.com/
                    -- It should say "Hello World!"

    Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://docs.atlas.mongodb.com/security-whitelist/

    197.245.176.254/32

    Configuring an environment variable in my Heroku application:

    heroku config:set MONGODB_URI="mongodb+srv://admin:2Wj2yj6U4Maj0FgS@cluster0.7trec.mongodb.net/whatsappdb?retryWrites=true&w=majority"

*/