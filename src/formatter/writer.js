import { parseFile } from 'music-metadata'
import { existsSync, mkdirSync, renameSync, copyFileSync } from 'fs'

export default class {
    constructor(path) {
        // properties
        this.destination = path

        // methods
        // arg: files is an object containing path and ext
        this.formatFiles = (files, action) => {
            console.log('Writing files:', files)
            console.log('Action: ', action)

            files.forEach(async file => {
                const metadata = await parseFile(file.path)
                
                let artist = metadata.common.artist
                let album = metadata.common.album
                let filename = `${metadata.common.title}.${file.ext}`
                let dir = `${this.destination}/${artist}/${album}`
                let newPath = `${dir}/${filename}`

                // makr directory if one does not exist
                if (!existsSync(dir)) {
                    console.log('creating directory:', dir)
                    mkdirSync(dir, { recursive: true })
                }

                switch(action.toLowerCase()) {
                    case 'copy':
                        copyFileSync(file.path, newPath, err => {
                            if (err) throw(err)
                        })
                        break
                    case 'move':
                        renameSync(file.path, newPath, err => {
                            if (err) throw(err)
                        })
                        break
                    default:
                        throw(`Action must be 'move' or 'copy' but the provided action was: ${action}`)
                }
            })
        }
    }
}