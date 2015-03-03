# You Need Public Key Cryptography

## Why

What do you email? Love letters, medical issues, tax information?
Would you send it on a postcard? That's what email and text messaging is.

I'm not blind to the fact that my position represents a trade-off.
If bad people are able to communicate privately, they can hide their misdeeds from law enforcement.
But if good people *can't* communicate privately, then bad people can take advantage of that in the form of fraud or blackmail.

We would like to live in a world where good people can communicate in private, but bad people cannot. Unfortunately that is impossible.
The cat is out of the bag. Cryptography is based on well understood math and you can't undiscover math.
The tools to enable truly private communication exist, and criminals will not be discouraged from their use by laws or social taboos.
If good people don't take advantage of those tools then we will create the worst of all worlds where bad people can communicate privatly but good people cannot.
 
## How

There are lots of people who understand the need for privacy, but don't know how it works or how to use it.

### What is asymmetric cryptography

### Alice & Bob Symmetric Keys

- Dave wants to send a message to [TM]
	Dave (letter) | | TM
- But evil Mal wants to intercept the message
	Dave (letter) | Mal | TM
- He puts it in a box and locks it
	Dave (box) | Mal | TM
- He sends it to TM
	Dave | Mal | TM (box)
- And TM unlocks it with a duplicate key
	Dave | Mal | TM (letter)
- But how does TM get a duplicate key?

#### Alice and Bob PK crypto

- Dave wants to send a message to [TM]
	Dave (letter) | | TM
- But evil Mal wants to intercept the message
	Dave (letter) | Mal | TM
- Dave asks TM to send him a box with an open padlock
	Dave (letter) | Mal | TM (box)
- But *keep* the key
	Dave (box) | Mal | TM (key)
- Now Dave can lock the message and send it back to TM without ever sending a key

#### Alice and Bob Man-in-the-middle

- What if Mal switches the boxes?
	Dave (boxB) | (keyB) Mal (boxA) | TM (keyA)
- Now when Dave sends the box back, Mal can open it, put it's contents in boxA and send it to TM.
- Dave has to visit TM first to verify the key.
- Are we right back where we started?
- No! Dave and TM can verify keys over video chat -- impossible to spoof.
	Dave (box) | Mal | TM (key)
	        \__|Skype|__/
- OR: If Dave and TM are both friends with Calvin, and Calvin has verified TM's key, then Dave can choose to take Calvin's word for it.
	Dave (box) | Mal | TM (key)
	        \__|_Cal_|__/
- In either case, as long as Mal can't fake the box from TM, it doesn't matter whether he can copy the box.

## What

### Texting

- TextSecure
- Threema

### Email

- GPG4Win
- Enigmail
- WebGPG

