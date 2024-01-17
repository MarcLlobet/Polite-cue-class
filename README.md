# polite-cue-class

A polite data structure to handle a cue.
The responsability is led by the nodes themselves.

It has 4 methods following array-like behaviour:
 - push: node asks who is the last in the cue and adds itself
 - pop: node leaves the cue letting know that the previous will be the last one
 - shift: node let know the second that now will be the first one
 - unshift: throws an error. It is a polite cue and therefore you should wait like all the rest

```js
const cue = new PoliteCue();
cue.unshift(); // since there is no one waiting, you can go on
cue.unshift(); // Error: you have to put yourself in the cue like the others
cue.push();
cue.pop();
```
