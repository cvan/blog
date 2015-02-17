---
title: "Forget Passwords: Passwordless Login"
author: cvan
date: 2014-05-21 21:00:00
template: article.jade
categories: authentication design usability
---

Forgot password? No, forget passwords.

Passwords are the worst. These days nearly every site and app asks you to sign up and sign in. Some aren’t even polite about it. You want to buy those new kicks? You want to read this salacious forum post? You want free wifi so you don’t have to make smalltalk with strangers at the café? Go create an account and then maybe we’ll think about it.

Two lessons before we continue: try really, really hard to figure out how to save user state and try to never ever block a user on login unless special permissions are needed. Envision how your site or app would function if there were no email/username/password fields.

Given that today’s Internet also lacks any sort of agreed-upon standard of and implementation of an authentication protocol, most login systems are custom made (and of questionable security and stability). Sure, OpenID is doing its thing, but ease of use and lack of adoption have made it an unattractive solution for developers and users alike. Mozilla’s Persona was an attempt to have a distributed authentication using your email address as the primary identifier, allowing certain vetted sources (e.g., Mozilla, Google) to authorize login by verifying cryptographically signed assertions. A good idea but again I still have to know one password to sign in on other sites (not unlike Facebook Connect and Google+).

Persona’s original goal was to be one-click login implemented in the browser chrome, which as of this writing, has not been shipped to users. Google, as of this writing, has introduced in beta builds of Chrome the ability to sign in to your Google+ account directly from the browser chrome of Chrome. This allows you to more easily sign into Google services, but it doesn’t solve the issue of authentication for sites not wanting to play with Google.

Then there’s third-party authentication wherein you sign in to some web site using your existing Facebook, Google+, Twitter, GitHub, Pinterest, whatever account. Sure, now you don’t need to come up with and remember yet another password, and if you’re lucky you also get to spend a couple minutes coming up with a username that’s not taken. But I digress. That aside, those third parties now have data about which web sites you’re signing in to, how long you’re there for, and so on, not to mention possibly your account data on that web site (and vice-versa — your third-party account on that web site).

I like Facebook Connect because it means I don’t have to remember yet another password, but I don’t like the privacy implications of my personal Facebook being associated with some random site. Facebook has introduced a new system called “Anonymous Login,” but in my opinion I want all ties severed between Facebook and some random site. But Facebook loves that partnership because, well, data.

What’s a possible solution? Have a third-party with no affiliation take care of signing you into web sites, and that’s it. Limit the data they get and use them for one purpose — verifying your identity. Unsurprisingly, there are countless companies offering passwordless login by way of single-use tokens. In the previous century, RSA introduced to the enterprise market keys which have a randomly generated key (rotated every minute) that you punch into a web site/program, which then gets verified against RSA’s API and decides whether or not you get access.

What’s the catch? Nearly every single one of these companies pushes you to sign up for an account (ironic), install their app on your phone (or install some add-on/program on your desktop) just to be able to log in to another web site. It’s unnecessary friction. Not to mention adoption issues: in order for the service to be useful, the company has to convince web sites to ditch whichever login system they’re using now (or supplement their existing one), both of which have not minor UX implications.

Some might say password managers are the solution. In the past, I’ve used LastPass and 1Password, the latter for a few years. If, unlike me, you use a single browser on a single device for everything you do (and you keep regular backups, but of course you do), you’re golden. Both Chrome and Firefox do a decent job at remembering your passwords. They’re both pretty good at guessing which fields are email/username/password fields and remembering their values. They’re both pretty good at syncing your passwords (along with tabs and bookmarks) with your browser on your mobile device.

Now, what happens when you have multiple copies of your browser, private browser sessions, different browsers. What if you’re entering your username/password in a native app that has embedded a web view? Your browser isn’t going to remember that when you close the native app, since the embedded WebKit/Gecko browser has no knowledge of the browser where your normal browser profile lives.

One would hope that the operating system itself could just remember all the logins/passwords ever used and tie them to the current user account. What happens when you’re at an Internet café (yes, they still exist) and need to read your Hotmail (yes, it also still exists)? Add syncing à la iCloud or allow the credentials database to be exported to a (hopefully password-protected) flat file (for the record, 1Password can export to a “password-protected” HTML document).

Anyway, the thing is Apple has built this into Mac OS X. Wifi passwords, application passwords, passwords saved with Chrome and Safari (not yet with Firefox) interact with Apple’s Keychain, which will show a password prompt asking you for the master password. You can later access this database using a program in the “Utilities” folder called “Keychain Access.”

Apple’s Keychain is one of the best attempts at login unification, but adoption is not universal (Firefox doesn’t use it, nor do many third-party native Mac apps) and the syncing story simply isn’t there (yet). And what about Windows and Linux? The Keychain should be device- and platform-agnostic, but currently it just sits nicely tucked away on your Apple desktop.

There will likely never be a single authentication app, so users may have to install several authentication apps to log in to various websites. And today, authentication keychains built into the OS are not interoperable across any platform and any device.

There are two things that are used almost universally: email and SMS. Almost everyone trusts his/her email account with his/her life. And every web site knows that. That’s why email is most commonly your unique identifier, why you get email confirmations sent there, why you get password reset links sent there, and so on. Then there’s SMS. As the world gets increasingly more mobile, and more people secure their phones with PINs (and not stupid ones) and don’t have public notifications visible from the lockscreen, SMS can become a source of trust for authentication.

You could continue to rely on your guaranteed-foolproof memory (or your password manager or the sheet of paper you keep tucked under your mattress or the Moleskine you keep buried in your backyard garden). Most people solve this issue by using the same password everywhere, choosing basic passwords, or coming up with a mnemonic device (like an easy-to-remember phrase + random characters + characters derived from the name of the site). Why not instead just tie authentication directly to a user’s email or phone (whichever the user trusts more). In today’s Web landscape, a user’s email is considered the most authoritative identifier of a user’s identity.

Today’s typical registration flow:

1. Click a button to sign up for an account.
2. Enter your email address with a username and password.
3. Wait for a confirmation email to arrive in your inbox. (Some sites may log you in immediately after registration.)
4. Click the link in the email to confirm your account. (Some sites may log you in immediately after confirming the link.)

Today’s typical password-reset flow:

1. Enter your email/username and password. Hopefully you didn’t forget both.
2. Click a link to reset your password.
3. Enter your email again. (Some sites are smart about it and preserve the last email you used from the previous sign-in form.)
4. Wait for an email to arrive in your inbox. (Hopefully, it does arrive.)
5. Click the link in the email to reset your password. (Some sites may send you a temporary password instead.)

For several months after quitting 1Password, I would reset my password every time I wanted to sign in to a service because, well, I forget (just like my password).

Now what if we never asked you for a password when you sigend up and instead just asked for your email address? And every login (hopefully not often with long-lived sessions) would effectively be like a password reset where you get an email with a link to log in or a single-use PIN confirmation code to enter into the web site/app you’re signing in to. Stripe, Square, Gumroad get this model. If the user trusts his/her phone, you could even send an SMS to a user’s phone with a link to sign in which would automatically sign him/her in on the device from which the login was initiated.

You get for free an audit trail (in the form of SMS or email) of all login attempts and an email archive of all logins and registrations for all the services you’ve ever used. Add some Google Actions to the emails, and now you could have easy one-click buttons to remotely sign out of services, delete accounts, or sign in again. Say I forgot to sign out of my Etsy account (and assuming Etsy adopted this password-login system) when I was at the local yoga café using the communal iPad to shop for a set of personalised wooden coasters whilst eating a quinoa beet salad. From the comfort of my email, I can remotely sign out of that session — and víola!

What we have here is something like two-factor auth (TFA) but instead of one, it’s two.

Always bet on email. It’s a protocol that already has user adoption.

What other fancy things you could do? You could use Bitcoin’s block chain to build a P2P. Or you could model browser authentication after SSH key-based authentication, where the browser holds onto the private key and the web sites hold onto your public keys (all done behind the scenes à la SSL). And I’m sure somewhere it’s 4 AM in some hacker’s basement where he/she’s building a P2P authentication system with WebRTC.

The goal should be to make logins opaque, flexible, painless, and even enjoyable. Forget passwords.

## Demo

The following are four prototypes of a possible implementation of a passwordless-login system.

(P.S. Press “r” at any time to reset the flow.)

### Prototype A

Via SMS with PIN code

* [Try out the Login demo.](http://cvan.github.io/sealogin/demos/a-login/)
* [Try out the Register demo.](http://cvan.github.io/sealogin/demos/a-register/)

### Prototype B

Via email with PIN code

* [Try out the Login demo.](http://cvan.github.io/sealogin/demos/b-login/)
* [Try out the Register demo.](http://cvan.github.io/sealogin/demos/b-register/)

### Prototype C

Via SMS with no code

* [Try out the Login demo.](http://cvan.github.io/sealogin/demos/c-login/)
* [Try out the Register demo.](http://cvan.github.io/sealogin/demos/c-register/)

### Prototype D

Via email with no code

* [Try out the Login demo.](http://cvan.github.io/sealogin/demos/d-login/)
* [Try out the Register demo.](http://cvan.github.io/sealogin/demos/d-register/)

## Getting fancy

Some activities to try at home:

* Hook up PIN verification to a real API server.
* Actually send real SMSs and emails.
* Make mobile and desktop apps for those who don’t want to use their phones and desktops.
