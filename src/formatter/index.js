import Reader from './reader'
import Writer from './writer'

export default class {

    constructor(source, destination) {
        this.source = source
        this.destination = destination
        this.reader = new Reader(this.source)

        this.format = action => {
            return new Promise(resolve => {
                this.reader.getMP3sFromSource()
                    .then(files => {
                        let writer = new Writer(this.destination)
                        writer.formatFiles(files, action)
                        resolve()
                    })
            })
        }
    }

}

let reader = new Reader('.')

reader.getMP3sFromSource()
    .then(files => {
        let writer = new Writer('./output')
        writer.formatFiles(files)
    })