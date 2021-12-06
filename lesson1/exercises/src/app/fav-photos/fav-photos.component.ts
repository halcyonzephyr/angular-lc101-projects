import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.hdnicewallpapers.com/Walls/Big/Dog/Funny_Dog_Puppy_Wrapped_in_Blanket_4K_Wallpaper.jpg';
  image2 = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FxoURTZD.jpg&f=1&nofb=1';
  image3 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.latintimes.com%2Fsites%2Flatintimes.com%2Ffiles%2Fstyles%2Flarge%2Fpublic%2F2014%2F07%2F01%2Ffunny-dogs_2.jpg&f=1&nofb=1';
  image4 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FUv0VUrAT6FtMQ%2Fgiphy.gif&f=1&nofb=1'

  alt1 = 'pug in a blanket'
  alt2 = 'small dog in a raptor suit'
  alt3 = 'happy dog lifting weights'

  constructor() { }

  ngOnInit() {
  }

}