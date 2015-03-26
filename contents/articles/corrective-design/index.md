---
title: "Corrective Design"
author: cvan
date: 2015-03-26
template: article.jade
---

I like applications that correct me when I make mistakes.


## Forgiving inputs

Don't make the user do string replacing and pattern matching. That's something the application can do instead.

Hypothetically, a site asks for a phone number with a specific pattern: a string prefixed with a `+` followed by 10 digits. If I enter `650 555 1212`, the application should be smart enough

* to strip any non-numeric character (e.g., spaces, dots, hyphens, parentheses, slashes), and
* to automatically prefix with a common default (`+1` for a site with mostly US visitors, `+44` for a site with mostly German visitors).

(I actually reported this issue to Authy, with these recommendations, and they said they couldn't fix it.)


## Catching mistakes

When requesting a ride from Uber, the application guesses and prefills your pickup location. Often times this is wrong, especially in apartment complexes and city streets near tall buildings.

As such, I've gotten into the habit of manually entering my pickup location. The next screen asks for your dropoff location.

On more than two occasions, I misentered my pickup as my dropoff location. I would then have to cancel my Uber ride, resulting in a $5 cancellation fee (and usually a confused driver).

I realise many will say it's my mistake for not reading things closely. It's my opinion that the application should be resilient, forgiving, and intelligent.

After entering your pickup and dropoff locations, the application could easily check your relative distance from each location and then display a confirmation warning if things look suspicious.

(I also reported this issue to Uber, with this recommendation, and they said they would keep it in mind.)

<hr>

Don't punish your users for just wanting to use your app and get on with their lives. Forgive them, and they'll forgive you. Your users aren't perfect, and neither is your app.
