import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides: string[] = [
    'https://media.licdn.com/dms/image/C5612AQGXeO252_LyKw/article-cover_image-shrink_600_2000/0/1604228619426?e=2147483647&v=beta&t=GZXFYl11B4qSW0ffFDilK1WQnafI-c098fvLB0xK2hw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTagy9Uhto77Ko_bvFXcU9b98yYnqHdd7fzYA&usqp=CAU',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/bd/6a/46/agia-galini-s-treasure.jpg?w=1200&h=-1&s=1'
  ];

}
