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

Review symmetric cryptography: encrypting a file with a password.
How do we share the password? What if we don't even know the other person? (journalists)
What if there were two passwords? One to encrypt, and one to decrypt.
You could share the "locking" key publicly and keep the "unlock" key secret. Then anyone could send you secret messages that only you can read.
The principle also works in reverse.
You could share the "unlock" key publicly. Then when you publish messages you could lock them with your private "locking" key.
	Anyone could read the message, but they would know that only you could have written the message because it was "locked" with your secret key.

### Man in the middle attacks

How do you know you have the right key?

### Verifying keys

Show the other person the key you have, and they confirm it really belongs to them.
Be ready to confirm what your key is.

## What

### Texting

- TextSecure
- Threema

### Email

- GPG4Win
- Enigmail
- WebGPG

