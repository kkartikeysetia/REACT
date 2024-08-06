/*
 WHY REACT
 hype, job, trend, build ui
 *** makes easy to manage & build complex frontend

state (var)-> JS    & UI -> DOM
SYNCH (JS & DOM) : REACT aya iss problem ko 


REACT is libarary (freedom jada hai  )
jaise browser kai pass dom hota hai vese he CREATE ROOT bhi dom create krta hai yeh kyun krt a:
yeh compare krta hai apne & browser kai dom ko fir usko hee update krta hai jo ui mai update hua h 
lekin browser pura dom remove krta hai  purai page ko reload krta hai :dubara webstrucure ready ho rha hai 
lekin virtual dom mai u can trace nd jo jo value chnage huyi h usko niaklkar dom sai vapaps lga do yahi js krta virtual dom tree 
is it possbile 
ap immediate update na kro thoda w8 krke optimiesed way sai update karo

hooks : ai ko 5 jagah update krne mai help krte h

************************** VIRTUAL DOM || FIBRE *********************
virtual dom ko update krna kai liye algo : FIBRE

The goal of React Fiber is to increase its suitability for areas like animation, layot
gestures. Its headline feature is incremental rendering: the ability to split rende
into chunks and spread it out over multiple frames.
Other key features include the ability to pause, abort, or reuse work as new upd
in; the ability to assign priority to different types of updates; and new concurren
primitives.

reconciliation
The algorithm React uses to diff one tree with another to determine which parts
to be changed. (browser & react tree)

****
Reconciliation is the algorithm behind what is popularly understood as the "virtual DC
A high-level description goes something like this: when you render a React applicatio
tree of nodes that describes the app is generated and saved in memory. This tree is t
flushed to the rendering environment — for example, in the case of a browser applica
it's translated to a set of DOM operations. When the app is updated (usually via
setstate ), a new tree is generated. The new tree is diffed with the previous tree to
compute which operations are needed to update the rendered app.
***

INTERVIEW
Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm descr
in the React docs will be largely the same. The key points are:
• Different component types are assumed to generate substantially different trees.
React will not attempt to
them, but rather replace the old tree completely.
• Diffing of lists is performed using keys. Keys should be "stable, predictable, and
unique."


update
A change in the data used to render a React app. Usually the result of SsetStates
Eventually results in a re-render.
 
********************************video 6 ~!!!1









*/
