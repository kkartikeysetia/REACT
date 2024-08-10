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

USE STATE RETURN ARRAYS OF SIZE OF 2 
0 TH INDEX ACTUAL VAL STATE KI 
1 TH INDEX PER FUNCTION JO CHNAGE KREGA VAL KO 

FUNCTIONAL COMPOENTS: JO COMPOENT HAM BNATE H FUNCTIONNKAI STYLE MAI

STYLE : INLINE STYLE JO HAM ADD KRTE H STYLE:{{background: "blue" ,}} DIV MAI RETUEERN KAI ANDAR

CLICK EVENTS : ONCHANGE/CLICK (3 WAYS)
 (button onC1ick={hand1eC1ick}>C1ick It</button>

 const handleC1ick2 = (name)
console.10gC ${name} was clicked* )

( button onC1ick= handleC1ick2( 'Dave')> It</button>

(button onC1ick={(e)
handleC1ick3(e)}>C1ick It</button>

<e.target.value>
 define the finction here handleclick & page laods called in action
 yeh rreactfull way nhi hai 

cosnt []=use state becoz state directlty change nhi krni chahe hogye 

*******LIST & KEYS
const Content = ()=>{
    const [items, set Items]
id: 1,
checked: false,
item: "One half pound bag of Cocoa Covered Almonds Unsalted"
id: 2,
checked: false,
item: "Item 2"

DISPALY LIST ITEMS INSDIE JSX
DIspaPLY list in jsx is through map 
<ul>
{items.map((item)=>(
    <li> </li>
    ))}


********************************video 6 ~!!!1









*/
