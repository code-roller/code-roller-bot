import axios, { AxiosResponse } from "axios"

export class Image {
    private static readonly api:string = "https://dev.to/api/profile_images/code-roller"

    public static createImageUrl():void {
        axios.get(Image.api).then((response:AxiosResponse<any>) => {
            const data = response.data.profile_image;
            window.localStorage.setItem("img", data.toString())
        }).catch((exception) => {
            console.log(exception)
            window.location.href = "https://github.com/code-roller"
        })
    }
}