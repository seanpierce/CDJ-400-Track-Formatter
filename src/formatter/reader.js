import { fromFile } from 'file-type'
import { walk as _walk } from 'walk'

export default class {
    constructor(path) {
        // properties
        this.sourcePath = path
        this.files = []
        this.walker = _walk(this.sourcePath, { followLinks: false })

        // methods
        this.getMP3sFromSource = () => {
            return new Promise((resolve, reject) => {
                console.log('Reading files...')
                try {
                    this.walker.on('file', async (root, stat, next) => {
                        var path = root + '/' + stat.name
                        var type = await fromFile(path)
                    
                        if (this.isAudioType(type?.ext))
                            this.files.push({ path: path, ext: type.ext })
            
                        next()
                    })
                    
                    this.walker.on('end', () => {
                        console.log('Reading complete!')
                        resolve(this.files)
                    })
                } catch(ex) {
                    reject(ex)
                }
            })
        }
    }

    // checks to see if the file is an sudio file
    isAudioType = ext => {
        let types = ['mp3', 'wav']
        return types.indexOf(ext) > -1
    }
}