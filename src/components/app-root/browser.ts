
export class BrowserWindow {
    private readonly url:string;
    private readonly tab:boolean;

    constructor(url:string, tab:boolean = true, trigger = true){
        this.url = url
        this.tab = tab

        if(trigger){
            this.openResourceLocator()
        }
    }

    public openResourceLocator():void | null {
        if(!this.tab){
            window.location.href = this.url.trim()
            return null
        }

        window.open(this.url)
    }
}