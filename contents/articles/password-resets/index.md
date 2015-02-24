---
title: "Password Resets"
author: cvan
date: 2014-07-29
template: article.jade
---

When I type my email/username in a log-in form, and realise I've forgotten my password, I expect the Password Reset form to preserve my email/username.

I hypothesised that most major sites suffer from a bad case of ICRS on their Password Reset forms. I conducted an experiment to prove my hypothesis and wrote this blog post to publish my findings (and to increase awareness of this epidemic).

<span class="more"></span>

I wrote [CasperJS scripts](https://github.com/cvan/password-reset-screencasts/tree/master/scripts) tailored to the sites' Password Reset flows. Taking screenshots along the way, I automated the following user flows:

1. At Log In screen, provide email only, and then reset password.
2. At Log In screen, provide email and password, and then reset password.
3. At Log In screen, provide email only, submit the form, and then reset password.
4. At Log In screen, provide email and password, submit the form, and then reset password.
5. At Password Reset screen, provide a different email, and then reset password.

I then used [ffmpeg](https://github.com/cvan/password-reset-screencasts/blob/17b7bba/Makefile#L13-L18) to stitch together the screencasts.

(Unfortunately, I had to disqualify LinkedIn and Tumblr because ratelimiting and CAPTCHAs prevented my automated tests from completing.)


## Screencasts

<table class="password-reset-comparison">
  <thead>
    <tr>
      <th>Site</th>
      <th>Email only</th>
      <th>Email + password</th>
      <th>Email only, form submitted</th>
      <th>Email + password, form submitted</th>
      <th>Different email + password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://www.airbnb.com/"><img src="airbnb.png" alt="Airbnb" title="Airbnb"></a>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_1.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_1.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_6.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_6.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_2.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_2.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_7.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_7.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_3.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_3.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_8.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_8.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_4.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_4.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_9.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_9.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_5.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_5.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_10.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/airbnb_10.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.amazon.com/gp/sign-in.html"><img src="amazon.png" alt="Amazon" title="Amazon"></a>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/amazon_1.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/amazon_1.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/amazon_2.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/amazon_2.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/amazon_3.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/amazon_3.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/amazon_4.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/amazon_4.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/amazon_5.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/amazon_5.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.facebook.com/"><img src="facebook.png" alt="Facebook" title="Facebook"></a>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/facebook_1.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/facebook_1.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/facebook_2.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/facebook_2.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/facebook_3.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/facebook_3.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/facebook_4.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/facebook_4.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/facebook_5.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/facebook_5.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/login"><img src="github.png" alt="GitHub" title="GitHub"></a>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/github_1.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/github_1.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/github_2.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/github_2.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/github_3.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/github_3.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Good</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/github_4.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/github_4.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/github_5.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/github_5.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://accounts.google.com/ServiceLogin"><img src="google.png" alt="Google" title="Google"></a>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/google_1.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/google_1.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/google_2.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/google_2.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/google_3.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/google_3.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/google_4.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/google_4.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/google_5.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/google_5.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.kickstarter.com/login"><img src="kickstarter.png" alt="Kickstarter" title="Kickstarter"></a>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/kickstarter_1.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/kickstarter_1.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/kickstarter_2.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/kickstarter_2.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/kickstarter_3.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/kickstarter_3.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/kickstarter_4.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/kickstarter_4.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/kickstarter_5.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/kickstarter_5.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.pinterest.com/login/"><img src="pinterest.png" alt="Pinterest" title="Pinterest"></a>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/pinterest_1.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/pinterest_1.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/pinterest_2.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/pinterest_2.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/pinterest_3.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/pinterest_3.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/pinterest_4.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/pinterest_4.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/pinterest_5.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/pinterest_5.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://twitter.com/"><img src="twitter.png" alt="Twitter" title="Twitter"></a>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/twitter_1.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/twitter_1.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/twitter_2.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/twitter_2.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/twitter_3.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/twitter_3.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/twitter_4.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/twitter_4.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="bad">Bad</span>
      </td>
      <td>
        <video controls width="100%">
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/twitter_5.webm" type='video/webm;codecs="vp8, vorbis"'>
          <source src="https://people.mozilla.org/~cwiemeersch/blog/password-reset/screencasts/twitter_5.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <span class="good">Good</span>
      </td>
    </tr>
  </tbody>
</table>


## Analysis

### Airbnb

<small class="url">[https://www.airbnb.com/](https://www.airbnb.com/)</small>

#### ☺ Good

Saved the best for first. Anything I entered in the email field was copied into the email field for the Password Reset form. As it should be.

From the Password Reset screen, when I provided a valid email, I was redirected to [`/login?email=legit%40email.biz`](https://www.airbnb.com/login?email=legit%40email.biz). Using a query-string parameter, my email was prefilled. Fantastic.

#### ☹ Bad

From the [homepage](https://www.airbnb.com/), upon clicking "Sign Up" and "Log In" modals appeared. However, the URLs didn't change, which means zero linkability and zero history. Upon pressing the back button, instead of a modal just disappearing and the URL reverting back, I was instead thrown totally out of Airbnb. This could all be remedied by using `history.pushState`. The same issue occurred when I pressed the "Forgot password?" link from the Log-In screen.

Googling for [`site:airbnb.com log in`](https://www.google.com/search?q=site:airbnb.com%20log%20in) turned up a [Log-In page](https://www.airbnb.com/login) and a [Signup page](https://www.airbnb.com/signup_login). And, heck, there was even a [Password Reset page](https://www.airbnb.com/forgot_password). These are standalone, modal-less pages that appeared to be linked to from only support pages and legacy pages that predated Airbnb's "Belong Anywhere" redesign (July 2014).

The Password Reset form relied on placeholder text ("Email" with an "@" icon on the right side of the input) instead of an always-present form label. When a field was focussed, unless I had paid good attention, I forgot what the field. Select all. Backspace. Oh. Right.

From the Password Reset screen, when I provided a bogus email, I was redirected to [`/login?email=bogus%40email.biz`](https://www.airbnb.com/login?email=bogus%40email.biz):

> No account exists for bogus@email.biz. Maybe you signed up using a different/incorrect e-mail address.

Airbnb is leaking information about which email addresses have Airbnb accounts.

I was unable to find any evidence of ratelimiting or CAPTCHAs.

#### Consensus

3.5/5 ★★★☆☆

From its homepage, Airbnb's Password Reset flow passed all five user flows with flying colours. It was fast, simple, and always remembered my email.

However, when resetting a password from the standalone, synchronous page, the first three user flows failed.


### Amazon

<small class="url">[https://www.airbnb.com/](https://www.airbnb.com/)</small>

#### ☺ Good

The email field correctly used `[type=email]`.

CAPTCHA was used (although not ideally).

When I correctly completed the CAPTCHA and entered an email that was not registered with Amazon, I received this error:

> Enter the characters as they are shown in the image.

Although the error message was misleading, at least Amazon didn't leak user info.

#### ☹ Bad

Unfortunately, my email address was never preserved.

Instead of ratelimiting the page and presenting a CAPTCHA after a few log-in failures, Amazon always shows a CAPTCHA on the Password Reset page. (Not there should be, but I'm curious why there's not also CAPTCHA on the Log-In page [presumably to thwart spamming people with Password Reset emails].)

Clicking the "Sign in" link from Amazon's homepage redirected me to a comically long URL:

    https://www.amazon.com/ap/signin/181-7787942-3643323?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_signin

I tried [stripping everything after the query string](https://www.amazon.com/ap/signin/181-7787942-3643323), and I got a 404. I tried [stripping the ID](https://www.amazon.com/ap/signin/), and I still got a 404.

Clicking the "Forgot your password?" link returned a similarly complicated URL. Not only is this bad for linkability and troubleshooting, but when refreshing the Log-In page after forgetting my password, since I didn't want my browser to resubmit the form, I tried manually hard-refreshing the page but again got a 404.

A bit of Googling turned up the URL for the [Log-In page](https://www.amazon.com/gp/sign-in.html) and the [Password Reset page](http://www.amazon.com/exec/obidos/self-service-forgot-password-get-email).

The `<label>` for the Email field doesn't work, since its `for` attribute is `ap_fpp_email` and the Email field's `id` is actually `ap_email`.

For a few weeks, I was being served [Amazon's redesigned pages](https://twitter.com/lukew/status/505080906994814976), but I still encountered all of the same issues and my email was still not preserved.

#### Consensus

1/5 ★☆☆☆☆

Amazon's Password Reset flow failed on every user flow, except the last one: when using a different email address, my original one wasn't preserved. But my first email address wasn't preserved either, so through that technicality this flow did manage to earn 1 star.


### Facebook

<small class="url">[https://www.facebook.com/](https://www.facebook.com/)</small>

#### ☺ Good

From the [Password Reset page](https://www.facebook.com/recover/initiate), Facebook allowed me to type in my email, phone, username, or full name so I could be emailed a link or texted a code to reset to reset my password. For legitimate use cases, this is a good experience, but I can't help but think this could be avoided by merely preserving the original value in the Email/Phone field.

After many repetitive requests, a CAPTCHA lightbox appears.

#### ☹ Bad

Unfortunately, my email address was never preserved.

For the Email/Phone field, `type="text"` was used. This is technically correct, but when viewed on the mobile site (instead from the native app), the keyboard makes it slightly more difficult to enter an email address or a phone number.

The Email/Phone and Password fields use `<label>`s correctly for [logging in](https://www.facebook.com/login), but the field on the [Password Reset page]([Password Reset page](https://www.facebook.com/recover/initiate) does not.

Although the [Password Reset page](https://www.facebook.com/recover/initiate) is very helpful when someone legitimately forgets his/her password, I was able to type in anyone's email, phone, username, or full name to see if that person had a Facebook account. I was also able to see masked (e.g., `h*****e@gmail.com` and `+********08`) emails and phone numbers, as well as the user's networks and profile photo (if the user's privacy settings permitted such).

When a user's profile photo was shown, Facebook told me this:

> You can see your name and profile picture because you're using a computer network you've logged in on before.

But that seemed to be untrue from my testing. I'm curious how the privacy settings for this are wired behind the scenes.

Although in my test case, Facebook did not preserve a different user's email address after attempting to log in, when I initiated a [password reset]([Password Reset page](https://www.facebook.com/recover/initiate) but abandoned the flow, Facebook did remember my attempted password reset. This data is stored in a cookie called `sfiu`. I can either clear this cookie or press the "Not you?" link to tell Facebook to forget my attempted password reset. I considered adjusting my test case, but I think that goes beyond a normal user flow.

In conclusion, and as mentioned above, this wouldn't be necessary if the original Email/Phone was persisted before redirecting a user to the Password Reset page.

#### Consensus

1/5 ★☆☆☆☆

Facebook not only doesn't preserve email addresses, but it also exposes considerable user info. in its Password Reset flow. Overall, it could use a lot of work.


### GitHub

<small class="url">[https://github.com/login](https://github.com/login)</small>

#### ☺ Good

My email was preserved only in this particular case (user flow #4): At the Log In screen, when I provided both my email and password, submitted the form, and then clicked the "forgot password" link.

`<label>`s were used correctly.

After too many attempts, I saw this error message on the [Password Reset page](https://github.com/password_reset):

> Too many attempts. Please wait a while and try again.

#### ☹ Bad

GitHub had the right idea to preserve usernames/emails, but it relied on server-side logic (see screencast for user flow #4). What happened here? When the form was submitted, the server did a few validation checks, and it went something like this:

```
if (formEmail and formPassword) {
  if (checkPassword(formPassword, dbPassword)) {
    // Log the user in.
  } else {
    // Set a Set-Cookie header for `_gh_sess` which is a unique identifier that corresponds to a session that's saved temporarily in a database.
  }
} else {
  // Redirect to https://github.com/session and return an error message: "Incorrect username or password."
}
```

On the client:

```
if (session && session.email) {
  // Get the user's email and update `value` of the email field.
}
```

How can we fix this?

* After I leave the Forgot Password page, clear the session cookie so it doesn't accidentally show up later for someone else.
* Relying on a form submit is not ideal, because the user may click the "forgot password" link before submitting the form. If we do decide to stick with using the server cookie, then we need to (1) first hide the “forgot password” link until the form has been POSTed to the server and (2) make sure that we persist the email in the cookie even if validation failed (the email and/or password fields were blank).
* Alternatively, use a query-string parameter or `sessionStorage` to remember the last email attempt when we are taken to the Forgot Password page. (And be sure to clear the value in `sessionStorage` when the user leaves the page, by listening to `window`'s `beforeunload` event.)

Also what happens if I forget my email/username? There are no additional links to get support.

On a different note, on the [Password Reset page](https://github.com/password_reset), I saw this error message when I provided an invalid email address:

> Can't find that email, sorry.

It's worth noting that this case is handled appropriately from the Log-In page:

> Incorrect username or password.

#### Consensus

1/5 ★☆☆☆☆

GitHub had the right idea to preserve usernames/emails, but it relied on server-side logic. Move that logic to the client side, add some help links, and we'd be in good shape.


### Google

<small class="url">[https://accounts.google.com/ServiceLogin](https://accounts.google.com/ServiceLogin)</small>

#### ☺ Good

When I submitted the Log-In form, even when the password field was blank, my email was preserved on the [Password Reset page](https://www.google.com/accounts/recovery/) (user flow #3). It was quite nice to see this working (as long as I submitted the form).

When trying to log in with an invalid email (or password), I encountered a good generic error message:

> The email or password you entered is incorrect.

#### ☹ Bad

To my surprise, Google actually reported whether or not the email existed:

> No account found with that email address.

Continuing the password-reset flow for someone else's account exposed the user's name and a masked phone number.

On a separate note, this step seemed unnecessary (especially since it was optional): "Enter the last password you remember."

#### Consensus

3/5 ★★★☆☆

Quite good. I was a bit surprised by the leaky password info.


### Kickstarter

<small class="url"></small>

#### ☺ Good

#### ☹ Bad

The link to the Password Reset page was hard to find. (Give up? It's the __?__ in the Password field.)

#### Consensus

1/5 ★☆☆☆☆


### Pinterest

<small class="url"></small>

#### ☺ Good

#### ☹ Bad

My email was preserved, but only when both my email and password were filled out and the form was submitted. I was redirected to [`/login/reset/?username_or_email=legit%40email.biz`](https://www.pinterest.com/login/reset/?username_or_email=legit%40email.biz).

After three failed password attempts, the fourth attempt redirected me to this URL: [`/login/reset/?username_or_email=legit%40email.biz`](https://www.pinterest.com/login/reset/?username_or_email=legit%40email.biz).

#### Consensus

2/5 ★★☆☆☆


### Twitter

<small class="url"></small>

#### ☺ Good

Most sites seem to overlook the case where the form hasn't been submitted yet. Not Twitter though.

How's it work?

It hijacks the click and sets `window.location.href` to `https://twitter.com/account/begin_password_reset?account_identifier=email@domain.com`

Clicking on "Forgot password?" appends the email as a query-string parameter to the link before taking you to the Forgot Password page.

https://twitter.com/account/begin_password_reset?account_identifier=legit@email.biz

#### ☹ Bad

Although Twitter handles the first two user flows like a champ, it fails on arguably the most common flows: #3 and #4 (preservation after submission).

#### Consensus

3/5 ★★☆☆☆


## Conclusion

Next time you build a Password Reset form, take note:

* If a user is prompted for email/username, always preserve the value on the Password Reset form (at the bare minimum, handling the aforementioned five user flows).
    * Cookies are unnecessary. Use query-string parameters or `sessionStorage` (but remember to clear the value when the user navigates away).
* Use proper input types (`type="email"` for email or `type="text"` for username). (Bonus points for input hints, such as autocompleting `@gmail.com`.)
* Use `pushState` when redirecting to the Password Reset page from the Log-In/Register page.
* Use form `<label>`s and `placeholder` text appropriately.
* Use inline form validation for success and error messages.
* Do not leak user info. for invalid emails (e.g., "A user with that email does not exist").
* Ratelimit many repetitive requests (start with *reasonable* time-based ratelimiting and use CAPTCHAs as a very last resort; be sure to log all attempts).
