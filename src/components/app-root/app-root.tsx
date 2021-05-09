import { Component, h } from '@stencil/core';
import { Image } from './image'

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  private createImageUrl():void {
    const image:void = Image.createImageUrl()
    return image
  }

  private imageSource():string {
    return window.localStorage.getItem("img")
  }

  render() {
    this.createImageUrl()
    return (
      <div>
        <div id="emoji-widget">
          <div id="emoji">
            <img src={this.imageSource()} alt="" class="src" />
          </div>
        </div>
      </div>
    );
  }
}
