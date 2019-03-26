import { CognitoAuth } from "amazon-cognito-auth-js";

function getAuth() {
    const auth = new CognitoAuth({
        AdvancedSecurityDataCollectionFlag: false,
        AppWebDomain: "https://happyhour.auth.us-west-2.amazoncognito.com",
        ClientId: "2sd2iuu47j5o1jgbg0pu9mngrv",
        RedirectUriSignIn: "https://master.d2psbvroh44nz7.amplifyapp.com",
        RedirectUriSignOut: "https://master.d2psbvroh44nz7.amplifyapp.com",
        UserPoolId: "us-west-2_tAjxbyOp6",
        TokenScopesArray: ['openid', 'email'],
    });

    // Make user you turn on OAuth2 Authorization Code Grant flow
    auth.useCodeGrantFlow();

    auth.userhandler = {
        onFailure: (err) => {
            console.log(`Cognito onFailure`, err);
            removeQueryFromLocation();
            alert("Failed to authenticate user.");
        },
        onSuccess: (result) => {
            console.log(`Cognito onSuccess`, result);
            removeQueryFromLocation();
            // You have logged in :-)
            console.log("logged in");
        },
    }

    return auth;
}

function removeQueryFromLocation() {
    // Replace the href because the Cognito passes the OAuth2 grant code in the query string
    // And the grant code is not reusable
    if (window.history.length > 0) {
        const newHref = window.location.href.split('?')[0];
        window.history.replaceState(undefined, 'Branded QR Code Generator', newHref);
    }
}

export function isAuthenticated() {
    const auth = getAuth();
    const href = window.location.href;
    console.log(href);
    const session = auth.getSignInUserSession();
    console.log(session);

    if (session.isValid()) {
        console.log("session is valid");
        return auth;
    } else if (href.indexOf('?') > 0) {
        console.log(`Parsing session for`);
        auth.parseCognitoWebResponse(href);
        console.log('Parsed session', session);

    } else {
        auth.getSession();
    }
}
