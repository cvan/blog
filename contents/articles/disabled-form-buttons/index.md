---
title: "Why You Should (Almost) Never Disable a Button in a Form"
author: cvan
date: 2020-04-12
template: article.jade
---

When should a button be disalbed on a form on web page? Never. Except in the rare cases of uploading a file.

<span class="more"></span>

From a usability perspective, the pattern of using an `<button disabled>` in a `<form>` for form validation causes cognitive overload because users have to infer the form&rsquo;s validation requirements.

An appropriate use of `<button disabled>` is when an active `<button>` changes temporarily `<button disabled>` when some action is being processed (e.g., image uploads, payment verification) that should block the submission of the form.

Leverage the web browser's [built-in HTML5 form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) (e.g., `<input required>`). Clicking on an always-active `<button type="submit">` in a `<form>` validates all fields with their constraints and the user will be displayed native error messages. (Caveat: the [error strings can be customised](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity) but the styles cannot be.)

## Tips

1. Add text hints contextually near the fields that are `Optional` or `Required`. If most fields are required — so as to not clutter the UI and desensitise with distracting `Required` text everywhere — use `Optional` text when needed and have the user assume the lack of implies `Required`.
2. [Override the rendering](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity) of the browser&rsquo;s error messages when the user clicks on the `<button type="submit">Next</button>`, and then display a custom error message (ideally, contextually inline or, if the error involves multiple fields, at the top of the form).

From usability expert [LukeW](https://twitter.com/lukew)&rsquo;s book, (_Best Practices for Form Design_)(https://static.lukew.com/webforms_lukew.pdf):

<img width="662" alt="image" src="https://user-images.githubusercontent.com/203725/78061173-a6feb400-7341-11ea-8c57-568ccc4f491d.png">

<img width="584" alt="image" src="https://user-images.githubusercontent.com/203725/78061334-f04f0380-7341-11ea-98f2-6d94f265741b.png">

Furthermore, there is [somewhat of a consensus on UX StackExchange](https://ux.stackexchange.com/a/76306), which cites a relevant [usability study](https://www.hindawi.com/journals/ahci/2011/202701/):

> Don’t ever disable the submit button and only show validation errors after the user hits submit.

And, [another other one](https://ux.stackexchange.com/a/78667):
> The always-active button [is the better solution].
>
> Why?
>
> With an always-active button, you can select it, and then be told what isn't complete.

And, [another other one](https://ux.stackexchange.com/a/78667):
> With an inactive button, you are stuck. You may not know why it's inactive and as such, hit a dead end.

And, [another other one](https://ux.stackexchange.com/questions/78663/should-i-show-the-save-button-before-the-required-state-is-achieved#comment122477_78664):
> Inactive buttons are incredibly annoying. There's no indication as to why they are inactive providing no way for the user to figure out how to activate

And, [another other one](https://ux.stackexchange.com/a/76303):
> If the form is still invalid when clicking submit you could auto scroll to show them (if they've get "out of the screen") and **show the errors below the fields until each field is modified**. This approach is currently used by Google, Facebook and Twitter.
>
> In case you want to disable the submit button, you MUST at least show a message next to it giving the reason why it's disabled because if you don't it could cause confusion to the users. Anyway I don't recommend it, remember in that case you **are supposing the user is thinking (and thinking correctly) "one step ahead", which is a really bad UX design practice**.

Reenable, not disable, your form-submission buttons. Your users will thank you.
