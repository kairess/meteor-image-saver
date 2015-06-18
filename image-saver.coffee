fs = Npm.require 'fs'
request = Npm.require 'request'

ImageSaver = {}

ImageSaver.download = (uri, filename, callback) ->
	request.head uri, (err, res, body) ->
		if err
			console.log err
			return

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback)