# Image Saver for Meteor
Save images to server from url using npm [request](https://www.npmjs.com/package/request)

## Instalation
```
meteor add taehee:image-saver
```

##Usage

<pre>
ImageSaver.download origin, destination, ->
	console.log 'callback'
</pre>

Example

<pre>
ImageSaver.download imageUrl, process.env.PWD+'/uploads/google.png', ->
	console.log 'callback'
</pre>
